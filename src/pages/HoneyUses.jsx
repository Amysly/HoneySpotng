import React from 'react';
import { FaLeaf, FaArrowRight } from 'react-icons/fa';

const HoneyUses = () => {
  const uses = [
    {
      number: '01',
      tag: 'Daily Wellness',
      title: 'Morning Immunity & Tea Elixir',
      description:
        'Stir a spoonful into warm lemon water, herbal tea, or ginger infusions. Unlike refined sugar, raw honey preserves natural enzymes and antioxidants that soothe the throat and boost morning energy.',
      image:
        'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=900&q=80',
      alt: 'Wooden honey dipper drizzling golden raw honey next to warm tea',
    },
    {
      number: '02',
      tag: 'Culinary & Breakfast',
      title: 'Natural Sweetener & Glaze',
      description:
        'Drizzle over warm pancakes, Greek yogurt, oatmeal, or fresh fruit bowls. It also caramelizes beautifully as a savory-sweet glaze for roasted chicken, grilled plantains, and baked pastries.',
      image:
        'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=80',
      alt: 'Golden honey drizzled over a stack of warm breakfast pancakes',
    },
    {
      number: '03',
      tag: 'Natural Skincare',
      title: 'Hydrating Glow Face Mask',
      description:
        'Raw honey is a natural humectant and antibacterial powerhouse. Apply a thin layer directly to clean skin for 15 minutes to lock in moisture, calm blemishes, and leave your skin noticeably soft.',
      image:
        'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=900&q=80',
      alt: 'Glass jars filled with pure organic honey and honeycomb',
    },
  ];

  return (
    <section
      id="uses"
      className="relative bg-[#FDFBF7] py-24 px-6 lg:px-20 overflow-hidden"
    >
      <div className="" />
      <div className="" />

      <div className="relative max-w-7xl mx-auto">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-roboto text-emerald-950 tracking-tight mb-4">
             Everyday Ways to Enjoy Pure Honey
          </h2>
          <p className="text-stone-600 font-sans text-lg leading-relaxed">
            From your morning mug to your skincare routine, discover how a jar of raw, 
            unfiltered Honeyspot honey elevates your daily wellness.
          </p>
        </div>

        {/* 2x2 Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {uses.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden
               shadow-[0_14px_40px_rgba(6,78,59,0.05)]  hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-50 sm:h-52 overflow-hidden bg-amber-100">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent" />


                <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-emerald-950 font-bold font-roboto text-xs tracking-wide shadow-sm">
                  {item.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-4 md:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-roboto text-emerald-950  mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 font-sans text-base leading-relaxed mb-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HoneyUses;