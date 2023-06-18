import styled from 'styled-components';

// Styled
import { flexWrapper } from '@/styled/css';

export default styled.div`
  ${flexWrapper}
  color: ${({ theme }) => theme.color.dark()};
`;
