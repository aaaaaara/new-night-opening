import Typography from '../../../../components/Typography/Typography';
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
          <Typography variant="body-s" color="#999" children="전화번호" />
        </Styles.ContentItem>
        <Styles.ContentItem>
          <Typography variant="body-s" children="02-0000-0000" />
        </Styles.ContentItem>
      </Styles.Content>
      <Styles.Content>
        <Styles.ContentItem>
          <Typography variant="body-s" color="#999" children="진료시간" />
        </Styles.ContentItem>
        <Styles.ContentItem>
          <Typography variant="body-s" children={'18:00에 진료종료'} />
        </Styles.ContentItem>
      </Styles.Content>

      {dutyDates &&
        dutyDates.map((date) => (
          <Styles.Content key={date.day}>
            <Styles.ContentItem>
              <Typography variant="body-s" color="#999" children={date.day} />
            </Styles.ContentItem>
            <Styles.ContentItem>
              <Typography variant="body-s" children={date.time} />
            </Styles.ContentItem>
          </Styles.Content>
        ))}
    </Styles.Container>
  );
}

export default AdditionalInfo;
