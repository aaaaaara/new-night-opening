import { useEffect } from 'react';
import { IHospital } from '../../../../types';
import * as Styles from './ItemList.styles';

interface Props {
  data: IHospital[];
}

function ItemList({ data }: Props) {
  useEffect(() => {
    data;
  });
  return (
    <Styles.Container>
      {data &&
        data.map((hospitalData) => (
          <ul key={hospitalData.hospitalInfo?.id}>
            <li>{hospitalData.hospitalInfo?.name}data test</li>
          </ul>

          // <ItemCard
          //   key={hospitalData.hospitalInfo?.id}
          //   id={hospitalData.hospitalInfo?.id}
          //   type={hospitalData.hospitalInfo?.type.name}
          //   name={hospitalData.hospitalInfo?.name}
          //   state={hospitalData.state}
          // />
        ))}
    </Styles.Container>
  );
}

export default ItemList;
