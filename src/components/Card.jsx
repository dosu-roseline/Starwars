import { Link } from 'react-router-dom';
import { formatDate } from '../utils/helper';

const Card = ({ movie, id }) => {
  console.log(id);
  return (
    <div className="card">
      <div className="card-content">
        <h1 className="title">{movie.title}</h1>
        <p className="date">{formatDate(movie.release_date)}</p>
        <p className="summary">{movie.summary}</p>
        <p className="link">
          <Link to={`/movie/${id + 1}`} state={{ movies: movie }}>
            More Info
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Card;
