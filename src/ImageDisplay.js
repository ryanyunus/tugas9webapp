import React from 'react';

function ImageDisplay({ imageUrl, altText }) {
  return (
    <div>
      <img src={imageUrl} alt={altText} />
    </div>
  );
}

export default ImageDisplay;
