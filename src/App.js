import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Trending from './Pages/Trending/Trending';
import Header from './components/Header/Header';
import MovieSearch from './Pages/MovieSearch/MovieSearch';
import MovieDetail from './Pages/MovieDetail/MovieDetail';

function App() {
  return (
    <>
    <div className='app'>
        <Router>
        <Header/>
          <Routes>
            <Route exact path = "/" element={<Trending/>}/>
            <Route exact path = "/search" element={<MovieSearch/>}/>
            <Route exact path = "/search/:id" element={<MovieDetail/>}/>
          </Routes>
        </Router>
    </div>
    </>
  );
}

export default App;
