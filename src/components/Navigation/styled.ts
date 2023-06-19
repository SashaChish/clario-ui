import styled from 'styled-components';

// Styled
import { flexWrapper } from '@/styled/css';

interface WrapperProps {
  $isVisible: boolean;
}

export const Wrapper = styled.header<WrapperProps>`
  ${flexWrapper}
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 18px 0;
  z-index: 100;
  transition: all 0.5s linear;
  transform: translateY(${({ $isVisible }) => ($isVisible ? '0px' : '-200px')});

  & > img {
    width: 80px;
    height: 21.33px;
  }
`;

export const StickyWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 18px 39px 20px 24px;
  transition: all 0.5s linear;
  top: ${({ $isVisible }) => ($isVisible ? '0' : '-70')};
`;
