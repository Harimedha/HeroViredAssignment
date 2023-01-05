import React from 'react'
import YTVideoCard from '../YTVideoContainer/YTVideoCard'
import './YTSearchResult.css'

function YTSearchResult() {
  return (
    <div className='ytsearch-container'>
      
        <YTVideoCard
          channelImg='../images/Searchresults/channel_logo.jpg'
          timestamp='4 years ago'
          viewsCount='21M Views'
          channelName='Wincent Weiss'
          duration='3:34'
          title='Wincent Weiss - Hier mit dir'
          thumbnail='../images/Searchresults/searchresult1.jpg'
        />
         <YTVideoCard
          channelImg='../images/Searchresults/channel_logo.jpg'
          timestamp='4 years ago'
          viewsCount='38M Views'
          channelName='Wincent Weiss'
          duration='3:26'
          title='Wincent Weiss - An Wunder'
          thumbnail='../images/Searchresults/searchresult2.jpg'
        />
         <YTVideoCard
          channelImg='../images/Searchresults/channel_logo.jpg'
          timestamp='10 months ago'
          viewsCount='168K Views'
          channelName='Wincent Weiss'
          duration='2:53'
          title='Wincent Weiss - Morgen (Live bei der Giovanni Zarrella Show)'
          thumbnail='../images/Searchresults/searchresult3.jpg'
        />
         <YTVideoCard
          channelImg='../images/Searchresults/channel_logo.jpg'
          timestamp='1 year ago'
          viewsCount='13M Views'
          channelName='Wincent Weiss'
          duration='4:02'
          title='Wincent Weiss - Wer wenn nicht wir'
          thumbnail='../images/Searchresults/searchresult4.jpg'
        />
        
         
    </div>
  )
}

export default YTSearchResult