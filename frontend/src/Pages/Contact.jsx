import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <section className="px-6 sm:px-12 lg:px-24 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        Contact Us
      </h1>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-amber-100 rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-2">
            <strong>Phone:</strong> +91 98765 43210
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> support@elitefurny.com
          </p>
          <p className="text-gray-700">
            <strong>Address:</strong> 123 Elite Street, Hyderabad, India
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
            ></textarea>
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Map (Optional) */}
     
    </section>
  );
};

export default Contact;
