import './Trekdetail.css';

function Trekdeatils(props){


return(

    <div className='trek-name'>
        <h2>{props.title}</h2>
        <div><img src={props.imgsrc} className="trek-img" alt='trek-name'></img></div>
        
        <div><p className='trek-desc'>{props.desc}</p>
        <p>Maximum Elevation : {props.elevation} above sea level</p>
        </div>
    
    
    </div>

)

}

export default Trekdeatils;