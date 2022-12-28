import React from "react";
import './TrekDetails.css';

class TrekDetails extends React.Component {

    constructor(props) {
        super(props);
    

    this.state = {
        title:this.props.title,
        trekImage: this.props.imgsrc,
        trekElevation: this.props.elevation,
        description:this.props.desc
    }
}
render(){
    return(
 
        <div className='trek-name' >
            <h2>{this.state.title}</h2>
            <div><img src={this.state.trekImage} className="trek-img" alt='trek-name'></img></div>
        
            <div><p className='trek-desc'>{this.state.description}</p>
            <p>Maximum Elevation : {this.state.trekElevation} above sea level</p>
            </div>
        </div>

    )
    }
}
export default TrekDetails;