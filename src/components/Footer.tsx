import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 border-t border-purple-500/30 bg-black/50">
      <div className="container mx-auto text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Seif Eddine Segueni. The right man in the wrong place
          can make all the difference in the world
        </p>
      </div>
    </footer>
  );
};

export default Footer;
