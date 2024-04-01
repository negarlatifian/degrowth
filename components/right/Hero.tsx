import Image from 'next/image';

const Hero = () => {
  return (
    <div className='flex flex-col mt-[3rem] '>
      <h1 className='font-text text-[2.4rem] leading-10 mb-[1rem]'>
        The Degrowth Toolbox
        <br />
        For Artistic Practices
      </h1>
      <Image src='/Images/1.jpg' alt='hero' height={642} width={938} />
    </div>
  );
};

export default Hero;
