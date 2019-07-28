import React from 'react';
import Gallery from './Gallery'
import '../styles/main.scss';
import { StateProvider } from '../state';
import ImageList from './ImageList.js'

function App() {
	const initialState = {
		modal: { 
			showModal: false
		},
		images: ImageList,
		index: null
	};
	const reducer = (state, action) => {
		switch (action.type) {
			case 'updateModal':
				return {
					...state,
					modal: action.newModal,
					index: action.newIndex
				};
			case 'updateIndex':
				return {
					...state,
					index: action.newIndex
				};
			default:
				return state;
		}
	};
	return (
		<StateProvider initialState={initialState} reducer={reducer}>
			<div className="wrapper">
				<header className="header">
					header
      			</header>
				<Gallery />
				<contact className="contact">
					contact
				</contact>
				<footer className="footer">
					footer
	  			</footer>
			</div>
		</StateProvider>

		
	);
}

export default App;
