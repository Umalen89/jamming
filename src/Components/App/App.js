//import logo from './logo.svg';

import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist ';
import  SearchBar  from '../SearchBar/SearchBar';
import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        {/*<!-- Add a SearchBar component -->8*/}
        <SearchBar />
        <div className="App-playlist">
          {/*<!-- Add a SearchResults component -->*/}
          <SearchResults />
          {/*<!-- Add a Playlist component -->*/}
          <Playlist />
        </div>
      </div>
    </div>
      );
  }

}

export default App;
