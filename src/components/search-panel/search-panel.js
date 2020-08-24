import React from 'react';
import './search-panel.css';

const SearchPanel = ()=>{
    const searchText = 'type to search';
    const style = {
        fontSize: '16px'
    }
    return (
            <input 
                type = "text"
                placeholder = {searchText}
                className = 'search form-control' // class
                style = {style}
            />
    )
}

export default SearchPanel