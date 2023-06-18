// Absolute imports
import { useTheme } from 'styled-components';

// Constants
import unorderedList from './constants';

// Components
import Devices from './Devices';
import Video from './Video';
import { Section, UnorderedList } from '@/components/Shared';
import { Button } from '@/components/Form';

// Styled
import { Title, SubTitle, UnorderedListWrapper } from './styled';

interface IntroductionProps {
  handleProtectButton: () => void;
}

const Introduction = ({ handleProtectButton }: IntroductionProps) => {
  const theme = useTheme();

  return (
    <Section
      sectionStyles={{ paddingTop: '72px' }}
      currentTheme={theme.color.secondary()}
    >
      <Title>
        <span>Stop your</span>
        <br />
        <span className="primary">phone from</span>
        <br />
        <span className="primary">being spied on</span>
      </Title>
      <SubTitle>
        Try Clario, a smart anti-spy app that effectively protects your privacy.
      </SubTitle>
      <Button size="large" onClick={handleProtectButton}>
        Protect me now
      </Button>
      <Devices />
      <Video />
      <UnorderedListWrapper>
        <UnorderedList
          title="The anti-spy Clario app can:"
          list={unorderedList}
        />
      </UnorderedListWrapper>
    </Section>
  );
};

export default Introduction;
