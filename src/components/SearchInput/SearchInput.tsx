/*
    메인 검색
    리스트 패이지 검색
*/
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styles from './SearchInput.styles';
function SearchInput() {
  return (
    <Styles.Container>
      <Styles.InputBox>
        <Styles.Input type="text" />
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" color="#003C72" />
        </button>
      </Styles.InputBox>
    </Styles.Container>
  );
}

export default SearchInput;
