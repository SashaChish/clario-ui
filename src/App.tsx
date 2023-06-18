// Absolute imports
import { useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';

// Theme
import './index.css';
import theme from '@/styled/theme';

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
import { Main } from '@/styled';

const App = () => {
  const [protectCountClick, setProtectCountClick] = useState(0);
  const priceRef = useRef<HTMLDivElement>();

  const scrollToElement = (element: HTMLElement) =>
    element.scrollIntoView({ behavior: 'smooth' });

  const handleProtectButton = () => {
    setProtectCountClick((prev) => prev + 1);
    scrollToElement(priceRef.current);
  };

  console.log('Protect button click count ->', protectCountClick);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Navigation handleProtectButton={handleProtectButton} isSticky />
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
