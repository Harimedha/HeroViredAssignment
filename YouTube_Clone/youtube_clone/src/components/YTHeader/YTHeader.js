import YTSideMenu from '../YTSideMenu/YTSideMenu';
import './YTHeader.css';
import { Link } from "react-router-dom";
import { useState } from 'react';

function YTHeader() {

    const [searchInput, setSeachInput] = useState("");

    return (

        <div style={{ position: 'sticky', top: '0', zIndex: '2' }}>
            <div className="ytheader-container">
                <div className="ytheader-container-left">
                    <img style={{ height: '15px' }} src="images/headericons/menu.png" alt="menu" />
                    <Link to="/">
                        <img style={{ height: '30px', width: '100px' }} src='../images/headericons/youtube.svg' alt="youtube"
                            onClick={() => setSeachInput("")} />
                    </Link>
                </div>


                <div className="ytheader-container-center">
                    <input type="text" placeholder='Search' value={searchInput}
                        onChange={(e) => setSeachInput(e.target.value)}></input>
                    <Link to={`/search/${searchInput}`}>
                        <div className='ytsearchicon'><img src='images/headericons/search.svg' alt='search' /></div>
                    </Link>
                    <img src='../images/headericons/microphone.png' alt="mic" />

                </div>

                <div className="ytheader-container-right">
                    <img src="images/headericons/videocreate.png" alt="video" />
                    <img src='images/headericons/notifications.png' alt="notification"></img>
                    <img className='ytprofile-avatar' src='images/headericons/avatar.svg' alt="avatar" />
                </div>
            </div>
            <YTSideMenu />
        </div>

    )

}
export default YTHeader;