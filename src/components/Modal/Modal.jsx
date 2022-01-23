import React from 'react';
import './Modal.css';

function Modal({ children, onClose = null }) {
	const handleClose = () => {
		if (onClose) {
			onClose();
		}
	};

	return (
		<div className='modal-container'>
			<div className='modal-box'>
				<div className='modal-box-inner'>
					<button className='button-close' onClick={handleClose}>
						x
					</button>
					<div>{children}</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
