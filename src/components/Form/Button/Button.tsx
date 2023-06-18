// Absolute imports
import { ReactNode } from 'react';

// Styled
import StyledButton from './styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => (
  <StyledButton {...props}>
    <span>{children}</span>
  </StyledButton>
);

export default Button;
