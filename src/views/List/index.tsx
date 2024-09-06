import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IHospital } from '../../types';
import ItemList from './components/ItemList/ItemList';
import * as Styles from './index.styles';

const testHsListItem: IHospital[] = [
  {
    hospitalInfo: {
      id: 'h001',
      type: { name: '이비인후과', id: '1' },
      name: '이룸이비인후과의원',
      x: 128,
      y: 128,
    },
    isDuty: true,
    dutyDate: {
      day: '월',
      time: '18:00',
    },
    state: '진료중',
  },
  {
    hospitalInfo: {
      id: 'h002',
      type: { name: '이비인후과', id: '1' },
      name: '이룸의원',
      x: 128,
      y: 128,
    },
    isDuty: false,
    dutyDate: {
      day: '월',
      time: '19:00',
    },
    state: '진료마감',
  },
  {
    hospitalInfo: {
      id: 'h003',
      type: { name: '이비인후과', id: '1' },
      name: '과자이비인후과',
      x: 128,
      y: 128,
    },
    isDuty: true,
    dutyDate: {
      day: '월',
      time: '18:30',
    },
    state: '진료중',
  },
];
function ListView() {
  const { id } = useParams();
  const [hospitalData, setHospitalData] = useState<IHospital[]>([]);

  //전체 병원 리스트
  const getHospitalData = () => {
    setHospitalData(testHsListItem);
  };
  useEffect(() => {
    getHospitalData();
    console.log(hospitalData);
  }, [id]);
  return (
    <Styles.Container>
      <Styles.Content>
        {hospitalData && <ItemList data={hospitalData} />}
      </Styles.Content>
    </Styles.Container>
  );
}

export default ListView;
