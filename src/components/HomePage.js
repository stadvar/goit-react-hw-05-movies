import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchTranding } from '../services/fetchAPI';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTranding()
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => console.warn(error));
  }, []);
  //   let { path, url } = useRouteMatch();
  //   console.log(url, path);
  return (
    <>
      <h1>Trending today</h1>
      {movies && (
        <ul>
          {movies.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`}>{el.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
