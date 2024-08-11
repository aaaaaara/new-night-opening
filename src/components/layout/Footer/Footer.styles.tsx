import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 20px 16px;
  text-align: center;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.textSecondary};
`;
