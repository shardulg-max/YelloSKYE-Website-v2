import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  gray?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', dark = false, gray = false }) => {
  let bgClass = "bg-white";
  if (dark) bgClass = "bg-black text-white";
  if (gray) bgClass = "bg-brand-gray";

  return (
    <section className={`py-20 md:py-32 px-6 ${bgClass} ${className}`}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
};