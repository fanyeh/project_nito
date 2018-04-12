import React from 'react';
import SectionCaption from '@common/SectionCaption';
import SectionHeader from '@common/SectionHeader';
import Section from '@common/Section';
import SectionContainer from '@common/SectionContainer';
import ServiceItem from './ServiceItem';
const Service = () => {
  return (
    <Section className="bg-light-gray flex-row-l pb5 ">
      <SectionContainer className="relative" left>
        <img
          className="v-center-l"
          src="https://images.unsplash.com/photo-1497105943914-b90d55145023?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a068325b9af2af05b69db85190379b0e&auto=format&fit=crop&w=1270&q=80"
          alt=""
        />
      </SectionContainer>

      <SectionContainer right className="ph0-l ph4 mt0-l mt5">
        <SectionHeader header="our services" />
        <SectionCaption className="mb4-l mb3">
          Be young in thinking makes eternally <em>creative mind.</em>
        </SectionCaption>
        <ServiceItem />
      </SectionContainer>
    </Section>
  );
};

export default Service;
