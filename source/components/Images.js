import React, { Component } from 'react';
import images from '../theme/assets/images';
import Image from './Image';

export default class Images extends Component {
  render() {
    const imagesJSX = images.map((image) => {
      return (
        <Image key={image.id} public={image.public} src={image.src} />
      );
    });
    return <div className='images'>{imagesJSX}</div>;
  }
}
