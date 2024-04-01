import Left from '@/components/Left';
import Hero from '@/components/Left';
import Right from '@/components/Right';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex flex-row bg-white h-lvh overflow-y-hidden'>
      <Left />
      <Right />
    </main>
  );
}
