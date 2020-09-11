import React,{Component} from 'react';
import './todo-list-item.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export default class TodoListItem extends Component{
    state = {
        cl:'green'
    }
    componentDidMount(){
        setInterval(() => {
            switch(true){
                case this.props.timer<=1:
                    this.setState({cl:'red'});
                    break; 
                case this.props.timer<=3:
                    this.setState({cl:'orange'});
                    break;
                default:
                    this.setState({cl:'green'});
            }
            // const style = {
            //     color: this.state.cl
            // }
        }, 1000);
            
    }
    render(){
        const {label,important,deadline,onToggleDone,done} = this.props;
        let classNames = 'todo-list-item ';
        if(done){
            classNames += 'done '
        }
        if(important){
            classNames += 'important ' 
        }        
        const style={
            color:this.cl
        }
    return <span  
                className={classNames} 
                onClick = {onToggleDone} 
                >
        <span className="todo-list-item-label">{label}</span>
        <span className="deadlineBtn" style={style}><FontAwesomeIcon icon={faClock} /></span>
        <span className="finish-time">{deadline}</span>
    </span>
    }
}