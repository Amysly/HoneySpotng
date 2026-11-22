import React, { useState } from 'react';
import { FaPlus, FaMinus, FaCheckCircle, FaShoppingBag } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: 'Golden Pure Honey',
    size: '250ml',
    badge: '100% Unfiltered',
    description: 'Light, floral, and silky smooth—perfect for daily tea, toast, and drizzling.',
    price: 2500,
    img: '/images/bottleone.jpg',
  },
  {
    id: 2,
    name: 'Raw Organic Honey',
    size: '500ml',
    badge: '100% Unfiltered',
    description: 'Harvested straight from the comb with natural pollen and enzymes intact.',
    price: 3000,
    img: '/images/bottletwo.jpg',
  },
  {
    id: 3,
    name: 'Premium Honey Mix',
    size: '1 litre',
    badge: '100% Unfiltered',
    description: 'Dark, full-bodied wildflower blend packed with deep caramel notes and antioxidants.',
    price: 3500,
    img: '/images/bottlethree.jpg',
  },
];

const Product = () => {
  const whatsappNumber = '2347031217697';

  const [quantities, setQuantities] = useState({
    1: 1,
    2: 1,
    3: 1,
  });

  const updateQuantity = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  const formatNaira = (amount) => {
    return `₦${amount.toLocaleString('en-NG')}`;
  };

  return (
    <section
      id="products"
      className="relative bg-[#FDFBF7] py-24 px-6 lg:px-20 overflow-hidden"
    >
      <div className="" />
      <div className="" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase text-amber-800 bg-amber-100/80 border border-amber-200/60 rounded-full">
            Nature&apos;s Best
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-roboto text-emerald-950 tracking-tight mb-4">
            Our Honey Collection
          </h2>
          <p className="text-stone-600 font-sans text-lg leading-relaxed">
            Pure, unadulterated honey harvested ethically and bottled fresh. Select your jar size and place your order in seconds.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {products.map((product) => {
            const qty = quantities[product.id] || 1;
            const totalPrice = product.price * qty;

            const message = `Hello HoneySpot! I would like to order:\n• Product: ${product.name} (${product.size})\n• Quantity: ${qty}\n• Total: ${formatNaira(totalPrice)}\n\nIs it available for delivery?`;
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            return (
              <div
                key={product.id}
                className="group bg-white rounded-3xl p-6 md:p-7 transition-all duration-300 
                 flex flex-col justify-between"
              >
                <div>
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-amber-50/70 to-stone-50 mb-3
                    flex items-center justify-center p-6 border border-amber-100/50">
                    <span className="absolute top-3.5 left-3.5 z-10 px-3 py-1 rounded-full bg-emerald-900 text-amber-500 font-bold font-roboto text-xs tracking-wide shadow-sm">
                      {product.badge}
                    </span>

                    {/* Top Right Size Tag */}
                    <span className="absolute top-3.5 right-3.5 z-10 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-stone-700 font-bold font-sans text-xs border border-stone-200/70">
                      {product.size}
                    </span>

                    <img
                      src={product.img}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="text-left mb-3">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl md:text-2xl text-emerald-950 font-bold font-roboto">
                        {product.name}
                      </h3>
                    </div>
                    <p className="text-stone-600 font-sans text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Pricing, Quantity & Order CTA */}
                <div className="pt-5 border-t border-stone-100">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-stone-400">
                        {qty > 1 ? `Total (${qty} jars)` : 'Price'}
                      </span>
                      <span className="text-emerald-950 text-2xl font-black font-roboto">
                        {formatNaira(totalPrice)}
                      </span>
                    </div>

                    {/* Quantity Stepper */}
                    <div className="flex items-center bg-stone-100 rounded-xl p-1 border border-stone-200/70">
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.id, -1)}
                        disabled={qty <= 1}
                        aria-label="Decrease quantity"
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-stone-700 hover:bg-white disabled:opacity-40 disabled:hover:bg-transparent transition-colors cursor-pointer"
                      >
                        <FaMinus className="text-xs" />
                      </button>
                      <span className="w-8 text-center font-bold font-roboto text-sm text-emerald-950">
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.id, 1)}
                        aria-label="Increase quantity"
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-stone-700 hover:bg-white transition-colors cursor-pointer"
                      >
                        <FaPlus className="text-xs" />
                      </button>
                    </div>
                  </div>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold font-roboto py-2.5 px-3 rounded-xl shadow-md shadow-emerald-900/15 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-[0.98]"
                  >
                    <span>Order</span>
                    <FaShoppingBag className="text-sm text-amber-500" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Product;