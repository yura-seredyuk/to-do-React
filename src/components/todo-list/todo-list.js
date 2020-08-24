import React from 'react';
import TodoListItem from '../todo-list-item';
import TodoListItemRemove from '../todo-list-item-remove'
import TodoListItemDone from '../todo-list-item-done'

import './todo-list.css';
const TodoList = ({ todos })=>{
    const elements = todos.map((item)=>{
        return(
            <li key={item.id} className="list-group-item">
                <TodoListItem {...item}/>
                <TodoListItemRemove />
                <TodoListItemDone />
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