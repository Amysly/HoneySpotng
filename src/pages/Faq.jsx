import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Faq = ({faqs}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-amber-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black font-roboto text-green-800 mb-10 text-center">
          Got Questions? <span className="text-amber-600">We Have Answers</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faqData, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl transition-all duration-300 border ${
                  isActive ? 'border-green-600 shadow-md' : 'border-amber-100'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer focus:outline-none"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isActive}
                >
                  <h3 className={`text-lg md:text-xl font-bold font-roboto transition-colors ${
                    isActive ? 'text-green-700' : 'text-gray-800'
                  }`}>
                    {faqData.question}
                  </h3>
                  <div className={`transition-transform duration-300 ${isActive ? 'rotate-180 text-green-700' : 'text-amber-500'}`}>
                    <FaChevronDown />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isActive ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 md:p-6 pt-0 border-t border-amber-50">
                    <p className="text-gray-600 font-sans font-medium leading-relaxed text-base md:text-lg">
                      {faqData.answer} 
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;