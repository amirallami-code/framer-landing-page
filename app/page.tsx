import Header from "@/components/Header";
import Image from 'next/image';
import textImage from '../public/shapes/cog.png';

export default function Home() {
  return (
      <>
        <Header />

        <Image src={textImage} width={15000} alt="test" />
        <div className="w-full h-[5000px] bg-linear-to-b from-white-500 to-black-500"></div>
      </>
  );
}
