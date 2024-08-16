import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './components/ItemList/ItemList';
import * as Styles from './index.styles';

const testHsListItem = [
  {
    id: 'D001',
    type: { name: '이비인후과', id: '1' },
    name: '이룸이비인후과의원',
    x: 128,
    y: 128,
    isDuty: true,
    dutyDate: {
      day: '월',
      time: '18:00',
    },
  },
  {
    id: 'D002',
    type: { name: '이비인후과', id: '1' },
    name: '이룸의원',
    x: 128,
    y: 128,
    isDuty: false,
    dutyDate: {
      day: '월',
      time: '19:00',
    },
  },
  {
    id: 'D003',
    type: { name: '이비인후과', id: '1' },
    name: '과자이비인후과',
    x: 128,
    y: 128,
    isDuty: true,
    dutyDate: {
      day: '월',
      time: '18:30',
    },
  },
];
function ListView() {
  const { id } = useParams();

  useEffect(() => {
    console.log(id, 'id가 무엇인가요');
  }, [id]);
  return (
    <Styles.Container>
      <Styles.Content>
        <ItemList />
      </Styles.Content>
    </Styles.Container>
  );
}

export default ListView;
