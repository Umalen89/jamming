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
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  search(term){
    console.log(term);
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
    const trackURIs = this.state.playlistTracks;
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
