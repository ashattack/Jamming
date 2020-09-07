import React, { Component } from 'react';
import './SearchResults.css';
import Tracklist from '../Tracklist/Tracklist';


class SearchResults extends Component.React{
    render() {
        return (
            <div className="SearchResults">
  <h2>Results</h2>
  <Tracklist />
</div>
        )
    }
}

export default SearchResults;