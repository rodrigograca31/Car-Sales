import * as types from "./actionTypes";

const initialState = {
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

// STEP 3: create reducers

export function additionalPriceReducer(
	additionalPrice = initialState.additionalPrice,
	action
) {
	switch (action.type) {
		case types.ADD_FEATURE:
			return additionalPrice + action.payload.feature.price;
		case types.REMOVE_FEATURE:
			return additionalPrice - action.payload.feature.price;
		default:
			return additionalPrice;
	}
}

export function carReducer(car = initialState.car, action) {
	switch (action.type) {
		case types.ADD_FEATURE:
			return {
				...car,
				features: [...car.features, action.payload.feature]
			};
		case types.REMOVE_FEATURE:
			return {
				...car,
				features: [
					...car.features.filter(
						feature => feature.id !== action.payload.feature.id
					)
				]
			};
		default:
			return car;
	}
}
export function additionalFeaturesReducer(
	additionalFeatures = initialState.additionalFeatures,
	action
) {
	return additionalFeatures;
}
