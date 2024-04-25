import React from 'react';
import LikeComponent from './LikeComponent';

export default function LikePost() {
  return (
    <LikeComponent>
      {(likeCounter, handleLike) => (
        <div>
          <button onClick={handleLike}>Like Post {likeCounter}</button>
        </div>
      )}
    </LikeComponent>
  );
}
