import React from 'react';

function useLocalStorage(itemName, initialValue) {

	const [sincronization, setSincronization] = React.useState(true);
	const [error, setError] = React.useState(false);
  	const [loading, setLoading] = React.useState(true);
	const [item, setItem] = React.useState( initialValue );
	
	const localStorageItem = localStorage.getItem(itemName);
	let parsedItem;

	React.useEffect(() => {
		setTimeout(() => {
		  	try {
				const localStorageItem = localStorage.getItem(itemName);
				let parsedItem;

				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify([initialValue]));
					parsedItem = initialValue;
				} else {
					parsedItem = JSON.parse(localStorageItem);
				}

				setItem(parsedItem);
				setLoading(false);
				setSincronization(true);
			} catch(error) {
				setError(error);
			}
		}, 3000);
	}, [sincronization]);

	const saveItem = (newItem) => {
		try {
		localStorage.setItem(itemName, JSON.stringify(newItem));
		setItem(newItem);
		} catch(error) {
			setError(error);
		}
	}

	const sincronizationTodos = () => {
		setLoading(true);
		setSincronization(false);
	}

	return [
		item,
		saveItem,
		loading,
		error,
		sincronizationTodos,
	]

}

export { useLocalStorage };