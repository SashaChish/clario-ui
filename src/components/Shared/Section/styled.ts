import styled from 'styled-components';

// Types
import { Interpolation } from 'styled-components/dist/types';

// Styled
import { flexWrapper } from '@/styled/css';

interface WrapperProps {
  $currentTheme?: string;
  styles?: Interpolation<React.CSSProperties>;
}

export const SectionWrapper = styled.section<WrapperProps>`
  ${flexWrapper}
  background-color: ${({ $currentTheme }) => $currentTheme || 'inherit'};
`;

export const ChildWrapper = styled.div<WrapperProps>`
  ${flexWrapper}
  background-color: ${({ $currentTheme }) => $currentTheme || 'inherit'};
  width: 320px;
  padding: 0 24px;
  ${({ styles }) => styles}
`;
