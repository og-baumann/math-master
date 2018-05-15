import React from 'react';
import './assets/css/panel.css';

const Panel = ({action, play, gameState, btns, clickAction}) => {
	if(gameState === 'play') {
		return 	<div className="mm-panel">
					<div className="mm-btn-group">
						{btns.map((a,i) => (<div key={i}><button onClick={clickAction} value={a} key={i} className="mm-btn">{a}</button></div>))}
					</div>
				</div>
	} else {
		return 	<div className="mm-panel">
					<form onSubmit={play}>
						<select className="mm-select" defaultValue="normal" onChange={action}>
							<option value="easy">Easy</option>
							<option value="normal">Normal</option>
							<option value="hard">Hard</option>
						</select>
						<button type="submit" className="mm-play">Play</button>
					</form>
				</div>				
	}
}

export default Panel;