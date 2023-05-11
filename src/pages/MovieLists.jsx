import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Logo from '../components/Logo';

function MovieLists() {
  const location = useLocation();
  const movie = location.state.movies;
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    Promise.all(
      movie.characters.map((characterUrl) =>
        fetch(characterUrl).then((res) => res.json())
      )
    )
      .then((data) => setCharacters(data.map((character) => character.name)))
      .catch((error) => console.error(error));

    Promise.all(
      movie.planets.map((planetUrl) =>
        fetch(planetUrl).then((res) => res.json())
      )
    )
      .then((data) => setPlanets(data.map((planet) => planet.name)))
      .catch((error) => console.error(error));

    Promise.all(
      movie.starships.map((starshipUrl) =>
        fetch(starshipUrl).then((res) => res.json())
      )
    )
      .then((data) => setStarships(data.map((starship) => starship.name)))
      .catch((error) => console.error(error));

    Promise.all(
      movie.vehicles.map((vehicleUrl) =>
        fetch(vehicleUrl).then((res) => res.json())
      )
    )
      .then((data) => setVehicles(data.map((vehicle) => vehicle.name)))
      .catch((error) => console.error(error));

    Promise.all(
      movie.species.map((specieUrl) =>
        fetch(specieUrl).then((res) => res.json())
      )
    )
      .then((data) => {
        setSpecies(data.map((specie) => specie.name));
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [
    movie.characters,
    movie.planets,
    movie.starships,
    movie.vehicles,
    movie.species,
  ]);

  return (
    <div className="movie-details">
      <Logo />
      {isLoading ? (
        <div className="center">
          <span class="loader"></span>
        </div>
      ) : (
        <div className="movies-wrapper">
          <Link to="/" className="btn-back">
            <span>←</span> Back to list
          </Link>
          <div className="title-wrapper">
            <h1>{movie.title}</h1>
            <p>Director: {movie.director}</p>
            <p>Producer: {movie.producer}</p>
          </div>
          <div className="movie-des">
            <h4>Description</h4>
            <p>{movie.opening_crawl}</p>
          </div>
          <div className="movie-lists">
            <h4>Characters</h4>
            <ul>
              {characters.map((character, index) => (
                <li key={index}>{character}</li>
              ))}
            </ul>
          </div>
          <div className="movie-lists">
            <h4>Planets</h4>
            <ul>
              {planets.map((planet, index) => (
                <li key={index}>{planet}</li>
              ))}
            </ul>
          </div>
          <div className="movie-lists">
            <h4>Species</h4>
            <ul>
              {species.map((specie, index) => (
                <li key={index}>{specie}</li>
              ))}
            </ul>
          </div>
          <div className="movie-lists">
            <h4>Starships</h4>
            <ul>
              {starships.map((starship, index) => (
                <li key={index}>{starship}</li>
              ))}
            </ul>
          </div>
          <div className="movie-lists">
            <h4>Vehicles</h4>
            <ul>
              {vehicles.map((vehicle, index) => (
                <li key={index}>{vehicle}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export default MovieLists;
