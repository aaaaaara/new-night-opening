import { styled } from 'styled-components';

export const Container = styled.button`
  display: block;
  padding: 4px 12px 4px 12px;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.borderLight};
  text-align: center;
  cursor: pointer;
  color: ${(props) => props.theme.textTertiary};
  font-size: 14px;
  font-weight: 500;
  line-height: 17.53px;
  letter-spacing: -0.08em;
  text-align: center;

  &:hover {
    background-color: ${(props) => props.theme.backgroundLight};
    border-color: ${(props) => props.theme.backgroundLight};
    color: ${(props) => props.theme.primary};
  }
`;
