import React from "react";
import { connect } from "react-redux";

const Total = ({ car, additionalPrice }) => {
	return (
		<div className="content">
			<h4>Total Amount: ${car.price + additionalPrice}</h4>
		</div>
	);
};

// Step 8: Use "connect" to plug the component to redux

function mapStatetoProps(state) {
	return {
		car: state.car,
		additionalPrice: state.additionalPrice
	};
}

export default connect(mapStatetoProps, {})(Total);
