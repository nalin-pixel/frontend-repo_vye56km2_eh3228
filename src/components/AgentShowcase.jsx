import React from 'react';
import { GraduationCap, BarChart, Briefcase, HeartPulse } from 'lucide-react';

const agents = [
  {
    icon: GraduationCap,
    name: 'Student Agent',
    desc: 'Monitors attendance, mood, and grades to suggest breaks, notes, and learning strategies.'
  },
  {
    icon: BarChart,
    name: 'Academic Agent',
    desc: 'Predicts risk, recommends tutors and materials, and delivers weekly summaries to mentors.'
  },
  {
    icon: Briefcase,
    name: 'Career Agent',
    desc: 'Analyzes employability, suggests internships/certifications, and updates your roadmap.'
  },
  {
    icon: HeartPulse,
    name: 'Wellness Agent',
    desc: 'Tracks emotion patterns, schedules check-ins, and promotes balance and mental clarity.'
  }
];

const AgentShowcase = () => {
  return (
    <section id="agents" className="relative w-full bg-gradient-to-b from-zinc-950 to-zinc-900 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Meet your autonomous AI agents</h2>
            <p className="mt-3 max-w-2xl text-zinc-300">Each agent thinks, reasons, and acts on your behalf, collaborating through shared memory.</p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map(({ icon: Icon, name, desc }) => (
            <div key={name} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 inline-flex rounded-lg bg-indigo-500/10 p-3 text-indigo-400 ring-1 ring-indigo-500/20">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="mt-2 text-sm text-zinc-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentShowcase;
