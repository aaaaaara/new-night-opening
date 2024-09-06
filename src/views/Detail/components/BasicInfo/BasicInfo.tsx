import Label from '../../../../components/Label/Label';
import { IHospitalType } from '../../../../types';
import * as Styles from './BasicInfo.styles';

interface Props {
  type: IHospitalType;
  name: string;
  address: string;
}

function BasicInfo({ type, name, address }: Props) {
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.ContentItem>
          <Label children={type.name} />
        </Styles.ContentItem>
        <Styles.ContentItem>
          <Styles.TypoHeadingH2>{name}</Styles.TypoHeadingH2>
        </Styles.ContentItem>
        <Styles.ContentItem>
          <Styles.TypoBody>{address}</Styles.TypoBody>
        </Styles.ContentItem>
      </Styles.Content>
    </Styles.Container>
  );
}

export default BasicInfo;
