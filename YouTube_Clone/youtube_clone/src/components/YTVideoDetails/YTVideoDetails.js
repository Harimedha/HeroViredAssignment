import React from 'react'
import './YTVideoDetails.css'
import { useLocation } from 'react-router-dom'

function YTVideoDetails(props) {
  const location = useLocation();
  const propsData = location.state;
  console.log(propsData);
  return (
    <div className='ytdetails-container'> 
      <h4>
        Video Details : 
      </h4>
      <h4>{propsData}</h4>
    </div>
  )
}

export default YTVideoDetails