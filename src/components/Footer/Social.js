import React, { Component } from 'react';
import classNames from 'classnames';
const socialIcons = [
  { name: 'fa-twitter', link: 'https://twitter.com/' },
  { name: 'fa-google-plus-g', link: 'https://plus.google.com/' },
  { name: 'fa-instagram', link: 'https://twitter.com/' },
  { name: 'fa-youtube', link: 'https://www.youtube.com/' },
];
class Social extends Component {
  render() {
    return (
      <div className="mb0-l mb4">
        {socialIcons.map(icon => (
          <a href={icon.link} className="white dim" key={icon.name}>
            <i className={classNames('fab cp mr4 f4', icon.name)} />
          </a>
        ))}
      </div>
    );
  }
}
export default Social;
