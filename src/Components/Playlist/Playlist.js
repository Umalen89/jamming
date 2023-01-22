import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
    constructor(props){
        super(props);

        this.changePlaylistName = this.changePlaylistName.bind(this);
    }

    changePlaylistName(e){
        let name = e.target.value;
        this.props.onNameChange(name);
    }


    render() {
        return (
            <div className="Playlist">
                <input id='inputField' defaultValue={'New Playlist'} onChange={this.changePlaylistName}/>
                <TrackList tracks={this.props.playlistTracks}
                           onRemove={this.props.onRemove}
                           isRemoval={true}/>
                <button className="Playlist-save"
                        onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default Playlist;