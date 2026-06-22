import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Sections/Hero";
import CTA from "./components/Sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CTA />
      </main>
      <Footer />
    </>
  );
}