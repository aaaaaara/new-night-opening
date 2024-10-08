import { styled } from 'styled-components';

export const Container = styled.div<{ $isActive?: boolean }>`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: ${(props) => (props.$isActive ? '100%' : '50%')};
  padding: 0 16px;
  transition: all 0.3s ease-in-out;
`;

export const FilterContainer = styled.div<{ $isActive?: boolean }>`
  position: relative;
  height: ${(props) => (props.$isActive ? '98px' : 'auto')};
  padding: 12px 18px;
  border-radius: 22px;
  background: #fff;
  box-shadow: 0px 8px 32px 16px rgba(0, 0, 0, 0.12);
  width: 100%;
`;

export const CloseButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -10px;
  right: -10px;
  width: 30px;
  height: 30px;
  padding: 10px;
  background-color: ${(props) => props.theme.white};
  border: 2px solid ${(props) => props.theme.borderLight};
  border-radius: 50%;
`;

export const Filter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const FilterTop = styled.div`
  width: 100%;

  button {
    padding: 6px 12px;
  }
`;

export const FilterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  & > button {
    position: relative;
    display: block;
    color: #585858;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.96px;

    &:first-child::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: -12px;
      width: 1px;
      height: 19px;
      background: #ebebeb;
    }
  }
`;

export const FilterActive = styled.div``;

export const SearchBox = styled.div<{ $isSearchOpen?: boolean }>`
  width: 100%;
  height: ${(props) => (props.$isSearchOpen ? 'auto' : 0)};
  visibility: ${(props) => (props.$isSearchOpen ? 'visible' : 'hidden')};
  margin-bottom: 12px;
  & > input {
    display: block;
    width: 100%;
    padding: 12px;
    border-radius: 12px;
    border: 1px solid #ebebeb;
    background: #fff;
    color: #c4c4c4;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.96px;

    &::placeholder {
      color: #c4c4c4;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: -0.96px;
    }
  }
`;

export const SortBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 12px;
`;
