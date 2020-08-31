import React,{Component} from 'react';
import './todo-list-item.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export default class TodoListItem extends Component{
    // state = {
    //     done:false,
    //     important:false
    // }
    // onLabelClick = () => {
    //     this.setState(({done})=>{
    //         return{
    //             done: !done
    //         }
    //     })
    // }
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
        const {label,important,deadline,onToggleDone,onToggleImportant,done} = this.props;
        // const {done} = this.state;
        let classNames = 'todo-list-item ';
        if(done){
            classNames += 'done '
        }
        if(important){
            classNames += 'important ' 
        }
        const style = {
            color: important? '#3472CD': 'black',
            fontWeight: important? '700': '500'
        }
    return <span style = {style} 
                className={classNames} 
                onClick = {onToggleDone} 
                // onImportant = {this.importantItem}
                >
        <span className="todo-list-item-label">{label}</span>
        <span className="deadlineBtn"><FontAwesomeIcon icon={faClock} /></span>
        <span className="finish-time">{deadline}</span>

    </span>
    }
}