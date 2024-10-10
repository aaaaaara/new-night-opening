import { styled } from 'styled-components';

export const Container = styled.div`
  border-radius: 16px;
  border: 1px solid #ebebeb;
  background: #fff;

  /* Card */
  box-shadow: 0px 8px 32px 8px rgba(0, 0, 0, 0.02);
`;

export const Content = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemContainer = styled.ul``;

export const Item = styled.li`
  display: flex;

  &:first-child {
    gap: 8px;
    margin-bottom: 5px;
  }

  &:last-child {
    margin-top: 8px;
  }
`;
//타이포 추후 정리
export const TypoHeadingH3 = styled.h3`
  color: #121212;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.28px;
`;

export const TypoBodyS = styled.p`
  color: #999;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.96px;
`;
