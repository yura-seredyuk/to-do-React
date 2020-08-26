import React from 'react'
import './todo-list-item-remove.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const TodoListItemRemove = ({onDelete})=>{
    const style = {
        fontSize:'14px',
        padding: '2px 7px'
    }
    return <button 
        type="button" 
        style={style} 
        className="btn btn-outline-danger"
        onClick = {onDelete}
        ><FontAwesomeIcon icon={faTrashAlt} /></button>
}

export default TodoListItemRemove;


