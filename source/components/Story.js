import React from 'react';

export default (props) => {
  return props.message ? (
      <div className='story'>
        <div>
          <img src={props.src} />
        </div>
        <span>{props.message}</span>
      </div>
  ) : null;
};
