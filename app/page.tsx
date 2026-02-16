import Navbar from './components/Navbar'; // 1. Add this import
import Hero from './components/Hero';
import Logos from './components/Logos';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
// import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function Home() {
  return (
    <>
      <Navbar /> {/* 2. Add the component here */}
      <main>
        <Hero />
        <About />
        <Gallery />
        <Logos />
        <Contact />
        {/* <Footer /> */}
        <BackToTop />
      </main>
    </>
  );
}