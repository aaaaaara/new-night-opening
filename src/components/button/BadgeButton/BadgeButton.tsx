/*
메인에 병원 타입 선택 버튼
*/
import * as Styles from './BadgeButton.styles';
interface Props {
  onClick: () => void;
  type: string;
  id: string;
}

/*
hospitalType {
  id: string,
  name: string
}
*/

function BadgeButton({ type, onClick }: Props) {
  return <Styles.Container onClick={onClick}>{type}</Styles.Container>;
}

export default BadgeButton;
