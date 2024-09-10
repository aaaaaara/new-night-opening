import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HospitalAPI from '../../apis/hospitals';
import { IHospital } from '../../types';
import ItemList from './components/ItemList/ItemList';
import * as Styles from './index.styles';

function ListView() {
  const { id } = useParams();
  const [hospitalData, setHospitalData] = useState<IHospital[]>([]);

  //api
  const {
    data: getHospitalsQuery,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ['getHospitalsQuery'],
    queryFn: () => HospitalAPI.getHospitals(id as string),
  });

  useEffect(() => {
    console.log(id);
  }, [id]);

  useEffect(() => {
    console.log(getHospitalsQuery);
    if (isSuccess) {
      setHospitalData(getHospitalsQuery);
    }
  }, [hospitalData]);

  return (
    <Styles.Container>
      <Styles.Content>
        {isLoading ? 'loading' : <ItemList data={hospitalData} />}
      </Styles.Content>
    </Styles.Container>
  );
}

export default ListView;
