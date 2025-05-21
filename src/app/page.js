import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects'; // Import the Projects component

export default function HomePage() {
  return (
    <> {/* Using a fragment to avoid unnecessary div if Hero is full-page */}
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects /> {/* Use the Projects component */}
      
      {/* Placeholder sections - content will be added in subsequent tasks */}
      <section id="contact" className="min-h-screen py-16 container mx-auto px-4 sm:px-6 lg:px-8"> {/* Added container and padding */}
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        {/* Content for Contact */}
      </section>
    </>
  );
}
