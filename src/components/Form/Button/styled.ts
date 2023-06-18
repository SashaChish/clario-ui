import { styled } from 'styled-components';

export default styled.button`
  border-radius: 60px;
  border: 1px solid transparent;
  padding: 6px 15px 8px;
  width: fit-content;
  min-height: 32px;
  background-color: ${({ theme }) => theme.color.primary()};

  & span {
    font-weight: 700;
    line-height: 18px;
    font-size: 14px;
    text-align: center;
    color: ${({ theme }) => theme.color.white()};
  }

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s linear;
  }
`;
