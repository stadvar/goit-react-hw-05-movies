import { lazy, Suspense, useState } from 'react';

import { Route, Switch } from 'react-router-dom';

import './App.css';
// import MoviesPage from '../MoviesPage';
// import HomePage from '../HomePage';
// import MovieDetailsPage from '../MovieDetailsPage';
import Navigate from '../Navigate';

const HomePage = lazy(() =>
  import('../HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('../MoviesPage' /* webpackChunkName: "movie-page" */),
);
const MovieDetailsPage = lazy(() =>
  import('../MovieDetailsPage' /* webpackChunkName: "movie-detail-page" */),
);
function App() {
  const [path, setPath] = useState('');
  const updatePath = value => {
    setPath(value);
  };
  return (
    <div className="App">
      <Navigate />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage updatePath={updatePath} />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage updatePath={updatePath} />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage pathroute={path} />
          </Route>
          <Route>
            <HomePage updatePath={updatePath} />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
