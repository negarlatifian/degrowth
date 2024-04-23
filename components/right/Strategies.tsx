'use client';
import React, { useContext } from 'react';
import Title from '../text/Title';
import Subtitle from '../text/Subtitle';
import Text from '../text/Text';
import Quote from '../text/Quote';
import TextEndnote from '../text/TextEndnote';
import Endnote from '../text/Endnote';
import Sup from '../text/Sup';
import { InView, useInView } from 'react-intersection-observer';
import { SidebarContext } from '../Context';

const endNote = [
  {
    number: '9',
    content: `9. Barbara Muraca, ‘Forward’, in Degrowth in Movement(s): Exploring
    Pathways for Transformation, ed. Corinna Burkhart, Matthias
    Schmelzer, and Nina Treu (Winchester, UK ; Washington, USA: Zero
    Books, 2020). p. 6`,
  },
  {
    number: '10',
    content: `10. Ekaterina Chertkovskaya, Alexander Paulsson, and Stefania Barca,
    ‘Introduction: The End of Political Economy as We Knew It? From
    Growth Realism to Nomadic Utopianism’, in Towards a Political
    Economy of Degrowth, ed. Ekaterina Chertkovskaya, Alexander
    Paulsson, and Stefania Barca, Transforming Capitalism (London:
    Rowman & Littlefield International, 2019). p. 8-9`,
  },
  {
    number: '8',
    content: `8. :)`,
  },
];

