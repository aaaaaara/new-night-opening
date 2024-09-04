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
  const getHospitalsQuery = useQuery({
    queryKey: ['getHospitalsQuery'],
    queryFn: () => HospitalAPI.getHospitals(id ?? ''),
  });
  //전체 병원 리스트
  const getHospitalData = () => {
    //
  };
  useEffect(() => {
    //getHospitalsQuery.refetch();
    if (getHospitalsQuery.data && getHospitalsQuery.data !== undefined) {
      setHospitalData(getHospitalsQuery.data);
    }
  }, [id, getHospitalsQuery.data]);

  useEffect(() => {
    console.log(hospitalData);
  }, [hospitalData]);

  return (
    <Styles.Container>
      <Styles.Content>
        {hospitalData && <ItemList data={hospitalData} />}
      </Styles.Content>
    </Styles.Container>
  );
}

export default ListView;
