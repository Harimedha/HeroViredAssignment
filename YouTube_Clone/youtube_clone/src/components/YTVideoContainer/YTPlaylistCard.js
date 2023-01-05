import React from 'react'
import './YTPlaylistCard.css'

function YTPlaylistCard(props) {
  return (
    <div className='ytplaylist-card'>
    <img src={props.thumbnail} className="ytplaylist-image" alt="playlist" />
    <div className='ytplaylist-overlay'><img src={props.playlist} alt="playlist"/></div>
    <div className="ytplaylist-profile">
      <h6>{props.title}</h6>
      <p>{props.desc}</p>
    </div>
  </div>
  )
}

export default YTPlaylistCard;