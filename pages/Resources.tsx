import React from 'react';
import { Section } from '../components/Section';

const resources = [
  { cat: "Guide", title: "The Ultimate Guide to Drone Mapping in 2024", date: "Oct 12, 2023" },
  { cat: "Case Study", title: "How Build Corp reduced rework by 15%", date: "Sep 28, 2023" },
  { cat: "Webinar", title: "Implementing Reality Capture at Scale", date: "Sep 15, 2023" },
  { cat: "Blog", title: "5 Signs Your Jobsite is Behind Schedule", date: "Aug 30, 2023" },
  { cat: "Guide", title: "BIM Coordination Best Practices", date: "Aug 12, 2023" },
  { cat: "News", title: "YelloSKYE Raises Series B Funding", date: "Jul 22, 2023" },
];

export const Resources: React.FC = () => {
  return (
    <>
      <Section gray>
        <h1 className="text-5xl font-black mb-12">RESOURCES</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {resources.map((res, i) => (
             <div key={i} className="bg-white p-8 hover:shadow-xl transition-shadow cursor-pointer flex flex-col h-full border-t-4 border-transparent hover:border-brand-yellow">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-yellow bg-black inline-block px-2 py-1 mb-4 w-max">
                  {res.cat}
                </div>
                <h3 className="text-2xl font-bold mb-4 flex-grow">{res.title}</h3>
                <div className="text-gray-400 text-sm mt-4 pt-4 border-t border-gray-100">
                  {res.date}
                </div>
             </div>
           ))}
        </div>
      </Section>
    </>
  );
};