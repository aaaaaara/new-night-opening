import * as Styles from './ScrollTopButton.styles';

/*리스트, 디테일 페이지에서 사용 */
function ScrollTopButton() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Styles.Container>
      <Styles.Button onClick={scrollTop}>위로</Styles.Button>
    </Styles.Container>
  );
}

export default ScrollTopButton;
