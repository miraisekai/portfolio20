import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="App" id="home">
      <Router>
        <Header />
        <Routes>
          <Route path="/portfolio20" element={<About />} />
          <Route path="/portfolio20/portfolio" element={<Portfolio />} />
          <Route path="/portfolio20/contact" element={<Contact />} />
          <Route path="/portfolio20/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;