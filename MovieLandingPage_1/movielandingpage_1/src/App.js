import './App.css';
import MoviesCarousel from './components/MoviesCarousel';
import MainHeading from './components/MainHeading';
import Adventure from './components/jsonfiles/AdventureMovies.json';
import Action from './components/jsonfiles/ActionMovies.json';
import Drama from './components/jsonfiles/DramaMovies.json';
import Crime from './components/jsonfiles/CrimeMovies.json';
import Trending from './components/jsonfiles/TrendingMovies.json';

function App() {

  return (
    <div className="App">
      <MainHeading></MainHeading>    
      <MoviesCarousel moviegenre="Trending Movies" movielist={Trending}></MoviesCarousel>
      <MoviesCarousel moviegenre="Adventure Movies" movielist={Adventure}></MoviesCarousel>
      <MoviesCarousel moviegenre="Drama Movies" movielist={Drama}></MoviesCarousel>
      <MoviesCarousel moviegenre="Action Movies" movielist={Action}></MoviesCarousel>
      <MoviesCarousel moviegenre="Crime Movies" movielist={Crime}></MoviesCarousel>
    </div>
  )
}

export default App;
