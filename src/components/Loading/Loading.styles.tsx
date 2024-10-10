import { keyframes, styled } from 'styled-components';

const spinner = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  width: 40px;
  height: 40px;
  margin-left: -20px;
  border: 5px solid ${(props) => props.theme.primary};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spinner} 1s infinite linear;
`;
