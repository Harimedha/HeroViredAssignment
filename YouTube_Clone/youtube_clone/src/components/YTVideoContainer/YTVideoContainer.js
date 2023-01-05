
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
              thumbnail='/images/Thumbnails/playlist.jpg'
              playlist='images/sidemenuicons/live-streaming.svg'
            />   
            {/* {YTVideoList.map((ytvideoObj,idx) =>
              <YTVideoCard props={ytvideoObj}/>
            )}  */}
        <YTVideoCard
          channelImg='/images/Thumbnails/channel_logo_v1.jpg'
          timestamp='4 weeks ago'
          viewsCount='66K Views'
          channelName='Juan Carlos Fontecha'
          duration='8:15'
          title='A Day in the Life of a Software Engineer | Microsoft Inside Look'
          thumbnail='/images/Thumbnails/channel_image_v1.jpg'
        />
         <YTVideoCard
          channelImg='/images/Thumbnails/channel_logo_v2.jpg'
          timestamp='3 years ago'
          viewsCount='64K Views'
          channelName='Nomadic Ambience'
          duration='20:03'
          title='Shopping Mall Ambience Sound Effects Noises'
          thumbnail='/images/Thumbnails/channel_image_v2.jpg'
        />
         <YTVideoCard
          channelImg='/images/Thumbnails/channel_logo_v3.jpg'
          timestamp='4 months ago'
          viewsCount='1.7M Views'
          channelName='Aceink - Smart Theory'
          duration='14:54'
          title='How FAILURE is KILLING Dabbawala?'
          thumbnail='/images/Thumbnails/channel_image_v3.jpg'
		 />
		<YTVideoCard
         channelImg='/images/Thumbnails/channel_logo_v4.jpg'
         timestamp='2 years ago'
         viewsCount='2.7M Views'
         channelName='freeCodeCamp.org'
         duration='5:55:46'
         channelTitle='Python Tutorials'
         title='Intermediate Python Programming Course'
         thumbnail='/images/Thumbnails/channel_image_v4.jpg'/>

         <YTVideoCard
         channelImg='/images/Thumbnails/channel_logo_v5.jpg'
         timestamp='10 days ago'
         viewsCount='80 Views'
         channelName='saint r4ge'
         duration='26:19'
         channelTitle=""
         title='Cold AF Happy Chill Mix | Ft. EverMoist w/ Gunther'
         thumbnail='/images/Thumbnails/channel_image_v5.jpg'/>

        <YTVideoCard
        channelImg='/images/Thumbnails/channel_logo_v6.jpg'
        timestamp='1 year ago'
        viewsCount='4.5M Views'
        channelName='Love Music Forever'
        duration='55:00'
        channelTitle=""
        title='Top Hits 2021 | Chill Songs | At My Worst x Monsters x Beautiful Scars 💕'
        thumbnail='/images/Thumbnails/channel_image_v6.jpg'
        />
        <YTVideoCard
        channelImg='/images/Thumbnails/channel_logo_v7.jpg'
        timestamp='5 days ago'
        viewsCount='236K Views'
        channelName='TV Promos'
        duration='4:06'
        channelTitle=""
        title='Young Sheldon 6x09 All Sneak Peeks "College Dropouts and the Medford Miracle" (HD)'
        thumbnail='/images/Thumbnails/channel_image_v7.jpg'
        />
        </div>
    )
}

export default YTVideoContainer;
