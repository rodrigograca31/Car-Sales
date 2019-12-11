import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { combineReducers, createStore } from "redux";
import {
	additionalPriceReducer,
	carReducer,
	additionalFeaturesReducer
} from "./state/reducers";
import { Provider } from "react-redux";

const App = () => {
	// STEP 1: Decide state slices
	const state = {
		additionalPrice: 0,
		car: {
			price: 26395,
			name: "2019 Ford Mustang",
			image:
				"https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
			features: []
		},
		additionalFeatures: [
			{ id: 1, name: "V-6 engine", price: 1500 },
			{ id: 2, name: "Racing detail package", price: 1500 },
			{ id: 3, name: "Premium sound system", price: 500 },
			{ id: 4, name: "Rear spoiler", price: 250 },
			{ id: 5, name: "Bullet proof glass", price: 1 }
		]
	};

	const removeFeature = item => {
		// dispatch an action here to remove an item
	};

	const buyItem = item => {
		// dipsatch an action here to add an item
	};

	// Step 4: Use "combineReducers" to make a monster reducer
	const monsterReducer = combineReducers({
		additionalPrice: additionalPriceReducer,
		car: carReducer,
		additionalFeatures: additionalFeaturesReducer
	});

	// Step 5: use "createStore" to make a redux store

	const store = createStore(
		monsterReducer, // we need the second arg to enable redux devtools
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	return (
		// Step 6: use "Provider" to inject the store into the app
		<Provider store={store}>
			<div className="boxes">
				<div className="box">
					<Header />
					<AddedFeatures />
				</div>
				<div className="box">
					<AdditionalFeatures />
					<Total />
				</div>
			</div>
		</Provider>
	);
};

export default App;
