import React from 'react';
import './assets/css/screen.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faDivide from '@fortawesome/fontawesome-free-solid/faDivide';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faMinus from '@fortawesome/fontawesome-free-solid/faMinus';
import faQuestion from '@fortawesome/fontawesome-free-solid/faQuestion';
import faEquals from '@fortawesome/fontawesome-free-solid/faEquals';

const Screen = ({output}) => {
	if (typeof output === 'object') {
		let icon = output[1] === 'faPlus' ? faPlus : (output[1] === 'faMinus' ? faMinus : (output[1] === 'faTimes' ? faTimes : faDivide));
		
		return 	<div className="mm-screen">
					<div className="mm-output">
						<div className="mm-problem">
							<div><span>{output[0]}</span></div>
							<div><FontAwesomeIcon className="mm-icon" icon={icon} /></div>
							<div><span>{output[2]}</span></div>
							<div><FontAwesomeIcon className="mm-icon" icon={faEquals} /></div>
							<div><FontAwesomeIcon className="mm-icon" icon={faQuestion} /></div>
						</div>
					</div>
				</div>
	} else {
		return 	<div className="mm-screen"><div className="mm-output">{output}</div></div>
	}	
}

export default Screen;