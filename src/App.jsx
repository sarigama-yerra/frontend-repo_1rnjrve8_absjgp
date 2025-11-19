import React from 'react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Motivation from './components/Motivation';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold tracking-tight">Your Name</div>
          <nav className="hidden gap-6 text-sm text-slate-700 sm:flex">
            <a href="#portfolio" className="hover:text-slate-900">Portfolio</a>
            <a href="#blog" className="hover:text-slate-900">Blog</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-slate-900 px-4 py-2 text-sm text-white shadow-sm sm:inline-flex">Book</a>
        </div>
      </header>

      <main>
        <Hero />
        <Portfolio />
        <Motivation />
        <CTA />
      </main>

      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Your Name — Empowering young girls to create with confidence.
        </div>
      </footer>
    </div>
  );
}

export default App;
