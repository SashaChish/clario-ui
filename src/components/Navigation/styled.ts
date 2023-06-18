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
  margin: 12px 24px;
  ${({ styles }) => styles}

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
  position: sticky;
`;
