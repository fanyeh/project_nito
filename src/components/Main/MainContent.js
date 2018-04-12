import React, { Component } from 'react';

class MainContent extends Component {
  render() {
    return (
      <div className="w-70 abs-center tc">
        <h1 className="f-headline-ns f2 ma0 garamond">Digital Creative.</h1>
        <p className="w-50-l center lh-copy f5-ns f7 mt4">
          “Creativity is thinking up new things. Innovation is doing new things.” And Nito is an
          innovation we bring to you.
        </p>
        <button className="bg-black white b--black pa3 mt5 fw1 f7 tracked ttu">Read More</button>
      </div>
    );
  }
}

export default MainContent;
