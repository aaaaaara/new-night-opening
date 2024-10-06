import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HospitalAPI from '../../apis/hospitals';
import BadgeButton from '../../components/button/BadgeButton/BadgeButton';
import SearchInput from '../../components/SearchInput/SearchInput';
import { IHospitalType } from '../../types';
import Tooltip from './components/Tooltip/Tooltip';
import * as Styles from './index.styles';

const BUTTON_TEXT = '병원 찾기';
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

  // Hooks
  const navigate = useNavigate();

  // API
  const getHospitalTypesQuery = useQuery({
    queryKey: ['getHospitalTypesQuery'],
    queryFn: HospitalAPI.getHospitalTypes,
  });

  //Logic
  const hospitalTypeSearch = () => {
    const hospitalType = hospitalTypes.filter((type) =>
      type.name.includes(searchValue)
    );
    setFilterHospitalType(hospitalType);
  };

  const goToListPage = (id: string) => {
    navigate(`/hospitals?hospitalType=${id}`);
  };

  // Effect
  useEffect(() => {
    if (getHospitalTypesQuery.data) {
      setHospitalTypes(getHospitalTypesQuery.data);
    }
  }, [getHospitalTypesQuery.data]);

  useEffect(() => {
    hospitalTypeSearch();
  }, [hospitalTypes, searchValue]);
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
                  onClick={() => goToListPage(type.id)}
                />
              ))}
          </Styles.BadgeButtonInner>
        </Styles.BadgeButtonWrap>
      </Styles.Content>
    </Styles.Container>
  );
}

export default MainView;
