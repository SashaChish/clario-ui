// Absolute imports
import { useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';

// Theme
import './index.css';
import theme from '@/styled/theme';

// Hooks
import useOnScreen from '@/hooks/useOnScreen';

// Helpers
import { getElement, scrollToElement } from '@/helpers';

// Components
import {
  Layout,
  Navigation,
  Introduction,
  SpywareDetector,
  TrackerDetector,
  SocialMediaProtection,
  CallRecorderBlocker,
  ScreenRecordingDetector,
  Steps,
  BuyBlock,
  Footer,
} from '@/components';

// Styled
import Main from '@/styled';

const App = () => {
  const [protectCountScroll, setProtectCountScroll] = useState(0);

  const priceRef = useRef<HTMLDivElement>(null);

  const isIntersectingProtectButton = useOnScreen(
    getElement('#introductionProtectButton'),
  );
  const isIntersectingSpywareDetector = useOnScreen(
    getElement('#spywareDetector'),
  );
  const isIntersectingTrackerDetector = useOnScreen(
    getElement('#trackerDetector'),
  );

  const handleProtectButton = () => {
    setProtectCountScroll((prev) => prev + 1);
    scrollToElement(priceRef.current);
  };

  console.log('Scroll To Price ->', protectCountScroll);

  if (isIntersectingSpywareDetector)
    console.log('Feature shown -> Spyware Detector');

  if (isIntersectingTrackerDetector)
    console.log('Feature shown -> Tracker Detector');

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Navigation
          handleProtectButton={handleProtectButton}
          showStickyHeader={!isIntersectingProtectButton}
        />
        <Main>
          <Introduction handleProtectButton={handleProtectButton} />
          <SpywareDetector />
          <TrackerDetector />
          <SocialMediaProtection />
          <CallRecorderBlocker />
          <ScreenRecordingDetector />
          <Steps />
          <BuyBlock ref={priceRef} />
          <Footer handleProtectButton={handleProtectButton} />
        </Main>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
