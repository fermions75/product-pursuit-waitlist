import React from 'react';
import { Users } from 'lucide-react';

const Community = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <Users className="w-24 h-24 mx-auto mb-8" />
        <h2 className="font-mono text-4xl font-bold mb-6">Join Hundreds of Product Managers</h2>
        <p className="text-2xl mb-12 max-w-3xl mx-auto">Over 500 product managers are already on the waitlist. Don't miss out!</p>
        <div className="bg-white text-indigo-600 text-5xl font-bold py-6 px-12 rounded-lg inline-block shadow-lg font-mono">
          500+
        </div>
        <p className="mt-6 text-xl">Product Managers Waiting</p>
      </div>
    </section>
  );
};

export default Community;