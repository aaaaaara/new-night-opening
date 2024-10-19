import { styled } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 10%;
  right: 50%;
  margin-right: -160px;
  z-index: 9;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 48px;
  height: 48px;
  padding: 12px 18px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0px 2px 24px 2px rgba(0, 0, 0, 0.15);
`;
