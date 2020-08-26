import React,{Component} from 'react';
import './todo-list-item.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export default class TodoListItem extends Component{
    state = {
        done:false,
        important:false
    }
    onLabelClick = () => {
        this.setState(({done})=>{
            return{
                done: !done
            }
        })
    }
    render(){
        const {label,important,deadline} = this.props;
        const {done} = this.state;
        let classNames = 'todo-list-item ';
        if(done){
            classNames += 'done '
        }
        const style = {
            color: important? '#3472CD': 'black',
            fontWeight: important? '700': '500'
        }
    return <span style = {style} className={classNames} onClick = {this.onLabelClick}>
        <span className="todo-list-item-label">{label}</span>
        <span className="deadlineBtn"><FontAwesomeIcon icon={faClock} /></span> <span className="finish-time">{deadline}</span>

    </span>
    }
}
// const TodoListItem = ({label,important = false,deadline})=>{
//     // const {label,important} = props
//     const style = {
//         color: important? '#3472CD': 'black',
//         fontWeight: important? '700': '500'
//     }
// return <span style = {style} className="todo-list-item">{label}<span className="deadlineBtn"><FontAwesomeIcon icon={faClock} /></span><span className="finish-time">{deadline}</span></span>
// }

// export default TodoListItem;