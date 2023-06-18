import styled from 'styled-components';

export const Title = styled.h1`
  font-weight: 700;
  line-height: 36px;
  font-size: 36px;
  text-align: center;
  margin: 54px 0 10px;

  & span {
    &.primary {
      color: ${({ theme }) => theme.color.primary()};
    }
  }
`;

export const SubTitle = styled.h4`
  line-height: 20px;
  opacity: 0.7;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  margin-bottom: 35px;
  color: ${({ theme }) => theme.color.dark(0.7)};
`;

export const UnorderedListWrapper = styled.div`
  margin-bottom: 50px;
`;
