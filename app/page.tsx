import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
export default function Home() {
  return (
      <>
          <Header />
          <Hero />
          <ProductShowcase />
          <Pricing />
          <Testimonials />
          <CallToAction />
          <Footer />
      </>
  );
}
