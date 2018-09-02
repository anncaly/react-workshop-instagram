import React, { Component } from 'react';
import links from '../theme/assets/links';
import Link from './Link';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <ul>
          {links.map((link) => 
            <Link key={link.id} message={link.message}/>
          )}
        </ul>
        <span>&copy; 2018 Instagram</span>
      </div>
    );
  }
}
