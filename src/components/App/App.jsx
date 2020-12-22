import { Route, Switch } from 'react-router-dom';

import './App.css';
import MoviesPage from '../MoviesPage';
import HomePage from '../HomePage';
import MovieDetailsPage from '../MovieDetailsPage';
import Navigate from '../Navigate';

function App() {
  return (
    <div className="App">
      <Navigate />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <MoviesPage />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
