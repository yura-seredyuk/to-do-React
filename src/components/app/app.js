
import React, {Component} from 'react';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import AddItemPanel from '../add-item-panel';



import './app.css';

import 'font-awesome/css/font-awesome.min.css';


export default class App extends Component{
    maxId = 1;
    state = {
        todolist:[
            this.createTodoItem('Drink Coffee','2020-09-15T13:00'),
            this.createTodoItem('Build React App','2020-09-15T13:00'),
            this.createTodoItem('Drink Tea','2020-09-15T13:00')
        ]
    }
    createTodoItem(label,deadline){
        return{
            label,
            important:false,
            id:this.maxId++,
            deadline
        }
    }
    deleteItem = (id) => {
        this.setState(({todolist}) => {
            const idx = todolist.findIndex((el) => el.id === id);
            console.log(idx)
            const left = todolist.slice(0,idx);
            const right = todolist.slice(idx+1);
            const newArray = [...left,...right];
            return {
                todolist:newArray
            }
        })
    }
    addItem = (text) =>{
        //generate id
        const newItem = this.createTodoItem(text,'2020-09-15T13:00') 
         // new Array
        this.setState(({ todolist }) =>{
            const newArray = [
                ...todolist,
                newItem
            ];
            return {
                todolist : newArray
            }
        });
    }
    onToggleDone = (id) => {
        this.setState(({ todolist }) => {
            const idx = todolist.findIndex((el) => el.id === id);
            const oldItem = todolist[idx];
            const newItem = {...oldItem,done:!oldItem.done};
            const newArray = [...todolist.slice(0,idx),newItem,...todolist.slice(idx+1)];
            return{
                todolist : newArray
            }
        })
    }
    onToggleImportant = (id) => {
        this.setState(({ todolist }) => {
            const idx = todolist.findIndex((el) => el.id === id);
            const oldItem = todolist[idx];
            const newItem = {...oldItem,important:!oldItem.important};
            const newArray = [...todolist.slice(0,idx),newItem,...todolist.slice(idx+1)];
            return{
                todolist : newArray
            }
        })
    }
    // importantItem = (id) =>{
    //     this.setState(({todolist}) => {
    //         todolist.forEach(el => {if(el.id === id){
    //             el.important = !el.important;
    //             console.log(el)
    //             }
    //         })
    //     })
    // }
    render(){
        const doneCount = this.state.todolist.filter((item) => item.done).length;
        const todoCount = this.state.todolist.length - doneCount;
        return(
            <div className="Application">
                <AppHeader toDo = {todoCount} done = {doneCount}/>
                <div className="filter-block">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList todos = {this.state.todolist} 
                        onDeleted = {this.deleteItem} 
                        onToggleDone = {this.onToggleDone}
                        onToggleImportant = {this.onToggleImportant}
                        // onImportant = {this.importantItem}
                        />
                <AddItemPanel onItemAdded = {this.addItem}/>
            </div>
        )
    }
}