import React,{Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component{

    render(){
// const ItemStatusFilter =()=>{
        return(
            <div className="d-flex btn-group">
                {/* outline-primary */}
                <button type="button" className="btn btn-info">All</button> 
                <button type="button" className="btn btn-outline-secondary">Active</button>
                <button type="button" className="btn btn-outline-secondary">Done</button>
            </div>
        )
    }
}

// export default ItemStatusFilter;