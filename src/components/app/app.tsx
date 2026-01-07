import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../../pages/mainPage/mainPage';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import Favorites from '../../pages/favorites/favorites';
import NotFound from '../../pages/notFound/notFound';
import PrivateRoute from '../privateRoute/privateRoute';
import { Cards } from '../../mocks/offers';
import { FavoritesForm } from '../../mocks/favorites';

function App(): JSX.Element {
  const isAuthorized = true; // Пока всегда авторизован

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Main cards={Cards} isAuthorized={isAuthorized} />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute isAuthorized={isAuthorized}>
              <Favorites
                favorites={FavoritesForm}
                isAuthorized={isAuthorized}
              />
            </PrivateRoute>
          }
        />
        <Route
          path="/offer/:id"
          element={<Offer isAuthorized={isAuthorized} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

