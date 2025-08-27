import Image from "next/image";

const HeroVideoSection = () => {
  return (
    <section className="w-full bg-background py-16 md:py-20">
      <div className="container">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-text-primary mb-8 md:mb-12">
          Omegle Video Chat With Strangers
        </h1>
        <article className="max-w-5xl mx-auto rounded-lg bg-card shadow-[0_4px_20px_rgba(0,0,0,0.1)] overflow-hidden">
          <Image
            src="https://www.omegle.fun/static/b1.png"
            alt="Omegle hero image showing a collage of faces with the word 'omegle' overlayed"
            width={1120}
            height={560}
            className="w-full h-auto"
            priority
          />
        </article>
      </div>
    </section>
  );
};

export default HeroVideoSection;