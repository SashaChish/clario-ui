// Absolute imports
import { useTheme } from 'styled-components';

// Constants
import collapseList from './constants';

// Hooks
import useCollapse from '@/hooks/useCollapse';

// Components
import { Section, Collapse } from '../Shared';

// Styled
import { Title, CollapseListWrapper } from './styled';

const Steps = () => {
  const theme = useTheme();
  const { handleCollapse, checkIsExpanded } = useCollapse();

  return (
    <Section currentTheme={theme.color.white()}>
      <Title>
        All you need to do <br /> is <span>3 easy steps</span>.
      </Title>
      <CollapseListWrapper>
        <Collapse
          list={collapseList}
          handleCollapse={handleCollapse}
          checkIsExpanded={checkIsExpanded}
        />
      </CollapseListWrapper>
    </Section>
  );
};

export default Steps;
