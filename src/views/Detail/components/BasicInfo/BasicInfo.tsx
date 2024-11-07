import { IHospitalType } from '@/src/types';
import Label from '../../../../components/Label/Label';
import Typography from '../../../../components/Typography/Typography';
import * as Styles from './BasicInfo.styles';

interface Props {
  types: IHospitalType[];
  name: string;
  address: string;
}

function BasicInfo({ types, name, address }: Props) {
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.ContentItem>
          {types.map((type) => (
            <Label key={type.id} variant="urgent">
              {type.name}
            </Label>
          ))}
        </Styles.ContentItem>
        <Styles.ContentItem>
          <Typography variant="heading2">{name}</Typography>
        </Styles.ContentItem>
        <Styles.ContentItem>
          <Typography color="#999">{address}</Typography>
        </Styles.ContentItem>
      </Styles.Content>
    </Styles.Container>
  );
}

export default BasicInfo;
