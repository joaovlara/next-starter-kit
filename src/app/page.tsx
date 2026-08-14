import Hero from "./_components/Sections/Hero";
import CTA from "./_components/Sections/CTA";
import GetApp from "./_components/Sections/GetApp";
import Highlights from "./_components/Sections/Highlights";
import About from "./_components/Sections/About";
import Services from "./_components/Sections/Services";
import Preloader from "./_components/Animations/Preloader";
import Testimonials from "./_components/Sections/Testimonials";
import DownloadApp from "./_components/Sections/DownloadApp";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <GetApp />
        <Highlights />
        <About />
        <Services />
        <DownloadApp />
        <Testimonials />
        <CTA />
        <Preloader />
      </main>
    </>
  );
}
