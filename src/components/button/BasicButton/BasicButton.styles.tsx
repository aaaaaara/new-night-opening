import { styled } from 'styled-components';

export const Container = styled.button`
  display: block;
  width: 100%;
  padding: 12px 24px 12px 24px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  font-weight: 700;
`;
