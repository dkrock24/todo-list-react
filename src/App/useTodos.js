import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import logo from '../images/fondo.jpeg';

function useTodos() {

    const [todoList, saveTodo, loading, error, sincronizationTodos] = useLocalStorage('TODOS_V1', []);

	const [searchValue, setSearchValue] = React.useState('');
	const [newItem, setNewItem] = React.useState('');

	const completedTodos = todoList.filter( todo => !!todo.completed ).length;
	const totalTodos = todoList.length;

	let searchedTodos = [];

	if (!searchValue.length >= 1) {
		searchedTodos = todoList;
	} else {
		searchedTodos = todoList.filter( todo => {
			const todoText = todo.text.toLowerCase();
			const searchText = searchValue.toLowerCase();
			return todoText.includes(searchText);
		})
	}

	const completeTodo = (text) => {
		const todoIndex = todoList.findIndex(todo => todo.text === text);
		const newTodoList = [...todoList];
		newTodoList[todoIndex].completed = true;
		saveTodo(newTodoList);
	}

	const deleteTodo = (text) => {
		const todoIndex = todoList.filter(todo => todo.text !== text);
		saveTodo(todoIndex);
	}

	const addTodo = () => {

		if (newItem.length >= 1) {

			const newTodo = {
				text : newItem,
				completed : false
			};

			const newTodoList = [...todoList];
			newTodoList.push(newTodo);
			setNewItem('');
			saveTodo(newTodoList);
		}
	}

    return (
       {
			loading,
    		error,
            totalTodos,
			completedTodos,
			searchValue,
			setSearchValue,
			searchedTodos,
			completeTodo,
			deleteTodo,
			addTodo,
			newItem,
			setNewItem,
			logo,
			sincronizationTodos
       }
    )
}

export { useTodos };