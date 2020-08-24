import React from 'react';
import './app-header.css'

const AppHeader = ({toDo,done})=>{
    return (
        <div className="appHeader">
            <h1>My Todo List</h1>
            <span className="counter">{toDo} more to do, {done} done</span>
        </div>
    
    )
}

export default AppHeader