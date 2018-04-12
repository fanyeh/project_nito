import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import SectionCaption from '@common/SectionCaption';
import SectionHeader from '@common/SectionHeader';
import Section from '@common/Section';
import SectionContainer from '@common/SectionContainer';
class Intro extends Component {
  render() {
    return (
      <Section className="flex-row-ns pv5">
        <SectionContainer left className="w-40-m ph0-l ph4">
          <SectionHeader header="INTRODUCING" />
          <SectionCaption>
            <em>A true design</em> that catches attention from every eyes.
          </SectionCaption>
          <p className="mt4 f5 fw7 lh-copy silver ">
            We tend to create a great design to catch the attention from viewers. Of course, our
            design team is constructed by professionals with long experience and good skills.
          </p>
        </SectionContainer>

        <SectionContainer right className="mt5 pt2 w-40-m ph0-l ph4">
          <ProgressBar percentage={0.8} name="HTML/CSS" />
          <ProgressBar percentage={0.7} name="PHOTOSHOP" />
          <ProgressBar percentage={0.8} name="PHOTOGRAPHY" />
        </SectionContainer>
      </Section>
    );
  }
}

export default Intro;
