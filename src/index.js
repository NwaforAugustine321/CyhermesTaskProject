import React from 'react'
import ReactDom from 'react-dom'
import { Main } from './main'
import './style.css';


let App = () => {
    return (
        <React.Fragment>
         <Main />
       
        </React.Fragment>
    )
}


ReactDom.render(<App/>, document.querySelector("#root"))