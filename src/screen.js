import React, { Component } from 'react';
import './assets/css/screen.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faDivide from '@fortawesome/fontawesome-free-solid/faDivide';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faMinus from '@fortawesome/fontawesome-free-solid/faMinus';
import faQuestion from '@fortawesome/fontawesome-free-solid/faQuestion';
import faEquals from '@fortawesome/fontawesome-free-solid/faEquals';

class Screen extends Component {

	getOutput (o) {
		if (typeof o === 'object') {
			let icon = o[1] === 'faPlus' ? faPlus : (o[1] === 'faMinus' ? faMinus : (o[1] === 'faTimes' ? faTimes : faDivide));
			return 	<div className="mm-problem">
						<div><span>{o[0]}</span></div>
						<div><FontAwesomeIcon className="mm-icon" icon={icon} /></div>
						<div><span>{o[2]}</span></div>
						<div><FontAwesomeIcon className="mm-icon" icon={faEquals} /></div>
						<div><FontAwesomeIcon className="mm-icon" icon={faQuestion} /></div>
					</div>
		} else {
			return o;
		}
	}

	render () {

		let output = this.getOutput(this.props.output);

		return (
			<div className="mm-screen">
				<div className="mm-output">{output}</div>
			</div>
		);
	}
}

export default Screen;