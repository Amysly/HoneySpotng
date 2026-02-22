import React from 'react';
import Testimonials from './Testimonials'
import { FaLeaf, FaShippingFast, FaHandHoldingHeart,
   FaCheckCircle, FaLock, FaSmile } from 'react-icons/fa';

const Wallpaper = () => {
  const reasons = [
    {
      icon: <FaLeaf className="text-green-700 text-3xl md:text-4xl" />,
      title: '100% Natural Honey',
      desc: 'Our honey is raw, pure, and straight from the hive with no additives or preservatives.',
    },
    {
      icon: <FaShippingFast className="text-green-700 text-3xl md:text-4xl" />,
      title: 'Fast Delivery',
      desc: 'We offer swift and secure nationwide delivery right to your doorstep.',
    },
    {
      icon: <FaHandHoldingHeart className="text-green-700 text-3xl md:text-4xl" />,
      title: 'Locally Sourced',
      desc: 'Supporting local farmers and beekeepers by sourcing our honey locally.',
    },
    {
      icon: <FaCheckCircle className="text-green-700 text-3xl md:text-4xl" />,
      title: 'Tested & Trusted',
      desc: 'Tested by health experts and loved by hundreds of happy customers.',
    },
    {
      icon: <FaLock className="text-green-700 text-3xl md:text-4xl" />,
      title: 'Secure Payment',
      desc: 'All transactions are protected with top-grade encryption and safety measures.',
    },
    {
      icon: <FaSmile className="text-green-700 text-3xl md:text-4xl" />,
      title: 'Satisfaction Guaranteed',
      desc: 'We are committed to your satisfaction with every jar of HoneySpot honey.',
    },
  ];

  return (
    <section className="py-12 bg-yellow-500">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-center text-green-700 mb-12 
       ">
          Why Choose HoneySpot?
        </h2>

        {/* Responsive Grid: 1 col (mobile), 2 cols (tablet), 3 cols (desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="group bg-white shadow-lg rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border-b-4 border-transparent hover:border-green-700"
            >
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-full bg-yellow-100 group-hover:bg-green-100 transition-colors duration-300">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold text-green-700 leading-tight">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section>
        <Testimonials/>
      </section>
    </section>
  );
};

export default Wallpaper;