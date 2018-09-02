import React, { Component } from 'react';
import stories from '../theme/assets/stories';
import Story from './Story';

export default class Stories extends Component {
  render() {
    const storiesJSX = stories.map((story) => {
      return (
        <Story key={story.id} src={story.src} message={story.message} />
      );
    });
    return <div className='stories'>{storiesJSX}</div>;
  }
}
