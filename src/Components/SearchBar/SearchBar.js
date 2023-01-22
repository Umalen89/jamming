import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = { term:''};

        this.handleTermChange = this.handleTermChange.bind(this);
        this.search = this.search.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleKeyUp(e) {
        if (e.keyCode === 13) {
          this.search();
        }
      }

    handleTermChange(e) {
        const newTerm = e.target.value;
        this.setState({ term: newTerm })
    }

    search(){
        const term = this.state.term;
        this.props.onSearch(term);
    }

    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" 
                       onChange={this.handleTermChange}
                       onKeyUp={this.handleKeyUp}/>
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
               );
    } 

}

export default SearchBar;