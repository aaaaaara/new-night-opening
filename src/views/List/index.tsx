import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import HospitalAPI from '../../apis/hospitals';
import Filter from './components/Filter/Filter';
import ItemList from './components/ItemList/ItemList';
import * as Styles from './index.styles';

/*
 *TODO : 이전값을 물고 있어서 로딩바 추가
 */

function ListView() {
  //state
  const [searchParams] = useSearchParams();
  const hospitalType = searchParams.get('hospitalType');
  //let userLocation = navigator.geolocation.getCurrentPosition();

  //API

  //Logic
  const getHospitalsQuery = useQuery({
    queryKey: ['getHospitalsQuery'],
    queryFn: () => HospitalAPI.getHospitals(hospitalType as string),
    enabled: !!hospitalType,
  });

  //Effect
  useEffect(() => {}, [hospitalType, getHospitalsQuery.data]);

  return (
    <Styles.Container>
      <Styles.Content>
        <Filter />
        {getHospitalsQuery.isSuccess && (
          <ItemList data={getHospitalsQuery.data} />
        )}
      </Styles.Content>
    </Styles.Container>
  );
}

export default ListView;
