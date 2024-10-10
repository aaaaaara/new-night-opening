import Typography from '@components/Typography/Typography';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import * as Styles from './Tooltip.styles';

const TOOLTIP_TITLE = '병원 보기';
const TOOLTIP_DESCRIPTION = '병원 타입을 검색할 수 있습니다.';

function Tooltip() {
  const [isShow, setIsShow] = useState(false);

  const clickInfoIcon = () => {
    setIsShow((prev) => !prev);
  };
  return (
    <Styles.Container>
      <Typography>{TOOLTIP_TITLE}</Typography>
      <FontAwesomeIcon icon={faCircleInfo} size="lg" onClick={clickInfoIcon} />
      {isShow && (
        <Styles.Content>
          <Typography variant="body-sm" color="#fff">
            {TOOLTIP_DESCRIPTION}
          </Typography>
        </Styles.Content>
      )}
    </Styles.Container>
  );
}

export default Tooltip;
