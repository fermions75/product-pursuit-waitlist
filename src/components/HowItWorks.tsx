import React from 'react';
import { Mail, Bell, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Mail className="w-16 h-16 text-blue-500" />,
      title: 'Join the waitlist',
      description: 'Enter your email to secure your spot.',
    },
    {
      icon: <Bell className="w-16 h-16 text-green-500" />,
      title: 'Receive updates',
      description: 'Get exclusive updates and product previews.',
    },
    {
      icon: <Rocket className="w-16 h-16 text-purple-500" />,
      title: 'Gain early access',
      description: 'Be among the first to use the platform when it launches.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="font-mono text-4xl font-bold text-center mb-16">Get Ready for the Launch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg transition-transform hover:scale-105">
              <div className="mb-6">{step.icon}</div>
              <h3 className="font-mono text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600 mb-6">{step.description}</p>
              <Button variant="outline" className="text-lg py-3 px-6 font-mono">Join Waitlist</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;