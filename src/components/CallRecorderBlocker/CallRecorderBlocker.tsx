// Absolute imports
import { useTheme } from 'styled-components';

// Images
import callRecorderBlocker from '@/assets/media/img/callRecorderBlocker.png';

// Constants
import unorderedList from './constants';

// Components
import { CardGroup, Section } from '@/components/Shared';

const CallRecorderBlocker = () => {
  const theme = useTheme();

  return (
    <Section currentTheme={theme.color.white()}>
      <CardGroup
        imgScr={callRecorderBlocker}
        unorderedList={unorderedList}
        unorderedTitle="Call recorder blocker"
        unorderedSubTitle="Discover if someone records your calls and chats."
      />
    </Section>
  );
};

export default CallRecorderBlocker;
