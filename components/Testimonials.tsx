
import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  { id: 1, quote: "The quality of the curtains is simply outstanding. They've completely transformed my living room. Worth every penny!", author: 'Sarah L.', role: 'London' },
  { id: 2, quote: "I've never felt towels so soft and absorbent. It's like wrapping myself in a cloud. The delivery was incredibly fast too.", author: 'James P.', role: 'Manchester' },
  { id: 3, quote: "BEAUZEAD's customer service was as impressive as their products. They helped me choose the perfect set for my new home.", author: 'Emily C.', role: 'Edinburgh' },
  { id: 4, quote: "Elegant, durable, and exactly as described. The color of the towels has held up perfectly after multiple washes.", author: 'David R.', role: 'Birmingham' },
];

const QuoteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" >
        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l-1.964 4.353c-1.63 1.5-3.036 3.133-3.036 5.372v2h-5zm-13 0c0-5.141 3.892-10.519 10-11.725l-1.964 4.353c-1.63 1.5-3.036 3.133-3.036 5.372v2h-5z"/>
    </svg>
);


const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center p-4">
    <div className="bg-gray-900 p-8 rounded-lg h-full flex flex-col justify-between border border-transparent hover:border-[#D4AF37] transition-colors">
      <div>
        <QuoteIcon className="w-8 h-8 text-[#D4AF37] mb-4"/>
        <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
      </div>
      <div>
        <p className="font-bold text-white">{testimonial.author}</p>
        <p className="text-sm text-gray-400">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] text-center mb-12">What Our Customers Say</h2>
        <div className="flex -mx-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4" style={{ scrollbarWidth: 'none' }}>
          {testimonials.map(t => <TestimonialCard key={t.id} testimonial={t} />)}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
