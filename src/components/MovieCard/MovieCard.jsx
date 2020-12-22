import './MovieCard.css';
export default function MovieCard({
  film: { poster_path, title, release_date, overview, genres },
}) {
  return (
    <div className="MovieCard">
      <img src={'http://image.tmdb.org/t/p/w300' + poster_path} alt={title} />
      <div>
        <h2>{`${title} (${release_date.slice(0, 4)})`}</h2>
        <p>
          <span>User Scope: ?</span>
        </p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(({ name }) => `${name} `)}</p>
      </div>
    </div>
  );
}
