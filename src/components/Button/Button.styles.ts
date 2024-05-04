import styled from 'styled-components'
import { ButtonVariant } from './Button'

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'blue',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;

  background-color: ${props => props.theme['green-500']};

  &:hover {
    background-color: ${props => props.theme['green-300']};
  }

  /* ${props => {
    return `background-color: ${buttonVariants[props.variant]}`
  }} */
`