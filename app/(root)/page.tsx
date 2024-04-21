import Degrowth from '@/components/right/Degrowth';
import Disawoval from '@/components/right/Disawoval';
import Hero from '@/components/right/Hero';
import Introduction from '@/components/right/Introduction';
import Strategies from '@/components/right/Strategies';
import Values from '@/components/right/Values';
import ImageBanner from '@/components/text/ImageBanner';

export default function Home() {
  // useEffect(() => {
  //   // getScrollPosition()
  // }, []);

  return (
    <>
      <Hero />
      <Introduction />
      <Degrowth />
      <ImageBanner srcUrl='/Images/2.jpg' />
      <Values />
      <ImageBanner srcUrl='/Images/3.jpg' />
      <Disawoval />
      <ImageBanner srcUrl='/Images/4.jpg' />
      <Strategies />
      {/* </InView> */}
    </>
  );
}
