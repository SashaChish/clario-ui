// Absolute imports
import { useTheme } from 'styled-components';

// Images
import logo from '@/assets/media/img/logo.png';

// Components
import { Section } from '@/components/Shared';
import { Button } from '@/components/Form';

// Styled
import { StickyWrapper, Wrapper } from './styled';

interface NavigationProps {
  showStickyHeader: boolean;
  handleProtectButton: () => void;
}

const Navigation = ({
  showStickyHeader,
  handleProtectButton,
}: NavigationProps) => {
  const theme = useTheme();

  return (
    <Section
      currentTheme={theme.color.white()}
      wrapperStyles={{ width: '100%' }}
    >
      <StickyWrapper $isVisible={showStickyHeader}>
        <img src={logo} alt="logo" width="80px" height="22px" />
        <div>
          <Button onClick={handleProtectButton} type="button">
            Protect me now
          </Button>
        </div>
      </StickyWrapper>
      <Wrapper $isVisible={!showStickyHeader}>
        <img src={logo} alt="logo" width="80px" height="22px" />
      </Wrapper>
    </Section>
  );
};

export default Navigation;
