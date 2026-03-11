import React from "react";
import { Button } from "./Button";

type RoleValue = {
  role: string;
  points: string[];
};

type Step = {
  title: string;
  desc: string;
};

type SolutionPageProps = {
  eyebrow: string;
  headline: string;
  subline: string;
  pains: string[];
  steps: Step[];
  roles: RoleValue[];
};

export const SolutionPage: React.FC<SolutionPageProps> = ({
  eyebrow,
  headline,
  subline,
  pains,
  steps,
  roles,
}) => {
  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="pt-40 pb-28 text-center">
        <p className="text-xs uppercase tracking-widest text-black/50 mb-4">
          {eyebrow}
        </p>

        <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
          {headline}
        </h1>

        <p className="text-xl text-black/60 max-w-3xl mx-auto mb-10">
          {subline}
        </p>

        <div className="flex justify-center gap-6">
          <Button variant="primary" size="lg">
            Book a Live Demo
          </Button>
          <Button variant="outline" size="lg">
            See real project
          </Button>
        </div>
      </section>

      {/* PAIN MIRROR */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">
          The reality today
        </h2>

        <ul className="space-y-6 text-lg text-black/70">
          {pains.map((p, i) => (
            <li key={i}>— {p}</li>
          ))}
        </ul>
      </section>

      {/* SHIFT */}
      <section className="py-28 bg-brand-yellow/5">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-2xl font-bold mb-4">Before</h3>
            <ul className="space-y-3 text-black/60">
              <li>Manual updates</li>
              <li>Delayed reporting</li>
              <li>Reactive decisions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">With YelloSKYE</h3>
            <ul className="space-y-3 text-black/80 font-medium">
              <li>Continuous visual record</li>
              <li>Time-linked verification</li>
              <li>Decisions grounded in proof</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-32 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center">
          How it works
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-brand-yellow text-black font-black flex items-center justify-center">
                {i + 1}
              </div>
              <h4 className="text-xl font-bold mb-3">
                {step.title}
              </h4>
              <p className="text-black/60">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ROLE VALUE */}
      <section className="py-28 bg-brand-gray">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">
            Value for every role
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {roles.map((r, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-sm"
              >
                <h4 className="font-bold mb-4">{r.role}</h4>
                <ul className="space-y-3 text-black/70">
                  {r.points.map((p, j) => (
                    <li key={j}>— {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 text-center">
        <h2 className="text-4xl font-black mb-6">
          See this on a real site
        </h2>
        <p className="text-lg text-black/60 mb-10">
          Book a live walkthrough with actual project data.
        </p>
        <Button variant="primary" size="lg">
          Book a Live Demo
        </Button>
      </section>
    </main>
  );
};