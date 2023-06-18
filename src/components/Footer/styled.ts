import styled from 'styled-components';

// Styled
import { flexWrapper } from '@/styled/css';

export const Title = styled.h1`
  font-weight: 700;
  line-height: 36px;
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;

  & span {
    &.primary {
      color: ${({ theme }) => theme.color.primary()};
    }
  }
`;

export const StyledFooter = styled.footer`
  ${flexWrapper}
`;

export const LegalInformation = styled.div`
  ${flexWrapper}
  margin-top: 125px;
`;

export const Text = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  margin-top: 7px;
`;
