import styled from 'styled-components';

// Types
import { Interpolation } from 'styled-components/dist/types';

// Styled
import { flexWrapper } from '@/styled/css';

interface WrapperProps {
  styles?: Interpolation<React.CSSProperties>;
}

export const Wrapper = styled.header<WrapperProps>`
  ${flexWrapper}
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 18px 0;
  z-index: 100;

  & > img {
    width: 80px;
    height: 21.33px;
  }

  ${({ styles }) => styles}
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
`;
