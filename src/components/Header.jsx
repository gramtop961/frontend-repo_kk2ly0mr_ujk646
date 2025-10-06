import React from 'react';

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-rose-500" />
          <span className="text-white font-semibold tracking-tight">HelloWorld</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
          <a href="#hero" className="hover:text-white transition">Home</a>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="https://react.dev" target="_blank" rel="noreferrer" className="hover:text-white transition">Docs</a>
        </nav>
      </div>
    </header>
  );
}
