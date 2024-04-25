// HOC to handle like functionality
import React, { useState } from 'react';

const withLikeFunctionality = (Component) => {
  return function WithLikeFunctionality(props) {
    const [likeCounter, setLikeCounter] = useState(0);

    const handleLike = () => {
      setLikeCounter(likeCounter + 1);
    };

    return <Component likeCounter={likeCounter} handleLike={handleLike} {...props} />;
  };
};

export default withLikeFunctionality;
