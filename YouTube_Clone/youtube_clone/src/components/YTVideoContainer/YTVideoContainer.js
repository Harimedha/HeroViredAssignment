
import React from 'react';
import './YTVideoContainer.css';
import './YTVideoCard.css'
import YTVideoCard from './YTVideoCard';
import YTVideoGenreHeader from '../YTGenreHeader/YTVideoGenreHeader';
import YTPlaylistCard from './YTPlaylistCard';
// import YTVideoList from '../YTVideoContainer/assets/VideoList.json'

// import YTVideoGenreHeader from './YTGenreHeader/YTVideoGenreHeader';
// import Youtube from './Youtube';

function YTVideoContainer() {

    // const API_key = "AIzaSyD85B79rIfta4EC-NX82wy-vujS70U3SqY"    

    return (
        <div className='ytvideo-container'>
           <YTVideoGenreHeader/>
           <YTPlaylistCard
              title='Mix - Wincent Weiss Hier Mit Dir'
              desc='Wincent Weiss Mark Forester Max Geisinger and more'
              thumbnail='http://img.youtube.com/vi/FPfryMEiENc/mqdefault.jpg'
              playlist='images/sidemenuicons/live-streaming.svg'
            />   
            {/* {YTVideoList.map((ytvideoObj,idx) =>
              <YTVideoCard props={ytvideoObj}/>
            )}  */}
        <YTVideoCard
          channelImg='https://yt3.ggpht.com/xFtBd1sqqzi5uPqlSppIxHnqLxEHMrLQkAhX51k29NL_pMXrO5K4MrOKmv9HI6yFduJVaztBTw=s88-c-k-c0x00ffffff-no-rj'
          timestamp='4 weeks ago'
          viewsCount='66K Views'
          channelName='Juan Carlos Fontecha'
          duration='8:15'
          title='A Day in the Life of a Software Engineer | Microsoft Inside Look'
          thumbnail='http://img.youtube.com/vi/LGDughLj1Oo/mqdefault.jpg'
        />
         <YTVideoCard
          channelImg='https://yt3.ggpht.com/ytc/AMLnZu914lhpMbbze5xNfGSUoxCCTqnvtpLLllJZgNNC8Q=s48-c-k-c0x00ffffff-no-rj'
          timestamp='3 years ago'
          viewsCount='64K Views'
          channelName='Nomadic Ambience'
          duration='20:03'
          title='Shopping Mall Ambience Sound Effects Noises'
          thumbnail='http://img.youtube.com/vi/H3GL5jO53NU/mqdefault.jpg'
        />
         <YTVideoCard
          channelImg='https://yt3.ggpht.com/uBTb5eqbx59OUvBgVz-lPLhfXUtnHBr5oJW01U_KlSq4SBJtsOrG_rKQCaTEJPhmM4ePI5X_GA=s48-c-k-c0x00ffffff-no-rj'
          timestamp='4 months ago'
          viewsCount='1.7M Views'
          channelName='Aceink - Smart Theory'
          duration='14:54'
          title='How FAILURE is KILLING Dabbawala?'
          thumbnail='http://img.youtube.com/vi/mihj9jzIN2g/mqdefault.jpg'
		 />
		<YTVideoCard
         channelImg='https://yt3.ggpht.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s48-c-k-c0x00ffffff-no-rj'
         timestamp='2 years ago'
         viewsCount='2.7M Views'
         channelName='freeCodeCamp.org'
         duration='5:55:46'
         channelTitle='Python Tutorials'
         title='Intermediate Python Programming Course'
         thumbnail='http://img.youtube.com/vi/HGOBQPFzWKo/mqdefault.jpg'/>

         <YTVideoCard
         channelImg='	https://yt3.ggpht.com/ytc/AMLnZu9EpXIt5Mva9C-tmV00n6c3e5MS-p3dTStu4bI3=s88-c-k-c0x00ffffff-no-rj'
         timestamp='10 days ago'
         viewsCount='80 Views'
         channelName='saint r4ge'
         duration='26:19'
         channelTitle=""
         title='Cold AF Happy Chill Mix | Ft. EverMoist w/ Gunther'
         thumbnail='http://img.youtube.com/vi/ozebgmwY8-4/mqdefault.jpg'/>

        <YTVideoCard
        channelImg='https://yt3.ggpht.com/ytc/AMLnZu_vQQNV-1kCUqj1RTy8459aEnVOjtq7x1CVq06i=s88-c-k-c0x00ffffff-no-rj'
        timestamp='1 year ago'
        viewsCount='4.5M Views'
        channelName='Love Music Forever'
        duration='55:00'
        channelTitle=""
        title='Top Hits 2021 | Chill Songs | At My Worst x Monsters x Beautiful Scars 💕'
        thumbnail='http://img.youtube.com/vi/fPCk28a0DSc/mqdefault.jpg'
        />
        <YTVideoCard
        channelImg='https://yt3.ggpht.com/ytc/AMLnZu8j_kgsHlAlSpor-jIA-FrQCg2ixWqvqTAofoHf=s88-c-k-c0x00ffffff-no-rj'
        timestamp='5 days ago'
        viewsCount='236K Views'
        channelName='TV Promos'
        duration='4:06'
        channelTitle=""
        title='Young Sheldon 6x09 All Sneak Peeks "College Dropouts and the Medford Miracle" (HD)'
        thumbnail='http://img.youtube.com/vi/6xpnzHv3lrk/mqdefault.jpg'
        />
        </div>
    )
}

export default YTVideoContainer;
