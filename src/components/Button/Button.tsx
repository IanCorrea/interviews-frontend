import { ButtonContainer } from './Button.styles';

export type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  name: string;
  type: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant
}

export function Button({name, type, variant = 'primary'}: ButtonProps) {
  return <ButtonContainer type={type} variant={variant}>{name}</ButtonContainer>
}