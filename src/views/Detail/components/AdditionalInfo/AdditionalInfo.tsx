import { IDutyDate } from '../../../../types';
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
          <Styles.TypoBodyS $color="#999">{'전화번호'}</Styles.TypoBodyS>
        </Styles.ContentItem>
        <Styles.ContentItem>
          <Styles.TypoBodyS>{'02-0000-0000'}</Styles.TypoBodyS>
        </Styles.ContentItem>
      </Styles.Content>
      <Styles.Content>
        <Styles.ContentItem>
          <Styles.TypoBodyS $color="#999">{'진료시간'}</Styles.TypoBodyS>
        </Styles.ContentItem>
        <Styles.ContentItem>
          <Styles.TypoBodyS>
            {' '}
            {'18:00'}
            {'에 진료종료'}
          </Styles.TypoBodyS>
        </Styles.ContentItem>
      </Styles.Content>

      {dutyDates &&
        dutyDates.map((date) => (
          <Styles.Content key={date.day}>
            <Styles.ContentItem>
              <Styles.TypoBodyS $color="#999">{date.day}</Styles.TypoBodyS>
            </Styles.ContentItem>
            <Styles.ContentItem>
              <Styles.TypoBodyS>{date.time}</Styles.TypoBodyS>
            </Styles.ContentItem>
          </Styles.Content>
        ))}
    </Styles.Container>
  );
}

export default AdditionalInfo;
