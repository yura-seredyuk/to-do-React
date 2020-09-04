import React from 'react';
import TodoListItem from '../todo-list-item';
import TodoListItemRemove from '../todo-list-item-remove'
import TodoListItemImportant from '../todo-list-item-important'

import './todo-list.css';
const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant })=>{
    const elements = todos.map((item)=>{
        return(
            <li key={item.id} className="list-group-item">
                <TodoListItem {...item} 
                    onToggleDone = {()=>onToggleDone(item.id)}
                />
                <TodoListItemRemove 
                    onDelete = {()=> onDeleted(item.id)}
                />
                <TodoListItemImportant 
                    onToggleImportant = {()=>onToggleImportant(item.id)}
                />
            </li>
        )
    });
    return(
        <ul className = 'todo-list list-group'>
            {elements}
        </ul>
    )
}
export default TodoList;