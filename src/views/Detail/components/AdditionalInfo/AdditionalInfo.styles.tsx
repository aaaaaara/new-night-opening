import { styled } from 'styled-components';

export const Container = styled.div`
  border: 1px solid ${(props) => props.theme.gray};
  width: 100%;
  min-height: 400px;
`;
