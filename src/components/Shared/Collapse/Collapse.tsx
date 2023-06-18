// Icons
import CollapseArrow from '@/assets/media/svg/collapseArrowDown.svg';

// Styled
import {
  OrderIcon,
  CollapseItem,
  CollapseItemWrapper,
  TextWrapper,
  HiddenContent,
} from './styled';

interface CollapseProps {
  list: { text: string; hiddenText: string; id: string | number }[];
  checkIsExpanded: (id: string | number) => boolean;
  handleCollapse: (id: string | number) => () => void;
}

const Collapse = ({ list, checkIsExpanded, handleCollapse }: CollapseProps) => (
  <>
    {list.map((item, index) => (
      <CollapseItemWrapper key={item.id}>
        <CollapseItem
          $isExpanded={checkIsExpanded(item.id)}
          onClick={handleCollapse(item.id)}
        >
          <TextWrapper>
            <OrderIcon $isExpanded={checkIsExpanded(item.id)}>
              {index + 1}
            </OrderIcon>
            &nbsp;&nbsp;
            <p>{item.text}</p>
          </TextWrapper>
          <CollapseArrow />
        </CollapseItem>
        <HiddenContent $isExpanded={checkIsExpanded(item.id)}>
          {item.hiddenText}
        </HiddenContent>
      </CollapseItemWrapper>
    ))}
  </>
);

export default Collapse;
