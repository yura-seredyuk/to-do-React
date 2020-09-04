import React, {Component} from 'react';
import './search-panel.css';

export default class SearchPanel extends Component{
    state = {
        term: ''
    }

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    }
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
                    value = {this.state.term}
                    onChange = {this.onSearchChange}
                />
        )    
    }
}