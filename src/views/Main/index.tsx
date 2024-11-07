import HospitalAPI from '@apis/hospitals';
import BadgeButton from '@components/button/BadgeButton/BadgeButton';
import SearchInput from '@components/SearchInput/SearchInput';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IHospitalType } from '../../types';
import Tooltip from './components/Tooltip/Tooltip';
import * as Styles from './index.styles';

const MAIN_TITLE = '병원 찾기(임시)';
const MAIN_DESCRIPTION = `퇴근 후에 급히 병원을 가야 할 때, \n 지금 진료중인 병원을 찾고싶다.(설명)`;

/**
 * 병원 타입 찾기 기능
 * 1. input에 병원 타입을 입력.
 * 2. 병원타입 데이터에서 입력한 값이 포함된 병원타입을 필터링
 */

function MainView() {
  // State

  const [searchValue, setSearchValue] = useState<string>(''); //input value 저장 state
  const [hospitalTypes, setHospitalTypes] = useState<IHospitalType[]>([]);
  const [filterHospitalType, setFilterHospitalType] =
    useState<IHospitalType[]>();

  const [userLocation, setUserLocation] = useState<{
    longitudeStr: string; //경도 x
    latitudeStr: string; //위도 y
  }>({ longitudeStr: '', latitudeStr: '' }); //위치정보

  // Hooks
  const navigate = useNavigate();

  // API
  const getHospitalTypesQuery = useQuery({
    queryKey: ['getHospitalTypesQuery'],
    queryFn: HospitalAPI.getHospitalTypes,
    refetchOnWindowFocus: false,
  });
  /* 추후 삭제: 쿼리키 => 리액트쿼리에서 캐싱을 하는데 쿼리키로 변동된 데이터가 없을 경우 api호출을 하지 않음으로 불필요한 api호출 및 리랜더를 방지할 수 있다 */

  //Logic
  const hospitalTypeSearch = () => {
    const hospitalType = hospitalTypes.filter((type) =>
      type.name.includes(searchValue)
    );
    setFilterHospitalType(hospitalType);
  };

  const goToListPage = (
    lng: string,
    lat: string,
    id: string,
    page: number,
    pageSize: number
  ) => {
    navigate(
      `hospitals?longitude=${lng}&latitude=${lat}&hospitalType=${id}&pageNo=${page}&numOfRows=${pageSize}`
    );
  };

  //유저 위치 가져오기
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        //success
        (position) => {
          const { latitude, longitude } = position.coords;
          const latitudeStr = latitude.toString();
          const longitudeStr = longitude.toString();
          setUserLocation({ longitudeStr, latitudeStr });
          console.log(longitude, latitude);
        },
        //error
        (error) => {
          console.log('Error get user Location:', error);
        }
      );
    } else {
      //브라우저 지원 하지 않음
      console.log('Geolocation is not supported by this browser');
    }
  };

  // Effect
  useEffect(() => {
    if (getHospitalTypesQuery.data) {
      setHospitalTypes(getHospitalTypesQuery.data);
    }
  }, [getHospitalTypesQuery.data]);
  /* 추후 삭제: 변동 없는 Data의 경우는 front에서 상수로 관리하는 편이 낫다 무의미한 api호출을 하지 않아도 됨 */

  useEffect(() => {
    hospitalTypeSearch();
  }, [hospitalTypes, searchValue]);

  useEffect(() => {
    getUserLocation();
  }, []);
  return (
    <Styles.Container>
      <Styles.MainDescription>
        <h2>{MAIN_TITLE}</h2>
        <p>{MAIN_DESCRIPTION}</p>
      </Styles.MainDescription>
      <Styles.Content>
        <Tooltip />
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onClick={hospitalTypeSearch}
        />
        <Styles.BadgeButtonWrap>
          <Styles.BadgeButtonInner>
            {filterHospitalType &&
              filterHospitalType.map((type) => (
                <BadgeButton
                  type={type.name}
                  id={type.id}
                  key={type.id}
                  onClick={() => {
                    goToListPage(
                      userLocation.longitudeStr,
                      userLocation.latitudeStr,
                      type.id,
                      1,
                      20
                    );
                  }}
                />
              ))}
          </Styles.BadgeButtonInner>
        </Styles.BadgeButtonWrap>
      </Styles.Content>
    </Styles.Container>
  );
}

export default MainView;
