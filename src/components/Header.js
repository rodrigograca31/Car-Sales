import React from "react";
import { connect } from "react-redux";

const Header = ({ car }) => {
	return (
		<>
			<figure className="image is-128x128">
				<img src={car.image} alt={car.name} />
			</figure>
			<h2>{car.name}</h2>
			<p>Amount: ${car.price}</p>
		</>
	);
};

// Step 8: Use "connect" to plug the component to redux

function mapStatetoProps(state) {
	return {
		car: state.car
	};
}

export default connect(mapStatetoProps, {})(Header);
