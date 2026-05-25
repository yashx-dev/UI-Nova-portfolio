import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Tools } from './components/sections/Tools';
import { Projects } from './components/sections/Project';
import { Testimonials } from './components/sections/Testimonial';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <div className="section-divider"></div>
      <About />
      <div className="section-divider"></div>
      <Skills />
      <div className="section-divider"></div>
      <Tools />
      <div className="section-divider"></div>
      <Projects />
      <div className="section-divider"></div>
      <Testimonials />
      <div className="section-divider"></div>
      <Contact />
    </Layout>
  );
}

export default App;