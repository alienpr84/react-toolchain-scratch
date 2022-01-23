import React from 'react';
import './Image.css';

function Image({
	src = null,
	alt = 'generic image',
	caption = '',
	width = 200,
	height = 200,
	objectFit = 'contain'
}) {
	return (
		src && (
			<figure style={{width, height}}>
				<img src={src} alt={alt} style={{objectFit}} />
				<figcaption>{caption}</figcaption>
			</figure>
		)
	);
}

export default Image;
