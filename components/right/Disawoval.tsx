import React from 'react';
import Title from '../text/Title';
import Subtitle from '../text/Subtitle';
import Text from '../text/Text';
import Quote from '../text/Quote';

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
    <div className='xs:mb-[10rem] mb-[2rem] xs:mt-[23rem] mt-[5rem] ml-[2rem] xs:ml-[0rem]'>
      <Title>Disawovals</Title>
      <Subtitle>Efficiency</Subtitle>
      <Text>
        The emphasis on efficiency in a traditional sense tends to prioritise
        maximising outputs with minimal inputs, a mindset deeply embedded in the
        logic of the capitalist marketplace. This approach, while seemingly
        effective in a neoliberal art system, is unsustainable and incompatible
        with artistic practice. Efficiency goes against:{' '}
      </Text>
      <ul className='pl-5 list-disc'>
        {list.map((el) => (
          <li className='font-text xs:text-[1.1rem] text-[0.75rem]'>{el}</li>
        ))}
      </ul>
      <Text>All of this in favour of:</Text>
      <ul className='pl-5 list-disc mb-[1rem]'>
        <li className='font-text xs:text-[1.1rem] text-[0.75rem]'>
          easily quantifiable outcomes,
        </li>
        <li className='font-text xs:text-[1.1rem] text-[0.75rem]'>
          and met deadlines.{' '}
        </li>
      </ul>
      <Text>
        Efficiency, of course, is practically enforced when one is working on
        multiple projects at once (see hustle culture), trying to maximise
        professional opportunities in highly competitive fields.
      </Text>
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
        competitive venues. Artists conceal opportunities from their friends as
        a way of getting an edge up on the capital-driven competition.
        Gallerists compete with other gallerists and curators compete with
        curators. Artists who sell their work compete for the attention of a
        limited number of collectors. Collectors compete with other collectors
        to acquire the work of artists.
      </Quote>
      <Quote>
        This is a treadmill made from decomposing shit that is so devoid of
        nutrients that even its compost won’t allow anything fresh to grow.6”
      </Quote>
      <Text>
        Despite the recent wave of socially engaged artistic practices and
        collectives entering the mainstream, we have yet to shake off the
        pervasive myth of the lone genius artist. The reality for most of us is
        that we are still lone individuals engaged in constant competition with
        each other: competing for work, for exhibition space, for attention,
        even for education. The more you win these “competitions”, the more you
        will continue to win, the more resources you accumulate.7 This state of
        constant competition is, of course, what makes our exploitation possible
        to a large degree.
      </Text>
      <Text>
        Working against the competitive model can lead not only to more caring
        and convivial conditions for art-making – it can also set the groundwork
        for truly critical professional relationships. To quote Mark Fisher
        again: Who better to kick your ass a little than your collaborators?
        Collaboration on equal footing, by its nature, leads to a healthy
        exchange of feedback and criticism.
      </Text>
      <Subtitle>Hustle culture – or Constant overwork</Subtitle>
      <Text>
        Arising from the embrace of well-being as a value and the rejection of
        capitalist ideas of efficiency comes the rejection of hustle culture:
        the rejection of the constant pressure to produce work, to be shown, to
        build your CV, to market, to be on brand, to constantly consider how any
        and every facet of your life can be somehow turned into an art product,
        to then in turn consume as much art and artistic literature as possible.
        This relentless pursuit of constant productivity places an unsustainable
        burden on individuals. Hustle culture glorifies busyness as a status
        symbol, creating a false narrative that one's worth is directly
        proportional to their level of activity.
      </Text>
      <Text>
        This is not only ridiculous in itself, it is also damaging – to our
        physical and mental health, and to the world around us as we furiously
        burn through resources. The obsession with overworking and constant
        achievement not only leads to burnout but also perpetuates a toxic cycle
        that prioritises quantity over quality.{' '}
      </Text>
      <Text>
        The heightened anxiety over productivity which plagues the arts is, of
        course, due in large part to the particular financial precarity of our
        field. We must question how much our participation in the structures
        that keep us precarious perpetuates the existence of the structures
        themselves.
      </Text>
      <Subtitle>
        The over-reliance on grant-givers, galleries, museums, collectors, and
        commissioners{' '}
      </Subtitle>
      <Text>
        It often seems that there are only two pathways an artistic project can
        take: one is to follow the directives of the art market; the other is to
        follow the directives of state-backed grant-givers. The market-driven
        approach reduces artistic endeavours to decorations and investments,
        prioritising production efficiency and profitability above all, as has
        been pointed out many times. The grant-based approach, on the other
        hand, leads to projects that are bureaucratised from the get-go – ideas
        are sanitised and squeezed into the confines of an application’s
        character limit. We often have projects that are designed to be at their
        best as proposals, optimised for approval by committees of strangers
        before they’re allowed to be haphazardly realised. Either way, because
        the money we get from sales and grants is just enough to barely keep us
        going but never enough to allow us periods of undirected and free work,
        we are often forced to shift our entire practices towards producing
        these empty projects.
      </Text>
      <Text>
        By continuing to play by the rules of these institutions we are
        indirectly legitimising and perpetuating them – to the detriment of not
        only our individual practices, but also to the practices of others (as
        these institutions continue to reinforce the dominance of certain voices
        while marginalising the rest), and to the possibility of creating
        alternative structures.{' '}
      </Text>
      <Text>
        Moving away from the “protection” of market and state institutions, we
        have more opportunities to work collaboratively, to support each other
        professionally, mentally, and emotionally in our artistic endeavours.
      </Text>
      <Text>
        When we do choose to work with grant-givers, galleries, museums,
        collectors, and commissioners, we always have the option to
        strategically use our positions and resources in order to create spaces
        for community-building; or even to entirely redirect our resources
        towards other, socially transformative purposes.8
      </Text>
    </div>
  );
};

export default Disawoval;
