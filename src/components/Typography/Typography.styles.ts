import { styled } from 'styled-components';

export const Container = styled.div`
  font-size: 10px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

const DefulatStyle = styled.p`
  color: ${(props) => props.theme.textPrimary};
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.5px;
`;
