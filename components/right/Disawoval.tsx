import React from 'react';
import Title from '../text/Title';
import Subtitle from '../text/Subtitle';
import Text from '../text/Text';
import Quote from '../text/Quote';
import TextEndnote from '../text/TextEndnote';
import Endnote from '../text/Endnote';
import Sup from '../text/Sup';

const endNote = [
  {
    number: '6',
    content: `6. Mark Fisher, ‘Against Competition’, Blunt Art Text (B.A.T.),
    April 2006.`,
  },
  {
    number: '7',
    content: `7. For a more thorough unpacking of this see: K. Szreder, ‘W is for
    winner takes it all’, in The ABC of the projectariat: Living and
    working in a precarious art world, Manchester University Press,
    2021, and: G. Sholette, Dark Matter: Art and Politics in the Age of
    Enterprise Culture, Pluto Press, 2010.`,
  },
  {
    number: '8',
    content: `8. :)`,
  },
];

const list = [
  'depth,',
  'complexity,',
  'nuance,',
  'exploration,',
  'experimentation,',
  'reflection,',
  'evaluation,',
  're-evaluation,',
  'discussion,',
  'criticality,',
  'participatory processes,',
  'inclusion of multiple points of view,',
  'and caring frameworks.',
];

const Disawoval = () => {
  return (
    <div
      className='xs:mb-[10rem] mb-[2rem] xs:mt-[10rem] mt-[5rem] ml-[2rem] xs:ml-[0rem]'
      id='disavowals'
    >
      <Title>Disavowals</Title>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col'>
          <Subtitle>Efficiency</Subtitle>
          <TextEndnote>
            The emphasis on efficiency in a traditional sense tends to
            prioritise maximising outputs with minimal inputs, a mindset deeply
            embedded in the logic of the capitalist marketplace. This approach,
            while seemingly effective in a neoliberal art system, is
            unsustainable and incompatible with artistic practice. Efficiency
            goes against:{' '}
          </TextEndnote>
          <ul className='pl-5 list-disc ml-[2rem]'>
            {list.map((el) => (
              <li className='font-text xs:text-[1.1rem] text-[0.75rem] leading-5'>
                {el}
              </li>
            ))}
          </ul>
          <TextEndnote>All of this in favour of:</TextEndnote>
          <ul className='pl-5 list-disc mb-[1rem] ml-[2rem]'>
            <li className='font-text xs:text-[1.1rem] text-[0.75rem] leading-3'>
              easily quantifiable outcomes,
            </li>
            <li className='font-text xs:text-[1.1rem] text-[0.75rem]'>
              and met deadlines.{' '}
            </li>
          </ul>
          <TextEndnote>
            Efficiency, of course, is practically enforced when one is working
            on multiple projects at once (see hustle culture), trying to
            maximise professional opportunities in highly competitive fields.
          </TextEndnote>
          <Subtitle>Competition</Subtitle>
          <Quote>
            “So much of the way that the art world is structured favours
            competition. Grants are competitive. Art schools stage student
            competitions. Students compete for funding. Hundreds compete for a
            single art school teaching position. Professors compete with other
            professors. Artists compete with artists – stealing ideas instead of
            sharing them, or using copyright laws to guard against thoughtful
            re-use. Artists compete for shows in a limited number of exhibition
            spaces instead of finding their own ways to exhibit outside of these
            competitive venues. Artists conceal opportunities from their friends
            as a way of getting an edge up on the capital-driven competition.
            Gallerists compete with other gallerists and curators compete with
            curators. Artists who sell their work compete for the attention of a
            limited number of collectors. Collectors compete with other
            collectors to acquire the work of artists.
          </Quote>
          <Quote>
            This is a treadmill made from decomposing shit that is so devoid of
            nutrients that even its compost won’t allow anything fresh to grow.
            <Sup content={endNote[0].content}>6</Sup>”
          </Quote>
          <TextEndnote>
            Despite the recent wave of socially engaged artistic practices and
            collectives entering the mainstream, we have yet to shake off the
            pervasive myth of the lone genius artist. The reality for most of us
            is that we are still lone individuals engaged in constant
            competition with each other: competing for work, for exhibition
            space, for attention, even for education. The more you win these
            “competitions”, the more you will continue to win, the more
            resources you accumulate.<Sup content={endNote[1].content}>7</Sup>{' '}
            This state of constant competition is, of course, what makes our
            exploitation possible to a large degree.
          </TextEndnote>
          <TextEndnote>
            Working against the competitive model can lead not only to more
            caring and convivial conditions for art-making – it can also set the
            groundwork for truly critical professional relationships. To quote
            Mark Fisher again: Who better to kick your ass a little than your
            collaborators? Collaboration on equal footing, by its nature, leads
            to a healthy exchange of feedback and criticism.
          </TextEndnote>
          <Subtitle>Hustle culture – or Constant overwork</Subtitle>
          <TextEndnote>
            Arising from the embrace of well-being as a value and the rejection
            of capitalist ideas of efficiency comes the rejection of hustle
            culture: the rejection of the constant pressure to produce work, to
            be shown, to build your CV, to market, to be on brand, to constantly
            consider how any and every facet of your life can be somehow turned
            into an art product, to then in turn consume as much art and
            artistic literature as possible. This relentless pursuit of constant
            productivity places an unsustainable burden on individuals. Hustle
            culture glorifies busyness as a status symbol, creating a false
            narrative that one's worth is directly proportional to their level
            of activity.
          </TextEndnote>
          <TextEndnote>
            This is not only ridiculous in itself, it is also damaging – to our
            physical and mental health, and to the world around us as we
            furiously burn through resources. The obsession with overworking and
            constant achievement not only leads to burnout but also perpetuates
            a toxic cycle that prioritises quantity over quality.{' '}
          </TextEndnote>
          <TextEndnote>
            The heightened anxiety over productivity which plagues the arts is,
            of course, due in large part to the particular financial precarity
            of our field. We must question how much our participation in the
            structures that keep us precarious perpetuates the existence of the
            structures themselves.
          </TextEndnote>
          <Subtitle>
            The over-reliance on grant-givers, galleries, museums, collectors,
            and commissioners{' '}
          </Subtitle>
          <TextEndnote>
            It often seems that there are only two pathways an artistic project
            can take: one is to follow the directives of the art market; the
            other is to follow the directives of state-backed grant-givers. The
            market-driven approach reduces artistic endeavours to decorations
            and investments, prioritising production efficiency and
            profitability above all, as has been pointed out many times. The
            grant-based approach, on the other hand, leads to projects that are
            bureaucratised from the get-go – ideas are sanitised and squeezed
            into the confines of an application’s character limit. We often have
            projects that are designed to be at their best as proposals,
            optimised for approval by committees of strangers before they’re
            allowed to be haphazardly realised. Either way, because the money we
            get from sales and grants is just enough to barely keep us going but
            never enough to allow us periods of undirected and free work, we are
            often forced to shift our entire practices towards producing these
            empty projects.
          </TextEndnote>
          <TextEndnote>
            By continuing to play by the rules of these institutions we are
            indirectly legitimising and perpetuating them – to the detriment of
            not only our individual practices, but also to the practices of
            others (as these institutions continue to reinforce the dominance of
            certain voices while marginalising the rest), and to the possibility
            of creating alternative structures.{' '}
          </TextEndnote>
          <TextEndnote>
            Moving away from the “protection” of market and state institutions,
            we have more opportunities to work collaboratively, to support each
            other professionally, mentally, and emotionally in our artistic
            endeavours.
          </TextEndnote>
          <TextEndnote>
            When we do choose to work with grant-givers, galleries, museums,
            collectors, and commissioners, we always have the option to
            strategically use our positions and resources in order to create
            spaces for community-building; or even to entirely redirect our
            resources towards other, socially transformative purposes.
            <Sup content={endNote[2].content}>8</Sup>
          </TextEndnote>
        </div>
        <div className='xs:flex flex-col hidden'>
          <Endnote className='mt-[73.5rem]'>{endNote[0].content}</Endnote>
          <Endnote className='mt-[8.6rem]'>{endNote[1].content}</Endnote>
          <Endnote className='mt-[71.3rem]'>{endNote[2].content}</Endnote>
        </div>
      </div>
    </div>
  );
};

export default Disawoval;
