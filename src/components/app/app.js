
import React, {Component} from 'react';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import AddItemPanel from '../add-item-panel';



import './app.css';

import 'font-awesome/css/font-awesome.min.css';


export default class App extends Component{
    state = {
        todolist:[
            {label:"Drink Coffee", important:false,id:1,deadline:"2020-09-15T13:00"},
            {label:"Build React App", important:true,id:2,deadline:"2020-09-15T13:00"},
            {label:"Drink Tea", important:false,id:3,deadline:"2020-09-15T13:00"}
        ]
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
    render(){
        return(
            <div className="Application">
                <AppHeader toDo = {1} done = {3}/>
                <div className="filter-block">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList todos = {this.state.todolist} onDeleted = {this.deleteItem}/>
                <AddItemPanel />
            </div>
        )
    }
} 
//     const todolist = [
//         {label:"Drink Coffee", important:false,id:1,deadline:"2020-09-15T13:00"},
//         {label:"Build React App", important:true,id:2,deadline:"2020-09-15T13:00"},
//         {label:"Drink Tea", important:false,id:3,deadline:"2020-09-15T13:00"}
//     ]
//     return(
//         <div className="Application">
//             <AppHeader toDo = {1} done = {3}/>
//             <div className="filter-block">
//                 <SearchPanel />
//                 <ItemStatusFilter />
//             </div>
//             <TodoList todos = {todolist} onDeleted = {(id) => console.log(`Deleted: ${id}`)}/>
//             <AddItemPanel />
//         </div>
//     )
// }

// export default App;