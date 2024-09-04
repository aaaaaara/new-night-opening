import {
  faArrowDownWideShort,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Label from '../../../../components/Label/Label';
import * as Styles from './Filter.styles';

function Filter() {
  const [isActive, setIsActive] = useState(false);
  //검색창, 필터 보이기
  const onClickSearchIcon = () => {
    setIsActive((prev) => !prev);
  };
  //검색하기
  /*
    1. 버튼을 클릭하면 검색창영역이 활성화
    2. 활성화 된 상태에서 검색창에 입력을 하고 버튼을 클릭하면 검색
  */

  //정렬

  return (
    <Styles.Container $isActive={isActive}>
      <Styles.FilterContainer $isActive={isActive}>
        <Styles.Filter>
          <Styles.FilterTop>
            <Styles.SearchBox $isActive={isActive}>
              <input type="search" />
            </Styles.SearchBox>
            <Styles.SortBox>
              <button>
                <Label children="진료중" />
              </button>
              <button>
                <Label children="곧마감" />
              </button>
              <button>
                <Label children="마감" />
              </button>
            </Styles.SortBox>
          </Styles.FilterTop>
          <Styles.FilterBottom>
            <button onClick={onClickSearchIcon}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              검색하기
            </button>
            <button>
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
