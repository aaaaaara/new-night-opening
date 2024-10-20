import { IDutyDate } from '@/src/types';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Label from '../../../../components/Label/Label';
import * as Styles from './ItemCard.styles';

//TODO: interface명 수정
interface Props {
  id: string;
  state?: string;
  type: string;
  name: string;
  dutyDates: IDutyDate[];
}

const END_TEXT = `에 진료종료`;
function ItemCard({ state, type, name, dutyDates, id }: Props) {
  const today = dayjs().day();
  //State
  const [todayDutyTime, setTodayDutyTime] = useState({
    day: '',
    time: '',
  });

  //Hooks
  const navigate = useNavigate();

  //Logic
  const getTodayDutyTime = () => {
    dutyDates.forEach((element, i) => {
      if (i === today && element.time !== null) {
        setTodayDutyTime({ day: element.day, time: element.time });
        isDutyCheck(element.time);
      }
    });
  };

  const isDutyCheck = (time: string) => {
    let endTime = time.slice(5);

    //console.log(endTime, 'end');
  };

  const goDetailPage = () => {
    navigate(`/hospital/${id}`);
  };

  //Effect
  useEffect(() => {
    getTodayDutyTime();
  }, []);

  return (
    <Styles.Container onClick={goDetailPage}>
      <Styles.Content>
        <Styles.ItemContainer>
          <Styles.Item>
            {state && <Label children={state} />}
            <Label children={type} />
          </Styles.Item>
          <Styles.Item>
            <Styles.TypoHeadingH3>{name}</Styles.TypoHeadingH3>
          </Styles.Item>
          <Styles.Item>
            <Styles.TypoBodyS>
              {todayDutyTime.time.slice(5)}
              {END_TEXT}
            </Styles.TypoBodyS>
          </Styles.Item>
        </Styles.ItemContainer>
        <FontAwesomeIcon icon={faAngleRight} color="#C4C4C4" />
      </Styles.Content>
    </Styles.Container>
  );
}

export default ItemCard;
