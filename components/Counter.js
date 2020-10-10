import { forwardRef, useRef, useImperativeHandle, useState } from 'react';
import useSound from 'use-sound';
import hurtSfx from '../assets/sound/roblox-death-sound-effect.mp3';
import deathSfx from '../assets/sound/lego-yoda-death-sound-effect.mp3';
import healthUpSfc from '../assets/sound/hl2-health-kit.mp3';

const Counter = forwardRef((props, ref) => {
	const [life, setLife] = useState(20);
	const [playHurt] = useSound(hurtSfx);
	const [playDeath] = useSound(deathSfx);
	const [playHealthUp] = useSound(healthUpSfc);

	const checkRotate = () => {
		if (props.rotate) {
			return {
				transform: 'rotate(180deg)'
			}
		}
	}

	useImperativeHandle(ref, () => ({
    	reset(){
    		setLife(20);
    	}
  	}));

	const reduceHealth = (number) => {
		setLife(life + number);
		
		if ((life -1) == 0) {
			return playDeath();			
		} else {
			return playHurt();	
		}

		
	}

	const increaseHealth = (number) => {
		setLife(life + number);

		return playHealthUp();
	}

	return (
	<div style={checkRotate()}>
		<h2 style={{'textAlign': 'center' }} onClick={() => increaseHealth(1)}>+</h2>
		<h1>{life}</h1>
		<h2 style={{'textAlign': 'center' }} onClick={() => reduceHealth(-1)}>-</h2>
	</div>)
})

export default Counter;