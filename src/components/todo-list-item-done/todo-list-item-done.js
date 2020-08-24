import React from 'react'
import './todo-list-item-done.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'

const TodoListItemDone = ()=>{
    const style = {
        fontSize:'14px',
        padding: '2px 11px',
        marginLeft: '5px'
    }
    return <button type="button" style={style} className="btn btn-outline-success"><FontAwesomeIcon icon={faExclamation} /></button>
}

export default TodoListItemDone;


