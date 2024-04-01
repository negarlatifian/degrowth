import Left from '@/components/Left';
import Hero from '@/components/Left';
import Right from '@/components/Right';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex flex-row'>
      <Left />
      <Right />
    </main>
  );
}
