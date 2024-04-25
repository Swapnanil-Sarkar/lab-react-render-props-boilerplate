import React from 'react';
import LikeComponent from './LikeComponent';

export default function LikeImage() {
  return (
    <LikeComponent>
      {(likeCounter, handleLike) => (
        <div>
          <button onClick={handleLike}>Like Image {likeCounter}</button>
        </div>
      )}
    </LikeComponent>
  );
}
