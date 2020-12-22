import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchQuery } from '../../services/fetchAPI';

export default function Search() {
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState(null);
  const heandleSearch = e => {
    setSearch(e.target.value);
  };
  const heandleSubmit = e => {
    e.preventDefault();
    fetchQuery(search)
      .then(data => {
        setSearchList(data.results);
      })
      .catch(error => console.warn(error))
      .finally(() => {
        setSearch('');
      });
  };

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
      {searchList && (
        <ul>
          {searchList.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`}>{el.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
