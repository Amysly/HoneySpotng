import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mary A.',
      text: "This honey is the best I've ever tasted! Pure, rich and so flavorful.",
      photo: '/images/bee.jpg',
    },
    {
      name: 'James K.',
      text: "Fast delivery and amazing quality. I drizzle it on everything!",
      photo: '/images/honeycombo.jpg',
    },
    {
      name: 'Ada E.',
      text: "Love knowing it's 100% natural. My kids can't get enough.",
      photo: '/images/honey.jpg',
    },
  ];

  return (
    <section className="min-h-screen flex items-center bg-yellow-500 justify-center px-6 py-16">
      <div className="w-full max-w-5xl">
        <h2 className="text-4xl md:text-4xl font-black font-roboto text-center text-green-800 mb-12">
          Customer's Review
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          // Responsive breakpoints
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 }, // Show 2 slides on large screens
          }}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          className="pb-16" 
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="flex flex-col items-center bg-white rounded-3xl shadow-xl p-8
               md:p-12 text-center h-full">
                {t.photo && (
                  <div className="relative mb-6">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-yellow-500"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-serif">
                      "
                    </div>
                  </div>
                )}
                
                <p className="text-gray-700 text-lg md:text-xl italic leading-relaxed font-medium mb-6">
                  “{t.text}”
                </p>
                
                <h4 className="text-green-800 font-bold  font-roboto text-lg tracking-wide uppercase">
                  {t.name}
                </h4>
                
                <div className="flex text-yellow-400 mt-2">
                  {"★".repeat(5)}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;