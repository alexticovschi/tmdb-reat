import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import Loader from '../Loader/Loader';

const MovieList = ({ movieList, getMovieById }) => {
    const base_url = 'https://image.tmdb.org/t/p/w342';
    const not_available_poster = "https://dummyimage.com/342x500/7b8a91/ffffff&text=Poster+Not+Available";
    const movie_list = movieList && movieList.map((movie,idx) => (
        <MovieItem 
            key={idx}
            id={movie.id}
            getMovieById={getMovieById}
            title={movie.title}
            poster={ movie.poster_path === null ? not_available_poster : base_url + movie.poster_path }
        />
    ));
    return (
        <div>
            <div className="container">
                <main className="main-content">
                    {movie_list}            
                </main>
            </div>

            <Loader/>
        </div>
    );
}

export default MovieList;