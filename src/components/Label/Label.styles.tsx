import { styled } from 'styled-components';

export const Container = styled.div`
  border-radius: 4px;
  padding: 3px 6px;
  background-color: ${(props) => props.theme.primary};
  text-align: center;
  color: ${(props) => props.theme.white};
  font-size: 10px;
`;
