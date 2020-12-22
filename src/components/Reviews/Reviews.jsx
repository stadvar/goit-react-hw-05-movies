import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from '../../services/fetchAPI';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    fetchReview(movieId)
      .then(data => {
        setReviews(data.results);
      })
      .catch(error => console.warn(error));
  }, [movieId]);

  return (
    <div>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <b>Author: {review.author}</b>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
}
