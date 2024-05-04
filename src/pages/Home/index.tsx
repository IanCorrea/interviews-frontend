import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { ContentContainer, FormContainer, HomeContainer, Input, Label, Table, TableContainer, TableRow, Td, Th } from "./styles";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

interface ResponseInterviews {
  id: string;
  name: string;
}

export function Home() {
  const [interviews, setInterviews] = useState<ResponseInterviews[]>([])
  const [name, setName] = useState('')
  const history = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      getInterviews()
    };

    fetchData(); 
  }, []);

  const getInterviews = async() => {
    try {
      const response = await api.get('interviews');
      setInterviews(response.data)
    } catch (error) {
      console.error('Error retriving data:', error);
    }
  }

  const createInterview = async(event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    try {
      await api.post('interviews', { name });
      getInterviews()
      setName('')
    } catch (error) {
      console.error('Error retriving data:', error);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlerInterviewClick = (id: string) => {
    history(`/details/${id}`);
  }

  return (
    <HomeContainer>
      <form onSubmit={createInterview}>
        <FormContainer>
          <h1>Create your interview</h1>
          <ContentContainer>
            <Label>Name:</Label>
            <Input value={name} onChange={handleNameChange}/>
            <Button name="Create" type="submit"/>
          </ContentContainer>
        </FormContainer>
      </form>

      <TableContainer>
        <Table>
        <thead>
          <tr>
            <Th>Name</Th>
          </tr>
        </thead>
        <tbody>
          {interviews.map((interview) => (
            <TableRow key={interview.id} onClick={() => handlerInterviewClick(interview.id)}>
              <Td>{interview.name}</Td>
            </TableRow>
          ))}
        </tbody>
        </Table>
      </TableContainer>
    </HomeContainer>
  )
}

