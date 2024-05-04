import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { useAuth } from "../../hooks/auth";
import { ContentContainer, FormContainer, Input, Label, SignInContainer } from "./styles";
import { useState } from "react";

export function SignIn() {
  const { signIn } = useAuth();
  const history = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    try {
      console.log(email)
      await signIn({
        email,
        password,
      });

      history('/');
    } catch (err) {
      console.log('Occur an error in login, verify your credentials.')
    }
  }
     
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <SignInContainer>
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <h1>Sign In</h1>

          <ContentContainer>
            <Label htmlFor="email">Email:</Label>
            <Input id="email" value={email} onChange={handleEmailChange} />
          </ContentContainer>

          <ContentContainer>
            <Label htmlFor="password">Password:</Label>
            <Input id="password" value={password} onChange={handlePasswordChange} />
          </ContentContainer>

          <Button type="submit" name="Sign In" />
        </FormContainer>
    </form>
    </SignInContainer>
  )
}