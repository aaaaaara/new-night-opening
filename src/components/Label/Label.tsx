import { PropsWithChildren } from 'react';
import * as Styles from './Label.styles';
interface Props extends PropsWithChildren {
  variant?: string;
  onClick?: () => void;
}
function Label({ children, variant, onClick }: Props) {
  return (
    <Styles.Container onClick={onClick} $variant={variant}>
      {children}
    </Styles.Container>
  );
}

export default Label;

/*
  1. 현재 5개 타입외에 확장의 가능성 없음
  2. 타입으로 전달해주고 싶음 (string)
  3. 전달받은 타입에 따른 스타일 
*/

/*
  TODO : 라벨로만 쓰이는 경우와 버튼으로 쓰이는 경우가 있으므로 정리필요
*/
