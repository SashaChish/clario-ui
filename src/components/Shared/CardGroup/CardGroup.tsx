// Absolute imports
import { ReactElement } from 'react';

// Types
import { Interpolation } from 'styled-components/dist/types';

// Components
import { UnorderedList } from '@/components/Shared';

// Styled
import UnorderedListWrapper from './styled';

interface CardGroupProps {
  unorderedList: { text: string; icon?: ReactElement }[];
  unorderedTitle?: string;
  unorderedSubTitle?: string;
  imgScr?: string;
  unorderedItemStyles?: Interpolation<React.CSSProperties>;
  unorderedIconStyles?: Interpolation<React.CSSProperties>;
}

const CardGroup = ({
  unorderedList,
  unorderedTitle,
  unorderedSubTitle,
  imgScr,
  unorderedItemStyles,
  unorderedIconStyles,
}: CardGroupProps) => (
  <div>
    {imgScr ? (
      <img src={imgScr} alt="trackerDetector" width="272px" height="372px" />
    ) : null}
    <UnorderedListWrapper>
      <UnorderedList
        title={unorderedTitle}
        subTitle={unorderedSubTitle}
        list={unorderedList}
        unorderedItemStyles={unorderedItemStyles}
        unorderedIconStyles={unorderedIconStyles}
      />
    </UnorderedListWrapper>
  </div>
);

export default CardGroup;
