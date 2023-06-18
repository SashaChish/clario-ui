// Absolute imports
import { ReactNode, forwardRef } from 'react';

// Types
import { Interpolation } from 'styled-components/dist/types';

// Styled
import { SectionWrapper, ChildWrapper } from './styled';

interface SectionProps {
  children: ReactNode;
  currentTheme?: string;
  wrapperStyles?: Interpolation<React.CSSProperties>;
  sectionStyles?: Interpolation<React.CSSProperties>;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(function Section(
  { children, currentTheme, wrapperStyles, sectionStyles },
  ref,
) {
  return (
    <SectionWrapper
      ref={ref}
      styles={sectionStyles}
      $currentTheme={currentTheme}
    >
      <ChildWrapper styles={wrapperStyles} $currentTheme={currentTheme}>
        {children}
      </ChildWrapper>
    </SectionWrapper>
  );
});

export default Section;
