import React from 'react';

const mockPhotos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop', title: 'Golden Hour' },
  { id: 2, src: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=1200&auto=format&fit=crop', title: 'Pastel Dreams' },
  { id: 3, src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop', title: 'Studio Vibes' },
  { id: 4, src: 'https://images.unsplash.com/photo-1496614932623-0a3a9743552e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHb2xkZW4lMjBIb3VyfGVufDB8MHx8fDE3NjM1NTQ5NTF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', title: 'Street Mood' },
  { id: 5, src: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1200&auto=format&fit=crop', title: 'Neon City' },
  { id: 6, src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop', title: 'Soft Morning' },
];

function Portfolio() {
  return (
    <section id="portfolio" className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Featured Work</h2>
          <p className="mt-2 text-slate-600">A curated selection of photos and frames from your reels.</p>
        </div>
        <a href="#contact" className="hidden sm:inline-flex rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm text-slate-800 hover:bg-slate-50">Work with me</a>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-3">
        {mockPhotos.map((p) => (
          <figure key={p.id} className="group relative overflow-hidden rounded-2xl bg-slate-100">
            <img src={p.src} alt={p.title} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-60" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-3 text-sm text-white opacity-0 transition group-hover:opacity-100">
              {p.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
