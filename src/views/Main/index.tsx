import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BadgeButton from '../../components/button/BadgeButton/BadgeButton';
import BasicButton from '../../components/button/BasicButton/BasicButton';
import SearchInput from '../../components/SearchInput/SearchInput';
import { IHospitalType } from '../../types';
import * as Styles from './index.styles';
const testHsTypes = [
  { name: '이비인후과', id: '1' },
  { name: '치과', id: '2' },
  { name: '내과', id: '3' },
  { name: '신경외과', id: '4' },
  { name: '정형외과', id: '5' },
  { name: '피부과', id: '6' },
  { name: '소아과', id: '7' },
  { name: '안과', id: '8' },
  { name: '가정의학과', id: '9' },
];

const BUTTON_TEXT = '병원 찾기';
const MAIN_DESCRIPTION = `퇴근 후에 급히 병원을 가야 할 때, \n 지금 진료중인 병원을 찾고싶다.(설명)`;
function MainView() {
  const [searchValue, setSearchValue] = useState(''); //input value 저장 state
  const [hospitalType, setHospitalType] = useState<IHospitalType[]>([]);
  const [filterHospitalType, setFilterHospitalType] = useState<IHospitalType[]>(
    []
  );
  const [isTooltipShow, setIsTooltipShow] = useState(false); //툴팁보여주기 state
  const navigate = useNavigate();

  const getHospitalTypeData = () => {
    setHospitalType(testHsTypes);
  };
  //병원보기 옆에 인포 아이콘 추가해서 툴팁으로 병원종류를 검색할 수 있다
  const showTooltip = () => {
    setIsTooltipShow((prev) => !prev);
  };

  /**
   * 병원 타입 찾기 기능
   * 1. input에 병원 타입을 입력.
   * 2. 병원타입 데이터에서 입력한 값이 포함된 병원타입을 필터링
   */

  //필터 검색에 대한 기능 라우팅
  const hospitalTypeSearch = () => {
    const hospitalType = testHsTypes.filter((type) =>
      type.name.includes(searchValue)
    );
    setFilterHospitalType(hospitalType);
  };

  //라벨 클릭시 라우팅
  //병원 찾기 버튼을 눌렀을때 => 가장 가까운 순으로 병원리스트를 전체 보여주기
  //디자이너와 일단 디자인 협의 해보기
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
        <FontAwesomeIcon icon={faCircleInfo} size="lg" />
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onClick={hospitalTypeSearch}
        />
        <Styles.BadgeButtonWrap>
          <Styles.BadgeButtonInner>
            {filterHospitalType.map((type) => (
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
