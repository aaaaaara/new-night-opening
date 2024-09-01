import * as Styles from './Label.styles';
interface Props {
  children: string;
}
function Label({ children }: Props) {
  return <Styles.Container>{children}</Styles.Container>;
}

export default Label;
