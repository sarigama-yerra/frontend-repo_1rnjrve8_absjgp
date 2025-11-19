import React from 'react';

function CTA() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="rounded-3xl bg-slate-900 p-8 sm:p-12 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-pink-500/30 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl" />
        </div>
        <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-bold sm:text-3xl">Collaborations, bookings, or mentorship</h3>
            <p className="mt-2 max-w-2xl text-slate-200">Ready to create something beautiful together? Send a quick note and we’ll get back to you.</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-slate-900 shadow hover:opacity-90">Email me</a>
            <a href="#" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-white hover:bg-white/10">Instagram DM</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
