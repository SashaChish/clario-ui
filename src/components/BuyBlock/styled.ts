import styled from 'styled-components';

export const Title = styled.h2`
  font-weight: 700;
  line-height: 30px;
  font-size: 26px;
  text-align: center;
  margin: 20px 0 19px;
  color: ${({ theme }) => theme.color.white()};
`;

export const StyledHalfCircleImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const PriceWrapper = styled.div`
  width: 100%;
  border-radius: 16px;
  padding: 24px 24px 23px;
  background-color: ${({ theme }) => theme.color.white()};
`;

export const SpecialOfferWrapper = styled.div`
  margin: 0 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 3px 12px;
  border-radius: 16px;
  font-size: 11px;
  font-weight: 400px;
  line-height: 18px;
  background-color: ${({ theme }) => theme.color.lightOrange()};
  color: ${({ theme }) => theme.color.orange()};

  & span {
    font-size: 16px;
    font-weight: 700px;
    line-height: 18px;
  }
`;

export const WhatYouGetWrapper = styled.div`
  margin: 18px 0 33.5px;
  padding: 0 18px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
