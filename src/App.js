import './App.css';
import { Route , Routes } from 'react-router-dom';

import MovieDetail from './pages/MovieDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="wrapper">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<MovieDetail />} />
        </Routes>
    </div>
  );
}

export default App;
