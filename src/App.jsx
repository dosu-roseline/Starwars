import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import MovieLists from './pages/MovieLists';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/movie/:id',
    element: <MovieLists />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
