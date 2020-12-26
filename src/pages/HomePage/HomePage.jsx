import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchTranding } from '../../services/fetchAPI';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTranding()
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => console.warn(error));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies && (
        <ul>
          {movies.map(el => (
            <li key={el.id}>
              <Link
                to={{ pathname: `/movies/${el.id}`, state: { from: location } }}
              >
                {el.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
