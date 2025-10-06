import React from 'react';
import { Sparkles, Zap, Shield, Layers } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Elegant UI',
    desc: 'Polished, accessible components styled with Tailwind CSS.'
  },
  {
    icon: Zap,
    title: 'Fast by default',
    desc: 'Vite-powered dev server and lightning-fast HMR.'
  },
  {
    icon: Shield,
    title: 'Type-safe ready',
    desc: 'Easily extend with TypeScript and robust tooling.'
  },
  {
    icon: Layers,
    title: 'Modular',
    desc: 'Small, focused components you can compose freely.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 hover:border-white/20 transition"
            >
              <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
