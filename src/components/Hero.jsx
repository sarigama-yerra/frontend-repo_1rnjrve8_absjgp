import React from 'react';
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-16 sm:pt-28 sm:pb-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-sm font-medium text-pink-700 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-pink-500" />
            Creative • Photography • Motivation
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Inspire through your lens and your voice
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            A calm, elegant space to showcase your Instagram photos and reels, share
            motivational stories, and connect with brands and young creators.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#portfolio" className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:opacity-90">
              View Portfolio
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-slate-800 transition hover:bg-slate-50">
              Book a Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
