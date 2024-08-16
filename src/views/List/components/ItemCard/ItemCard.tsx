import Label from '../../../../components/Label/Label';
import * as Styles from './ItemCard.styles';

//TODO: interface명 수정
interface Props {
  state: string;
  type: string;
  name: string;
  dutyTime: string;
}

const END_TEXT = `에 진료종료`;
function ItemCard({ state, type, name, dutyTime }: Props) {
  return (
    <Styles.Container>
      <Styles.Content>
        <ul>
          <li>
            <Label children={state} />
            <Label children={type} />
          </li>
          <li>{name}</li>
          <li>
            {dutyTime}
            {END_TEXT}
          </li>
        </ul>
      </Styles.Content>
    </Styles.Container>
  );
}

export default ItemCard;
