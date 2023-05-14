import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Logo from '../components/Logo';

const Home = () => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovie = () => {
    axios
      .get('https://swapi.dev/api/films')
      .then((response) => {
        const data = response.data.results;
        data.forEach((movie) => {
          // Split the opening_crawl into an array of words
          const words = movie.opening_crawl.split(' ');
          // Select the first 100 words and join them back into a string
          const summary = words.slice(0, 33).join(' ');
          // Add ellipsis if the summary is shorter than the opening_crawl
          movie.summary = summary + (words.length > 33 ? '...' : '');
        });
        setDatas(response.data.results);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <Logo />
      {isLoading ? (
        <div className="center">
          <span class="loader"></span>
        </div>
      ) : (
        <div className="card-wrapper">
          {datas?.map((movie, index) => {
            return <Card key={index} movie={movie} id={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
