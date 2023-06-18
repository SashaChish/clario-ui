// Absolute imports
import { ReactNode } from 'react';

// Types
import { Interpolation } from 'styled-components/dist/types';

// Styled
import { SectionWrapper, ChildWrapper } from './styled';

interface SectionProps {
  children: ReactNode;
  currentTheme?: string;
  wrapperStyles?: Interpolation<React.CSSProperties>;
}

const Section = ({ children, currentTheme, wrapperStyles }: SectionProps) => (
  <SectionWrapper $currentTheme={currentTheme}>
    <ChildWrapper styles={wrapperStyles} $currentTheme={currentTheme}>
      {children}
    </ChildWrapper>
  </SectionWrapper>
);

export default Section;
