import YTSideMenuRow from './YTSIdeMenuRow';
import './YTSideMenuRow.css'

function YTSideMenu() {

const mainIcons = [
    {
        imagesrc: "/images/sidemenuicons/home.svg",
        title:'Home'
    },
    {
        imagesrc: "/images/sidemenuicons/ytshorts.svg",
        title:'Shorts'
    },
    {
        imagesrc: "/images/sidemenuicons/subscriptions.svg",
        title:'Subscriptions'
    }
]

const historyIcons = [
    {
        imagesrc: "/images/sidemenuicons/video-library.svg",
        title:'Library'
        },
        {
            imagesrc: 'images/sidemenuicons/history.svg',
            title:'History'
        },
        {
            imagesrc: 'images/sidemenuicons/watch-later.svg',
            title:'Watch Later'
        },
        {
            imagesrc: 'images/sidemenuicons/thumbs-up.svg',
            title:'Liked Videos'
        }

]
const subIcons=[
    {
    imagesrc: "/images/sidemenuicons/clapperboard.svg",
    title:'Love Forever Music'
    },
    {
        imagesrc: 'images/sidemenuicons/browse.svg',
        title:'Browse Channels'
    }

]
const explIcons = [
    {
        imagesrc: "/images/sidemenuicons/trend.svg",
        title:'Trending'
    },
    {
        imagesrc: "/images/sidemenuicons/music-note.svg",
        title:'Music'
    },
    {
        imagesrc: "/images/sidemenuicons/clapperboard.svg",
        title:'Movies'
    },
    {
        imagesrc: "/images/sidemenuicons/live-streaming.svg",
        title:'Live'
    },
    {
        imagesrc: "/images/sidemenuicons/newspaper.svg",
        title:'News'
    },
    {
        imagesrc: "/images/sidemenuicons/trophy.svg",
        title:'Sports'
    }
]
const miscIcons = [
    {
        imagesrc: "/images/sidemenuicons/setting.svg",
        title:'Settings'
    },
    {
        imagesrc:"/images/sidemenuicons/report-history.svg",
        title:'Report History'
    },
    {
        imagesrc: "/images/sidemenuicons/help.svg",
        title:'Help'
    },
    {
        imagesrc: "/images/sidemenuicons/feedback.svg",
        title:'Send Feedback'
    }
]
return(

    <div className='ytsidemenu-container'>
    <YTSideMenuRow title=""menuIcons={mainIcons}/>
    <hr className='hr-new'/>
    <YTSideMenuRow title="" menuIcons={historyIcons}/>
    <hr className='hr-new'/>
    <YTSideMenuRow title="Subcriptions" menuIcons={subIcons}/>
    <hr className='hr-new'/>
    <YTSideMenuRow title="Explore" menuIcons={explIcons}/>   
    <hr className='hr-new'/>
    <YTSideMenuRow title="" menuIcons={miscIcons}/>   
    </div>
)

}
export default YTSideMenu;