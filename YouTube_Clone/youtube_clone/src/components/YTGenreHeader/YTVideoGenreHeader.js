import React from 'react'
import './YTVideoGenreHeader.css'
import { useState, useRef } from "react";
import {FaAngleRight, FaAngleLeft} from  'react-icons/fa'

function YTVideoGenreHeader() {
   
    const [leftScroll, setLeftScroll] = useState(0);
    const [rightScroll, setsrightScroll] = useState(false);
  
  
    let scrollPos = useRef(null);
  
    const getScrollPosition = () => {
      setLeftScroll(scrollPos.current.scrollLeft);
      checkScrollPosition()
    };
  
    const checkScrollPosition = () =>{
      if (
          Math.floor(scrollPos.current.scrollWidth - scrollPos.current.scrollLeft) <=
          scrollPos.current.offsetWidth
        ) {
            setsrightScroll(true);
        } else {
            setsrightScroll(false);
        }
  
    }
    const scrollTo = (offsetVal) => {
      scrollPos.current.scrollLeft += offsetVal;
      setLeftScroll(leftScroll + offsetVal);
      checkScrollPosition()
    };
  
    const Genres = ["All", "Mixes", "Music", "One direction", "Computer Programming", "Live", "Playlists", "Chill-out music", "AI", "Love songs", "Gaming", "Motivation"]
   
   
   
  
    return (
      <div className="ytgenre-carousel">
        {leftScroll !== 0 && (
          <button
            onClick={() => scrollTo(-50)}>     
          {/* <img src='../images/Searchresults/left-arrow.svg' alt="right"/> */}
            <FaAngleLeft/>
          </button>
        )}
        <ul ref={scrollPos} onScroll={getScrollPosition}>
          {Genres.map((genre, idx) => (
              genre==="All" ?
              (<li style={{backgroundColor:"black",
              color:"whitesmoke"
              }} 
              
              key={idx}>{genre}</li>):
            <li key={idx}>{genre}</li>
          ))}
        </ul>
        {!rightScroll && (
          <button
            onClick={() => scrollTo(+50)}>
            <FaAngleRight/>
            {/* <img src='../images/Searchresults/right-arrow.svg' alt="right"/> */}
          </button>
        )}
      </div>
    );
  }

export default YTVideoGenreHeader