import React, { useState } from 'react';
import { Button } from './components/Button';
import { Modal } from './components/Modal';
import './Styles';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpenModal = () => {
		setIsOpen(true);
	}

	const handleCloseModal = () => {
		setIsOpen(false);
	}

	return (
		<>
			{ isOpen && <Modal onClose={ handleCloseModal } /> }
			<div className='container'>
				<div className='box'>
					<div>Welcome React toolchain from scratch.</div>
					<Button onCallback={ handleOpenModal }>Hello</Button>
				</div>
			</div>
		</>
	);
}

export default App;
