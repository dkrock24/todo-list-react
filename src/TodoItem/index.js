import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function TodoItem(props) {

    return (
        <li className='listItems'>
            
            <span className={`btn btn-primary button-align ${ props.completed } fa fa-check`} onClick={props.onComplete}> </span>  &nbsp; 
            <span className='btn btn-warning button-align fa fa-trash' onClick={props.onDelete}>  </span>
            <p>{ props.text} </p>

        </li>
    );
}

export { TodoItem };