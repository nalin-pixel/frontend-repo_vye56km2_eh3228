import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

const HeroSpline = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* soft gradient overlay that doesn't block the 3D scene */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.45)_45%,rgba(2,6,23,0.9)_100%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur">
          <Sparkles size={14} className="text-cyan-400" />
          Agentic AI Campus Companion
        </span>
        <h1 className="text-balance bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Learn smarter. Feel supported. Build your future.
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-zinc-300/90 sm:text-lg">
          A proactive, emotion-aware platform that tracks attendance, predicts performance, plans careers, and cares for your well-being — all powered by autonomous AI agents.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#features"
            className="rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            Explore Features
          </a>
          <a
            href="#agents"
            className="rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Meet the Agents
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSpline;
