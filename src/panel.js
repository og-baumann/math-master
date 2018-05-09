import React, { Component } from 'react';
import "./assets/css/panel.css";

class Panel extends Component {
	render () {
		return (
			<div onClick={this.props.tst}>Panel</div>
		);
	}
}

export default Panel;