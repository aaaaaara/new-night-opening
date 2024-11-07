import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.ul`
  width: 100%;
`;

export const ContentItem = styled.li`
  &:nth-child(1) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
    margin-bottom: 9px;
  }

  &:nth-child(2) {
    margin-bottom: 2px;
  }
`;
