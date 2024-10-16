import Typography from '@components/Typography/Typography';
import { faArrowLeft, faHouseMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHeaderTitleStore } from '@stores/headerTitle';
import Theme from '@styles/Theme';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Styles from './Header.styles';

const SHOW_BACKBUTTON_PAGE_PATH = ['/hospitalType', '/hospital'];

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { headerTitle } = useHeaderTitleStore();

  const [isShowLogo, setIsShowLogo] = useState(true); //로고 노출 여부 (메인페이지만)

  //뒤로가기
  const goPageBack = () => {
    navigate(-1);
  };

  //메인페이지를 제외하고 뒤로가기 버튼 노출
  const isShowPageBackButton = () => {
    if (
      SHOW_BACKBUTTON_PAGE_PATH.some((item) => location.pathname.includes(item))
    ) {
      setIsShowLogo(false);
    } else {
      setIsShowLogo(true);
    }
  };

  useEffect(() => {
    isShowPageBackButton();
  }, [location]);

  return (
    <Styles.Container>
      <Styles.Inner>
        {!isShowLogo && (
          <button onClick={goPageBack}>
            <FontAwesomeIcon icon={faArrowLeft} size="2x" color="white" />
          </button>
        )}
        <Styles.TitleWrap>
          {isShowLogo ? (
            <FontAwesomeIcon icon={faHouseMedical} size="lg" color="white" />
          ) : (
            <Typography color={Theme.white}>{headerTitle}</Typography>
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
