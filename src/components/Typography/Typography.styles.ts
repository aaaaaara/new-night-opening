import { styled } from 'styled-components';

export const Container = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

const Default = styled.p`
  color: ${(props) => props.theme.textPrimary};
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

/*
  heading 40px 
  title 20px 
  body-md 16px
  body 14px 
  body-s 12px
  body-xs 10px

  font-weight 400 500 700
  color
*/
