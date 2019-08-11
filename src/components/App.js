import React, { Suspense } from 'react';
import Gallery from './Gallery/Gallery'
import Contact from './Info/Contact'
import ImageList from './Gallery/ImageList.js'
import Mapa from './Footer/Map'
import { StateProvider } from '../state'
import '../styles/main.scss'
import LangSwitcher from './Header/LangSwitcher'

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
					<LangSwitcher />
					<Gallery scrollPosition={[0,0]}/>
					<Contact />
					<footer className="footer">
						<Mapa />
					</footer>
				</div>
			</Suspense>
		</StateProvider>
	);
}

export default App;
