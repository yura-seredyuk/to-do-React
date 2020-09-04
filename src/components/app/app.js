
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
        ],
        term:'',
        filter:'all'
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
    onSearchChange = (term) => {
        this.setState({term});
    }
    onFilterChange = (filter) => {
        this.setState({filter});
    }

    search(items,term){
        if(term.length === 0){
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }
    filter(items, filter){
        switch(filter){
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }
    render(){
        const {todolist, term, filter} = this.state;

        const visibleItems = this.filter(this.search(todolist,term),filter)
        const doneCount = todolist.filter((item) => item.done).length;
        const todoCount = todolist.length - doneCount;
        return(
            <div className="Application">
                <AppHeader toDo = {todoCount} done = {doneCount}/>
                <div className="filter-block">
                    <SearchPanel onSearchChange = {this.onSearchChange}/>
                    <ItemStatusFilter 
                        filter = {filter}
                        onFilterChange = {this.onFilterChange}
                    />
                </div>
                <TodoList todos = {visibleItems} 
                        onDeleted = {this.deleteItem} 
                        onToggleDone = {this.onToggleDone}
                        onToggleImportant = {this.onToggleImportant}
                        />
                <AddItemPanel onItemAdded = {this.addItem}/>
            </div>
        )
    }
}