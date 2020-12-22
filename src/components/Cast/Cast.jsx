import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActors } from '../../services/fetchAPI';
import noFoundImg from '../../images/unnamed.png';
import './Cast.css';

export default function Cast() {
  let { movieId } = useParams();
  const [actors, setActors] = useState(null);
  useEffect(() => {
    fetchActors(movieId)
      .then(data => {
        setActors(data.cast);
      })
      .catch(error => console.warn(error));
  }, [movieId]);
  return (
    <div>
      {actors && (
        <ul className="AcrotsList">
          {actors.map(actor => (
            <li className="ActorsItem" key={actor.id}>
              <img
                src={`${
                  actor.profile_path
                    ? 'http://image.tmdb.org/t/p/original' + actor.profile_path
                    : noFoundImg
                }`}
                alt={actor.name}
              />
              <p>{actor.original_name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
