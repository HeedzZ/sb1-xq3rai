import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Parallax from './components/Parallax';
import About from './components/About';
import Contact from './components/Contact';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen"
      >
        <Header />
        <main>
          <Hero />
          <Services />
          <Parallax />
          <Portfolio />
          <About />
          <Contact />
        </main>
        <footer className="bg-gray-900 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} La French Poke. Tous droits réservés.</p>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;