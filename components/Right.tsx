import Image from 'next/image';
import Hero from './right/hero';
import Introduction from './right/Introduction';

const Right = () => {
  return (
    <div className='flex flex-col w-[60%] overflow-y-scroll'>
      <Hero />
      <Introduction />
    </div>
  );
};

export default Right;
