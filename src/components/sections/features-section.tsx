import React from 'react';

// Data for the feature cards. Sourced from the provided content and HTML structure.
const features = [
  {
    imageSrc: '/static/b2.png',
    title: 'Secured Environment',
    description: 'Experience a meticulously designed environment where your security is our top priority. We use advanced screening measures to ensure smooth, worry-free interactions, giving you peace of mind as you connect.',
  },
  {
    imageSrc: '/static/b3.png',
    title: 'Fast Connections',
    description: 'Jump into exciting conversations with our ultra-efficient matching system. Designed to minimize wait times and enhance your chat experience, our system is known for its speed and ease, setting us apart from other platforms.',
  },
  {
    imageSrc: '/static/b4.png',
    title: 'Global Reach',
    description: 'Connect with a diverse, international community on our platform. Embrace a global perspective as you interact with users from around the world, expanding your network and enriching your experience beyond borders.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-5">
        <h2 className="text-center text-[36px] font-bold text-text-primary mb-12">
          Make New Friends
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <article 
              key={index} 
              className="bg-card rounded-lg border border-border p-10 text-center shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex flex-col items-center"
            >
              <img 
                src={feature.imageSrc} 
                alt="image" 
                className="h-40 object-contain"
              />
              <div className="mt-6">
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  {feature.title}
                </h2>
                <p className="text-base text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;