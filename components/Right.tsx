import Image from 'next/image';
import Hero from './right/Hero';
import Introduction from './right/Introduction';
import Degrowth from './right/Degrowth';
import Values from './right/Values';
import ImageBanner from './text/ImageBanner';
import Disawoval from './right/Disawoval';
import Strategies from './right/Strategies';

const Right = () => {
  return (
    <div className='flex flex-col w-[61.5%] overflow-y-scroll overflow-x-hidden'>
      <Hero />
      <Introduction />
      <Degrowth />
      <ImageBanner srcUrl='/Images/2.jpg' />
      <Values />
      <ImageBanner srcUrl='/Images/3.jpg' />
      <Disawoval />
      <ImageBanner srcUrl='/Images/4.jpg' />
      <Strategies />
    </div>
  );
};

export default Right;
