// Images
import logo from '@/assets/media/img/logo.png';

// Components
import { Section } from '@/components/Shared';
import { Button } from '@/components/Form';

// Styled
import { StickyWrapper, Wrapper } from './styled';

interface NavigationProps {
  isSticky: boolean;
}

const Navigation = ({ isSticky }: NavigationProps) => (
  <Section wrapperStyles={{ width: '100%' }}>
    {isSticky ? (
      <StickyWrapper>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <Button onClick={() => null} type="button">
            Protect me now
          </Button>
        </div>
      </StickyWrapper>
    ) : (
      <Wrapper>
        <img src={logo} alt="logo" />
      </Wrapper>
    )}
  </Section>
);

export default Navigation;
