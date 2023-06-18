// Absolute imports
import { ReactElement } from 'react';

// Styled
import { Item, SubTitle, Title } from './styled';

export interface UnorderedListProps {
  list: { text: string; icon?: ReactElement }[];
  title?: string;
  subTitle?: string;
}

const UnorderedList = ({ list, title, subTitle }: UnorderedListProps) => (
  <div>
    {title ? <Title>{title}</Title> : null}
    {subTitle ? <SubTitle>{subTitle}</SubTitle> : null}
    {list.map(({ text, icon }) => (
      <Item key={text}>
        {icon ? (
          <>
            {icon}
            &nbsp;&nbsp;
          </>
        ) : null}
        <span>{text}</span>
      </Item>
    ))}
  </div>
);

export default UnorderedList;
