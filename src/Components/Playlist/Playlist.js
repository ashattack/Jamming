import React, { Component } from 'react';
import './Playlist.css';

class Playlist extends Component.React {
    render() {
        return (
    <div className="Playlist">
  <input defaultValue={'New Playlist'}/>
  <Tracklist />
  <button className="Playlist-save">SAVE TO SPOTIFY</button>
</div>
        )
}
}

export default Playlist;