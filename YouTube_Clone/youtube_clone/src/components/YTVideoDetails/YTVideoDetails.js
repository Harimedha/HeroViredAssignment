import React from 'react'
import './YTVideoDetails.css'
import { useLocation } from 'react-router-dom'

function YTVideoDetails(props) {
  const location = useLocation();
  const  movieTitle = location.state;
  // console.log(propsData);
  return (
    <div className='ytdetails-container'> 
      <h4>
        Video Details : 
      </h4>
      <h4>{movieTitle}</h4>
    </div>
  )
}

export default YTVideoDetails