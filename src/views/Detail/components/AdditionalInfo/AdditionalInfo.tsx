import { IDutyDate } from '@/src/types';
import Typography from '@components/Typography/Typography';
import { DayTypeKeys, dayTypes } from '../../../../const';
import * as Styles from './AdditionalInfo.styles';

interface Props {
  tel: string;
  dutyDates: IDutyDate[];
}

function AdditionalInfo({ tel, dutyDates }: Props) {
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.ContentItem>
          <Typography variant="body-s" color="#999">
            {'전화번호'}
          </Typography>
        </Styles.ContentItem>
        <Styles.ContentItem>
          <Typography variant="body-s">{tel}</Typography>
        </Styles.ContentItem>
      </Styles.Content>
      <Styles.Content>
        <Styles.ContentItem>
          <Typography variant="body-s" color="#999">
            {'진료시간'}
          </Typography>
        </Styles.ContentItem>
        <Styles.ContentItem>
          <Typography variant="body-s" children={'18:00에 진료종료'} />
        </Styles.ContentItem>
      </Styles.Content>

      <Styles.Content>
        <Styles.ContentItem>
          {DayTypeKeys.map((key, idx) => {
            return (
              <Styles.DutyDateItem key={idx}>
                <Typography variant="body-s" color="#999">
                  {dayTypes[key]}
                </Typography>
              </Styles.DutyDateItem>
            );
          })}
        </Styles.ContentItem>
        <Styles.ContentItem>
          {dutyDates.map((date) => {
            return (
              <Styles.DutyDateItem key={date.day}>
                <Typography variant="body-s">{date.time || '-'}</Typography>
              </Styles.DutyDateItem>
            );
          })}
        </Styles.ContentItem>
      </Styles.Content>
    </Styles.Container>
  );
}

export default AdditionalInfo;
