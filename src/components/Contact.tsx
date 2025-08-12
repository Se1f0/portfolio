import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaWhatsapp, FaDiscord } from 'react-icons/fa6';
import NeonText from './NeonText';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent neon-flicker">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let's discuss how we can work
          together to create <span className="text-cyan-400 neon-text">something amazing</span>.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
          <a
            href="mailto:sesegueni@gmail.com"
            className="group flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-4 rounded-full transition-all transform hover:scale-105 neon-border-pink"
            style={{ boxShadow: '0 0 15px rgba(255, 0, 255, 0.5)' }}
          >
            <Mail size={24} className="animate-pulse" />
            <span className="text-lg font-semibold">Get In Touch</span>
          </a>
          <a
            href="https://wa.me/213790410947"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-8 py-4 rounded-full transition-all transform hover:scale-105"
            style={{ boxShadow: '0 0 15px rgba(0, 255, 128, 0.5)' }}
          >
            <FaWhatsapp size={24} className="animate-pulse" />
            <span className="text-lg font-semibold">WhatsApp</span>
          </a>
        </div>
        
        {/* Retro grid for contact info */}
        <div className="retro-card p-8 rounded-lg border border-cyan-400/30 bg-gradient-to-br from-purple-900/30 to-pink-900/30 max-w-xl mx-auto floating">
          <h3 className="mb-6">
            <NeonText text="Contact Information" color="cyan" />
          </h3>
          <div className="text-center space-y-4 text-gray-300">
            <p className="flex items-center justify-center space-x-2 hover:text-cyan-400 transition-colors transform hover:translate-y-[-2px]">
              <Mail size={16} className="text-pink-400" />
              <span>sesegueni@gmail.com</span>
            </p>
            <p className="flex items-center justify-center space-x-2 hover:text-pink-400 transition-colors transform hover:translate-y-[-2px]">
              <MapPin size={16} className="text-cyan-400" />
              <span>Algiers, Algeria</span>
            </p>
            <p className="flex items-center justify-center space-x-2 hover:text-purple-400 transition-colors transform hover:translate-y-[-2px]">
              <Phone size={16} className="text-purple-400" />
              <span>+213 790410947</span>
            </p>
            <p className="flex items-center justify-center space-x-2 hover:text-indigo-400 transition-colors transform hover:translate-y-[-2px]">
              <FaDiscord size={16} className="mr-1 text-indigo-400" />
              <span>se1f0</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
