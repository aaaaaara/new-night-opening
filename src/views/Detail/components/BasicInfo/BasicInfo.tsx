import Label from '../../../../components/Label/Label';
import Typography from '../../../../components/Typography/Typography';
import * as Styles from './BasicInfo.styles';

interface Props {
  type: string;
  name: string;
  address: string;
}

function BasicInfo({ type, name, address }: Props) {
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.ContentItem>
          <Label children={type} variant="urgent" />
        </Styles.ContentItem>
        <Styles.ContentItem>
          <Typography variant="heading2" children={name} />
        </Styles.ContentItem>
        <Styles.ContentItem>
          <Typography color="#999" children={address} />
        </Styles.ContentItem>
      </Styles.Content>
    </Styles.Container>
  );
}

export default BasicInfo;
