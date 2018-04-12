import React, { Component } from 'react';
import FooterItem from './FooterItem';
import Social from './Social';
import Brand from '../Header/Brand';
import ContactList from './ContactList';
import LatestPost from './LatestPost';

class Footer extends Component {
  render() {
    return (
      <div className="flex justify-center bg-black white pv5 flex-row-l flex-column">
        <FooterItem>
          <Brand name="nito." />
          <p className="gray lh-copy mb4 mt3">
            The era of multipurpose theme has been turned into a new leaf with the birth of Nito. It
            will amaze you with its powerful technology as well as exquisite design in minimal
            style.
          </p>
          <Social />
        </FooterItem>

        <FooterItem name="contact">
          <ContactList />
        </FooterItem>

        <FooterItem name="latest post">
          <LatestPost title="Supersonic import" date="12 October 2016" />
          <LatestPost title="Powerful shortcodes" date="12 October 2016" />
          <LatestPost title="Effortless customization" date="12 October 2016" />
        </FooterItem>
      </div>
    );
  }
}

export default Footer;
