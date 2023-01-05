import './YTVideoCard.css';

function YTVideoCard(props) {
  // console.log(props.channelImg)
  return (
    <div className='ytvideo-card'>
      <img src={props.thumbnail} className="ytvideo-card-image" alt='' />
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