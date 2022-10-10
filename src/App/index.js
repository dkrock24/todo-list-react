import React from 'react';
import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoHeader } from "../TodoHeader";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import '../css/Main.css';
import 'font-awesome/css/font-awesome.min.css';
import { ChangeAlertWithStorageListener } from '../ChangeAlert';

function App() {

	const {
		error,
		loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        totalTodos,
        completedTodos,
        searchValue, 
        setSearchValue,
		newItem,
		setNewItem,
		addTodo,
		logo,
		sincronizationTodos
    } = useTodos();

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
       
								<div>
									<CreateTodoButton
										newItem = { newItem } 
										setNewItem = { setNewItem }
										addTodo = { () => addTodo('') }
										logo = {logo}
									/>
									<img src={logo} alt='' className='logo' />
								</div>
                           
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

                                <TodoHeader loading={loading}>

								    <TodoCounter 
                                        totalTodos={totalTodos}
                                        completedTodos={completedTodos}
										//loading={loading}
                                    />

								    <TodoSearch 
                                        searchValue={searchValue}
                                        setSearchValue={setSearchValue}
										//loading={loading}
                                    />

                                </TodoHeader>

							</div>
							<div className="col-1 ">
							</div>
						</div>
						<br/><br/><br/>
						<div className="row">
						
							<div className="col-3"></div>

							<div className="col-6 ">

							<TodoList
								error={error}
								loading={loading}
								searchedTodos={searchedTodos}
								totalTodos={totalTodos}
								searchText={searchValue}
								onError={() => <TodosError />}
								onLoading={() => <TodosLoading />}
								onEmptyTodos={() => <EmptyTodos />}
								onEmptySearchResult = { 
									(searchText) => <p> No se encontraron coincidencias para { searchText}</p>
								}
								render={todo => (
									<TodoItem
										key={todo.text}
										text={todo.text}
										completed={todo.completed}
										onComplete={() => completeTodo(todo.text)}
										onDelete={() => deleteTodo(todo.text)}
									/>
								)}
							/>

                                     
							</div>

							<div className="col-3"></div>
						</div>
					</div>					
				</div>
			</div>
		</div>

		<ChangeAlertWithStorageListener
			sincronizationTodos={sincronizationTodos}
		/>

		</React.Fragment>
    );
}

export default App;
