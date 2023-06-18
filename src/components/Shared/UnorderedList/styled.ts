import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`;

export const SubTitle = styled.h4`
  padding: 2px 0 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  margin: 12px 0;

  & svg {
    height: 24px;
    width: 24px;
  }
`;
