/*
    메인 검색
    리스트 패이지 검색
*/
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styles from './SearchInput.styles';

const PLACEHOLDER_TEXT = '찾고 싶은 병원이 있으세요?';
interface Props {
  onClick: () => void;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}
function SearchInput({ onClick, searchValue, setSearchValue }: Props) {
  return (
    <Styles.Container>
      <Styles.InputBox>
        <Styles.Input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={PLACEHOLDER_TEXT}
        />
        <button onClick={onClick}>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" color="#003C72" />
        </button>
      </Styles.InputBox>
    </Styles.Container>
  );
}

export default SearchInput;
