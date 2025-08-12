import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaWhatsapp, FaDiscord } from 'react-icons/fa6';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let's discuss how we can work
          together to create something amazing.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
          <a
            href="mailto:sesegueni@gmail.com"
            className="group flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-4 rounded-full transition-all transform hover:scale-105"
          >
            <Mail size={24} />
            <span className="text-lg font-semibold">Get In Touch</span>
          </a>
          <a
            href="https://wa.me/213790410947"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-8 py-4 rounded-full transition-all transform hover:scale-105"
          >
            <FaWhatsapp size={24} />
            <span className="text-lg font-semibold">WhatsApp</span>
          </a>
        </div>
        <div className="text-center space-y-2 text-gray-400">
          <p className="flex items-center justify-center space-x-2">
            <Mail size={16} />
            <span>sesegueni@gmail.com</span>
          </p>
          <p className="flex items-center justify-center space-x-2">
            <MapPin size={16} />
            <span>Algiers, Algeria</span>
          </p>
          <p className="flex items-center justify-center space-x-2">
            <Phone size={16} />
            <span>+213 790410947</span>
          </p>
          <p className="flex items-center justify-center space-x-2">
            <FaDiscord size={16} className="mr-1" />
            <span>se1f0</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
