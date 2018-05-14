import React, { Component } from 'react';

import Screen from './screen';
import Panel from './panel';
import Timer from './timer';

import './assets/css/app.css';

class Main extends Component {
	constructor (props) {
		super(props);

		this.operands = ['add','subtract','multiply','divide'];

		this.state = {
			inPlay	: false,
			mode 	: 2,
			time    : [0,0,0],
			btns    : [1,2,3,4],
			output  : 'Answer as many problems as you can before time runs out! Select difficulty and press play to begin.',
			answer  : null,
			score	: 0
		}

		this.start = this.start.bind(this);
		this.toggleMode = this.toggleMode.bind(this);
		this.tick = this.tick.bind(this);
		this.click = this.click.bind(this);
		this.generate = this.generate.bind(this);
		this.manageButtons = this.manageButtons.bind(this);
		this.score = this.score.bind(this);

		this.base = this.state;
	}

	toggleMode (e) {
		let mod = null;

		switch(e.target.value) {
			case 'easy' : mod = 1; break;
			case 'normal' : mod = 2; break;
			case 'hard' : mod = 3; break;
			default: mod = 2;	  
		};
		this.setState({mode : mod});
	}

	start (e) {
		e.preventDefault();
		this.setState({
			inPlay: 'play',
			score: 0,
			answer: null,
			time: [0,0,0]
		});
		this.tick();
		this.generate();
	}

	tick () {
		setTimeout(function t () {
			let now = this.state.time;

			if(now[0] < 1) {
				if(now[2] < 99) {
					now[2]++;
				} else {
					now[2] = 0;
					if(now[1] < 59) {
						now[1]++;
					} else {
						now[1] = 0;
						now[0]++; 
					}
				}
				this.setState({time: now});
				setTimeout(t.bind(this), 10);
			} else {
				this.setState({
					inPlay: 'gameOver',
					output: 'You scored ' + this.state.score
				});	
			}
		}.bind(this) , 10);
	}

	manageButtons (a) {
		let key = Math.round(Math.random() * 3);

		this.setState(prev =>({btns: prev.btns.map(function rnd (k,i) {
			let r = Math.round(Math.random() * ((a + 30) - (a - 30) + 1) - (a+30));
			if(key === i) {
				return a;
			}
			else if(r !== a){
				return r;
			} else {
				return rnd(k,i);
			}
		})}));
	}

	generate () {
		let mod = this.state.mode;
		let x = Math.round(Math.random() * (24 * mod)) - (12 * mod);
		let y = Math.round(Math.random() * (24 * mod)) - (12 * mod);
		let z = this.operands[Math.round(Math.random() * (3))];
		let a = null;
		let txt = '';
		switch (z) {
			case 'add' : 
				a = x + y; 
				txt = "faPlus"; 
				break;
			case 'subtract' : 
				a = x - y; 
				txt = "faMinus"; 
				break;
			case 'multiply' : 
				a = x * y; 
				txt = "faTimes"; 
				break;
			case 'divide' : 
				x = x * y;
				a = x / y;
				txt = "faDivide"; 
				break;
			default : a = null;
		}
		if(!parseInt(a, 10)) {
			this.generate();
			return;
		}
		this.setState({
			output: [x,txt,y],
			answer: a
		});
		this.manageButtons(a);
	}

	score (ans) {
		let inc = ans === this.state.answer ? 10 : -10;
		this.setState(prev => ({score: prev.score + inc})); 
	}

	click (e) {
		this.score(parseInt(e.target.value, 10));
		this.generate();
	}

	render () {

		return (
			<div className="mm">
			    <div className="mm-header">
			        <Timer gameState={this.state.inPlay}
			        	   playTime={this.state.time}
			        	   scoreCard={this.state.score}	
			         />
			    </div>
			    <div className="mm-body">
			    	<Screen output={this.state.output}/>
			    </div>
			    <div className="mm-footer">
			    	<Panel  action={this.toggleMode}
							mode={this.state.mode}
							play={this.start}
							gameState={this.state.inPlay} 
							btns={this.state.btns}
							clickAction={this.click}
					/>
			    </div>
			</div>
		);
	}
}

export default Main;