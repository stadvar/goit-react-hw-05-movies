import './MovieCard.css';

import PropTypes from 'prop-types';

MovieCard.propTypes = {
  film: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};

export default function MovieCard({
  film: { poster_path, title, release_date, overview, genres, vote_average },
}) {
  return (
    <div className="MovieCard">
      <img src={'http://image.tmdb.org/t/p/w300' + poster_path} alt={title} />
      <div>
        <h2>{`${title} (${release_date.slice(0, 4)})`}</h2>
        <p>
          <span>User Scope: {vote_average * 10}%</span>
        </p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres && genres.map(({ name }) => `${name} `)}</p>
      </div>
    </div>
  );
}
