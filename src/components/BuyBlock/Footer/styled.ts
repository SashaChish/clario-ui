import styled from 'styled-components';

// Styled
import { flexWrapper } from '@/styled/css';

export const StyledFooter = styled.footer`
  ${flexWrapper}
`;

export const GuaranteeWrapper = styled.div`
  width: 100%;
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.dark(0.5)};
  font-weight: 400px;
  font-size: 9px;
  line-height: 12px;
  text-align: center;
  margin: 16px 0 9px;
`;
