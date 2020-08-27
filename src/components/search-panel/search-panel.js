import React, {Component} from 'react';
import './search-panel.css';

export default class SearchPanel extends Component{
    render(){
        const searchText = 'type to search';
        const style = {
            fontSize: '16px'
        }
        return (
                <input 
                    type = "text"
                    placeholder = {searchText}
                    className = 'search form-control'
                    style = {style}
                />
        )    
    }
}