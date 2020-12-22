import { Link } from 'react-router-dom';
export default function AdditionNav({ movieId }) {
  return (
    <ul>
      <li>
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      </li>
      <li>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </li>
    </ul>
  );
}
