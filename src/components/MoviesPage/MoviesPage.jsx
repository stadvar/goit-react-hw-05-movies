import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { fetchQuery } from '../../services/fetchAPI';

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  let { url } = useRouteMatch();
  const [search, setSearch] = useState('');
  const [moviesList, setMoviesList] = useState(null);

  const heandleSearch = e => {
    setSearch(e.target.value);
  };

  const heandleSubmit = e => {
    e.preventDefault();
    history.push({ ...location, search: `query=${search}` });
  };

  useEffect(() => {
    if (location.search === '') {
      return;
    }

    const query = new URLSearchParams(location.search).get('query');

    fetchQuery(query)
      .then(data => {
        setMoviesList(data.results);
      })
      .catch(error => console.warn(error))
      .finally(() => {
        setSearch('');
      });
  }, [location.search]);

  return (
    <>
      <form action="submit" onSubmit={heandleSubmit}>
        <input
          type="text"
          name="search"
          value={search}
          id="id-1"
          onChange={heandleSearch}
        />
        <button type="submit">Search</button>
      </form>
      {moviesList && (
        <ul>
          {moviesList.map(el => (
            <li key={el.id}>
              <Link
                to={{ pathname: `${url}/${el.id}`, state: { from: location } }}
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
