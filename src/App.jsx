import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';
import Logo from './components/Logo';

function App() {
  const [datas, setDatas] = useState([]);

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
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(datas);
  return (
    <div className="App">
      <Logo />
      <div className="card-wrapper">
        {datas?.map((movie, index) => {
          console.log(movie.summary);
          return <Card key={index} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
