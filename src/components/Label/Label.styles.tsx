import { styled } from 'styled-components';

export const Container = styled.div`
  border-radius: 4px;
  padding: 3px 6px;
  background-color: ${(props) => props.theme.white};
  text-align: center;
  color: ${(props) => props.theme.primary};
  font-size: 10px;
  border: 1px solid ${(props) => props.theme.primary};
`;

/*
  1.type && default
  color: primary
  background-color: white
  border: 1px solid primary

  2. state 진료중 && filter selceted
  color: white
  background-color: primary

  3. state 곧 마감
  color: white
  background-color: accentGold

  4. state 마감
  color white
  background-color: accentTeal

  6. disabled
  color: #c4c4c4
  background-color: backgroundLight

*/
