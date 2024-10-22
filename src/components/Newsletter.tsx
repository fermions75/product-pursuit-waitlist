import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_PROJECT_URL;
const supabaseAnonKey = import.meta.env.VITE_API_KEY;



// const supabaseUrl = 'https://bqdgrupmdvuglumgusvc.supabase.co';
// const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxZGdydXBtZHZ1Z2x1bWd1c3ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk1NzIxMzksImV4cCI6MjA0NTE0ODEzOX0.Zc8AdZ3_AhZFcVIfEOzXpNZ3y7fkjWuUkwc8RcFRL-k';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Modal component for popup
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

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter an email address.');
      setShowModal(true);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('myuser') // Replace 'salman' with your actual table name
        .insert([{ email }]);

      if (error) {
        console.error('Error inserting data:', error);
        setMessage('You have already subcribed.');
        setShowModal(true);
      } else {
        setMessage('Thank You for Subscribing! Your subscription has been confirmed.');
        setShowModal(true);
        setEmail(''); // Clear input
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Something went wrong. Please try again later.');
      setShowModal(true);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-mono text-4xl font-bold mb-6">Stay in the Loop</h2>
        <p className="text-2xl mb-12 max-w-3xl mx-auto">Subscribe for launch updates and exclusive content</p>
        
        {/* Form for email input and subscribe button */}
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
          {/* Email Input */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="text-black text-lg p-4 w-full md:w-auto flex-grow rounded-md"
            required
          />
          
          {/* Subscribe Button */}
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-lg font-semibold py-4 px-8 font-mono rounded-md"
          >
            Subscribe Now
          </button>
        </form>
      </div>

      {/* Modal for displaying success/error message */}
      {showModal && (
        <Modal message={message} onClose={() => setShowModal(false)} />
      )}
    </section>
  );
};

export default Newsletter;
