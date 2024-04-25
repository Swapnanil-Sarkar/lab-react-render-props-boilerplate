// LikePost.jsx
import React from 'react';
import withLikeFunctionality from './withLikeFunctionality';

function LikePost({ likeCounter, handleLike }) {
  return (
    <div>
      <button onClick={handleLike}>Like Post {likeCounter}</button>
    </div>
  );
}

export default withLikeFunctionality(LikePost);
