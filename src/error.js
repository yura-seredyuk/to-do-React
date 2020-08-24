import React from 'react';
import ReactDOM from 'react-dom';

const LoginBox = ()=>{
    return <span className = "login">Login box</span>
}
const App = ()=>{
    return(
        <div className="container">
            <div> Header </div>
            <LoginBox /> 
        </div>
    )
}
ReactDOM.render(<App/>,document.querySelector('body'))