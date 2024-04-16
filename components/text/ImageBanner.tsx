import Image from 'next/image';

const ImageBanner = ({ srcUrl }: { srcUrl: string }) => {
  return (
    <div className='mr-0 w-auto'>
      <Image
        src={srcUrl}
        alt='degrowth'
        width={748}
        height={372}
        className='h-[160vw] object-cover xs:h-[45vh] xs:w-auto content-start object-left ml-[2rem] xs:ml-[0rem] min-w-full'
      />
    </div>
  );
};

export default ImageBanner;
