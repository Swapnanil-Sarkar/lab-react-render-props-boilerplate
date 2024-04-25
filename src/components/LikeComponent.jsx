import React, { useState } from 'react';

export default function LikeComponent({ children }) {
  const [likeCounter, setLikeCounter] = useState(0);

  const handleLike = () => {
    setLikeCounter(likeCounter + 1);
  };

  return children(likeCounter, handleLike);
}
