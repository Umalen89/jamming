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
                                  {id:3, name:'Enemy',artist:'Imagine Dragons', album:'League of Legends ARCANE theme song'}], 
                   playlistName: 'The List',
                   playlistTracks: []};

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    let myList = this.state.playlistTracks;

    if(myList.find(trackToSave => trackToSave.id === track.id)){
      return;
    }

    myList.push(track);
    this.setState({ playlistTracks:myList });  
  }

  removeTrack(track) {
    let myList = this.state.playlistTracks;

    myList = myList.filter(targetTrack => targetTrack.id !== track.id);

    this.setState({ playlistTracks:myList });
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
          <SearchResults searchResults={this.state.searchResults}
                         onAdd={this.addTrack}/>
          {/*<!-- Add a Playlist component -->*/}
          <Playlist playlistName={this.state.playlistName}
                    playlistTracks={this.state.playlistTracks}
                    onRemove={this.removeTrack}/>
        </div>
      </div>
    </div>
      );
  }

}

export default App;
