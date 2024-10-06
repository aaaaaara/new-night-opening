import * as Styles from './Typography.styles';

//child 변경
interface Props {
  children: string;
  variant?: string;
  color?: string;
}
function Typography({ children, variant, color }: Props) {
  return (
    <Styles.Container $variant={variant} $color={color}>
      {children}
    </Styles.Container>
  );
}

export default Typography;
