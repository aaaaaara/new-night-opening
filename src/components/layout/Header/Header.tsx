import { faArrowLeft, faHouseMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Styles from './Header.styles';

const TEST_HEADER_TITLE = '병원타입';
const LIST_PAGE_PATH = '/list';
const DETAIL_PAGE_PATH = '/detail';
const SHOW_BACKBUTTON_PAGE_PATH = ['/list', '/detail'];

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  //뒤로가기
  const goPageBack = () => {
    navigate(-1);
  };

  //메인페이지를 제외하고 뒤로가기 버튼 노출
  const isShowPageBackButton = () => {
    return SHOW_BACKBUTTON_PAGE_PATH.includes(location.pathname);
  };

  //

  useEffect(() => {
    console.log(location.pathname, 'location');
  }, [location]);

  return (
    <Styles.Container>
      <Styles.Inner>
        {isShowPageBackButton() && (
          <button onClick={goPageBack}>
            <FontAwesomeIcon icon={faArrowLeft} size="2x" color="white" />
          </button>
        )}
        <Styles.TitleWrap>
          {!isShowPageBackButton() ? (
            <FontAwesomeIcon icon={faHouseMedical} size="lg" color="white" />
          ) : (
            <p>{TEST_HEADER_TITLE}</p>
          )}
        </Styles.TitleWrap>
      </Styles.Inner>
    </Styles.Container>
  );
}

export default Header;

/*
  1. 메인페이지는 로고만
  2. 리스트페이지 뒤로가기 , 유저가 선택한 타입 노출
  3. 디테일페이지 뒤로가기 , 유저가 선택한 병원이름 노출 
*/
