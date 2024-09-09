import * as Styles from './Label.styles';
interface Props {
  children: string;
  variant?: string;
}
function Label({ children, variant }: Props) {
  return <Styles.Container $variant={variant}>{children}</Styles.Container>;
}

export default Label;

/*
  1. 현재 5개 타입외에 확장의 가능성 없음
  2. 타입으로 전달해주고 싶음 (string)
  3. 전달받은 타입에 따른 스타일 
*/
