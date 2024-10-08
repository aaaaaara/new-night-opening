import { IHospitals } from '../../../../types';
import ItemCard from '../ItemCard/ItemCard';
import * as Styles from './ItemList.styles';
interface Props {
  data: IHospitals[];
}

function ItemList({ data }: Props) {
  return (
    <Styles.Container>
      {data &&
        data.map((hospitalData) => (
          <ItemCard
            key={hospitalData.id}
            id={hospitalData.id}
            type={hospitalData.type.name}
            name={hospitalData.name}
            state={hospitalData?.state}
            dutyDates={hospitalData.dutyDate}
          />
        ))}
    </Styles.Container>
  );
}

export default ItemList;
