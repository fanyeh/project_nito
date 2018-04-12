import React, { Component } from 'react';
import classNames from 'classnames';
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={classNames('mb0-l mb5', this.props.className)}>
        <div className="w-100 overflow-hidden blogImageWrapper">
          <img src={this.props.src} alt="" className="cardImage" />
        </div>
        <article className="pa4 bg-white">
          <h1 className="mt0 f4">Spotlight on Geordie Willis</h1>
          <time className="garamond f5 i">9 September 2016</time>
          <p className="lh-copy f6 silver tracked pb3">
            Geordie Willis is creative director at renowned fine wine and spirits merchants Berry
            Bros. & Rudd [...]
          </p>
          <span className="fr f7 tracked bb">READ MORE</span>
        </article>
      </div>
    );
  }
}

export default Card;
