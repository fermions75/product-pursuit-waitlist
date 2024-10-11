import React from 'react';
import { Star, Target, Bell, Users } from 'lucide-react';

const ValueProposition = () => {
  const values = [
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: 'Exclusive Early Access',
      description: 'Be among the first to discover new product management opportunities.',
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: 'Curated for You',
      description: 'Jobs tailored to your experience level and location in North America.',
    },
    {
      icon: <Bell className="w-8 h-8 text-blue-500" />,
      title: 'Insider Updates',
      description: 'Get the latest news, insights, and sneak peeks before the public launch.',
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Limited Spots Available',
      description: 'Join now to secure your early access.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Join Our Job Board?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;