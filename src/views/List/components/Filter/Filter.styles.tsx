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
  display: inline-flex;
  padding: 12px 18px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 22px;
  background: #fff;
  box-shadow: 0px 8px 32px 16px rgba(0, 0, 0, 0.12);
  width: 100%;
`;

export const Filter = styled.div``;

export const FilterTop = styled.div``;

export const FilterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FilterActive = styled.div``;

export const SearchBox = styled.div<{ $isSearchOpen?: boolean }>`
  height: ${(props) => (props.$isSearchOpen ? 'auto' : 0)};
  visibility: ${(props) => (props.$isSearchOpen ? 'visible' : 'hidden')};

  & > input {
    display: block;
    padding: 5px;
    border: 1px solid #000;
  }
`;

export const SortBox = styled.div<{ $isSortOpen?: boolean }>`
  display: ${(props) => (props.$isSortOpen ? 'block' : 'none')};
`;
