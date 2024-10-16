import { IHospitals } from '@/src/types';
import { useHeaderTitleStore } from '@stores/headerTitle';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import HospitalAPI from '../../apis/hospitals';
import Filter from './components/Filter/Filter';
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
  const [hospitalStatus, setHospitalStatus] = useState(); //병원 운영상태 state
  const { setTitle } = useHeaderTitleStore();
  //API

  //Logic
  const getHospitalsQuery = useQuery({
    queryKey: ['getHospitalsQuery'],
    queryFn: () => HospitalAPI.getHospitals(hospitalType as string),
    enabled: !!hospitalType,
  });

  const setHederTitle = () => {
    setTitle('리스트');
  };

  //검색
  // const searchHospital = () => {
  //   const hospitalData =
  //     getHospitalsQuery.data &&
  //     getHospitalsQuery.data.filter((data) => data.name.includes(searchValue));
  //   setHospitals(hospitalData);
  // };

  // 필터 로직
  // const seletedState = () => {
  //   const hospitalData =
  //   getHospitalsQuery.data &&
  // getHospitalsQuery.data.filter((data) => data.state === hospitalStatus);
  // setHospitals(hospitalData)
  // };

  //Effect
  // useEffect(() => {
  //   searchHospital();
  // }, [searchValue, getHospitalsQuery.data]);

  useEffect(() => {
    setHederTitle();
  }, []);

  return (
    <Styles.Container>
      <Styles.Content>
        <Filter
        // setValue={setSearchValue}
        // onClick={searchHospital}
        // value={searchValue}
        />
        {/* {getHospitalsQuery.isFetching ? (
          <Loading />
        ) : (
          hospitals && <ItemList data={hospitals} />
        )} */}
      </Styles.Content>
    </Styles.Container>
  );
}

export default ListView;
