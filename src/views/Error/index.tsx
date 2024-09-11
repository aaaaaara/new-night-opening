import * as Styles from './index.styles';

const ERROR_MESSAGE = {
  ACCESS: `잘못된 접근입니다.`,
  DEFAULT: ``,
  SERVER: ``,
};

function ErrorView() {
  return (
    <Styles.Container>
      <Styles.Content>{ERROR_MESSAGE.ACCESS}</Styles.Content>
    </Styles.Container>
  );
}

export default ErrorView;
