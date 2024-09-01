import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import * as Styles from './Tooltip.styles';
function Tooltip() {
  const [isShow, setIsShow] = useState(false);

  const clickInfoIcon = () => {
    setIsShow((prev) => !prev);
  };
  return (
    <Styles.Container>
      <p>병원 보기</p>
      <FontAwesomeIcon icon={faCircleInfo} size="lg" onClick={clickInfoIcon} />
      {isShow && (
        <Styles.Content>병원 타입을 검색할 수 있습니다.</Styles.Content>
      )}
    </Styles.Container>
  );
}

export default Tooltip;
