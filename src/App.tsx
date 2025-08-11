import About from './sections/About';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Footer from './sections/Footer';
import Navbar from './sections/Navbar';
import Projects from './sections/Projects';
import { Toaster } from 'react-hot-toast';
import Tech from './sections/Tech';
import Experience from './sections/Experience';
export default function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Tech />
      <Experience />
      <Contact />
      <Footer />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
        }}
      />
    </main>
  );
}
