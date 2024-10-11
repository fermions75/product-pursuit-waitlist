import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-8 md:mb-0">
            <p className="text-2xl font-bold mb-2">Product Management Job Board</p>
            <p>&copy; 2024 All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-8">
            <a href="#" className="hover:text-yellow-400 transition-colors">About Us</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Contact</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
          </div>
        </div>
        <div className="mt-12 flex justify-center space-x-8">
          <a href="#" className="hover:text-yellow-400 transition-colors"><Facebook size={24} /></a>
          <a href="#" className="hover:text-yellow-400 transition-colors"><Twitter size={24} /></a>
          <a href="#" className="hover:text-yellow-400 transition-colors"><Instagram size={24} /></a>
          <a href="#" className="hover:text-yellow-400 transition-colors"><Linkedin size={24} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;