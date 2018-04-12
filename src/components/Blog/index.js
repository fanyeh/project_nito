import React, { Component } from 'react';
import Card from './Card';
import SectionHeader from '@common/SectionHeader';
import SectionCaption from '@common/SectionCaption';
import Section from '@common/Section';

class Blog extends Component {
  render() {
    return (
      <Section className="bg-light-gray pv6-m pv5 ph4 ph0-ns">
        <div className="flex justify-between w-custom w-100 ph4-m mb5 center flex-row-l flex-column blogContainer">
          <SectionHeader header="BLOG UPDATED" />
          <SectionCaption>
            Stay always updated <em>our publications.</em>
          </SectionCaption>
        </div>
        <div className="flex justify-between w-custom w-100 ph4-m flex-row-l flex-column center blogContainer">
          <Card src="https://images.unsplash.com/photo-1501676491272-7bbd3e71f7e1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=687a32748561c1902aca06a66f247776&auto=format&fit=crop&w=1444&q=80" />
          <Card
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=74be18f074e19e06a51221f0f09969df&auto=format&fit=crop&w=1504&q=80"
            className="mh4-l"
          />
          <Card src="https://images.unsplash.com/photo-1518607692857-bff9babd9d40?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6899a5ec8bedd89eeeb3accd68fee0f6&auto=format&fit=crop&w=1267&q=80" />
        </div>
      </Section>
    );
  }
}

export default Blog;
