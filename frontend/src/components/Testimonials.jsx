import React from 'react';

const Testimonials = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Trusted by Security Professionals</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            quote: "This tool helped us identify critical XSS vulnerabilities that we had missed in our manual testing.",
            author: "Sarah Chen",
            role: "Security Engineer, TechCorp"
          },
          {
            quote: "The detailed reports make it easy to understand and fix security issues. A must-have for any dev team.",
            author: "Michael Rodriguez",
            role: "Lead Developer, StartupX"
          },
          {
            quote: "We've integrated this scanner into our CI/CD pipeline. It's been a game-changer for our security posture.",
            author: "Jamie Wilson",
            role: "DevOps Lead, Enterprise Solutions"
          }
        ].map((testimonial, index) => (
          <div key={index} className="bg-[#1E1E1E] p-6 rounded-lg">
            <div className="mb-4 text-[#00FF9C]">
              <i className="fas fa-quote-left text-2xl"></i>
            </div>
            <p className="text-gray-300 mb-6">
              {testimonial.quote}
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#2A2A2A] rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-user text-gray-400"></i>
              </div>
              <div>
                <h4 className="font-bold">{testimonial.author}</h4>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;