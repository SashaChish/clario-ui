import styled from 'styled-components';

export const Title = styled.h2`
  font-weight: 700;
  line-height: 30px;
  font-size: 26px;
  text-align: center;
  margin: 72px 0 32px;

  & span {
    color: ${({ theme }) => theme.color.turquoise()};
  }
`;

export const CollapseListWrapper = styled.div`
  margin: 0 40px;
  width: 100%;
`;
