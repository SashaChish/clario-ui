// Absolute imports
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
} from '@/components';

// Styled
import { Main } from '@/styled';

const App = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Navigation isSticky />
      <Main>
        <Introduction />
        <SpywareDetector />
        <TrackerDetector />
        <SocialMediaProtection />
        <CallRecorderBlocker />
        <ScreenRecordingDetector />
        <Steps />
      </Main>
    </Layout>
  </ThemeProvider>
);

export default App;
