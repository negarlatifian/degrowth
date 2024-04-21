'use client';
import React, { useContext } from 'react';
import Text from '../text/Text';
import Quote from '../text/Quote';
import Endnote from '../text/Endnote';
import TextEndnote from '../text/TextEndnote';
import Sup from '../text/Sup';
import Title from '../text/Title';
import { InView } from 'react-intersection-observer';
import { SidebarContext } from '../Context';

const endNote = [
  {
    number: '1',
    content: `1. G. D’ Alisa, F. Demaria, and G. Kallis, ‘Degrowth’ in G. D’
Alisa, F. Demaria, and G. Kallis (eds), Degrowth, A Vocabulary for a
New Era, Routledge, 2015, p. 3.`,
  },
  {
    number: '2',
    content: `2. F. Demaria, F. Schneider, F. Sekulova, J. Martinez-Alier, ‘What
    is Degrowth? From an Activist Slogan to a Social Movement’,
    Environmental Values, vol. 22, 2013, pp. 191-215.`,
  },
  {
    number: '3',
    content: `3. G. D’ Alisa, F. Demaria, and G. Kallis, ‘Degrowth’ in G. D’
    Alisa, F. Demaria, and G. Kallis (eds), Degrowth, A Vocabulary for a
    New Era, Routledge, 2015 pp. 1-17.`,
  },
  {
    number: '4',
    content: `4. F. Demaria, F. Schneider, F. Sekulova, J. Martinez-Alier, ‘What
    is Degrowth? From an Activist Slogan to a Social Movement’, p. 197.`,
  },
];

const Degrowth = () => {
  const {
    section,
    setSection,
  }: { section: string | null; setSection: (newSection: string) => void } =
    useContext(SidebarContext);
  return (
    <div
      className=' xs:mb-[10rem] mb-[2rem] xs:mt-[23rem] mt-[10rem] ml-[2rem] xs:ml-[0rem] w-auto'
      id='degrowth'
    >
      <InView
        as='div'
        onChange={(inView, entry) => {
          inView && setSection('degrowth');
        }}
        threshold={0.5}
      >
        <Title>Degrowth</Title>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col'>
            <TextEndnote>
              Emerging from the field of political ecology, degrowth signifies,
              first and foremost, a critique of the narrative of perpetual
              economic growth, and of the centering of growth as a social
              objective.
              <Sup className='align-baseline' content={endNote[0].content}>
                1
              </Sup>{' '}
              Within capitalist cultures, the concept of growth is associated
              across the board with improvement, prosperity, well-being: the
              more we – as individuals, institutions, nations – produce and
              accumulate, the better we’re doing. And, consequently, our
              objectives tend to be growth-oriented. As our governments are
              always striving for higher GDP ratings, we also strive to work
              more, produce more, earn more. Those of us in the arts, too, tend
              to assume that the more we work and the more art we push out, the
              more opportunities will come our way, the more capital (financial
              or cultural) we will gain. At its very foundation, the continued
              existence of the capitalist system relies on perpetual economic
              development. Degrowth, conversely, points out the simple fact that
              infinite growth on a finite planet is impossible.
            </TextEndnote>

            <TextEndnote>
              Beyond this critique, degrowth also proposes possible
              alternatives. While it emerges from multiple streams of ecological
              and social thought and consequently does not stand for a single
              unified vision of a “de-grown” future,
              <Sup
                className='align-baseline font-text text-[0.7rem]'
                content={endNote[1].content}
              >
                2
              </Sup>{' '}
              the consensus points towards the restructuring of societies around
              the values of well-being of human and non-human life,
              equitability, autonomy, simplicity, conviviality, and care.
              <Sup content={endNote[2].content}>3</Sup> In other words:
            </TextEndnote>
            <Quote>
              Degrowth is thus a way to bring forward a new imaginary which
              implies a change of culture and a rediscovery of human identity
              which is disentangled from economic representations.
              <Sup content={endNote[3].content}>4</Sup>
            </Quote>
          </div>
          <div className='xs:flex flex-col hidden'>
            <Endnote className='mt-[2.7rem]'>{endNote[0].content}</Endnote>
            <Endnote className='mt-[9rem]'>{endNote[1].content}</Endnote>
            <Endnote className='mt-[1.5rem]'>{endNote[2].content}</Endnote>
            <Endnote className='mt-[1.5rem]'>{endNote[3].content}</Endnote>
          </div>
        </div>
      </InView>
    </div>
  );
};

export default Degrowth;
