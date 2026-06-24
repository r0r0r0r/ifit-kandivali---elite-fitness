import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './src/components/Layout';
import Home from './src/pages/Home';
import About from './src/pages/About';
import Pillars from './src/pages/Pillars';
import Coaches from './src/pages/Coaches';
import Results from './src/pages/Results';
import Contact from './src/pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="pillars" element={<Pillars />} />
          <Route path="coaches" element={<Coaches />} />
          <Route path="results" element={<Results />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
