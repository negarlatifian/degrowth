import Text from '@/components/text/Text';
import React from 'react';

const About = () => {
  return (
    <div className='flex flex-col mt-[5rem] sm:w-[61.5%] ml-[2rem]'>
      <Text>
        The Degrowth Toolbox for Artistic Practices was initiated in 2021 by{' '}
        <a
          className='text-green font-text xs:w-[40rem] w-[89%] xs:text-[1.1rem] text-[0.75rem] mb-[1rem] xs:leading-5 leading-4'
          href='https://alexandrapapademetriou.com/'
        >
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
        <a className=' text-green font-text xs:w-[40rem] w-[89%] xs:text-[1.1rem] text-[0.75rem] mb-[1rem] xs:leading-5 leading-4'>
          here.
        </a>
      </Text>
    </div>
  );
};

export default About;
