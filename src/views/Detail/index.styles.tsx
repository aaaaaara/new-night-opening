import { styled } from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
`;
export const Content = styled.div`
  position: relative;
  min-height: 694px;
  height: 80%;
  border-radius: 24px 24px 0 0;
  display: flex;
  flex-direction: column;
  //overflow: visible;
  padding: 30px 20px 30px 20px;
  background-color: ${(props) => props.theme.white};
`;

export const ContentItem = styled.div`
  margin-bottom: 20px;
  padding: 0 20px;

  &:nth-child(2) {
    padding-bottom: 20px;
    border-bottom: 12px solid #f3f3f3;
  }
`;
