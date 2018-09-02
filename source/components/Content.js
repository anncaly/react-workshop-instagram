import React, { Component } from 'react';
import Profile from './Profile';
import Stories from './Stories';
import Images from './Images';

export default class Content extends Component {
  render() {
    return (
      <div className='content'>
        <Profile />
        <Stories />
        <Images />
      </div>
    );
  }
}
