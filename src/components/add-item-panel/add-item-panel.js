import React, {Component} from 'react';
import './add-item-panel.css';


export default class AddItemPanel extends Component{
    state = {
        label:''
    }
    onLabelChange = (e) => {
        this.setState({
            label:e.target.value
        })
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label:''
        })
    }
    render(){
        const searchText = 'What needs to be done';
        const style = {
            fontSize: '16px'
        }
        const today = new Date().toISOString().substr(0, 16);
        
        return (
            <form className="add-block" onSubmit = {this.onSubmit}>
                <input 
                    type = 'text'
                    placeholder = {searchText}
                    className = 'search form-control'
                    style = {style}
                    onChange = {this.onLabelChange}
                    value = {this.state.label}
                />
                <input
                    type = 'datetime-local'
                    className = 'date-input form-control'
                    min = {today}
                />
                <button 
                    onClick={()=>this.props.onItemAdded}
                    className="btn btn-outline-secondary"
                >Add Item</button>
            </form>   
        )
    }
}