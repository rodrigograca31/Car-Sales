import React, { useReducer } from "react";

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

	const removeFeature = item => {
		// dispatch an action here to remove an item
	};

	// const [state, dispatch] = useReducer(additionalPriceReducer, 0);

	const buyItem = item => {
		// dipsatch an action here to add an item
		// console.log(state);
		// dispatch({ type: "ADD_FEATURE" });
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
				<div className="box" onClick={buyItem}>
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
