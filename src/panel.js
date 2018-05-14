import React, { Component } from 'react';
import './assets/css/panel.css';

class Panel extends Component {

	getButtons (a,i) {
		return <button onClick={this.props.clickAction} value={a} key={i} className="mm-btn">{a}</button>;
	}

	render () {

		let btns = this.props.btns.map(this.getButtons.bind(this));

		if(this.props.gameState === 'play') {
			return (
				<div className="mm-panel">
					<div>
						{btns}
					</div>
				</div>	
			);
		} else {
			return (
				<div className="mm-panel">
					<form onSubmit={this.props.play}>
						<select className="mm-select" defaultValue="normal" onChange={this.props.action}>
							<option value="easy">Easy</option>
							<option value="normal">Normal</option>
							<option value="hard">Hard</option>
						</select>
						<button type="submit" className="mm-play">Play</button>
					</form>
				</div>				
			)
		}
	}
}

export default Panel;