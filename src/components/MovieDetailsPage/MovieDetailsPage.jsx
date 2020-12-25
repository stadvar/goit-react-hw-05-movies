import { useEffect, useState, useRef, lazy, Suspense } from 'react';
import {
  useParams,
  Route,
  useHistory,
  useRouteMatch,
  Switch,
  useLocation,
} from 'react-router-dom';
import { fetchMovie } from '../../services/fetchAPI';

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

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const history = useHistory();
  const location = useLocation();
  const { path } = useRouteMatch();
  const { current } = useRef(location.state);

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
      <button onClick={() => history.push(current ? current.from : '/')}>
        &#8592; Go back
      </button>
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
