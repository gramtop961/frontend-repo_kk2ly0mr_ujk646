import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-center text-xs text-white/60">
        <p>
          © {new Date().getFullYear()} HelloWorld Starter. Built with Vite, React, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
