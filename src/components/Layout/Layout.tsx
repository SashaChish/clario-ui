// Absolute imports
import { ReactNode } from 'react';

// Styled
import Wrapper from './styled';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => <Wrapper>{children}</Wrapper>;

export default Layout;
