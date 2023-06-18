// Icons
import AppleIcon from '@/assets/media/svg/apple.svg';
import ScreenIcon from '@/assets/media/svg/screen.svg';

// Styled
import Wrapper from './styled';

const Devices = () => (
  <Wrapper>
    <span>
      <AppleIcon />
      <span>&nbsp;IOS</span>
    </span>
    <span>
      &nbsp;&nbsp;
      <ScreenIcon />
      <span>&nbsp;macOS, Windows</span>
    </span>
  </Wrapper>
);

export default Devices;
