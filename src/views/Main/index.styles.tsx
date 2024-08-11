import { styled } from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
`;

//임시 영역
export const MainDescription = styled.div`
  padding: 0 20px;
  height: 156px;

  & > h2,
  & > p {
    color: ${(props) => props.theme.white};
  }
`;

export const Content = styled.div`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 30px 20px;
  background-color: ${(props) => props.theme.white};
`;

export const BadgeButtonWrap = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  //padding-bottom: 50px;
  overflow-y: auto;
  max-height: 50%;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), #fff);
  }
`;

export const ButtonWrap = styled.div`
  width: 100%;
  position: sticky;
  bottom: 0;
  left: 0;
  z-index: 3;
`;
