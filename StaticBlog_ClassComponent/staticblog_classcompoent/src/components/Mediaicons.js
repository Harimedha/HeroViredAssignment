import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

class Mediaicons extends React.Component{
    render(){

    return(

        <div style={{marginLeft:'35rem'}}>
        <p>Follow us on</p>
            <FontAwesomeIcon icon={faYoutube} size="2x" />
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            <FontAwesomeIcon icon={faInstagram} size="2x" />
        
        </div>

    )
}

}
export default Mediaicons;