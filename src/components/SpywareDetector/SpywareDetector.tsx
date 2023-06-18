// Absolute imports
import { useTheme } from 'styled-components';

// Images
import spywareDetector from '@/assets/media/img/spywareDetector.png';

// Constants
import unorderedList from './constants';

// Components
import { CardGroup, Section } from '@/components/Shared';

// Styled
import Title from './styled';

const SpywareDetector = () => {
  const theme = useTheme();

  return (
    <Section currentTheme={theme.color.white()}>
      <Title>Clario helps you easily avoid spying.</Title>
      <CardGroup
        imgScr={spywareDetector}
        unorderedList={unorderedList}
        unorderedTitle="Spyware detector"
        unorderedSubTitle="Find apps secretly spying on you and your data."
      />
    </Section>
  );
};

export default SpywareDetector;
