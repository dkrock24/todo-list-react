import React from 'react';
import './CreateTodobutton.css';
import 'bootstrap/dist/css/bootstrap.css';

function CreateTodoButton( props) {

    const onChange = (event) => {
        props.setNewItem(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            props.addTodo()
            event.target.value = '';
        }
    }

    return (
        <div className="container-fluid" >
             <div className="row">
			    <div className="col-12">
                    <h2>Create New Task</h2>
                </div>
            </div>
            <div className="row">
			    <div className="col-12">
                <br />
                    <h5>Task Name</h5>
                </div>
                <div className="col-12">
                    <input type="text" name="task_name" value = {props.newItem} className='form-control' placeholder='Write the name here..'
                        onChange = {onChange} 
                        onKeyDown={ handleKeyDown }
                        />
                    
                </div>
            </div>
           
		    <div className="row">
			    <div className="col-5 ">
                    <br />
                    <button className='createTodoButton btn btn-success' onClick={props.addTodo} >Create Todo +</button>
                </div>
            </div>
        </div>
        
    );
}

export { CreateTodoButton };