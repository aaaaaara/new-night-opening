import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { IHospitals } from '../../../../types';
import ItemCard from '../ItemCard/ItemCard';
import * as Styles from './ItemList.styles';
interface Props {
  data: IHospitals[];
}

function ItemList({ data }: Props) {
  const today = dayjs().day();
  const [todayDutyTime, setTodayDutyTime] = useState('');

  /**
   * dutydate(운영시간)은 배열로 구성되어있다
   * 오늘 날짜와 일치하는 dutyDate를 찾는다
   * 오늘 날짜와 일치하는 date의 time을 itemCard로 넘겨준다
   */
  const getTodayDutyTime = () => {
    let dutyDates = [];
    dutyDates = data.map((x) => x.dutyDate);
    console.log(dutyDates);
  };
  useEffect(() => {
    getTodayDutyTime();
  }, []);
  return (
    <Styles.Container>
      {data &&
        data.map((hospitalData) => (
          <ItemCard
            key={hospitalData.id}
            id={hospitalData.id}
            type={hospitalData.type.name}
            name={hospitalData.name}
            state={hospitalData?.state}
          />
        ))}
    </Styles.Container>
  );
}

export default ItemList;
