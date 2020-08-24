import React from 'react';
import './todo-list-item.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const TodoListItem = ({label,important = false,deadline})=>{
    // const {label,important} = props
    const style = {
        color: important? '#3472CD': 'black',
        fontWeight: important? '700': '500'
    }
return <span style = {style} className="todo-list-item">{label}<span className="deadlineBtn"><FontAwesomeIcon icon={faClock} /></span><span className="finish-time">{deadline}</span></span>
}

export default TodoListItem;