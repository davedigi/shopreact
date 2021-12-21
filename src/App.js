import React, { useState } from 'react';
import './App.css';
import List from './component/list/List';
import Navbar from './component/navbar/Navbar';
import { isActive } from './component/actions/Favourite';

function App() {

	let persistent = window.localStorage.getItem('projects_favourite')
	if (!persistent) {
		persistent = []
	} else {
		persistent = JSON.parse(persistent)
	}
	console.log('persistent:', persistent)
	const [favouriteFlyers, setFavouritedFlyers] = useState(persistent);

	const modifyChoices = (flyer, action) => {
		const newFavouriteFlyers = [...favouriteFlyers];

		switch (action) {
			case 'ADD_TO_FAVOURITE_FLYERS':
				console.log('ATTEMPT TO ADD_TO_FAVOURITE_FLYERS :', flyer)
				if (!isActive(flyer, newFavouriteFlyers)) {
					newFavouriteFlyers.push(flyer);
					setFavouritedFlyers(newFavouriteFlyers);
					console.log('ADD_TO_FAVOURITE_FLYERS :', flyer)
				} else {
					console.log('FAILED TO ADD_TO_FAVOURITE_FLYERS: it is present')
				}

				break;
			case 'REMOVE_FAVOURITE_FLYERS':
				console.log('ATTEMPT TO REMOVE_FAVOURITE_FLYERS :', flyer)
				if (isActive(flyer, persistent)) {
					let idxToRemove = newFavouriteFlyers.findIndex(item => item.id === flyer.id)
					newFavouriteFlyers.splice(idxToRemove, 1)
					setFavouritedFlyers(newFavouriteFlyers);
					console.log('REMOVE_FAVOURITE_FLYERS :', idxToRemove)
				} else {
					console.log('FAILED TO REMOVE_FAVOURITE_FLYERS: it is NOT present')
				}
				break;
			default:
				return {};
		}
		try {
			window.localStorage.setItem('projects_favourite', JSON.stringify(newFavouriteFlyers))
		} catch (error) {
			console.error('ERROR window.localStorage.setItem(projects_favourite)', error)
		}
	};

	return (
		<>
			<Navbar />
			<List modifyChoices={modifyChoices} />
		</>
	);
}

export default App;
