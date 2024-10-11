import React from 'react';
import { Star, Target, Bell, Users } from 'lucide-react';

const ValueProposition = () => {
  const values = [
    {
      icon: <Star className="w-12 h-12 text-yellow-500" />,
      title: 'Exclusive Early Access',
      description: 'Be among the first to discover new product management opportunities.',
    },
    {
      icon: <Target className="w-12 h-12 text-green-500" />,
      title: 'Curated for You',
      description: 'Jobs tailored to your experience level and location in North America.',
    },
    {
      icon: <Bell className="w-12 h-12 text-blue-500" />,
      title: 'Insider Updates',
      description: 'Get the latest news, insights, and sneak peeks before the public launch.',
    },
    {
      icon: <Users className="w-12 h-12 text-purple-500" />,
      title: 'Limited Spots Available',
      description: 'Join now to secure your early access.',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-mono text-4xl font-bold text-center mb-16">Why Join Our Job Board?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg transition-transform hover:scale-105">
              <div className="mb-6">{value.icon}</div>
              <h3 className="font-mono text-2xl font-semibold mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;