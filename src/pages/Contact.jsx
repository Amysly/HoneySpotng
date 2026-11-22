import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaPaperPlane, 
  FaCheckCircle, 
  FaExclamationCircle 
} from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [toast, setToast] = useState({
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
        setToast({
          show: true,
          success: true,
          message: "Message sent! Thank you — we’ll get back to you soon.",
        });
        form.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setToast({
          show: true,
          success: false,
          message: "Failed to send message. Please try again.",
        });
      })
      .finally(() => {
        setSending(false);
        setTimeout(() => {
          setToast((prev) => ({ ...prev, show: false }));
        }, 4500);
      });
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      detail: "08110977549",
      subtext: "Direct line for quick orders",
      href: "tel:08110977549",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      detail: "Yinrahoney@gmail.com",
      subtext: "For wholesale & partnerships",
      href: "mailto:Honeyspotng@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Hive",
      detail: "Near Grandspot Hotel",
      subtext: "Gwagwalada, Abuja",
      href: "#map",
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      detail: "Mon – Sat: 9am – 6pm",
      subtext: "Closed on Sundays",
      href: null,
    },
  ];

  return (
    <section 
      id="contact" 
      className="relative min-h-screen bg-[#FDFBF7] py-24 px-6 lg:px-20 scroll-mt-16 overflow-hidden"
    >
     
      <div className="" />
      <div className=" " />

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase text-amber-800 bg-amber-100/80 border border-amber-200/60 rounded-full">
            Reach Out To Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-roboto text-emerald-950 tracking-tight mb-4">
            Let’s Start a Sweet Conversation
          </h2>
          <p className="text-stone-600 font-sans text-lg leading-relaxed">
            Have questions about our raw honey, apiary tours, or bulk wholesale orders? 
            Drop us a line and our team will respond promptly.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info Cards & Map (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              {contactInfo.map((item, idx) => {
                const CardWrapper = item.href ? 'a' : 'div';
                return (
                  <CardWrapper
                    key={idx}
                    href={item.href || undefined}
                    className="group bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-amber-100/80 shadow-sm hover:shadow-md hover:border-amber-300/80 hover:-translate-y-1 transition-all duration-300 block"
                  >
                    <div className="w-11 h-11 rounded-xl bg-amber-100/80 text-emerald-800 group-hover:bg-emerald-800 group-hover:text-amber-300 flex items-center justify-center text-lg mb-4 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h3 className="font-bold font-roboto text-emerald-950 text-base">
                      {item.title}
                    </h3>
                    <p className="text-stone-800 text-sm font-semibold font-sans mt-1 break-words">
                      {item.detail}
                    </p>
                    <p className="text-stone-500 text-xs font-sans mt-1">
                      {item.subtext}
                    </p>
                  </CardWrapper>
                );
              })}
            </div>

            {/* Styled Map Container */}
            <div id="map" className="bg-white p-2 rounded-3xl shadow-md border border-amber-100/80">
              <div className="rounded-2xl overflow-hidden relative">
                <iframe
                  title="Honeyspot Location Map"
                  width="100%"
                  height="240"
                  className="grayscale-[15%] contrast-[1.02]"
                  frameBorder="0"
                  loading="lazy"
                  src="https://maps.google.com/maps?q=Grandspot%20hotel%20Gwagwalada&t=&z=14&ie=UTF8&iwloc=&output=embed"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Card (7 cols on lg) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(6,78,59,0.06)] border border-stone-100">
            <div className="mb-8">
              <h3 className="text-2xl font-bold font-roboto text-emerald-950">
                Send Us a Message
              </h3>
              <p className="text-stone-500 text-sm mt-1">
                Fill out the form below and we’ll reply within 24 hours.
              </p>
            </div>

            <form ref={form} onSubmit={handleSendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider font-roboto text-stone-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-stone-50/70 border border-stone-200 text-stone-800 placeholder-stone-400 focus:bg-white focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10 outline-none transition-all"
                    placeholder="Mary John"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider font-roboto text-stone-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-stone-50/70 border border-stone-200 text-stone-800 placeholder-stone-400 focus:bg-white focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10 outline-none transition-all"
                    placeholder="mary@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider font-roboto text-stone-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  name="subject"
                  className="w-full px-4 py-3.5 rounded-xl bg-stone-50/70 border border-stone-200 text-stone-700 focus:bg-white focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10 outline-none transition-all"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Wholesale / Bulk Order">Wholesale / Bulk Order</option>
                  <option value="Hive Visit / Consultation">Hive Visit / Consultation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider font-roboto text-stone-700 mb-2">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-stone-50/70 border border-stone-200 text-stone-800 placeholder-stone-400 focus:bg-white focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10 outline-none resize-none transition-all"
                  placeholder="Tell us what you need..."
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className={`w-full flex items-center justify-center gap-3 text-white font-bold font-roboto py-4 px-6 rounded-xl shadow-lg transition-all duration-200
                  ${sending
                    ? "bg-stone-400 cursor-not-allowed"
                    : "bg-emerald-800 hover:bg-emerald-900 shadow-emerald-900/20 hover:shadow-xl active:scale-[0.99]"
                  }`}
              >
                {sending ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="text-sm text-amber-500" />
                  </>
                )}
              </button>
            </form>

            {/* Clean Feedback Banner */}
            {toast.show && (
              <div
                className={`mt-6 flex items-center gap-3 p-4 rounded-xl text-sm font-medium border transition-all ${
                  toast.success
                    ? "bg-emerald-50 text-emerald-900 border-emerald-200"
                    : "bg-red-50 text-red-900 border-red-200"
                }`}
              >
                {toast.success ? (
                  <FaCheckCircle className="text-emerald-600 text-lg shrink-0" />
                ) : (
                  <FaExclamationCircle className="text-red-600 text-lg shrink-0" />
                )}
                <span>{toast.message}</span>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;