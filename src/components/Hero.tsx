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
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Be the First to Access North America's Premier Product Management Job Board
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Launching soon—curated roles for Product Managers at every level.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email to join the waitlist"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white text-gray-800"
          />
          <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-gray-800">
            Join Now
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Hero;