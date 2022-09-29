import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import '../css/Main.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {

	return (

		<TodoProvider>
			<AppUI />
		</TodoProvider>

	);
}

export default App;
