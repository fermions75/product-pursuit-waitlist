import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Hero = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement waitlist signup logic
    console.log('Signed up with:', email);
    setEmail('');
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Be the First to Access North America's Premier Product Management Job Board
        </h1>
        <p className="text-2xl md:text-3xl mb-12 max-w-3xl mx-auto">
          Launching soon—curated roles for Product Managers at every level.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
          <Input
            type="email"
            placeholder="Enter your email to join the waitlist"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white text-gray-800 text-lg py-6"
          />
          <Button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-lg font-semibold py-6 px-8">
            Join Now
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Hero;