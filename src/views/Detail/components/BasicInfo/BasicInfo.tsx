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
      <p>{type.name}</p>
      <p>{name}</p>
      <p>{address}</p>
    </Styles.Container>
  );
}

export default BasicInfo;
