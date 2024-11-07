import Label from '@components/Label/Label';
import {
  faArrowDownWideShort,
  faMagnifyingGlass,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PropsWithChildren, useState } from 'react';
import * as Styles from './FilterBox.styles';

const labelData = ['진료중', '곧마감', '진료마감'];

interface Props extends PropsWithChildren {
  onClickSearch: () => void;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onClickLabel: () => void;
  setLabel: React.Dispatch<React.SetStateAction<string>>;
}

function FilterBox({
  onClickSearch,
  value,
  setValue,
  onClickLabel,
  setLabel,
}: Props) {
  const [isActive, setIsActive] = useState<boolean>(false); //container를 활성/비활성화 하는 style에 대한 state
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false); //검색 노출여부 state
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false); //sorting 노출여부 state
  const [seletedLabel, setSeletedLabel] = useState<number>(); //선택한 라벨 state

  /*
    1. 버튼을 클릭하면 검색창영역이 활성화
    2. 검색 or 정렬버튼 클릭시 이전 (검색 or 정렬)값 초기화
  */

  // UI에 관한 함수
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
    setValue('');
  };

  //검색
  const goSearch = (e: any) => {
    if (e.key === 'Enter') {
      onClickSearch();
      onCloseFilter();
    }
  };

  //상태 라벨 버튼
  const SelectedFilter = (idx: number, label: string) => {
    setLabel(label); //상태 선택 state
    onClickLabel(); //데이터 필터링 로직 함수
    setSeletedLabel(idx); //UI 변경 state
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
                  onKeyDown={(e) => goSearch(e)}
                />
              </Styles.SearchBox>
            )}

            {isSortOpen && (
              <Styles.SortBox>
                {labelData.map((label, idx) => (
                  <Label
                    key={idx}
                    onClick={() => SelectedFilter(idx, label)}
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

export default FilterBox;
