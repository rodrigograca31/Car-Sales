import React from "react";
import { connect } from "react-redux";

import { addFeature } from "../state/actionCreators";

const AdditionalFeature = ({ feature, addFeature }) => {
	return (
		<li>
			{/* {JSON.stringify(props)} */}
			{/* Add an onClick that will let you add a feature to your car */}
			<button className="button" onClick={e => addFeature(feature)}>
				Add
			</button>
			{feature.name} (+{feature.price})
		</li>
	);
};

// Step 8: Use "connect" to plug the component to redux

function mapStatetoProps(state) {
	return {};
}
export default connect(mapStatetoProps, { addFeature })(AdditionalFeature);
