import YTSideMenu from '../YTSideMenu/YTSideMenu';
import './YTHeader.css'
function YTHeader() {

    return (

        <div style={{position:'sticky',top:'0', zIndex:'2'}}>
            <div className="ytheader-container">
                <div className="ytheader-container-left">
                    <img style={{ height: '15px' }} src="images/headericons/menu.png" alt="menu" />
                    <img style={{ height: '30px', width: '100px' }} src='images/headericons/youtube.svg' alt="youtube" />

                </div>


                <div className="ytheader-container-center">

                    <input type="text"></input>
                    <button><img src='images/headericons/search.svg' alt='search' /></button>
                    <img src='images/headericons/microphone.png' alt="mic" />

                </div>

                <div className="ytheader-container-right">
                    <img src="images/headericons/videocreate.png" alt="video" />
                    <img src='images/headericons/notifications.png' alt="notification"></img>
                    <img className='ytprofile-avatar' src='images/headericons/avatar.svg' alt="avatar" />
                </div>
            </div>
            <YTSideMenu/>
        </div>

    )

}
export default YTHeader;