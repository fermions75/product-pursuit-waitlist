import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4">
      <div className="container mx-auto px-4 text-center">
        {/* Branding and Copyright */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-white mb-1">
            Product Management Job Board
          </h2>
          <p className="text-xs">&copy; 2024 All rights reserved.</p>
        </div>

        {/* Contact Button */}
        <div className="mb-4">
          <a 
            href="mailto:farhan@findteamup.com" 
            className="inline-block bg-yellow-400 text-gray-900 font-semibold py-1 px-3 rounded-md hover:bg-yellow-500 transition duration-300 text-sm"
            aria-label="Email Contact"
          >
            Contact Us
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center">
          <a 
            href="https://www.linkedin.com/company/letsteamup/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-yellow-400 transition duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
