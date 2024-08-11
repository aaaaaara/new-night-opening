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
  background-color: ${(props) => props.theme.primary};
`;

export const MainWrapper = styled.main`
  width: 100%;
  //flex: 1;
`;

export const Content = styled.div`
  //min-height: 100vh; //임시
`;
