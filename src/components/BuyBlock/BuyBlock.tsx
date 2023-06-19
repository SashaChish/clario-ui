// Absolute imports
import { useTheme } from 'styled-components';
import { forwardRef } from 'react';

// Images
import buyHalfCircle from '@/assets/media/img/buyHalfCircle.png';
import price from '@/assets/media/img/price.png';

// Constants
import { whatYouGetList, DATE_TIME_AFTER_THIRTY_MINUTES } from './constants';

// Hooks
import useCountdown from '@/hooks/useCountdown';

// Components
import Footer from './Footer';
import { Section, UnorderedList } from '@/components/Shared';

// Styled
import {
  Title,
  StyledHalfCircleImage,
  PriceWrapper,
  SpecialOfferWrapper,
  WhatYouGetWrapper,
} from './styled';

const BuyBlock = forwardRef<HTMLDivElement>((_, ref) => {
  const theme = useTheme();
  const { minutes, seconds } = useCountdown(DATE_TIME_AFTER_THIRTY_MINUTES);

  return (
    <Section
      sectionStyles={{ paddingBottom: '38px' }}
      currentTheme={theme.color.vividBlue()}
      ref={ref}
    >
      <StyledHalfCircleImage src={buyHalfCircle} alt="buyHalfCircle" />
      <Title>
        Start your spy-free <br />
        week for as low as
      </Title>
      <PriceWrapper>
        <SpecialOfferWrapper>
          <p>Special offer valid for</p>
          <div>
            <span>
              {minutes}:{seconds}
            </span>
            &nbsp;min
          </div>
        </SpecialOfferWrapper>
        <img src={price} alt="price" width="100%" height="99px" />
        <WhatYouGetWrapper>
          <UnorderedList
            list={whatYouGetList}
            title="What you get:"
            unorderedIconStyles={{ height: '20px', width: '20px' }}
            unorderedItemStyles={{
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '18px',
            }}
          />
        </WhatYouGetWrapper>
        <Footer />
      </PriceWrapper>
    </Section>
  );
});

export default BuyBlock;
