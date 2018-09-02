import React from 'react';

export default (props) => {
  return props.message ? (
    <li>{props.message}</li>
  ) : null;
};
