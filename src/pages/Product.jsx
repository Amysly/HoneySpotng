import React from 'react';

const products = [
  { id: 1, name: "Golden Pure Honey", price: "₦2,500", img: "images/bottleone.jpg" },
  { id: 2, name: "Raw Organic Honey", price: "₦3,000", img: "images/bottletwo.jpg" },
  { id: 3, name: "Premium Honey Mix", price: "₦3,500", img: "images/bottlethree.jpg" },
];

const Product = () => {
  const whatsappNumber = "2347031217697";

  return (
    <section className="bg-white py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-2">Nature's Best</h2>
          <h1 className="text-3xl md:text-4xl sm:text-3xl font-black text-green-800">
            Our Honey Collection
          </h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => {
            const message = `Hello HoneySpot! I want to order "${product.name}" which costs ${product.price}. Is it available?`;
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            return (
              <div 
                key={product.id} 
                className="group bg-amber-50 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-amber-200 text-center"
              >
                <div className="relative overflow-hidden rounded-xl bg-white mb-6 aspect-square flex items-center justify-center">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <h2 className="text-xl text-green-900 font-bold mb-1">
                  {product.name}
                </h2>
                <p className="text-amber-700 text-2xl sm:text-xl font-black mb-6">
                  {product.price}
                </p>

              
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <button className="w-full bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-colors hover:bg-green-800 flex items-center justify-center gap-2">
                    <span>Order</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Product;