import { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
// import MoviesPage from '../MoviesPage';
// import HomePage from '../HomePage';
// import MovieDetailsPage from '../MovieDetailsPage';
import Navigate from '../Navigate';

const HomePage = lazy(() =>
  import('../../pages/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('../../pages/MoviesPage' /* webpackChunkName: "movie-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../../pages/MovieDetailsPage' /* webpackChunkName: "movie-detail-page" */
  ),
);

function App() {
  return (
    <div className="App">
      <Navigate />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route path="/movies">
            <MoviesPage />
          </Route>
          <Route>
            <Redirect to={'/'} />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
