import About from './sections/About';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Footer from './sections/Footer';
import Navbar from './sections/Navbar';
import Projects from './sections/Projects';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tech from './sections/Tech';
import WorkExperience from './sections/Experience';
export default function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Tech />
      <WorkExperience />
      <Contact />
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Zoom}
      />
    </main>
  );
}
