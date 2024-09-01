import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;
  border: 1px solid ${(props) => props.theme.borderLight};
  border-radius: 14px;
  padding: 14px;
`;

export const Input = styled.input`
  flex: 1;
  font-size: 12px;
  color: #c4c4c4;
`;
