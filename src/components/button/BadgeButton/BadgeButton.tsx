/*
메인에 병원 타입 선택 버튼
*/
import * as Styles from './BadgeButton.styles';
interface Props {
  type: string;
  id?: string;
}

/*
hospitalType {
  id: string,
  name: string
}
*/

function BadgeButton({ type }: Props) {
  return <Styles.Container>{type}</Styles.Container>;
}

export default BadgeButton;
