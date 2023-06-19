// Absolute imports
import { useTheme } from 'styled-components';

// Images
import trackerDetector from '@/assets/media/img/trackerDetector.png';

// Constants
import unorderedList from './constants';

// Components
import { CardGroup, Section } from '@/components/Shared';

const TrackerDetector = () => {
  const theme = useTheme();

  return (
    <Section id="trackerDetector" currentTheme={theme.color.white()}>
      <CardGroup
        imgScr={trackerDetector}
        unorderedList={unorderedList}
        unorderedTitle="Tracker detector"
        unorderedSubTitle="Discover who tracks your location to spy on you."
      />
    </Section>
  );
};

export default TrackerDetector;
