import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchTranding } from '../../services/fetchAPI';

import PropTypes from 'prop-types';

HomePage.propTypes = {
  updatePath: PropTypes.func.isRequired,
};

export default function HomePage({ updatePath }) {
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  const path = location.pathname + location.search;

  useEffect(() => {
    updatePath(path);
    fetchTranding()
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => console.warn(error));
  }, [path, updatePath]);
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
