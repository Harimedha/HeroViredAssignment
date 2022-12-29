import React from 'react';
import './moviescarousel.css';


function MoviesCarousel({ moviegenre, movielist }) {

return (
    <>
    <h3 className='movie-genre'>{moviegenre}</h3>
    <div className='genre-container'>
        <div className='movies-container'>
            {movielist?.map((movieimg, index) =>
                <div id='movie-card' className='movie-card'>
                    <div className='movie'>
                        <img key={index}
                            src={movieimg.Poster}
                            alt="mov">
                        </img>
                        <h4 className='movie-title'>{movieimg.Title}</h4>
                    </div>
                </div>
            )}
        </div>
    </div>
    </>
)
}
export default MoviesCarousel;

