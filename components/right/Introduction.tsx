'use client';
import { useContext } from 'react';
import Quote from '../text/Quote';
import Text from '../text/Text';
import Title from '../text/Title';
import { InView } from 'react-intersection-observer';
import { SidebarContext } from '../Context';

const Introduction = () => {
  const {
    section,
    setSection,
  }: { section: string | null; setSection: (newSection: string) => void } =
    useContext(SidebarContext);
  return (
    <div className='xs:mt-[23rem] mt-[10rem] ml-[2rem] xs:ml-[0rem]' id='intro'>
      <InView
        as='div'
        onChange={(inView, entry) => {
          inView && setSection('introduction');
        }}
        threshold={0.5}
      >
        <Title>Introduction</Title>

        <Text>
          The Degrowth Toolbox for Artistic Practices is both a proposal and an
          invitation. Emerging from an ongoing artistic research process, The
          Toolbox asks:
        </Text>
        <Quote>
          How can a degrowth approach to the arts be imagined and implemented?
          Art is often mobilised within activist movements in the service of
          social change, but how can activist values enter artistic practices to
          create a more equitable and humane field?
        </Quote>
        <Text>
          The purpose is to formulate a conceptual framework for creative and
          exhibitionary practices aimed towards degrowth, while simultaneously
          composing a toolbox for artists, curators, as well as institutions,
          aimed towards designing ethical and sustainable creative practices
          during this period of prolonged social crisis and beyond.
        </Text>
        <Text>
          The material here begins with a brief overview of the concept of
          degrowth, to then move on to some key values and disavowals. Based on
          these, The Toolbox puts forward a set of strategies directed towards
          creating greater equity in the arts.
        </Text>
        <Text>
          {' '}
          The Degrowth Toolbox for Artistic Practices offers some starting
          thoughts, some positions and provocations – but the material presented
          here is offered as a proposal, as a starting point for further
          dialogue, as something to build upon and to dismantle. It is not
          presented as authoritative nor resolved.
        </Text>
      </InView>
    </div>
  );
};

export default Introduction;
