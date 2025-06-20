import Header from "../components/main/Header";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import ExploraBogota from "../components/home/ExploraBogota";
import Footer from "../components/main/Footer";
import PlanesDestacados from "@/components/PlanesDestacados";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className='bg-[#2b2b2b] text-[#e4e2dd] min-h-screen font-sans'>
      <Header />
      <ExploraBogota />
      <Hero />
      <Categories />
      <PlanesDestacados />
      <CTA />
      <Footer />
    </main>
  );
}
