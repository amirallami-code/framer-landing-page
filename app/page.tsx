import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";

export default function Home() {
  return (
      <>
          <Header />
          <Hero />
          <LogoTicker />

          <div className="h-[5000px] w-full"></div>
      </>
  );
}
