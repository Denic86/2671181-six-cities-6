import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../../pages/mainPage/mainPage';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import Favorites from '../../pages/favorites/favorites';
import NotFound from '../../pages/notFound/notFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


type Props = {
  cards: Card[];
};

function App({ cards }: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main cards={cards} />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
