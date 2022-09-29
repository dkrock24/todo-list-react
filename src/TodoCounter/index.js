import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

const estilo = {
    color: 'white',
    backgroundColor: 'grey'
}

function TodoCounter( ) {
    
    const {
        totalTodos,
        completedTodos
    } = React.useContext(TodoContext);

    return (
        <div className="container-fluid fondo">
            <div className="row">
			    <div className="col-12">
                    <h1 style={estilo} className="TodoCounter">Your Tasks</h1>
                </div>
            </div>
             <div className="row">
			    <div className="col-12">
                    <h2 className="TodoCounter">Completed {completedTodos} to {totalTodos}</h2>
                </div>
            </div>
        </div>
        
    );
}

export { TodoCounter };