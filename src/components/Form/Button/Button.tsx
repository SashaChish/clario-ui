// Absolute imports
import { ButtonHTMLAttributes, ReactNode, MouseEvent } from 'react';

// Types
import { Interpolation } from 'styled-components/dist/types';

// Styled
import StyledButton from './styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  styles?: Interpolation<React.CSSProperties>;
  textStyles?: Interpolation<React.CSSProperties>;
  size?: 'small' | 'large' | 'big';
  id?: string;
}

const Button = ({
  onClick = () => null,
  children,
  styles,
  textStyles,
  id,
  ...props
}: ButtonProps) => (
  <StyledButton
    onClick={onClick}
    styles={styles}
    $textStyles={textStyles}
    id={id}
    {...props}
  >
    <span>{children}</span>
  </StyledButton>
);

export default Button;
