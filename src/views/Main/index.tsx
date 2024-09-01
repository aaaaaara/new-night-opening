import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HospitalAPI from '../../apis/hospitals';
import BadgeButton from '../../components/button/BadgeButton/BadgeButton';
import BasicButton from '../../components/button/BasicButton/BasicButton';
import SearchInput from '../../components/SearchInput/SearchInput';
import { IHospitalType } from '../../types';
import Tooltip from './components/Tooltip/Tooltip';
import * as Styles from './index.styles';

const BUTTON_TEXT = '병원 찾기';
const MAIN_DESCRIPTION = `퇴근 후에 급히 병원을 가야 할 때, \n 지금 진료중인 병원을 찾고싶다.(설명)`;
function MainView() {
  const [searchValue, setSearchValue] = useState(''); //input value 저장 state
  const [hospitalTypes, setHospitalTypes] = useState<IHospitalType[]>([]);
  const [filterHospitalType, setFilterHospitalType] = useState<IHospitalType[]>(
    []
  );

  const navigate = useNavigate();

  const getHospitalTypeData = () => {
    HospitalAPI.getHospotalTypes()
      .then((res) => {
        setHospitalTypes(res);
        console.log(res, '성공?');
      })
      .catch((error) => console.log(error));
  };

  /**
   * 병원 타입 찾기 기능
   * 1. input에 병원 타입을 입력.
   * 2. 병원타입 데이터에서 입력한 값이 포함된 병원타입을 필터링
   */

  //필터 검색에 대한 기능 라우팅
  const hospitalTypeSearch = () => {
    const hospitalType = hospitalTypes.filter((type) =>
      type.name.includes(searchValue)
    );
    setFilterHospitalType(hospitalType);
  };

  const goToListPage = (id: string) => {
    navigate(`/hospitalType/${id}`);
  };

  useEffect(() => {
    getHospitalTypeData();
  }, []);

  useEffect(() => {
    hospitalTypeSearch();
  }, [searchValue]);
  return (
    <Styles.Container>
      <Styles.MainDescription>
        <h2>병원 찾기(임시)</h2>
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
        <Styles.ButtonWrap>
          <BasicButton
            children={BUTTON_TEXT}
            onClick={() => goToListPage('all')}
          />
        </Styles.ButtonWrap>
      </Styles.Content>
    </Styles.Container>
  );
}

export default MainView;
