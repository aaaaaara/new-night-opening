import { IHospitals } from '@/src/types';
import HospitalAPI from '@apis/hospitals';
import ScrollTopButton from '@components/button/ScrollTopButton/ScrollTopButton';
import Loading from '@components/Loading/Loading';
import { useHeaderTitleStore } from '@stores/headerTitle';
import { useHospitalTypeStore } from '@stores/hospitalType';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterBox from './components/Filter/FilterBox';
import ItemList from './components/ItemList/ItemList';
import * as Styles from './index.styles';

/*
 *TODO : 이전값을 물고 있어서 로딩바 추가 => 깜빡임 해결 필요
 * TODO : 무한 스크롤
 */

function ListView() {
  //state
  const { hospitalTypeName } = useHospitalTypeStore();
  const { setTitle } = useHeaderTitleStore();
  const [searchParams] = useSearchParams();
  const hospitalType = searchParams.get('hospitalType');
  const longitude = searchParams.get('longitude'); //
  const latitude = searchParams.get('latitude'); //
  const [hospitals, setHospitals] = useState<IHospitals[] | undefined>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [hospitalStatus, setHospitalStatus] = useState(); //병원 운영상태 state
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(20);

  const targetEl = useRef<HTMLDivElement>(null); //스크롤 하단에 도달했는지 확인용 div TODO 네이밍 변경
  //API
  const getHospitalsQuery = useQuery({
    queryKey: ['getHospitalsQuery'],
    queryFn: () =>
      HospitalAPI.getHospitals(
        longitude as string,
        latitude as string,
        hospitalType as string,
        page,
        pageSize
      ),
    enabled: !!hospitalType,
    refetchOnWindowFocus: false,
  });

  //Logic

  //검색
  const searchHospital = () => {
    const hospitalData =
      getHospitalsQuery.data &&
      getHospitalsQuery.data.filter((data) => data.name.includes(searchValue));
    setHospitals(hospitalData);
  };

  // 필터 로직 테스트 필요 !!
  const seletedState = () => {
    const hospitalData =
      getHospitalsQuery.data &&
      getHospitalsQuery.data.filter((data) => data.state === hospitalStatus);
    setHospitals(hospitalData);
  };

  //무한 스크롤
  /*
    1. 스크롤 위치 구하기 (페이지 하단에 도달 했는지?)
      리스트 페이지 하단에 div element를 추가하여 해당 element를 감지해본다 (ref 사용)
      observer intersection api를 사용하여 감지해본다
    2. 데이터 리패칭 (page num를 넘겨준다)
    3. 데이터 리랜더
  */
  const handleObserver = () => {
    const observer = new IntersectionObserver(() => {
      //
    });
  };

  //Effect
  useEffect(() => {
    searchHospital();
    setTitle(hospitalTypeName);
  }, [hospitalType, searchValue, getHospitalsQuery.data, hospitalTypeName]);

  return (
    <Styles.Container>
      <Styles.Content>
        <FilterBox
          setValue={setSearchValue}
          onClickSearch={searchHospital}
          value={searchValue}
        />
        {getHospitalsQuery.isFetching ? (
          <Loading />
        ) : (
          hospitals && (
            <ItemList
              data={hospitals}
              type={hospitalTypeName}
              targetRef={targetEl}
            />
          )
        )}
      </Styles.Content>
      <ScrollTopButton />
    </Styles.Container>
  );
}

export default ListView;
