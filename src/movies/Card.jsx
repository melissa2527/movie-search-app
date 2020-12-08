import React from 'react';
import Favorite from './Favorite';

function Card({movies}) {
    return (
            <div className="card-list" >
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card" key={movie.id}>
                        <img className="card--image"
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.original_title}/>

                        <div className="card--content">
                        <h4 className="card--title">{movie.original_title}</h4>
                        <Favorite name={movie.original_title}/> 
                    </div>
                    </div>
                ))}
            
            </div>
    )
}

export default Card
