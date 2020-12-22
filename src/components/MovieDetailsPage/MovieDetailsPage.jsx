import { useEffect, useState } from 'react';
import { useParams, Route, Link } from 'react-router-dom';
import { fetchMovie } from '../../services/fetchAPI';
import Cast from '../Cast';
import AdditionNav from '../AdditionNav';
import MovieCard from '../MovieCard';
import Reviews from '../Reviews';

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  const [film, setFilm] = useState(null);
  useEffect(() => {
    fetchMovie(movieId)
      .then(data => {
        setFilm(data);
      })
      .catch(error => console.warn(error));
  }, [movieId]);

  return (
    <div>
      <Link to="/">{'<-Go back'}</Link>
      {film && (
        <>
          <MovieCard film={film} />
          <hr />
          <p>Additional information</p>
          <AdditionNav movieId={movieId} />
          <hr />

          <Route path={`/movies/:movieId/cast`}>
            <Cast />
          </Route>

          <Route path={`/movies/:movieId/reviews`}>
            <Reviews />
          </Route>
        </>
      )}
    </div>
  );
}
