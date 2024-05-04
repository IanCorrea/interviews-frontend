import { useParams } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { ContentContainer, FormContainer, DetailsContainer, Input, Label, Table, TableContainer, TableRow, Td, Th } from "./styles";
import api from "../../services/api";
import { ChangeEvent, useEffect, useState } from "react";

interface ResponseUsersInterview {
  id: string;
  interview_id: string;
  name: string;
  status: string;
  feedback: string;
  rating: string;
}
export function Details() {
  const { id: interview_id } = useParams();
  const [usersInterviews, setUsersInterviews] = useState<ResponseUsersInterview[]>([])
  const [formData, setFormData] = useState({
    name: '',
    status: '',
    feedback: '',
    rating: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      getUsersInterview()
    };

    fetchData(); 
  }, []);

  const getUsersInterview = async() => {
    try {
      const response = await api.get(`interviews/${interview_id}`);
      setUsersInterviews(response.data)
    } catch (error) {
      console.error('Error retriving data:', error);
    }
  }

  const createUserInterview = async(event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    try {
      await api.post(`interviews/${interview_id}`, 
      { 
        name: formData.name, 
        status: formData.status, 
        feedback: formData.feedback, 
        rating: formData.rating
      });
      getUsersInterview()
      setFormData({
        name: '',
        status: '',
        feedback: '',
        rating: ''
      });
    } catch (error) {
      console.error('Error retriving data:', error);
    }
  };

  const handlerUserInterviewDelete = async (id: string) => {
    try {
      await api.delete(`interviews/${id}`);
      getUsersInterview()
    } catch (error) {
      console.error('Error deleting data:', error);
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
    <DetailsContainer>
      <form onSubmit={createUserInterview}>
        <FormContainer>
          <h1>Add Interviewees</h1>
          <ContentContainer>
            <Label>Name:</Label>
            <Input name="name" value={formData.name} onChange={handleInputChange}/>
          </ContentContainer>

          <ContentContainer>
            <Label>Status:</Label>
            <Input name="status" value={formData.status} onChange={handleInputChange}/>
          </ContentContainer>

          <ContentContainer>
            <Label>Feedback:</Label>
            <Input name="feedback" value={formData.feedback} onChange={handleInputChange}/>
          </ContentContainer>

          <ContentContainer>
            <Label>Rating:</Label>
            <Input name="rating" value={formData.rating} onChange={handleInputChange}/>
          </ContentContainer>

          <Button name="Add" type="submit"/>
        </FormContainer>
      </form>

      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>Interview Status</Th>
              <Th>Interview Feedback</Th>
              <Th>Rating</Th>
              <Th>Delete</Th>
            </tr>
          </thead>
          <tbody>
            {usersInterviews.map((usersInterview) => (
              <TableRow key={usersInterview.id}>
                <Td>{usersInterview.name}</Td>
                <Td>{usersInterview.status}</Td>
                <Td>{usersInterview.feedback}</Td>
                <Td>{usersInterview.rating}</Td>
                <Td onClick={() => handlerUserInterviewDelete(usersInterview.id)}>X</Td>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </DetailsContainer>
  )
}

