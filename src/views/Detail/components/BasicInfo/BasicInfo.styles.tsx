import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.ul`
  width: 100%;
`;

export const ContentItem = styled.li`
  &:nth-child(1) {
    margin-bottom: 9px;
  }

  &:nth-child(2) {
    margin-bottom: 2px;
  }
`;

export const TypoHeadingH2 = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;

export const TypoBody = styled.p`
  font-size: 14px;
  color: #999;
`;
