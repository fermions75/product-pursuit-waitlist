import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup logic
    console.log('Subscribed with:', email);
    setEmail('');
  };

  return (
    <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Stay in the Loop</h2>
        <p className="text-2xl mb-12 max-w-3xl mx-auto">Subscribe for launch updates and exclusive content</p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
          <Input
            type="email"
            placeholder="Enter your email to subscribe for updates"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white text-gray-800 text-lg py-6 flex-grow"
          />
          <Button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-lg font-semibold py-6 px-8">
            Subscribe Now
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;