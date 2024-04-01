import Text from '@/components/text/Text';
import React from 'react';

const About = () => {
  return (
    <div className='flex flex-col mt-[3rem]'>
      <Text>
        The Degrowth Toolbox for Artistic Practices was initiated in 2021 by{' '}
        <a className='font-text text-[1.1rem] text-green '>
          Alexandra Papademetriou.
        </a>
      </Text>

      <Text>
        The current iteration of The Toolbox was developed in 2023 with support
        from Konstnärsnämnden. It was exhibited in December of that year in
        Göteborg under the title Like Roots Splitting Stone, with support from
        KulturUngdom.
      </Text>
      <Text>
        You can read the previous iteration of The Toolbox{' '}
        <a className='font-text text-[1.1rem] text-green '>here.</a>
      </Text>
    </div>
  );
};

export default About;
