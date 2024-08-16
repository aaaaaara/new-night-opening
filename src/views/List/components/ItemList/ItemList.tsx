import { IHospital } from '../../../../types';
import ItemCard from '../ItemCard/ItemCard';
import * as Styles from './ItemList.styles';

interface Props {
  data: IHospital[];
}

function ItemList({ data }: Props) {
  return (
    <Styles.Container>
      {data.map((hospitalData) => (
        <ItemCard
          key={hospitalData.hospitalInfo.id}
          id={hospitalData.hospitalInfo.id}
          type={hospitalData.hospitalInfo.type.name}
          name={hospitalData.hospitalInfo.name}
          dutyTime={hospitalData.dutyDate.time}
          state={hospitalData.state}
        />
      ))}
    </Styles.Container>
  );
}

export default ItemList;
