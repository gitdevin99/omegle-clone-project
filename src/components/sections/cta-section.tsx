import React from 'react';

const CtaSection = () => {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container mx-auto flex items-center justify-center">
        <a
          href="#"
          className="inline-block rounded-lg bg-gradient-to-b from-[#4A90E2] to-[#3A7AD1] px-8 py-4 text-base font-semibold text-primary-foreground shadow-md transition-transform duration-200 ease-in-out hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Start Video Chat
        </a>
      </div>
    </section>
  );
};

export default CtaSection;