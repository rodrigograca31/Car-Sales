import * as types from "./actionTypes";

// Step 7: design action creator functions

export function addFeature(feature) {
	return {
		type: types.ADD_FEATURE,
		payload: {
			feature
		}
	};
}
