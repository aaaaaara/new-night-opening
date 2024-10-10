import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  z-index: 3;
  margin-bottom: 24px;
`;

export const Content = styled.div`
  position: absolute;
  bottom: -40px;
  left: 0;
  display: inline-flex;
  padding: 9px 13px 10px 17px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  background: rgba(40, 41, 48, 0.75);
  backdrop-filter: blur(10px);
`;
