import { PropsWithChildren } from 'react';
import * as Styles from './BasicButton.styles';
interface Props extends PropsWithChildren {
  onClick: () => void;
}

function BasicButton({ children, onClick }: Props) {
  return <Styles.Container onClick={onClick}>{children}</Styles.Container>;
}

export default BasicButton;
