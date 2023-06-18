// Absolute imports
import { ReactElement } from 'react';

// Components
import { UnorderedList } from '@/components/Shared';

// Styled
import UnorderedListWrapper from './styled';

interface CardGroupProps {
  unorderedList: { text: string; icon?: ReactElement }[];
  unorderedTitle?: string;
  unorderedSubTitle?: string;
  imgScr: string;
}

const CardGroup = ({
  unorderedList,
  unorderedTitle,
  unorderedSubTitle,
  imgScr,
}: CardGroupProps) => (
  <div>
    <img src={imgScr} alt="trackerDetector" width="272px" height="372px" />
    <UnorderedListWrapper>
      <UnorderedList
        title={unorderedTitle}
        subTitle={unorderedSubTitle}
        list={unorderedList}
      />
    </UnorderedListWrapper>
  </div>
);

export default CardGroup;
