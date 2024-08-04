import { styled } from 'styled-components';

export const Container = styled.div`
  min-width: 360px;
  max-width: 480px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: 1px solid #ccc; //영역 확인용
`;

export const Content = styled.main`
  width: 100%;
  flex: 1;
  padding: 20px 16px;
`;
