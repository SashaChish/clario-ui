import { css, styled } from 'styled-components';

// Types
import { Interpolation } from 'styled-components/dist/types';

interface ButtonProps {
  styles: Interpolation<React.CSSProperties>;
  $textStyles: Interpolation<React.CSSProperties>;
  size?: 'small' | 'large' | 'big';
}

export default styled.button<ButtonProps>`
  border-radius: 60px;
  border: 1px solid transparent;
  padding: 6px 15px 8px;
  width: fit-content;
  height: auto;
  min-height: 32px;
  background-color: ${({ theme }) => theme.color.primary()};

  & span {
    text-align: center;
    color: ${({ theme }) => theme.color.white()};
    ${({ $textStyles }) => $textStyles}
  }

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s linear;
  }

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          & span {
            font-weight: 700;
            line-height: 18px;
            font-size: 14px;
          }
        `;
      case 'large':
        return css`
          padding: 9px 32px;
          width: 272px;

          & span {
            font-weight: 700;
            line-height: 28px;
            font-size: 18px;
          }
        `;
      default:
        return '';
    }
  }}

  ${({ styles }) => styles}
`;
