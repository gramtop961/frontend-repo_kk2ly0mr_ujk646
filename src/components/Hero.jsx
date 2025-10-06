import React from 'react';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 via-fuchsia-500/10 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mb-6">
            <Rocket size={14} />
            <span>Vite + React + Tailwind</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
            Hello, World!
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            A crisp starter to kick off your next idea. Built with modern tooling and a clean aesthetic.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-gray-900 px-4 py-2 text-sm font-medium shadow hover:shadow-md transition"
            >
              Explore Features
            </a>
            <a
              href="https://vitejs.dev"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 text-white px-4 py-2 text-sm font-medium hover:bg-white/10 transition"
            >
              Learn Vite
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
