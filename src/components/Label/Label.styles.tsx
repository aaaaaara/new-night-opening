import { css, styled } from 'styled-components';

export const Container = styled.button<{ $variant?: string }>`
  display: inline-block;
  border-radius: 4px;
  padding: 3px 6px;
  background-color: ${(props) => props.theme.white};
  text-align: center;
  color: ${(props) => props.theme.primary};
  font-size: 10px;
  border: 1px solid
    ${(props) => (props.$variant ? 'transparent' : props.theme.primary)};

  ${({ $variant }) => {
    switch ($variant) {
      case 'disabled':
        return css`
          color: #c4c4c4;
          background-color: ${(props) => props.theme.backgroundLight};
        `;
      case 'active':
        return css`
          color: ${(props) => props.theme.white};
          background-color: ${(props) => props.theme.primary};
        `;
      case 'urgent':
        return css`
          color: ${(props) => props.theme.white};
          background-color: ${(props) => props.theme.accentGold};
        `;
      case 'closed':
        return css`
          color: ${(props) => props.theme.white};
          background-color: ${(props) => props.theme.accentTeal};
        `;
    }
  }}
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

  5. disabled
  color: #c4c4c4
  background-color: backgroundLight

*/
