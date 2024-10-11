import React from 'react';
import { Mail, Bell, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Mail className="w-12 h-12 text-blue-500" />,
      title: 'Join the waitlist',
      description: 'Enter your email to secure your spot.',
    },
    {
      icon: <Bell className="w-12 h-12 text-green-500" />,
      title: 'Receive updates',
      description: 'Get exclusive updates and product previews.',
    },
    {
      icon: <Rocket className="w-12 h-12 text-purple-500" />,
      title: 'Gain early access',
      description: 'Be among the first to use the platform when it launches.',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get Ready for the Launch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <Button variant="outline">Join Waitlist</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;