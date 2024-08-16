import AdditionalInfo from './components/AdditionalInfo/AdditionalInfo';
import BasicInfo from './components/BasicInfo/BasicInfo';
import MapArea from './components/Map/MapArea';
import * as Styles from './index.styles';
const testHospitalInfo = [
  {
    id: 'h001',
    name: '이룸이비인후과의원',
    x: 128,
    y: 128,
    dutyDates: [{ day: '월', time: '10:00 ~18:00' }],
    address: '서울시 마포구',
    tel: '02-0000-0000',
    type: { name: '이비인후과', id: '1' },
  },
  {
    id: 'h003',
    name: '이룸이비인후과의원',
    x: 128,
    y: 128,
    dutyDates: [{ day: '월', time: '10:00 ~18:00' }],
    address: '서울시 마포구',
    tel: '02-0000-0000',
    type: { name: '이비인후과', id: '1' },
  },
  {
    id: 'h004',
    name: '이룸이비인후과의원',
    x: 128,
    y: 128,
    dutyDates: [{ day: '월', time: '10:00 ~18:00' }],
    address: '서울시 마포구',
    tel: '02-0000-0000',
    type: { name: '이비인후과', id: '1' },
  },
];

function DetailView() {
  return (
    <Styles.Container>
      <BasicInfo />
      <MapArea />
      <AdditionalInfo />
    </Styles.Container>
  );
}

export default DetailView;
