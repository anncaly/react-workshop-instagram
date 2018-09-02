import React, { Component } from 'react';

export default class Instagram extends Component {
  render() {
    return (
      <div className='header'>
        <div className='logo'></div>
        <input placeholder='Search' type='text' />
        <div className='nav'>
          <div className='explore'></div>
          <div className='likes'></div>
          <div className='settings'></div>
        </div>
      </div>
    );
  }
}
