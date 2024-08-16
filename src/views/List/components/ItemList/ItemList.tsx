import { IHospitalType } from '../../../../types';
import ItemCard from '../ItemCard/ItemCard';
import * as Styles from './ItemList.styles';

interface Props {
  id: string;
  type: IHospitalType;
  name: string;
  x: number;
  y: number;
  isDuty: boolean;
  dutyDate: {
    day: string;
    time: string;
  };
  state: '진료중' | '곧마감' | '진료마감';
}

function ItemList({ id, type, name, x, y, isDuty, dutyDate, state }: Props) {
  return (
    <Styles.Container>
      {[1, 2, 3, 4, 5].map((el) => (
        <ItemCard
          key={el}
          type={type.name}
          name={name}
          dutyTime={dutyDate.time}
          state={state}
        />
      ))}
    </Styles.Container>
  );
}

export default ItemList;
