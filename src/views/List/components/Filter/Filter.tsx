import {
  faArrowDownWideShort,
  faMagnifyingGlass,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Label from '../../../../components/Label/Label';
import * as Styles from './Filter.styles';

interface Props {
  onClick: () => void;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

function Filter({ onClick, value, setValue }: Props) {
  const [isActive, setIsActive] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  /*
    1. 버튼을 클릭하면 검색창영역이 활성화
    2. 검색 or 정렬버튼 클릭시 이전 (검색 or 정렬)값 초기화
  */
  const onClickSearchButton = () => {
    setIsActive(true);
    setIsSearchOpen(true);
    setIsSortOpen(false);
  };

  //정렬
  const onClickSortButton = () => {
    setIsActive(true);
    setIsSortOpen(true);
    setIsSearchOpen(false);
  };

  const onCloseFilter = () => {
    setIsActive(false);
    setIsSortOpen(false);
    setIsSearchOpen(false);
  };

  return (
    <Styles.Container $isActive={isActive}>
      <Styles.FilterContainer $isActive={isActive}>
        {isActive && (
          <Styles.CloseButton>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={onCloseFilter}
              color="#EBEBEB"
            />
          </Styles.CloseButton>
        )}
        <Styles.Filter>
          <Styles.FilterTop>
            {isSearchOpen && (
              <Styles.SearchBox $isSearchOpen={isSearchOpen}>
                <input
                  type="search"
                  placeholder="무엇을 찾고 싶으세요?"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyDown={onClick}
                />
              </Styles.SearchBox>
            )}

            {isSortOpen && (
              <Styles.SortBox>
                <Label children="진료중" variant="active" />

                <Label children="곧마감" variant="disabled" />

                <Label children="마감" variant="disabled" />
              </Styles.SortBox>
            )}
          </Styles.FilterTop>
          <Styles.FilterBottom>
            <button onClick={onClickSearchButton}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              검색하기
            </button>
            <button onClick={onClickSortButton}>
              <FontAwesomeIcon icon={faArrowDownWideShort} />
              정렬
            </button>
          </Styles.FilterBottom>
        </Styles.Filter>
      </Styles.FilterContainer>
    </Styles.Container>
  );
}

export default Filter;
