import BadgeButton from '../../components/button/BadgeButton/BadgeButton';
import BasicButton from '../../components/button/BasicButton/BasicButton';
import SearchInput from '../../components/SearchInput/SearchInput';
import * as Styles from './index.styles';
const testHsTypes = [
  { type: '이비인후과', id: '1' },
  { type: '치과', id: '2' },
  { type: '내과', id: '3' },
  { type: '신경외과', id: '4' },
  { type: '정형외과', id: '5' },
  { type: '피부과', id: '6' },
  { type: '소아과', id: '7' },
  { type: '안과', id: '8' },
  { type: '가정의학과', id: '9' },
];

const BUTTON_TEXT = '병원 찾기';
function MainView() {
  const goToListPage = () => {
    console.log('list');
  };
  return (
    <Styles.Container>
      <Styles.MainDescription>
        <h2>메인 타이틀</h2>
        <p>메인 설명</p>
      </Styles.MainDescription>
      <Styles.Content>
        <SearchInput />
        <Styles.BadgeButtonWrap>
          {testHsTypes.map((type) => (
            <BadgeButton type={type.type} id={type.id} key={type.id} />
          ))}
        </Styles.BadgeButtonWrap>
        <Styles.ButtonWrap>
          <BasicButton children={BUTTON_TEXT} onClick={goToListPage} />
        </Styles.ButtonWrap>
      </Styles.Content>
    </Styles.Container>
  );
}

export default MainView;
