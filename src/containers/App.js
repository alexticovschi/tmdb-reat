import React, { Component } from 'react';
import SearchBox from '../components/SearchBox/SearchBox';

import './App.css';


class App extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = async () => {
    const APIKEY = '9baa3cbfd9b62ea4f97966abadf41653';
    const resp = await fetch(`https://api.themoviedb.org/3/search/movie?query=marvel&api_key=${APIKEY}`);

    const movies = await resp.json();
    
    this.setState({ movies: movies.results });
    console.log({movies})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBox/>
        </header>
      </div>
    );
  }
}

export default App;