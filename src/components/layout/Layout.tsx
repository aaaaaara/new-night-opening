import MainRoute from '../../pages/routes';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import * as Styles from './Layout.styles';

function Layout() {
  return (
    <Styles.Container>
      <Header />
      <Styles.Content>
        <MainRoute />
      </Styles.Content>
      <Footer />
    </Styles.Container>
  );
}

export default Layout;
