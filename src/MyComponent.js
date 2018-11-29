import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		on: true,
		msg: 'Yeah'
	};

	onChange = () => {
		this.setState({ on: !this.state.on });
	};

	componentDidMount() {
		this.setState({ msg: this.props.msg });
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	render() {
		return this.props.children({ on: this.state.on, msg: this.state.msg, onChange: this.onChange });
	}
}

MyComponent.propTypes = {};

export default MyComponent;
