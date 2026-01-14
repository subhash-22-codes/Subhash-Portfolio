import React, { useEffect, useState, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/Navigation';
import { NotFound } from './components/NotFound';

function MainPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <ScrollToTop />
        </Suspense>
      </main>
    </>
  );
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) return null;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
