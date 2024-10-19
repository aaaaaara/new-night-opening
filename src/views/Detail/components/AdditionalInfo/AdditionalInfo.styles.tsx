import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 14px 12px;
  border-radius: 12px;

  background: #fff;

  /* defail */
  box-shadow: 0px 8px 24px 6px rgba(0, 0, 0, 0.04);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  gap: 27px;
`;

export const ContentItem = styled.div`
  &:first-child {
    flex-basis: 40px;
    text-align: right;
  }
`;

export const DutyDateItem = styled.div`
  height: 24px;
`;
