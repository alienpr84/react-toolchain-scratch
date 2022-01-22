import React from 'react';
import './Button.css';

function Button({ children, onCallback }) {
	const handleCallback = () => {
		if(onCallback) {
			onCallback();
		}
	}

	return (
		<button className='button' onClick={handleCallback}>
			{children}
		</button>
	);
}

export default Button;
