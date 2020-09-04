import React,{Component} from 'react';
import './todo-list-item.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export default class TodoListItem extends Component{
    render(){
        const {label,important,deadline,onToggleDone,done} = this.props;
        let classNames = 'todo-list-item ';
        if(done){
            classNames += 'done '
        }
        if(important){
            classNames += 'important ' 
        }
    return <span  
                className={classNames} 
                onClick = {onToggleDone} 
                >
        <span className="todo-list-item-label">{label}</span>
        <span className="deadlineBtn"><FontAwesomeIcon icon={faClock} /></span>
        <span className="finish-time">{deadline}</span>
    </span>
    }
}