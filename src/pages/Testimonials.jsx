import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaQuoteRight, FaCheckCircle, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mary A.',
      role: 'Verified Buyer • Abuja',
      text: "This honey is the best I've ever tasted! Pure, rich, and so flavorful. You can immediately tell it hasn't been diluted or processed.",
      photo: '/images/bee.jpg',
    },
    {
      name: 'James K.',
      role: 'Regular Customer',
      text: "Fast delivery and amazing quality. I drizzle it on everything from morning oats to tea—easily my favorite pantry staple now.",
      photo: '/images/honeycombo.jpg',
    },
    {
      name: 'Ada E.',
      role: 'Verified Buyer • Gwagwalada',
      text: "Love knowing it's 100% natural. My kids can't get enough, and it feels great supporting a local apiary that cares about quality.",
      photo: '/images/honey.jpg',
    },
    {
      name: 'Chinedu O.',
      role: 'Wholesale Partner',
      text: "Consistent golden texture and unmatched aroma in every single jar. Our customers keep coming back specifically for Honeyspot.",
      photo: '/images/bee.jpg',
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-24 px-6 lg:px-20 bg-yellow-500 via-[#FDFBF7] to-amber-50/70 overflow-hidden"
    >
      {/* Subtle Ambient Background Blobs */}
      <div className="absolute -top-24 right-10 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-10 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-roboto text-emerald-950 tracking-tight mb-4">
            What Our Honey Lovers Say
          </h2>
          <p className="text-stone-600 leading-relaxed font-sans text-lg">
            Real feedback from families and partners enjoying pure, unadulterated honey straight from our hives.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={28}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{
            clickable: true,
            el: '.custom-swiper-pagination',
            bulletClass:
              'inline-block w-2.5 h-2.5 rounded-full bg-amber-300/70 mx-1.5 cursor-pointer transition-all duration-300',
            bulletActiveClass: '!w-8 !bg-emerald-800',
          }}
          navigation={{
            prevEl: '.custom-swiper-prev',
            nextEl: '.custom-swiper-next',
          }}
          className="!pb-6"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="!h-auto flex">
              <div className="relative flex flex-col justify-between w-full bg-white rounded-3xl p-8 md:p-10 border border-amber-100/90 shadow-[0_14px_40px_rgba(6,78,59,0.06)] hover:shadow-[0_20px_50px_rgba(6,78,59,0.1)] hover:-translate-y-1 transition-all duration-300">
                
                {/* Decorative Watermark Quote */}
                <FaQuoteRight className="absolute top-8 right-8 text-5xl text-amber-100/80 pointer-events-none" />

                {/* Top: Stars */}
                <div>
                  <div className="flex items-center gap-1 text-amber-400 text-base mb-6">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  {/* Review Quote */}
                  <p className="text-stone-700 font-sans text-lg md:text-xl leading-relaxed mb-8 relative z-10">
                    “{t.text}”
                  </p>
                </div>

                {/* Bottom: Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-stone-100">
                  {t.photo && (
                    <div className="relative shrink-0">
                      <img
                        src={t.photo}
                        alt={t.name}
                        className="w-14 h-14 rounded-full object-cover ring-4 ring-amber-100"
                      />
                      <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-800 text-amber-300 flex items-center justify-center text-[10px] shadow-sm">
                        <FaQuoteRight />
                      </span>
                    </div>
                  )}

                  <div className="text-left">
                    <h4 className="text-emerald-950 font-bold font-roboto text-base md:text-lg leading-tight">
                      {t.name}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 mt-1">
                      <FaCheckCircle className="text-emerald-600 shrink-0" />
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Bottom Controls (Prev / Pagination Dots / Next) */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            type="button"
            aria-label="Previous testimonial"
            className="custom-swiper-prev w-11 h-11 rounded-full bg-white border border-amber-200/80 text-emerald-900 hover:bg-emerald-800 hover:text-amber-300 hover:border-emerald-800 flex items-center justify-center shadow-sm transition-all duration-200 cursor-pointer active:scale-95"
          >
            <FaArrowLeft className="text-sm" />
          </button>

          <div className="custom-swiper-pagination flex items-center justify-center !w-auto" />

          <button
            type="button"
            aria-label="Next testimonial"
            className="custom-swiper-next w-11 h-11 rounded-full bg-white border border-amber-200/80 text-emerald-900 hover:bg-emerald-800 hover:text-amber-300 hover:border-emerald-800 flex items-center justify-center shadow-sm transition-all duration-200 cursor-pointer active:scale-95"
          >
            <FaArrowRight className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;