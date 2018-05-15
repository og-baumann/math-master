import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faStopwatch from '@fortawesome/fontawesome-free-solid/faStopwatch'
import './assets/css/timer.css';
import logo from './assets/images/logo.png';

const Timer = ({gameState, playTime, scoreCard}) => {
	let mins = playTime[0];
	let secs = playTime[1];
	let mill = playTime[2] < 10 ? '0' + playTime[2] : playTime[2];	

	if(!gameState || gameState === 'gameOver') {
		return	<div className="mm-timer">
					<div className="mm-title"><img src={logo} alt="MathMaster" /></div>
				</div>
	} else {
		return 	<div className="mm-timer">
					<div className="mm-clock">
						<div>
							<FontAwesomeIcon className="mm-icon" icon={faStopwatch} />
						</div>
						<div>{mins}<span>m </span></div>
						<div>{secs}<span>s </span></div>
						<div>{mill}</div>
					</div>
					<div className="mm-score"><span>Score</span>: {scoreCard}</div>
				</div>
	}
}

export default Timer