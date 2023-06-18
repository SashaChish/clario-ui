// Absolute imports
import { useTheme } from 'styled-components';

// Images
import logo from '@/assets/media/img/logo.png';

// Components
import { Section } from '@/components/Shared';
import { Button } from '@/components/Form';

// Styled
import { StyledFooter, Title, LegalInformation, Text } from './styled';

interface FooterProps {
  handleProtectButton: () => void;
}

const Footer = ({ handleProtectButton }: FooterProps) => {
  const theme = useTheme();

  return (
    <Section
      wrapperStyles={{ margin: '100px 0 24px' }}
      currentTheme={theme.color.white()}
    >
      <StyledFooter>
        <Title>
          <span>Stop your</span>
          <br />
          <span className="primary">phone from</span>
          <br />
          <span className="primary">being spied on</span>.
        </Title>
      </StyledFooter>
      <Button onClick={handleProtectButton} size="large">
        Protect me now
      </Button>
      <LegalInformation>
        <img src={logo} alt="logo" width="90px" height="24px" />
        <Text>© 2023 Clario Tech DMCCAll rights reserved.</Text>
      </LegalInformation>
    </Section>
  );
};

export default Footer;
