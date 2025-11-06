import React from 'react';

const CallToAction = () => {
  return (
    <section className="relative w-full bg-zinc-950 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/20 via-indigo-500/10 to-fuchsia-500/20 p-8 text-center text-white backdrop-blur">
          <h3 className="text-2xl font-semibold sm:text-3xl">Ready to experience your AI Campus Companion?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-200">Start with a demo workspace. Add your marks, upload your resume, and meet your personal agents.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-white/30">Launch Demo</a>
            <a href="#features" className="rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
