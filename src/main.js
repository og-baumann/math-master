import React, { Component } from 'react';
import Screen from './screen';
import Panel from './panel';
import './assets/css/main.css';

class Main extends Component {
	constructor (props) {
		super(props);

		this.modes = ['easy','normal','hard'];

		this.state = {
			inPlay	: false,
			mode 	: this.modes[1]
		}

		this.toggleMode = this.toggleMode.bind(this);
	}

	toggleMode () {
		let l = this.modes.length - 1;
		let i = this.modes.indexOf(this.state.mode);
		let m = i < l ? this.modes[i + 1] : this.modes[0];
		this.setState({mode: m});
	}

	render () {
		return (
			<div className="mm">
				<Screen tst={this.state.mode} />
				<Panel  tst={this.toggleMode} />
			</div>
		);
	}
}

export default Main;