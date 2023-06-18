import styled, { css } from 'styled-components';

// Styled
import { flexWrapper } from '@/styled/css';

export const CollapseItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin-bottom: 32px;

  &:last-child::after {
    color: black;
    display: none;
  }

  &::after {
    content: '';
    width: 2px;
    top: 34px;
    height: 100%;
    position: absolute;
    left: 14px;
    border-left: 1px dashed rgba(0, 0, 0, 0.54118);
  }
`;

export const CollapseItem = styled.div<{ $isExpanded: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: 0.3s ease-in-out;

  ${({ $isExpanded, theme }) =>
    $isExpanded
      ? css`
          color: ${theme.color.turquoise()};

          & svg {
            rotate: 180deg;
          }

          & svg path {
            fill: ${theme.color.turquoise()};
          }
        `
      : ''}

  &:hover {
    cursor: pointer;
  }

  & svg {
    transition: rotate 0.3s ease-in-out;
    width: 24px;
    height: 24px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const HiddenContent = styled.p<{ $isExpanded: boolean }>`
  margin: 12px 0 0 37px;
  transition: 1s ease-in-out;
  display: ${({ $isExpanded }) => ($isExpanded ? 'block' : 'none')};
`;

export const OrderIcon = styled.div<{ $isExpanded: boolean }>`
  ${flexWrapper}
  width: 28px;
  height: 28px;
  border-radius: 50%;
  text-align: center;
  font-size: 16px;
  line-height: 22px;
  font-weight: 700px;
  color: #ffffff;
  background-color: ${({ $isExpanded, theme }) =>
    $isExpanded ? theme.color.turquoise() : theme.color.dark()};
`;
