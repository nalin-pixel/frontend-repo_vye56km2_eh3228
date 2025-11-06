import React from 'react';
import HeroSpline from './components/HeroSpline';
import FeatureGrid from './components/FeatureGrid';
import AgentShowcase from './components/AgentShowcase';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white">
      {/* Simple top bar */}
      <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cyan-400" />
            <span className="text-sm font-semibold tracking-wide text-white">AI Campus Companion</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-zinc-300 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#agents" className="hover:text-white">Agents</a>
            <a href="#" className="rounded-md bg-white/10 px-3 py-1.5 text-white hover:bg-white/20">Get Started</a>
          </nav>
        </div>
      </header>

      <main>
        <HeroSpline />
        <FeatureGrid />
        <AgentShowcase />
        <CallToAction />
      </main>

      <footer className="border-t border-white/10 bg-zinc-950 py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} AI Campus Companion. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#agents" className="hover:text-white">Agents</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
