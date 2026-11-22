import React, { useState } from 'react';
import { FaChevronDown, FaArrowRight } from 'react-icons/fa';

const Faq = ({ faqs = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Opens the first item by default for immediate engagement

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative bg-[#FDFBF7] py-24 px-6 lg:px-20 overflow-hidden"
    >
      {/* Subtle Ambient Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black font-roboto text-emerald-950 tracking-tight mb-4">
            Got Questions? We Have Answers
          </h2>
          <p className="text-stone-600 font-sans text-lg">
            Everything you need to know about our raw honey, harvesting process, and delivery.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faqData, index) => {
            const isActive = activeIndex === index;
            const formattedIndex = String(index + 1).padStart(2, '0');

            return (
              <div
                key={index}
                className={`group rounded-2xl transition-all duration-300 border ${
                  isActive
                    ? 'bg-white border-emerald-700/30 shadow-[0_12px_32px_rgba(6,78,59,0.08)]'
                    : 'bg-white/75 hover:bg-white border-amber-100/90 hover:border-amber-300/70 shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isActive}
                  className="w-full flex items-center justify-between gap-4 p-6 md:p-7 text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start md:items-center gap-4">
                    <span
                      className={`text-xs font-black font-roboto px-2.5 py-1 rounded-lg transition-colors duration-300 mt-0.5 md:mt-0 ${
                        isActive
                          ? 'bg-amber-500 text-white'
                          : 'bg-amber-100/80 text-amber-800 group-hover:bg-amber-200/70'
                      }`}
                    >
                      {formattedIndex}
                    </span>
                    <h3
                      className={`text-lg md:text-xl font-bold font-roboto transition-colors duration-200 ${
                        isActive
                          ? 'text-emerald-900'
                          : 'text-emerald-950 group-hover:text-emerald-800'
                      }`}
                    >
                      {faqData.question}
                    </h3>
                  </div>

                  {/* Circular Chevron Badge */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive
                        ? 'bg-emerald-800 text-amber-300 rotate-180'
                        : 'bg-stone-100 text-stone-500 group-hover:bg-amber-100 group-hover:text-amber-800'
                    }`}
                  >
                    <FaChevronDown className="text-xs" />
                  </div>
                </button>

                {/* Smooth CSS Grid Height Transition */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isActive
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-7 pb-6 md:pb-7 pt-2 border-t border-stone-100">
                      <p className="text-stone-600 font-sans leading-relaxed text-base md:text-lg pl-0 md:pl-12">
                        {faqData.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Bridge to Contact Section */}
        <div className="mt-12 p-6 md:p-8 rounded-3xl bg-emerald-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg shadow-emerald-950/10">
          <div className="text-center sm:text-left">
            <h4 className="font-bold font-roboto text-lg text-amber-500">
              Still have unanswered questions?
            </h4>
            <p className="text-emerald-100/90 text-sm font-sans mt-1">
              Can’t find what you’re looking for? Reach out directly to our team.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold font-roboto text-sm transition-all shrink-0 shadow-md active:scale-[0.98]"
          >
            <span>Ask Us Directly</span>
            <FaArrowRight className="text-xs" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;