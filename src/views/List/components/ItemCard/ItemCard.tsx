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
        <Styles.ItemContainer>
          <Styles.Item>
            <Label children={state} />
            <Label children={type} />
          </Styles.Item>
          <Styles.Item>{name}</Styles.Item>
          <Styles.Item>
            {dutyTime}
            {END_TEXT}
          </Styles.Item>
        </Styles.ItemContainer>
      </Styles.Content>
    </Styles.Container>
  );
}

export default ItemCard;
