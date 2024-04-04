import Image from 'next/image';

const Hero = () => {
  return (
    <div className='flex flex-col xs:mt-[3rem] mt-[5rem] ml-[2rem] xs:ml-[0rem] '>
      <h1 className='font-text xs:text-[2.4rem] text-[1.6rem] leading-7 xs:leading-10 mb-[1rem]'>
        The Degrowth Toolbox
        <br />
        For Artistic Practices
      </h1>
      <Image
        src='/Images/1.jpg'
        alt='hero'
        height={642}
        width={938}
        className=' h-[45vw] w-auto content-start object-right-top relative z-0'
      />
    </div>
  );
};

export default Hero;