const Strategies = () => {
  const { section, setSection } = useContext(SidebarContext);
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  return (
    <div
      className='xs:mb-[8rem] mb-[2rem] xs:mt-[10rem] mt-[5rem] ml-[2rem] xs:ml-[0rem]'
      id='strategies'
    >
      <Title>Strategies</Title>
      <div className='flex flex-row justify-between mt-[-3.5rem]'>
        <div className='flex flex-col'>
          <InView
            as='div'
            onChange={(inView, entry) => {
              inView && setSection('efficiency');
            }}
            threshold={1}
          >
            <Subtitle SubRef={ref} id='slowness'>
              Slowness / Laziness
            </Subtitle>
          </InView>
          <TextEndnote>
            Slowness and laziness come here as the direct opposites of and
            antidotes to efficiency and overwork. Embracing a certain degree of
            laziness challenges the relentless pursuit of constant activity and
            output. It encourages us to resist the narrative that busyness
            equates success and to prioritise moments of rest and reflection. In
            these moments of apparent inactivity, ideas compost beneath the
            surface, and a more deliberate approach to artistic production can
            emerge. Intentionally pivoting towards slowness and laziness within
            our artistic practices represents a radical departure from the
            prevailing obsession with productivity and a move towards
            well-being.
          </TextEndnote>
          <InView
            as='div'
            onChange={(inView, entry) => {
              inView && setSection('making');
            }}
            threshold={1}
          >
            <Subtitle SubRef={ref} id='making'>
              Making care work visible
            </Subtitle>
          </InView>
          <TextEndnote>
            The vast majority of the labour that goes into artistic projects is
            entirely unseen and peripheral to what we consider art-making
            proper. As mentioned in care, it is the endless maintenance work of
            making things run smoothly: the labour of facilitators, fabricators,
            organisers, supporters, and even educators, which usually goes
            uncredited and underpaid (if paid at all).{' '}
          </TextEndnote>
          <TextEndnote>
            Within a system that shines the spotlight only on the so-called
            “author” of a work, making this behind-the-scenes work visible
            undermines the myth of strictly individual achievement and paints a
            much more accurate picture of people’s contributions to a creative
            process. This is important for more than simple honesty – as this
            care labour is primarily done by marginalised art workers, naming
            and honouring their contributions enables us to break them out of
            the “background” and allow them to be appreciated for their own
            merits. It also sets the foundations to demand proper remuneration
            for care work on an institutional level.
          </TextEndnote>
          <InView
            as='div'
            onChange={(inView, entry) => {
              inView && setSection('sharing');
            }}
            threshold={1}
          >
            <Subtitle SubRef={ref} id='sharing'>
              Sharing resources
            </Subtitle>
          </InView>
          <TextEndnote>
            In a field where access to resources often determines visibility and
            success, sharing becomes a means of democratising opportunities. It
            breaks down barriers to entry within the art world for those who
            might be marginalised or excluded, allowing a diverse range of
            voices and perspectives to emerge. The act of sharing extends beyond
            mere material resources; it encompasses mentorship, support, and the
            creation of communal spaces where artists can work collectively.
          </TextEndnote>
          <TextEndnote>
            By sharing tools, spaces, and knowledge, we can create a network of
            support that transcends the boundaries of individuals and individual
            projects. This collaborative spirit not only enriches our artistic
            endeavours but also fosters a sense of solidarity among art workers.
            The exchange of resources becomes a form of mutual aid,
            strengthening the artistic community's resilience against challenges
            and fostering a culture of reciprocity.
          </TextEndnote>
          <InView
            as='div'
            onChange={(inView, entry) => {
              inView && setSection('sharing');
            }}
            threshold={1}
          >
            <Subtitle SubRef={ref} id='creating'>
              Creating alternative and independent spaces and platforms
            </Subtitle>
          </InView>
          <TextEndnote>
            Alternative and independent spaces are fundamental for the existence
            of a vibrant artistic discourse. They offer a refuge for
            experimentation, enabling artists to explore themes and forms that
            might be deemed too radical or unconventional by established venues.
            They also allow younger artists to find their footing in the local
            scene, and give all local artists opportunities to meet and work
            together, contributing to community-building. Independent and
            alternative spaces become hubs for collaboration, dialogue, and the
            exchange of ideas, fostering a sense of belonging among artists who
            may feel marginalised or underrepresented in mainstream settings. In
            this way, alternative spaces play a crucial role in dismantling
            hierarchies and thus challenge the status quo. They become vital
            agents in the decentralisation of cultural authority, creating a
            more democratic and accessible avenue for artists to share their
            work with the public.{' '}
          </TextEndnote>
          <InView
            as='div'
            onChange={(inView, entry) => {
              inView && setSection('organisation');
            }}
            threshold={1}
          >
            <Subtitle SubRef={ref} id='organisation'>
              Self-organisation
            </Subtitle>
          </InView>
          <TextEndnote>
            At its core, self-organisation champions the idea that individuals,
            whether working independently or collectively, possess the capacity
            to imagine, define, and act independently and consciously. This
            autonomy extends to freedom from dependencies on external
            authorities, allowing artists to take full ownership of their own
            artistic practices.
          </TextEndnote>
          <TextEndnote>
            Furthermore, self-organisation embodies a paradigm shift away from
            hierarchical structures, placing emphasis on collaboration,
            autonomy, and shared decision-making. One of the key strengths of
            self-organisation lies in its adaptability and responsiveness to the
            needs of artists and their communities. By avoiding rigid
            bureaucratic structures, self-organised initiatives can swiftly
            address emerging challenges, experiment with innovative approaches,
            and remain resilient in the face of external pressures.
          </TextEndnote>
          <InView
            as='div'
            onChange={(inView, entry) => {
              inView && setSection('redirection');
            }}
            threshold={1}
          >
            <Subtitle SubRef={ref} id='redirection'>
              Redirection of institutional resources (or: being sneaky)
            </Subtitle>
          </InView>
          <TextEndnote>
            The vast majority of us have no option but to engage in the
            institutional game: we apply for grants, we work with galleries, we
            hunt commissions. Sometimes, we even manage to be successful in
            these endeavours. And, the more successful we are, the more
            opportunities continue to come our way. And, if we’re quite lucky,
            now and then we’ll find ourselves into (perhaps temporary, perhaps
            not-so-temporary) positions of privilege – controlling a variety of
            resources. By bending the rules when we can and redirecting or
            redistributing some of those resources when we can, we can actively
            engage in the dismantling of systemic inequalities, contributing to
            a more just and inclusive cultural landscape.
          </TextEndnote>
          <TextEndnote>
            As we know, in most institutional settings resources have been
            historically concentrated among a select few, perpetuating
            exclusivity and limiting opportunities for a more diverse array of
            artists. The act of redirecting resources seeks to break down these
            barriers by prioritising inclusivity, amplifying marginalised
            voices, and fostering a more democratic distribution of support.
          </TextEndnote>
          <TextEndnote>
            This redirection can take various forms, including offering
            financial help, exhibition opportunities, and educational resources.
            Financial resources are channelled towards projects that align with
            values of diversity, equity, and inclusion, ensuring that artists
            from underrepresented backgrounds receive the support needed to
            thrive. Exhibition opportunities can be shared with others, bringing
            forward a broader spectrum of voices, challenging the dominance of
            certain narratives and perspectives.
          </TextEndnote>
          <InView
            as='div'
            onChange={(inView, entry) => {
              inView && setSection('militant');
            }}
            threshold={0.75}
          >
            <Subtitle SubRef={ref} id='militant'>
              Militant optimism – or, utopianism as strategy
            </Subtitle>
          </InView>
          <Quote>
            Distinct from mere naïve optimism, which is blind to power and
            awaits with hope some kind of automatic transformation, militant
            optimism identifies hidden possibilities and acts like a kind of
            amplifier, making [possible, concrete utopias] visible, engaging
            them actively, and weaving them into new configurations. Concrete
            utopias also have a prefigurative and performative power: they open
            up space for imagining alternatives and in doing so they act against
            the effectiveness of TINA-narratives (TINA: there is no
            alternative).<Sup content={endNote[0].content}>9</Sup>
          </Quote>
          <TextEndnote>
            Militant optimism implies a proactive, determined approach to
            cultivating hope proposing counter-hegemonic narratives. It rejects
            passive acceptance of the status quo and embraces the belief that,
            through collective effort and creative action, a better future is
            not only possible but achievable. This optimism operates as a
            driving force, motivating people to engage with the world in
            transformative ways.
          </TextEndnote>
          <TextEndnote>
            This complements the notion of utopia, framed as not “something
            unfeasible and unattainable, but instead as a description of a
            desired world to come", that "fosters a likelihood of change, and
            points to an unfulfilled future that differs from the present".
            Thus, it contains both a description and a process. Utopianism, like
            utopia, contains a description and a process, but puts a particular
            emphasis on the latter.<Sup content={endNote[1].content}>10</Sup>
          </TextEndnote>
          <TextEndnote>
            For many, talk of “optimism” and “utopia” sounds hopelessly
            idealistic and naive, if not outright cringeworthy. But, why should
            we surrender imagination? To whom are we supposed to relinquish the
            possibilities of our future? Defeatism is a self-fulfilling
            prophecy. If not even artists cannot allow themselves to be
            idealistic, then who can?
          </TextEndnote>
          <InView
            as='div'
            onChange={(inView, entry) => {
              inView && setSection('navigating');
            }}
            threshold={0.5}
          >
            <Subtitle SubRef={ref} id='navigating'>
              Navigating contradictions – or, staying with the trouble
            </Subtitle>
          </InView>
          <TextEndnote>
            The freedom to live and act according to the values one holds is, in
            some ways, a privilege. Most of us have to compromise our ideals to
            navigate the practicalities of everyday life within existing
            systems. We talk about the radical potential of rest and
            non-participation in the neoliberal system; and then we have to work
            on multiple crappy projects at once, just to make rent. We work with
            and for institutions we consider exploitative. We compete tooth and
            nail for grants, residencies, commissions.
          </TextEndnote>
          <TextEndnote>
            These incongruities can crush any optimistic feeling and make it
            seem like all attempts at systemic change are pointless. The word
            “hypocrisy” might come to mind. But then – how possible is it to
            change a system from the “outside”? Is there even an “outside” that
            is entirely independent from the “inside”? Is there only one way to
            bring about change? Is there only one way to be “radical”?
          </TextEndnote>
          <TextEndnote>
            The idea of “staying with the trouble” embraces the messiness
            inherent in these endeavours. To stay with the trouble means to
            acknowledge the discomfort of contradictions and to confront
            challenges and inevitable failures without abandoning the pursuit of
            transformative change. We must stay with it long enough to adjust,
            adapt, and try again. The change we’re looking for is the result of
            a process of continuously proposing, testing, critiquing, and
            proposing anew; of growing, pushing, cracking, splitting, growing
            once more.
          </TextEndnote>
        </div>
        <div className='xs:flex flex-col hidden'>
          <Endnote className='mt-[160rem]'>
            9. Barbara Muraca, ‘Forward’, in Degrowth in Movement(s): Exploring
            Pathways for Transformation, ed. Corinna Burkhart, Matthias
            Schmelzer, and Nina Treu (Winchester, UK ; Washington, USA: Zero
            Books, 2020). p. 6
          </Endnote>
          <Endnote className='mt-[10.5rem]'>
            10. Ekaterina Chertkovskaya, Alexander Paulsson, and Stefania Barca,
            ‘Introduction: The End of Political Economy as We Knew It? From
            Growth Realism to Nomadic Utopianism’, in Towards a Political
            Economy of Degrowth, ed. Ekaterina Chertkovskaya, Alexander
            Paulsson, and Stefania Barca, Transforming Capitalism (London:
            Rowman & Littlefield International, 2019). p. 8-9
          </Endnote>
        </div>
      </div>
    </div>
  );
};

export default Strategies;
