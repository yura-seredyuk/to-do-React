import React, {Component} from 'react';
import './add-item-panel.css';


export default class AddItemPanel extends Component{
    state = {
        label:'',
        date:new Date().toISOString().substr(0, 16)
    }
    onLabelChange = (e) => {
        this.setState({
            label:e.target.value
        })
    }
    onDateChange = (e) => {
        this.setState({
            date: e.target.value
        })
    } 
    onSubmit = (e) =>{
        e.preventDefault();
        if (this.state.label) this.props.onItemAdded(this.state.label,this.state.date);
        this.setState({
            label:'',
            date:new Date().toISOString().substr(0, 16)
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
                    onChange = {this.onDateChange}
                    value = {this.state.date}
                />
                <button 
                    onClick={()=>this.props.onItemAdded}
                    className="btn btn-outline-secondary"
                >Add Item</button>
            </form>   
        )
    }
}