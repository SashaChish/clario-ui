// Absolute imports
import { ReactElement } from 'react';

// Types
import { Interpolation } from 'styled-components/dist/types';

// Styled
import { Item, SubTitle, Title, Wrapper, IconWrapper } from './styled';

export interface UnorderedListProps {
  list: { text: string; icon?: ReactElement }[];
  title?: string;
  subTitle?: string;
  unorderedItemStyles?: Interpolation<React.CSSProperties>;
  unorderedIconStyles?: Interpolation<React.CSSProperties>;
}

const UnorderedList = ({
  list,
  title,
  subTitle,
  unorderedItemStyles,
  unorderedIconStyles,
}: UnorderedListProps) => (
  <Wrapper>
    {title ? <Title>{title}</Title> : null}
    {subTitle ? <SubTitle>{subTitle}</SubTitle> : null}
    {list.map(({ text, icon }) => (
      <Item key={text} styles={unorderedItemStyles}>
        {icon ? (
          <>
            <IconWrapper $iconStyles={unorderedIconStyles}>{icon}</IconWrapper>
            &nbsp;&nbsp;
          </>
        ) : null}
        <span>{text}</span>
      </Item>
    ))}
  </Wrapper>
);

export default UnorderedList;
