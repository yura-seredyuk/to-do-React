import React from 'react';
import './add-item-panel.css';

const AddItemPanel = ()=>{
    const searchText = 'What needs to be done';
    const style = {
        fontSize: '16px'
    }
    const today = new Date().toISOString().substr(0, 16);
    return (
        <form className="add-block">
            <input 
                type = 'text'
                placeholder = {searchText}
                className = 'search form-control'
                style = {style}
            />
            <input
                type = 'datetime-local'
                className = 'date-input form-control'
                min = {today}
            />
            <button type="button" className="btn btn-outline-secondary">Add Item</button>
        </form>   
    )
}

export default AddItemPanel