import React, { Suspense, useEffect } from 'react';
import Gallery from './Gallery'
import Contact from './Contact'
import ImageList from './ImageList.js'
import { StateProvider } from '../state'
import '../styles/main.scss'
import { useTranslation } from 'react-i18next'

// loading component for suspense fallback
const Loader = () => (
	<div className="App">
		<div>loading...</div>
	</div>
);

function App() {

	const initialState = {
		modal: { 
			showModal: false
		},
		images: ImageList,
		index: null,
		lang: 'en'
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
			case 'updateLang':
				return {
					...state,
					lang: action.newLang
				}
			default:
				return state;
		}
	};

	return (
		<StateProvider initialState={initialState} reducer={reducer} >
			<Suspense fallback={<Loader />}>
				<div className="wrapper">
					<header className="header">
						header
					</header>
					<Gallery />
					<Contact />
					<footer className="footer">
						footer
					</footer>
				</div>
			</Suspense>
		</StateProvider>
	);
}

export default App;
