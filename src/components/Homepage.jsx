import React from 'react'
import Home from '../pages/Home' 
import About from '../pages/About';
import Product from '../pages/Product';
import Faq from '../pages/Faq';
import Contact from '../pages/Contact'
import Testimonials from '../pages/Testimonials';
import Wallpaper from '../pages/Wallpaper'

import faqs from '../FaqData'; 

const Homepage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero / Intro Section */}
      <section id="/" className="scroll-mt-20">
        <Home />
      </section>

       {/* Products Section */}
      <section id="products" className="scroll-mt-20">
        <Product />
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-20">
        <About />
      </section>
      
      <section>
      <Wallpaper/>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="scroll-mt-20">
        <Faq faqs={faqs} />
      </section>
            <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </div>
  )
}

export default Homepage