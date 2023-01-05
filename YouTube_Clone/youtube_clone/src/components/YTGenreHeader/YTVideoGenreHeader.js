import React from 'react'
import './YTVideoGenreHeader.css'

function YTVideoGenreHeader() {
   
    const Genres = ["All", "Mixes", "Music", "Onedirection", "Computer Programming", "Live", "Playlists", "Chill-out music", "AI", "Love songs", "Gaming", "Motivation"]

    return (
       
            <div className='ytgenres'>
                <div style={{position:'absolute'}}>
                {Genres?.map((genre, idx) => (
                    genre === "All" ?
                        (<label key={idx} className="ytgenre active">
                            {genre}
                        </label>) :
                        <label key={idx} className="ytgenre">
                            {genre}
                        </label>
                ))}  
                </div>
                <div className='ytright-arrow'>                              
            <img src="/images/sidemenuicons/next.svg" alt="right_arow" />
            </div>
        </div>          
    )
}

export default YTVideoGenreHeader