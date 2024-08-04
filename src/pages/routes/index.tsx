import { Route, Routes } from 'react-router-dom';
import Detail from '../Detail';
import ErrorPage from '../Error';
import List from '../List';
import Main from '../Main';

function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/list" element={<List />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default MainRoute;
