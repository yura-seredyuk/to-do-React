import React from 'react';
import TodoListItem from '../todo-list-item';
import TodoListItemRemove from '../todo-list-item-remove'
import TodoListItemImportant from '../todo-list-item-important'

import './todo-list.css';
const TodoList = ({ todos, onDeleted, onImportant, onToggleDone, onToggleImportant })=>{
    const elements = todos.map((item)=>{
        return(
            <li key={item.id} className="list-group-item">
                <TodoListItem {...item} 
                    onImportant =  {()=>onImportant(item.id)} 
                    onToggleDone = {()=>onToggleDone(item.id)}
                    onToggleImportant = {()=>onToggleImportant(item.id)}
                />
                <TodoListItemRemove 
                    onDelete = {()=> onDeleted(item.id)}
                />
                <TodoListItemImportant />
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