import { useEffect, useState, lazy, Suspense } from 'react';
import {
  useParams,
  Route,
  useHistory,
  useRouteMatch,
  Switch,
} from 'react-router-dom';
import { fetchMovie } from '../../services/fetchAPI';

import PropTypes from 'prop-types';

MovieDetailsPage.propTypes = {
  pathroute: PropTypes.string.isRequired,
};

// import Cast from '../Cast';
// import AdditionNav from '../AdditionNav';
// import MovieCard from '../MovieCard';
// import Reviews from '../Reviews';

const MovieCard = lazy(() =>
  import('../MovieCard' /* webpackChunkName: "movie-card" */),
);
const AdditionNav = lazy(() =>
  import('../AdditionNav' /* webpackChunkName: "addition-nav" */),
);
const Cast = lazy(() => import('../Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import('../Reviews' /* webpackChunkName: "reviews" */),
);

export default function MovieDetailsPage({ pathroute }) {
  const { movieId } = useParams();
  const history = useHistory();

  const { path } = useRouteMatch();

  const [film, setFilm] = useState(null);
  useEffect(() => {
    fetchMovie(movieId)
      .then(data => {
        setFilm(data);
      })
      .catch(error => {
        history.push('/');
        console.warn(error);
      });
  }, [history, movieId]);

  return (
    <div>
      <button onClick={() => history.push(pathroute)}>&#8592; Go back</button>
      {film && (
        <>
          <Suspense fallback={<h2>Loading...</h2>}>
            <MovieCard film={film} />
            <hr />
            <p>Additional information</p>
            <AdditionNav movieId={movieId} />
          </Suspense>
          <hr />
          <Suspense fallback={<h2>Loading...</h2>}>
            <Switch>
              <Route path={`${path}/cast`}>
                <Cast />
              </Route>
              <Route path={`${path}/reviews`}>
                <Reviews />
              </Route>
            </Switch>
          </Suspense>
        </>
      )}
    </div>
  );
}
