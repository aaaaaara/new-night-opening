import { IDutyDate } from '../../../../types';
import * as Styles from './AdditionalInfo.styles';

interface Props {
  tel: string;
  dutyDates: IDutyDate[];
}

function AdditionalInfo({ tel, dutyDates }: Props) {
  return (
    <Styles.Container>
      <p>{tel}</p>
      <ul>
        {dutyDates &&
          dutyDates.map((date) => (
            <li key={date.day}>
              {date.day}
              {date.time}
            </li>
          ))}
      </ul>
    </Styles.Container>
  );
}

export default AdditionalInfo;
