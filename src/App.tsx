import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Admissions from './pages/Admissions';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Testimonials from './pages/Testimonials';
import Downloads from './pages/Downloads';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<>
              <ScrollToTop />
              <Home />
            </>} />
            <Route path="/about" element={<>
              <ScrollToTop />
              <About />
            </>} />
            <Route path="/programs" element={<>
              <ScrollToTop />
              <Programs />
            </>} />
            <Route path="/admissions" element={<>
              <ScrollToTop />
              <Admissions />
            </>} />
            <Route path="/gallery" element={<>
              <ScrollToTop />
              <Gallery />
            </>} />
            <Route path="/news" element={<>
              <ScrollToTop />
              <News />
            </>} />
            <Route path="/testimonials" element={<>
              <ScrollToTop />
              <Testimonials />
            </>} />
            <Route path="/downloads" element={<>
              <ScrollToTop />
              <Downloads />
            </>} />
            <Route path="/contact" element={<>
              <ScrollToTop />
              <Contact />
            </>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
