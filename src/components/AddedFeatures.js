import React from "react";

import AddedFeature from "./AddedFeature";

import { connect } from "react-redux";

const AddedFeatures = ({ car }) => {
	return (
		<div className="content">
			<h6>Added features:</h6>
			{car.features.length ? (
				<ol type="1">
					{car.features.map(item => (
						<AddedFeature key={item.id} feature={item} />
					))}
				</ol>
			) : (
				<p>You can purchase items from the store.</p>
			)}
		</div>
	);
};
// Step 8: Use "connect" to plug the component to redux

function mapStatetoProps(state) {
	return {
		car: state.car
	};
}
export default connect(mapStatetoProps, {})(AddedFeatures);
