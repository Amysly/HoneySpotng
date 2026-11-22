import React from 'react';
import { FaLeaf, FaAward, FaTint, FaArrowRight } from 'react-icons/fa';

const About = () => {
  const pillars = [
    {
      icon: <FaTint />,
      title: '100% Pure',
      description: 'Zero added sugars, syrups, or artificial preservatives.',
    },
    {
      icon: <FaLeaf />,
      title: 'Sustainable',
      description: 'Ethically harvested in partnership with local beekeepers.',
    },
    {
      icon: <FaAward />,
      title: 'Unprocessed',
      description: 'Cold-strained to keep natural pollen and enzymes intact.',
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-[#FDFBF7] py-24 px-6 lg:px-20 overflow-hidden"
    >
      {/* Subtle Ambient Background Blobs */}
      <div className="" />
      <div className="" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase text-amber-800 bg-amber-100/80 border border-amber-200/60 rounded-full">
            <img
              src="/images/honeycombo.jpg"
              alt=""
              className="w-4 h-4 rounded-full object-cover"
            />
            <span>Who We Are</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-roboto text-emerald-950 tracking-tight mb-4">
            Rooted in Nature, Crafted With Care
          </h2>
          <p className="text-stone-600 font-sans text-lg leading-relaxed">
            Discover the passion, ethical beekeeping, and uncompromising quality behind every jar of Honeyspot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left Image Frame (6 cols) */}
          <div className="lg:col-span-6 relative group">
            <div className="absolute -inset-3 bg-gradient-to-tr from-amber-200/70 to-emerald-100/60 rounded-3xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(6,78,59,0.12)] border border-white">
              <img
                src="/images/honeycombs.jpg"
                alt="Golden honeycombs harvested ethically"
                loading="lazy"
                className="w-full h-[380px] md:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/50 via-transparent to-transparent" />

              {/* Floating Authenticity Badge */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-lg border border-amber-100 flex items-center gap-3.5">
                <img
                  src="/images/honeycombo.jpg"
                  alt="Honeycomb emblem"
                  className="w-10 h-10 rounded-xl object-cover ring-2 ring-amber-200 shrink-0"
                />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    Hive to Jar
                  </p>
                  <p className="text-sm font-black font-roboto text-emerald-950">
                    100% Raw &amp; Unfiltered
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Story Copy (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              Our Story
            </span>
            <h3 className="text-3xl md:text-4xl font-black font-roboto text-emerald-950 leading-tight">
              Bringing Authentic, Untouched Honey to Every Home
            </h3>
            <p className="text-base md:text-lg text-stone-600 leading-relaxed font-sans">
              What started as a deep love for nature and holistic wellness grew into a mission to bring authentic honey to every table. Our journey began with a simple goal: to provide clean, unprocessed honey that is completely free from additives and rich in natural benefits.
            </p>
            <p className="text-base md:text-lg text-stone-600 leading-relaxed font-sans">
              From hive to jar, we uphold strict standards in purity, flavor, and sustainability—partnering directly with dedicated local beekeepers who respect the bees and the environment as much as we do.
            </p>
          </div>
        </div>

        <div className="relative rounded-3xl bg-emerald-950 text-white p-8 md:p-14 overflow-hidden shadow-[0_24px_60px_rgba(6,78,59,0.16)]">
          <div className="absolute -top-24 -right-24 w-80 h-80  rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-amber-500 text-xs font-bold uppercase tracking-widest mb-4">
              <img
                src="/images/honeycombo.jpg"
                alt=""
                className="w-4 h-4 rounded-full object-cover"
              />
              <span>Our Promise</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-black font-roboto text-white mb-5">
              More Than Just a Honey Brand
            </h3>

            <p className="text-base md:text-lg text-emerald-100/90 leading-relaxed font-sans">
              We are a community built on trust, wellness, and harmony with nature. Whether you are stirring a spoonful into your morning tea or using it in your skincare routine,{' '}
              <strong className="text-amber-500 font-bold">Honeyspot</strong> is here to sweeten your life naturally.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white/[0.06] backdrop-blur-sm border border-white/10  rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-500 flex items-center justify-center text-xl mx-auto mb-4">
                  {pillar.icon}
                </div>
                <h4 className="font-bold font-roboto text-white text-lg mb-1.5">
                  {pillar.title}
                </h4>
                <p className="text-emerald-100/80 text-sm font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;