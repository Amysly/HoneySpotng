import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate()
  const handleNavigate =()=>{
    navigate('/products')
  }
  return (
    <section className="relative overflow-hidden bg-honeycomb py-16 lg:py-24">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-5xl md:text-6xl font-black text-amber-900 leading-tight">
              Pure & <span className="text-amber-600">Natural</span> Honey
            </h1>
            <p className="text-amber-800 text-xl md:text-2xl font-medium max-w-lg mx-auto lg:mx-0">
              Straight from the hive to your table. Experience the golden standard of sweetness.
            </p>
            <div className="pt-4">
              <Button
              onClick={handleNavigate}
              >
                Explore Our Honey
              </Button>
            </div>
          </div>

          {/* Image Composition */}
          <div className="relative h-[400px] md:h-[500px] flex justify-center items-center">
            {/* Main Center Image */}
            <div className="relative z-20 w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-white
             shadow-2xl overflow-hidden">
              <img
                src="/images/honeyone.jpg"
                alt="Honey jar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top Left Image - Floating */}
            <div className="absolute top-0 left-4 md:left-10 z-10 w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-white shadow-xl overflow-hidden animate-bounce-slow">
              <img
                src="/images/bee.jpg"
                alt="Bee"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Right Image - Floating */}
            <div className="absolute bottom-4 right-4 md:right-10 z-30 w-36 h-36 md:w-48
             md:h-48 rounded-full border-4 border-white shadow-xl overflow-hidden">
              <img
                src="/images/honeydripping.jpg"
                alt="Honey dripping"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Element: Golden Circle */}
            <div className="absolute w-72 h-72 bg-amber-200 rounded-full blur-3xl opacity-30 -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;