import React, { useState } from 'react';
import { Button } from './components/Button';
import { Modal } from './components/Modal';
import { Image } from './components/Image';
import './Styles';
import darling from './public/assets/images/darling.jpg';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpenModal = () => {
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};

	return (
		<>
			{isOpen && (
				<Modal onClose={handleCloseModal}>
					<Image
						src={darling}
						caption='Darling in the franxx'
						objectFit='cover'
					/>
				</Modal>
			)}
			<div className='container'>
				<div className='box'>
					<div>Welcome React toolchain from scratch.</div>
					<Button onCallback={handleOpenModal}>Click Me</Button>
				</div>
			</div>
		</>
	);
}

export default App;
