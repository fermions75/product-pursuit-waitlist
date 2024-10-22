import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = import.meta.env.VITE_PROJECT_URL;
const supabaseAnonKey = import.meta.env.VITE_API_KEY;


const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Modal component
const Modal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Subscription Successful!</h2>
        <p className="text-gray-700 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Hero = () => {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter an email address.');
      setShowModal(true);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('myuser')
        .insert([{ email }]);

      if (error) {
        console.error('Error inserting data:', error);
        setMessage('You have already subcribed.');
        setShowModal(true);
      } else {
        setMessage('Thank You for Subscribing! Your subscription has been confirmed.');
        setShowModal(true);
        setEmail(''); 
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Something went wrong. Please try again later.');
      setShowModal(true);
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-24">
      <div className="container mx-auto px-4">
        <h1 className="font-mono text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Be the First to Access North America's Premier Product Management Job Board
        </h1>
        <p className="text-2xl md:text-3xl mb-12 max-w-3xl mx-auto">
          Launching soon—curated roles for Product Managers at every level.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="text-black text-lg p-4 w-full md:w-auto flex-grow rounded-md"
            required
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-lg font-semibold py-4 px-8 font-mono rounded-md"
          >
            Subscribe Now
          </button>
        </form>
      </div>

      {showModal && (
        <Modal message={message} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Hero;
