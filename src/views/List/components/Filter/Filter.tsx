import Label from '@components/Label/Label';
import {
  faArrowDownWideShort,
  faMagnifyingGlass,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PropsWithChildren, useState } from 'react';
import * as Styles from './Filter.styles';

const labelData = ['진료중', '곧마감', '마감'];

interface Props extends PropsWithChildren {
  onClick: () => void;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

function Filter({ onClick, value, setValue }: Props) {
  const [isActive, setIsActive] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [seletedLabel, setSeletedLabel] = useState(0);

  /*
    1. 버튼을 클릭하면 검색창영역이 활성화
    2. 검색 or 정렬버튼 클릭시 이전 (검색 or 정렬)값 초기화
  */
  const onClickSearchButton = () => {
    setIsActive(true);
    setIsSearchOpen(true);
    setIsSortOpen(false);
  };

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

  //상태에 따라 라벨 활성화
  const SelectedFilter = (idx: number) => {
    setSeletedLabel(idx);
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
                {labelData.map((label, idx) => (
                  <Label
                    key={idx}
                    onClick={() => SelectedFilter(idx)}
                    variant={seletedLabel === idx ? 'active' : 'disabled'}
                  >
                    {label}
                  </Label>
                ))}
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
