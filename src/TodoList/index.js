import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function TodoList(props) {
    return (
        <ul className='listItems'>
            { props.children }
        </ul>
    );
}

export { TodoList };