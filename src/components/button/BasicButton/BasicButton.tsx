import * as Styles from './BasicButton.styles';
interface Props {
  children: string;
  onClick: () => void;
}

function BasicButton({ children, onClick }: Props) {
  return <Styles.Container onClick={onClick}>{children}</Styles.Container>;
}

export default BasicButton;
