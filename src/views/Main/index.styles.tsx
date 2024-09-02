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

export const MainDescription = styled.div`
  padding: 0 20px;

  & > h2 {
    font-size: 40px;
    color: ${(props) => props.theme.white};
  }
  & > p {
    color: ${(props) => props.theme.white};
    opacity: 0.4;
    white-space: pre-line;
  }
`;

export const Content = styled.div`
  position: relative;
  min-height: 457px;
  border-radius: 24px 24px 0 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 30px 20px 30px 20px;
  background-color: ${(props) => props.theme.white};

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), #fff);
  }
`;

export const BadgeButtonWrap = styled.div`
  flex: 1;
  padding-bottom: 100px;
  max-height: 260px;
  overflow-y: auto;
`;

export const BadgeButtonInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;

export const ButtonWrap = styled.div`
  width: 100%;
  position: sticky;
  bottom: 0;
  left: 0;
  z-index: 3;
  border-radius: 8px;
  box-shadow: 0px 8px 24px 0px #00000026;
`;
