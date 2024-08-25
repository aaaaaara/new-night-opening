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
`;
