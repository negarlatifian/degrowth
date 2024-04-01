import React from 'react';
import Text from '../text/Text';
import Quote from '../text/Quote';
import Endnote from '../text/Endnote';
import TextEndnote from '../text/TextEndnote';
import Sup from '../text/Sup';

const Degrowth = () => {
  return (
    <div className='mt-[23rem] mb-[10rem]'>
      <h2 className='font-display text-[2.5rem] mb-[3rem]'>Degrowth</h2>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col'>
          <TextEndnote>
            Emerging from the field of political ecology, degrowth signifies,
            first and foremost, a critique of the narrative of perpetual
            economic growth, and of the centering of growth as a social
            objective.
            <sup className='align-baseline'>1</sup> Within capitalist cultures,
            the concept of growth is associated across the board with
            improvement, prosperity, well-being: the more we – as individuals,
            institutions, nations – produce and accumulate, the better we’re
            doing. And, consequently, our objectives tend to be growth-oriented.
            As our governments are always striving for higher GDP ratings, we
            also strive to work more, produce more, earn more. Those of us in
            the arts, too, tend to assume that the more we work and the more art
            we push out, the more opportunities will come our way, the more
            capital (financial or cultural) we will gain. At its very
            foundation, the continued existence of the capitalist system relies
            on perpetual economic development. Degrowth, conversely, points out
            the simple fact that infinite growth on a finite planet is
            impossible.
          </TextEndnote>

          <TextEndnote>
            Beyond this critique, degrowth also proposes possible alternatives.
            While it emerges from multiple streams of ecological and social
            thought and consequently does not stand for a single unified vision
            of a “de-grown” future,
            <sup className='align-baseline font-text text-[0.7rem]'>2</sup> the
            consensus points towards the restructuring of societies around the
            values of well-being of human and non-human life, equitability,
            autonomy, simplicity, conviviality, and care.
            <Sup>3</Sup> In other words:
          </TextEndnote>
          <Quote>
            Degrowth is thus a way to bring forward a new imaginary which
            implies a change of culture and a rediscovery of human identity
            which is disentangled from economic representations.<Sup>4</Sup>
          </Quote>
        </div>
        <div className='flex flex-col'>
          <Endnote className='mt-[2.7rem]'>
            1. G. D’ Alisa, F. Demaria, and G. Kallis, ‘Degrowth’ in G. D’
            Alisa, F. Demaria, and G. Kallis (eds), Degrowth, A Vocabulary for a
            New Era, Routledge, 2015, p. 3.
          </Endnote>
          <Endnote className='mt-[9rem]'>
            2. F. Demaria, F. Schneider, F. Sekulova, J. Martinez-Alier, ‘What
            is Degrowth? From an Activist Slogan to a Social Movement’,
            Environmental Values, vol. 22, 2013, pp. 191-215.
          </Endnote>
          <Endnote className='mt-[1.5rem]'>
            3. G. D’ Alisa, F. Demaria, and G. Kallis, ‘Degrowth’ in G. D’
            Alisa, F. Demaria, and G. Kallis (eds), Degrowth, A Vocabulary for a
            New Era, Routledge, 2015 pp. 1-17.
          </Endnote>
          <Endnote className='mt-[1.5rem]'>
            4. F. Demaria, F. Schneider, F. Sekulova, J. Martinez-Alier, ‘What
            is Degrowth? From an Activist Slogan to a Social Movement’, p. 197.
          </Endnote>
        </div>
      </div>
    </div>
  );
};

export default Degrowth;
