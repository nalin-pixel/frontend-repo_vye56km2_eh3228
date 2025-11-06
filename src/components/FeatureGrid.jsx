import React from 'react';
import { Brain, BarChart3, FileCheck2, UserHeart, Compass, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Smart Attendance',
    desc: 'Face/QR-based check-in with location validation and real-time sync. Get alerts for low attendance and trends.'
  },
  {
    icon: BarChart3,
    title: 'Academic Insights',
    desc: 'Predict CGPA, detect weak subjects, and get weekly AI-driven progress reports with personalized study plans.'
  },
  {
    icon: Compass,
    title: 'Career Planner',
    desc: 'AI analyzes your profile and suggests internships, roles, and a roadmap with skill-gap courses.'
  },
  {
    icon: FileCheck2,
    title: 'Resume Builder',
    desc: 'Upload your resume for instant feedback on structure, keywords, and alignment with target roles.'
  },
  {
    icon: UserHeart,
    title: 'Wellness & Mood',
    desc: 'Emotion-aware agent tracks mood and sends supportive messages, breaks, and mindfulness prompts.'
  },
  {
    icon: CheckCircle2,
    title: 'Agentic Automation',
    desc: 'Autonomous student, academic, career, and wellness agents collaborate with shared memory.'
  }
];

const FeatureGrid = () => {
  return (
    <section id="features" className="relative w-full bg-zinc-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Everything you need to thrive on campus</h2>
        <p className="mt-3 max-w-2xl text-zinc-300">Smart attendance, performance prediction, career planning, wellness support — beautifully unified.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="mb-4 inline-flex rounded-lg bg-cyan-500/10 p-3 text-cyan-400 ring-1 ring-cyan-500/20">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
