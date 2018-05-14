import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faStopwatch from '@fortawesome/fontawesome-free-solid/faStopwatch'
import './assets/css/timer.css';

class Timer extends Component {

	render () {

		let mins = this.props.playTime[0];
		let secs = this.props.playTime[1];
		let mill = this.props.playTime[2] < 10 ? '0'+this.props.playTime[2] : this.props.playTime[2];

		if(!this.props.gameState) {
			return (
				<div className="mm-timer">
					<div className="mm-title">Welcome to <span>Math-Master</span></div>
				</div>
			)
		} else {
			return (
				<div className="mm-timer">
					<div className="mm-clock">
						<div>
							<FontAwesomeIcon className="mm-icon" icon={faStopwatch} />
						</div>
						<div>{mins}<span>m </span></div>
						<div>{secs}<span>s </span></div>
						<div>{mill}</div>
					</div>
					<div className="mm-score"><span>Score</span>: {this.props.scoreCard}</div>
				</div>
			)
		}
	}
}

export default Timer