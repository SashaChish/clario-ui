// Absolute imports
import { useTheme } from 'styled-components';

// Images
import screenRecordingDetector from '@/assets/media/img/screenRecordingDetector.png';

// Constants
import unorderedList from './constants';

// Components
import { CardGroup, Section } from '@/components/Shared';

const ScreenRecordingDetector = () => {
  const theme = useTheme();

  return (
    <Section currentTheme={theme.color.white()}>
      <CardGroup
        imgScr={screenRecordingDetector}
        unorderedList={unorderedList}
        unorderedTitle="Screen recording detector"
        unorderedSubTitle="Don’t let anyone access your phone screen."
      />
    </Section>
  );
};

export default ScreenRecordingDetector;
