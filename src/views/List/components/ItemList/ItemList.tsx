import { IHospitals } from '../../../../types';
import ItemCard from '../ItemCard/ItemCard';
import * as Styles from './ItemList.styles';
interface Props {
  data: IHospitals[];
  type: string;
  targetRef: React.ForwardedRef<HTMLDivElement>;
}

function ItemList({ data, type, targetRef }: Props) {
  return (
    <Styles.Container>
      {data &&
        data.map((hospitalData) => (
          <ItemCard
            key={hospitalData.id}
            id={hospitalData.id}
            type={type}
            name={hospitalData.name}
            state={hospitalData?.state}
            endTime={hospitalData?.endTime}
          />
        ))}
      <div ref={targetRef}></div>
    </Styles.Container>
  );
}

export default ItemList;
