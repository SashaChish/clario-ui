// Video
import radar from '@/assets/media/video/radar.mp4';

// Styled
import StyledVideo from './styled';

const Video = () => (
  <StyledVideo preload="auto" loop autoPlay muted>
    <source src={radar} />
  </StyledVideo>
);

export default Video;
