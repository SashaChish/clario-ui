// Constants
import { guaranteeList } from '../constants';

// Components
import { UnorderedList } from '@/components/Shared';
import { Button } from '@/components/Form';

// Styled
import { StyledFooter, StyledLink, GuaranteeWrapper } from './styled';

const Footer = () => (
  <StyledFooter>
    <Button size="large" styles={{ width: '222px' }}>
      Try for $2.99
    </Button>
    <StyledLink href="#" target="_self" onClick={(e) => e.preventDefault()}>
      By clicking above, you agree to try 7 days of Clario for $2.99 as a
      special offer. Your subscription will renew for $39.9/month every 2
      months. Cancel anytime or manage your subscription in your Clario account.
    </StyledLink>
    <GuaranteeWrapper>
      <UnorderedList
        list={guaranteeList}
        unorderedIconStyles={{ height: '24px', width: '28px' }}
        unorderedItemStyles={{
          fontWeight: 400,
          fontSize: '10px',
          lineHeight: '14px',
        }}
      />
    </GuaranteeWrapper>
  </StyledFooter>
);

export default Footer;
