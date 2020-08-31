import React from 'react'
import './todo-list-item-important.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'

const TodoListItemImportant = ({onImportant})=>{
    const style = {
        fontSize:'14px',
        padding: '2px 11px',
        marginLeft: '5px'
    }
    return <button 
        type="button" 
        style={style} 
        className="btn btn-outline-success"
        onClick = {onImportant}>
            <FontAwesomeIcon icon={faExclamation} /></button>
}

export default TodoListItemImportant;


