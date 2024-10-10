import { IHospitals } from '@/src/types';
import Loading from '@components/Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
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
  const [hospitals, setHospitals] = useState<IHospitals[] | undefined>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  //let userLocation = navigator.geolocation.getCurrentPosition();

  //API

  //Logic
  const getHospitalsQuery = useQuery({
    queryKey: ['getHospitalsQuery'],
    queryFn: () => HospitalAPI.getHospitals(hospitalType as string),
    enabled: !!hospitalType,
  });

  //검색
  const searchHospital = () => {
    const hospitalData =
      getHospitalsQuery.data &&
      getHospitalsQuery.data.filter((data) => data.name.includes(searchValue));
    setHospitals(hospitalData);
  };

  // 필터 로직
  const seletedState = () => {
    //
  };

  //Effect
  useEffect(() => {
    searchHospital();
  }, [searchValue, getHospitalsQuery.data]);

  return (
    <Styles.Container>
      <Styles.Content>
        <Filter
          setValue={setSearchValue}
          onClick={searchHospital}
          value={searchValue}
        />
        {getHospitalsQuery.isFetching ? (
          <Loading />
        ) : (
          hospitals && <ItemList data={hospitals} />
        )}
      </Styles.Content>
    </Styles.Container>
  );
}

export default ListView;
