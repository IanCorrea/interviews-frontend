import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`

export const FormContainer = styled.div`
  width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ContentContainer = styled.div`
  margin: 20px 0 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.label`
  margin-right: 15px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  font-size: 16px;
  border: 1px solid ${props => props.theme['gray-400']};
  border-radius: 4px;
`;

export const TableContainer = styled.div`
  margin-top: 40px;
  border: 1px solid ${props => props.theme['gray-100']};
  border-radius: 8px;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  padding: 12px;
  color: ${props => props.theme['gray-500']};
  background-color: ${props => props.theme['gray-100']};
  border-bottom: 1px solid #ddd;
  text-align: left;
`;

export const Td = styled.td`
  padding: 12px;
  color: ${props => props.theme['gray-300']};
  border-bottom: 1px solid ${props => props.theme['gray-500']};
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: ${props => props.theme['gray-100']};
  }

  &:hover ${Td} {
    color:  ${props => props.theme['gray-700']};
  }
`;