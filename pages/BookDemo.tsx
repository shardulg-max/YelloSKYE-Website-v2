import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

export const BookDemo: React.FC = () => {
  return (
    <Section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-10 md:p-16 shadow-2xl max-w-2xl w-full border-t-8 border-brand-yellow">
        <h1 className="text-4xl font-black mb-2 uppercase">Book a Demo</h1>
        <p className="text-gray-600 mb-8">See how YelloSKYE can transform your project visibility.</p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-bold uppercase tracking-wider mb-2">First Name</label>
              <input type="text" className="bg-gray-100 p-4 border-b-2 border-transparent focus:border-brand-yellow outline-none transition-colors" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-bold uppercase tracking-wider mb-2">Last Name</label>
              <input type="text" className="bg-gray-100 p-4 border-b-2 border-transparent focus:border-brand-yellow outline-none transition-colors" />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-bold uppercase tracking-wider mb-2">Work Email</label>
            <input type="email" className="bg-gray-100 p-4 border-b-2 border-transparent focus:border-brand-yellow outline-none transition-colors" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-bold uppercase tracking-wider mb-2">Company</label>
            <input type="text" className="bg-gray-100 p-4 border-b-2 border-transparent focus:border-brand-yellow outline-none transition-colors" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-bold uppercase tracking-wider mb-2">Project Type</label>
            <select className="bg-gray-100 p-4 border-b-2 border-transparent focus:border-brand-yellow outline-none transition-colors">
               <option>Commercial</option>
               <option>Industrial</option>
               <option>Infrastructure</option>
               <option>Residential</option>
            </select>
          </div>

          <Button type="submit" fullWidth className="mt-8 py-4 text-lg">
            Schedule Demo
          </Button>
        </form>
      </div>
    </Section>
  );
};