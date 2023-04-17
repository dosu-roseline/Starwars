import { formatDate } from './helper';

const Card = ({ movie }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h1 className="title">{movie.title}</h1>
        <p className="date">{formatDate(movie.release_date)}</p>
        <p className="summary">{movie.summary}</p>
        <p className="link">
          <a href="#">More Info</a>
        </p>
      </div>
    </div>
  );
};

export default Card;
