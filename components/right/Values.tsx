'use client';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { InView, useInView } from 'react-intersection-observer';
import Text from '../text/Text';
import Subtitle from '../text/Subtitle';
import Title from '../text/Title';
import TextEndnote from '../text/TextEndnote';
import Endnote from '../text/Endnote';
import Sup from '../text/Sup';
import { SidebarContext } from '../Context';

const endNote = [
  {
    number: '5',
    content: `5. Convivialist Manifesto. A declaration of interdependence (Global
      Dialogues 3), Käte Hamburger Kolleg / Centre for Global Cooperation
      Research (KHK/GCR21), 2014.`,
  },
];

const Values = () => {
  const { section, setSection } = useContext(SidebarContext);
  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  return (
    <div
      className='xs:mb-[10rem] mb-[2rem] xs:mt-[10rem] mt-[2rem] ml-[2rem] xs:ml-[0rem]'
      id='values'
    >
      <Title>Values</Title>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col' ref={ref}>
          <InView
            as='div'
            onChange={(inView, entry) => {
              inView && setSection('values1');
            }}
            threshold={1}
          >
            <Subtitle SubRef={ref} id='well-being'>
              Well-being
            </Subtitle>

            <TextEndnote>
              Well-being in the literature of degrowth is understood as the
              fulfilment of fundamental human needs, encompassing not only
              material comfort but also social relationships, autonomy,
              ecological sustainability, and a sense of purpose. It involves a
              balanced and equitable distribution of resources, fostering
              resilient communities, and a lifestyle that respects the
              ecological limits of the planet. This contradicts the most common
              metrics of “well-being” within capitalist society, such as
              material wealth.
            </TextEndnote>
          </InView>
          <InView
            as='div'
            onChange={(inView, entry) => {
              inView && setSection('values2');
            }}
            threshold={1}
          >
            <Subtitle SubRef={ref} id='care'>
              Care
            </Subtitle>

            <TextEndnote>
              Care is fundamental work for the welfare of people and
              communities. Generally speaking, it’s all the daily actions
              devoted to sustenance, reproduction and the contentment of human
              relations. This already touches all facets of human life, but to
              focus within the art world, this includes all of the unseen work
              that goes into making sure everything runs smoothly: that the
              space is cleaned, coffee and wine are available, admin is taken
              care of, fellow collaborators don’t kill each other.
            </TextEndnote>
            <TextEndnote>
              Understanding and valuing care requires a recognition of our
              inherent interdependency – no one is self-made, and we all must
              rely on one another in order to survive and thrive.
              <Sup content={endNote[0].content}>5</Sup> In our current
              neoliberal and patriarchal paradigm care work is systematically
              devalued and obscured, with those of us responsible for most of
              the care-giving being also those most excluded: such as women,
              migrants, and the working class. Ideas of social welfare have been
              pushed aside for individualised notions of resilience, wellness
              and self-improvement. By acknowledging and centering care in our
              lives, practices, and societies, we are also centering well-being
              and equity. When we think of ourselves as lone individuals and act
              as such, keeping ourselves isolated from each other, we further
              entrench ourselves and those around us in precarity. The
              alternative is to instead work in solidarity with each other.{' '}
            </TextEndnote>
          </InView>
          <InView
            as='div'
            onChange={(inView, entry) => {
              inView && setSection('values3');
            }}
            threshold={1}
          >
            <Subtitle SubRef={ref} id='community'>
              Community / Collectivity
            </Subtitle>

            <TextEndnote>
              Community is understood here as a collective and interconnected
              social entity characterised by shared values, mutual support, and
              a commitment to a shared goal. It’s important here to not fall
              into the trap of an idealised depiction of community as a place of
              unconditional love and support (such a thing does not exist), or
              as a vague catch-all term denoting a group of people who
              presumably have the same experiences or interests (that is, of
              course, presumptuous). Communities are fundamentally pragmatic
              networks of autonomous members based upon reciprocal relationships
              that must function, and require continued care work in order to
              maintain their health and functionality.
            </TextEndnote>
            <TextEndnote>
              The emphasis on community and collectivity here works in tandem
              with the point made in the section on care: pushing back against
              the idea of the individual as an isolated being.{' '}
            </TextEndnote>
            <TextEndnote>
              On a practical level, coming together and pooling resources
              creates a synergy effect – leading to a more intensive and diverse
              use of resources, and therefore to a strengthening of a
              solidarity-based culture of contributions. This, in turn, can
              promote mutual inspiration and local support. And, of course, in
              terms of bringing about change in the art world: the reality is
              that no systemic change can be achieved by lone individuals, and
              when we work alone we are much easier to push around.
            </TextEndnote>
          </InView>
        </div>
        <div className='xs:flex flex-col hidden'>
          <Endnote className='mt-[27.5rem]'>{endNote[0].content}</Endnote>
        </div>
      </div>
    </div>
  );
};

export default Values;
