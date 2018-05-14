import React, { Component } from 'react';
import './assets/css/screen.css';

class Screen extends Component {
	render () {
		return (
			<div className="mm-screen">
				<div className="mm-output">{this.props.output}</div>
			</div>
		);
	}
}

export default Screen;