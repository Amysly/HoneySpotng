import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState({
    show: false,
    success: false,
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        'service_6r6opnr', 
        'template_ji92gtc', 
        form.current, 
        'TyPKlLCJXWxxWTgYs' 
      )
      .then(() => {
        setShowModal({
          show: true,
          success: true,
          message: "Message sent! Thank you — I’ll get back to you soon.",
        });
        form.current.reset(); 
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setShowModal({
          show: true,
          success: false,
          message: "Failed to send message. Please try again.",
        });
      })
      .finally(() => {
        setSending(false);
        // Hide modal after 4 seconds
        setTimeout(() => setShowModal({ ...showModal, show: false }), 4000);
      });
  };

  return (
    <section id="contact" className="min-h-screen bg-white py-20 px-6 lg:px-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-green-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions about our hives, wholesale orders, or just want to say hi? 
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Details */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100 shadow-sm">
                <FaPhoneAlt className="text-green-700 text-2xl mb-4" />
                <h3 className="font-bold text-gray-800 text-lg">Call Us</h3>
                <p className="text-gray-600 text-sm">08110977549</p>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100 shadow-sm">
                <FaEnvelope className="text-green-700 text-2xl mb-4" />
                <h3 className="font-bold text-gray-800 text-lg">Email Us</h3>
                <p className="text-gray-600 text-sm">Honeyspotng@gmail.com</p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100 shadow-sm">
                <FaMapMarkerAlt className="text-green-700 text-2xl mb-4" />
                <h3 className="font-bold text-gray-800 text-lg">Visit Hive</h3>
                <p className="text-gray-600 text-sm">Near Grandspot hotel Gwagwalada</p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100 shadow-sm">
                <FaClock className="text-green-700 text-2xl mb-4" />
                <h3 className="font-bold text-gray-800 text-lg">Working Hours</h3>
                <p className="text-gray-600 text-sm">Mon - Sat: 9am - 6pm</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
               <iframe 
                title="map"
                width="100%" 
                height="250" 
                frameBorder="0" 
                src="https://maps.google.com/maps?q=Grandspot%20hotel%20Gwagwalada&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-50">
            <form ref={form} onSubmit={handleSendEmail}>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="user_name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                      placeholder="Mary John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="user_email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                      placeholder="mary@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Your Message</label>
                  <textarea 
                    rows="5" 
                    name="message"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none resize-none transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={sending}
                  className={`w-full text-white font-bold py-4 rounded-xl shadow-lg transition-all 
                    ${sending 
                      ? "bg-gray-400 cursor-not-allowed" 
                      : "bg-green-700 hover:bg-green-600 active:scale-[0.98]"}`}
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>

            {/* Status Message */}
            {showModal.show && (
              <div
                className={`mt-6 text-center p-4 rounded-xl font-medium text-white transition-all animate-bounce ${
                  showModal.success ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {showModal.message}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;