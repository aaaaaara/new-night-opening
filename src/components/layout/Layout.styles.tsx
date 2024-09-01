import { styled } from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-width: 360px;
  max-width: 360px;
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
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  margin-top: auto;
`;
