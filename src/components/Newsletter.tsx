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
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
        <p className="text-xl mb-8">Subscribe for launch updates and exclusive content</p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email to subscribe for updates"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow"
          />
          <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">
            Subscribe Now
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;