import { useNavigate } from 'react-router-dom';
import Label from '../../../../components/Label/Label';
import * as Styles from './ItemCard.styles';

//TODO: interface명 수정
interface Props {
  id: string;
  state: string;
  type: string;
  name: string;
  dutyTime: string;
}

const END_TEXT = `에 진료종료`;
function ItemCard({ state, type, name, dutyTime, id }: Props) {
  const navigate = useNavigate();
  const goDetailPage = () => {
    navigate(`/hospital/${id}`);
  };
  return (
    <Styles.Container onClick={goDetailPage}>
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
