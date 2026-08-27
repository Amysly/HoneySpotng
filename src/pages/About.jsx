import React from 'react';

const About = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-20 overflow-hidden">
      <div className="flex flex-col items-center justify-center mb-16">
        <div className="flex items-center gap-3 mb-4">
          <img src='/images/honeycombo.jpg' alt='beecomb icon' className='h-10 w-10 animate-pulse' />
          <h2 className="text-3xl md:text-4xl  font-black font-roboto text-green-800">About Us</h2>
        </div>
        <div className="w-20 h-1.5 bg-amber-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div className="relative group">
          <div className="absolute -inset-4 bg-amber-100 rounded-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
          <img 
            src='images/honeycombs.jpg' 
            alt="Honeycombs in the wild" 
            className="relative rounded-2xl shadow-xl w-full h-[400px] object-cover"
          />
        </div>

        <div className="space-y-6 text-center lg:text-left">
          <h3 className="text-3xl sm:text-2xl font-bold font-sans text-green-700">Our Story</h3>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium font-sans">
            What started as a love for nature and wellness turned into a mission to 
            bring authentic honey to every home. Our journey began with a simple goal: 
            to provide clean, unprocessed honey that's free from additives and full of natural benefits.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium font-sans">
            From hive to jar, we ensure the highest standards in purity, taste, and sustainability. 
            We work directly with local beekeepers who respect the environment as much as we do.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-amber-50 rounded-3xl p-8 md:p-12 text-center shadow-inner">
        <div className="flex justify-center items-center gap-3 mb-6">
          <img src='/images/honeycombo.jpg' alt='beecomb icon' className='h-8 w-8' />
          <h3 className="text-3xl  sm:text-2xl font-bold text-green-700 font-roboto">Our Promise</h3>
        </div>
        
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-10 font-sans font-medium">
          We’re more than just a honey brand. We’re a community built on trust, health, 
          and harmony with nature. Whether you’re adding a spoon to your tea or using 
          it in your skincare, <strong>Honeyspot</strong> is here to sweeten your life naturally.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-xl shadow-sm">
            <span className="text-3xl block mb-2">🍯</span>
            <p className="font-bold font-roboto text-green-800">100% Pure</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-sm">
            <span className="text-3xl block mb-2">🌿</span>
            <p className="font-bold font-roboto text-green-800">Sustainable</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-sm">
            <span className="text-3xl block mb-2">✨</span>
            <p className="font-bold font-roboto text-green-800">Unprocessed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;