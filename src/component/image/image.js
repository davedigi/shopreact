import React from 'react';

const ImageComponent = ({ src, width }) => {
	// For example, style={{marginRight: spacing + 'em'}} when using JSX.
	return <img src={src} style={{width: width}} alt='flyer' />;
};

export default ImageComponent;
