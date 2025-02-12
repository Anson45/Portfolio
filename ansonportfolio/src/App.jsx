
import './App.css'
import './index.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Qualifications from './components/Qualifications/Qualifications';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Projects from './components/Projects/Projects';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
      <div>
          <Header />
          <main className="main">
              <Home />
              <About />
              <Skills />
              <Qualifications />
              <Services />
              <Portfolio />
              <Projects />
              <Testimonial />
              <Contact />
          </main>
          <Footer/>
      </div>
  );
};


export default App
