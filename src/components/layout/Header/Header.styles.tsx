import { styled } from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.theme.primary};
  margin-bottom: auto;
`;

export const Inner = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const TitleWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
