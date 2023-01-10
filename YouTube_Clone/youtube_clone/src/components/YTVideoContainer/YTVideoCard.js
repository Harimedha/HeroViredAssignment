import { Link } from 'react-router-dom';
import './YTVideoCard.css';

function YTVideoCard(props) {
  // console.log(props.channelImg)
  const movie = props.title;
  // console.log("Video is " + props.title);
  // console.log("Video is " + movie);


  return (
    <div className='ytvideo-card'>
      <Link to="/videoDetails" state={movie}>
      <img src={props.thumbnail} className="ytvideo-card-image" alt='' /></Link>
      <div className='ytvideo-card-duration'>{props.duration}</div>
      <div className="ytvideo-channel-profile">
        <img alt={props.channel} src={props.channelImg} />
        <label>{props.title}</label>
      </div>
      <div className="ytvideo-card-text">
        <p>{props.channelName}</p>
        <p>{props.viewsCount} . {props.timestamp}</p>
      </div>
    </div>
  )
}
export default YTVideoCard;