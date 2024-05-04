import { ChangeEvent, useState } from "react";
import { Button } from "../../components/Button/Button";
import api from "../../services/api";
import { ContentContainer, FormContainer, Input, Label, SignUpContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    try {
      await api.post('users', 
      { 
        name: formData.name, 
        email: formData.email, 
        password: formData.password, 
      });

      history('/signin');
    } catch (err) {
      console.log('Occur an error in sign up.')
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  return (
    <SignUpContainer>
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <h1>Sign Up</h1>
          <ContentContainer>
            <Label>Name:</Label>
            <Input name="name" value={formData.name} onChange={handleInputChange} />
          </ContentContainer>

          <ContentContainer>
            <Label>Email:</Label>
            <Input name="email" value={formData.email} onChange={handleInputChange} />
          </ContentContainer>

          <ContentContainer>
            <Label>Password:</Label>
            <Input name="password" value={formData.password} onChange={handleInputChange} />
          </ContentContainer>

          <Button type="submit" name="Sign Up" />
        </FormContainer>
    </form>
    </SignUpContainer>
  )
}