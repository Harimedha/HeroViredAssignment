import './App.css';
import YTHeader from './components/YTHeader/YTHeader';
import YTVideoContainer from './components/YTVideoContainer/YTVideoContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import YTSearchResult from './components/YTSearchResult/YTSearchResult';
import YTVideoDetails from './components/YTVideoDetails/YTVideoDetails';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <YTHeader/>
        <Routes>
        <Route path='/' element={<YTVideoContainer/>} />
        <Route path="/search/:searchterm" element={<YTSearchResult/>}/> 
        <Route path="/videoDetails" element={<YTVideoDetails/>}/>                  
        </Routes>     
      </BrowserRouter>
    </div>
  );
}

export default App;
