import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Senior Product Manager',
      quote: 'Can\'t wait for a platform dedicated to finding the best product management jobs in North America!',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      name: 'Michael Chen',
      role: 'Product Owner',
      quote: 'This job board is exactly what I\'ve been looking for to advance my product management career.',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Associate Product Manager',
      quote: 'Excited to see a curated list of product management opportunities tailored for different experience levels!',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Early Users Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <Avatar className="w-16 h-16 mx-auto mb-4">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;