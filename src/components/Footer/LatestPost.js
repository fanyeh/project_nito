import React from 'react';

const LastestPost = props => {
  return (
    <div className="bb b--gray pb3 mb4">
      <h1 className="f5 fw9 ttc dim cp">{props.title}</h1>
      <time className="gray i garamond">{props.date}</time>
    </div>
  );
};

export default LastestPost;
