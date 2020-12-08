import React, {useState} from 'react';
import Card from './Card';

function SearchMovies() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=433fe0ba0af42c53400a9a1633c2f0fb&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data.results);
            setMovies(data.results);
        }catch(err) {
        console.error(err);
        }
    }
    return (
        <div>
            <form className="form" onSubmit={searchMovies}>
                <label htmlFor="query" className="label">Movie Title</label>

                <input className="input" 
                type="text" name="query" 
                placeholder="Search..." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}/>

                <button className="button" type="submit">Submit</button>
            </form>

            <Card movies={movies}/>

            {/* <div className="card-list" >
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card" key={movie.id}>
                        <img className="card--image"
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.original_title}/>

                        <div className="card--content">
                        <h3 className="card--title">{movie.original_title}</h3>
                        <Favorite name={movie.original_title}/> 
                    </div>
                    </div>
                ))}
            
            </div> */}
        </div>
    )

}
export default SearchMovies
