import React from 'react';
import { Users } from 'lucide-react';

const Community = () => {
  return (
    <section className="py-16 bg-blue-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <Users className="w-16 h-16 mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-4">Join Hundreds of Product Managers</h2>
        <p className="text-xl mb-8">Over 500 product managers are already on the waitlist. Don't miss out!</p>
        <div className="bg-white text-blue-500 text-4xl font-bold py-4 px-8 rounded-lg inline-block">
          500+
        </div>
        <p className="mt-4 text-lg">Product Managers Waiting</p>
      </div>
    </section>
  );
};

export default Community;