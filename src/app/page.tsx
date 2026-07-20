import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Sections/Hero";
import CTA from "./components/Sections/CTA";
import WhatsAppButton from "./components/WppButton";
import GetApp from "./components/Sections/GetApp";
import Highlights from "./components/Sections/Highlights";
import About from "./components/Sections/About";
import Services from "./components/Sections/Services";
import Testimonials from "./components/Sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GetApp />
        {/* <Highlights /> */}
        <About />
        <Services />
        {/* <Testimonials /> */}
        <CTA />
      </main>
      <Footer />
      {/* <WhatsAppButton /> */}
    </>
  );
}