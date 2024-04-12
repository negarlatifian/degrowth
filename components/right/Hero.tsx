import Image from 'next/image';

const Hero = () => {
  return (
    <div className='flex flex-col xs:mt-[3rem] mt-[6rem] ml-[2rem] xs:ml-[0rem] '>
      <div className='mb-[1rem]'>
        <h1 className='inline font-text xs:text-[2.4rem] text-[1.6rem] leading-7 xs:leading-10'>
          The Degrowth Toolbox
        </h1>
        <div className='flex flex-row'>
          <h1 className='inline font-text xs:text-[2.4rem] text-[1.6rem] leading-7 xs:leading-10'>
            For Artistic Practices
          </h1>
          <p className=' font-semiMono xs:text-[0.9rem] text-[0.8rem] text-green flex align-bottom ml-[0.6rem]'>
            0.2
          </p>
        </div>
      </div>
      <Image
        src='/Images/1.jpg'
        alt='hero'
        height={642}
        width={938}
        className=' h-[160vw] object-cover xs:h-[80vh] xs:w-auto content-start object-left relative z-0'
      />
    </div>
  );
};

export default Hero;
