import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import * as Styles from './Header.styles';

const TEST_HEADER_TITLE = '병원타입';

function Header() {
  const navigate = useNavigate();
  return (
    <Styles.Container>
      <Styles.Inner>
        <button onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} size="2x" />
        </button>
        {/* <FontAwesomeIcon icon={faHouseMedical} size="lg" /> */}
        {/* <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" /> */}
        {/* <Typography type="HEADING2" children={TEST_HEADER_TITLE} /> */}
      </Styles.Inner>
    </Styles.Container>
  );
}

export default Header;
