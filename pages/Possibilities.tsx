import React from 'react';
import { Section } from '../components/Section';

export const Possibilities: React.FC = () => {
  return (
    <>
      <div className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-brand-yellow blur-[150px] rounded-full mix-blend-screen"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 blur-[150px] rounded-full mix-blend-screen"></div>
         </div>
         
         <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter">
              BEYOND <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-white">VISIBILITY</span>
            </h1>
            <p className="text-2xl md:text-3xl font-light text-gray-300 max-w-4xl mx-auto leading-normal">
              We are building the autonomous jobsite. Where drones capture data without pilots, AI identifies issues without prompts, and decisions are made in real-time.
            </p>
         </div>
      </div>

      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div className="border-l-4 border-black pl-8 py-4">
              <h2 className="text-3xl font-bold mb-4">Predictive Analytics</h2>
              <p className="text-gray-600">Using historical data from thousands of projects to predict schedule slippage before ground is even broken.</p>
           </div>
           <div className="border-l-4 border-brand-yellow pl-8 py-4">
              <h2 className="text-3xl font-bold mb-4">Autonomous Capture</h2>
              <p className="text-gray-600">Drone-in-a-box solutions that wake up, scan the site, dock, and upload data—completely hands-free.</p>
           </div>
           <div className="border-l-4 border-brand-yellow pl-8 py-4">
              <h2 className="text-3xl font-bold mb-4">Augmented Reality</h2>
              <p className="text-gray-600">Walk the jobsite with AR glasses, seeing the finished building superimposed on the current state.</p>
           </div>
           <div className="border-l-4 border-black pl-8 py-4">
              <h2 className="text-3xl font-bold mb-4">Material Tracking</h2>
              <p className="text-gray-600">AI that counts brick pallets, steel beams, and pipes automatically to verify inventory.</p>
           </div>
        </div>
      </Section>
    </>
  );
};