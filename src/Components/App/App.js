//import logo from './logo.svg';

import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import  SearchBar  from '../SearchBar/SearchBar';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { searchResults:[{id: 1, name:'Wicked Game', artist:'G-Eazy', album:'This things happends too'},
                                  {id:2, name:'Black Spiderman', artist:'Logic', album:'Everybody'},
                                  {id:3, name:'Enemy',artist:'Imagine Dragons', album:'League of Legends ARCANE theme song'}]}
  }

  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        {/*<!-- Add a SearchBar component -->8*/}
        <SearchBar />
        <div className="App-playlist">
          {/*<!-- Add a SearchResults component -->*/}
          <SearchResults searchResults={this.state.searchResults}/>
          {/*<!-- Add a Playlist component -->*/}
          <Playlist />
        </div>
      </div>
    </div>
      );
  }

}

export default App;
