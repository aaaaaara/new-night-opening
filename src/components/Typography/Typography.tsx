import * as Styles from './Typography.styles';

interface Props {
  children: string;
}
function Typography({ children }: Props) {
  return <Styles.Container>{children}</Styles.Container>;
}

export default Typography;
