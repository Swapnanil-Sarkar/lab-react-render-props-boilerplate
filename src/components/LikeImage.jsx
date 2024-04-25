// LikeImage.jsx
import React from 'react';
import withLikeFunctionality from './withLikeFunctionality';

function LikeImage({ likeCounter, handleLike }) {
  return (
    <div>
      <button onClick={handleLike}>Like Image {likeCounter}</button>
    </div>
  );
}

export default withLikeFunctionality(LikeImage);
