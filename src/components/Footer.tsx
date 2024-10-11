import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <p>&copy; 2024 Product Management Job Board. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">About Us</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-300"><Facebook /></a>
          <a href="#" className="hover:text-gray-300"><Twitter /></a>
          <a href="#" className="hover:text-gray-300"><Instagram /></a>
          <a href="#" className="hover:text-gray-300"><Linkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;