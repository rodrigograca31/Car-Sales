import * as types from "./actionTypes";

// Step 7: Design action creator functions

export function addFeature(feature) {
	return {
		type: types.ADD_FEATURE,
		payload: {
			feature
		}
	};
}

export function removeFeature(feature) {
	return {
		type: types.REMOVE_FEATURE,
		payload: {
			feature
		}
	};
}
