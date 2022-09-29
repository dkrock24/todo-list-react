import React from "react";
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';

function AppUI() {

    const {
        searchedTodos,
        completeTodo,
        deleteTodo
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>

		<div className="container-fluid " class='marco'>
			<div className="row">
				<div className="col-5 ">
					<div className='container create-section'>
						
						<div className="row">
							<div className="col-2 ">
							</div>
							<div className="col-8 ">
                            
                            <TodoContext.Consumer>
                                {
                                    ({
                                        newItem, 
                                        setNewItem, 
                                        addTodo,
                                        logo
                                    }) => (
                                            <div>
                                            <CreateTodoButton
                                                newItem = { newItem } 
                                                setNewItem = { setNewItem }
                                                addTodo = { () => addTodo('') }
                                            />
                                             <img src={logo} alt='' className='logo' />
                                            </div>
                                    )
                                }
                            </TodoContext.Consumer>
                           
							</div>
							<div className="col-2 ">
							</div>
						</div>

					</div>
				</div>
				<div className="col-7 ">
					<div className='container'>
						
						<div className="row">
							<div className="col-1 ">
							</div>
							<div className="col-10 ">
								<TodoCounter />

								<TodoSearch />							

							</div>
							<div className="col-1 ">
							</div>
						</div>
						<br/><br/><br/>
						<div className="row">
						
							<div className="col-3"></div>

							<div className="col-6 ">

                  
                                            <TodoList>
                                                {searchedTodos.map(todo => (
                                                    <TodoItem 
                                                        key={todo.text} 
                                                        text = {todo.text} 
                                                        completed = {todo.completed}
                                                        onComplete = { () => completeTodo(todo.text) }
                                                        onDelete = { () => deleteTodo(todo.text) }
                                                    />
                                                ))}
                                            </TodoList>
                                     

								
							</div>

							<div className="col-3"></div>

						</div>

					</div>
					
					

					

				</div>
			</div>
		</div>

		</React.Fragment>
    );
}

export { AppUI }