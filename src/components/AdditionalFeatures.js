import React from "react";
import AdditionalFeature from "./AdditionalFeature";
import { connect } from "react-redux";

const AdditionalFeatures = ({ additionalFeatures }) => {
	return (
		<div className="content">
			<h4>Additional Features</h4>
			{additionalFeatures.length ? (
				<ol type="1">
					{additionalFeatures.map(item => (
						<AdditionalFeature key={item.id} feature={item} />
					))}
				</ol>
			) : (
				<p>Nice looking car!</p>
			)}
		</div>
	);
};

// Step 8: Use "connect" to plug the component to redux

function mapStatetoProps(state) {
	return {
		additionalFeatures: state.additionalFeatures
	};
}

export default connect(mapStatetoProps, {})(AdditionalFeatures);
