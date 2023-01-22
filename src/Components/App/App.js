//import logo from './logo.svg';

import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import  SearchBar  from '../SearchBar/SearchBar';
import Spotify from '../../util/Spotify';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { searchResults:[], 
                   playlistName: 'New Playlist',
                   playlistTracks: []};

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  search(term){
    Spotify.search(term).then(results => {
      console.log(results);
      this.setState({ searchResults:results });
    })
  }

  updatePlaylistName(name){
    this.setState({ playlistName:name });
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

  savePlaylist(){
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    const playlistName = this.state.playlistName; 

    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      window.alert('Playlist Created');
      this.setState({ playlistName: 'New Playlist',
                      playlistTracks: [] });
                      
      const playlistName = document.getElementById('inputField');
      playlistName.value = playlistName.defaultValue;
    })
  }

  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={this.search}/>
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults}
                         onAdd={this.addTrack}/>
          <Playlist playlistName={this.state.playlistName}
                    playlistTracks={this.state.playlistTracks}
                    onRemove={this.removeTrack}
                    onNameChange={this.updatePlaylistName}
                    onSave={this.savePlaylist}/>
        </div>
      </div>
    </div>
      );
  }

}

export default App;
