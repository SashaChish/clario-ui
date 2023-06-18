// Absolute imports
import { useTheme } from 'styled-components';

// Images
import socialMediaProtection from '@/assets/media/img/socialMediaProtection.png';

// Constants
import unorderedList from './constants';

// Components
import { CardGroup, Section } from '@/components/Shared';

const SocialMediaProtection = () => {
  const theme = useTheme();

  return (
    <Section currentTheme={theme.color.white()}>
      <CardGroup
        imgScr={socialMediaProtection}
        unorderedList={unorderedList}
        unorderedTitle="Social media protection"
        unorderedSubTitle="Easily prevent social media account hacks."
      />
    </Section>
  );
};

export default SocialMediaProtection;
