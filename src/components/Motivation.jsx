import React from 'react';

const quotes = [
  {
    text: "Your voice can light the way for someone who's still in the dark.",
    author: "— You",
  },
  {
    text: "Confidence grows when you show up for yourself every day.",
    author: "— You",
  },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    author: "— Arthur Ashe",
  },
];

function Motivation() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-pink-50/60 py-16 sm:py-24">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl"></div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Motivation for Young Creators</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Share short videos, reels, and quotes that lift up the next generation.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {quotes.map((q, i) => (
            <blockquote key={i} className="rounded-2xl border border-pink-200 bg-white p-6 shadow-sm">
              <p className="text-slate-800">“{q.text}”</p>
              <footer className="mt-3 text-sm text-slate-500">{q.author}</footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Share your story</h3>
              <p className="mt-1 max-w-xl text-slate-600">Add a short video or reel about your journey. We can embed your Instagram reels here.</p>
            </div>
            <a href="#contact" className="inline-flex items-center rounded-full bg-pink-600 px-5 py-2.5 text-white shadow-md hover:bg-pink-500">Submit a Story</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Motivation;
