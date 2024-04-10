import Image from 'next/image';

const ImageBanner = ({ srcUrl }: { srcUrl: string }) => {
  return (
    <div className='mr-0 w-auto'>
      <Image
        src={srcUrl}
        alt='degrowth'
        width={748}
        height={372}
        className='mr-0 w-auto min-w-full'
      />
    </div>
  );
};

export default ImageBanner;
