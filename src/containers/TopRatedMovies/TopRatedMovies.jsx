import React, { Component } from 'react';
import MovieList from "../../components/MovieList/MovieList";
import Loader from '../../components/Loader/Loader';
import MoviesNavigationButtons from '../../components/MoviesNavigationButtons/MoviesNavigationButtons';
import SearchBoxWithSuggestions from "../../components/SearchBoxWithSuggestions/SearchBoxWithSuggestions";

class TopRatedMovies extends Component {
    state = {
        topRatedMovies: []
    }

    componentDidMount() {
        this.getTopRatedMovies();
    }

    getTopRatedMovies = async () => {
        const APIKEY = "9baa3cbfd9b62ea4f97966abadf41653";
        const resp = await fetch(`https://api.themoviedb.org/3/movie/top_rated?&api_key=${APIKEY}&language=en-US&page=1`);
        const topRatedMovies = await resp.json();
        this.setState({ topRatedMovies: topRatedMovies.results });
    }

    render() {
        const { topRatedMovies } = this.state;

        return (
            <div>
                <div className="container movie-type"> 
                    <SearchBoxWithSuggestions/>

                    <MoviesNavigationButtons/>
                            
                    <hr className="separator"/>

                    <h1 style={{textAlign:"center"}}>Top Rated</h1>
                    <MovieList
                        movieList={topRatedMovies}
                    />
                </div>
                
                <Loader/>
            </div>
        )
    }
}

export default TopRatedMovies;