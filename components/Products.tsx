
import React, { useRef } from 'react';
import type { Product } from '../types';

const products: Product[] = [
  { id: 1, name: 'Royal Velvet Curtain', imageUrl: 'https://picsum.photos/seed/curtain1/400/500' },
  { id: 2, name: 'Egyptian Cotton Towel Set', imageUrl: 'https://picsum.photos/seed/towel1/400/500' },
  { id: 3, name: 'Linen Sheer Curtain', imageUrl: 'https://picsum.photos/seed/curtain2/400/500' },
  { id: 4, name: 'Plush Spa Bath Towel', imageUrl: 'https://picsum.photos/seed/towel2/400/500' },
  { id: 5, name: 'Blackout Thermal Curtain', imageUrl: 'https://picsum.photos/seed/curtain3/400/500' },
  { id: 6, name: 'Bamboo Fiber Hand Towel', imageUrl: 'https://picsum.photos/seed/towel3/400/500' },
  { id: 7, name: 'Embroidered Silk Curtain', imageUrl: 'https://picsum.photos/seed/curtain4/400/500' },
  { id: 8, name: 'Waffle Weave Bath Sheet', imageUrl: 'https://picsum.photos/seed/towel4/400/500' },
];

const ChevronLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="flex-shrink-0 w-64 md:w-72 snap-center group">
    <div className="overflow-hidden rounded-lg shadow-lg bg-gray-900">
      <img src={product.imageUrl} alt={product.name} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white group-hover:text-[#D4AF37] transition-colors">{product.name}</h3>
      </div>
    </div>
  </div>
);

const Products: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37]">Our Products</h2>
          <div className="hidden md:flex space-x-4">
            <button onClick={() => scroll('left')} className="p-2 rounded-full bg-black hover:bg-[#D4AF37] hover:text-black text-[#D4AF37] transition-colors duration-300">
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button onClick={() => scroll('right')} className="p-2 rounded-full bg-black hover:bg-[#D4AF37] hover:text-black text-[#D4AF37] transition-colors duration-300">
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div ref={scrollContainerRef} className="flex space-x-6 pb-4 overflow-x-auto snap-x snap-mandatory scroll-smooth" style={{ scrollbarWidth: 'none' }}>
          {products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </section>
  );
};

export default Products;
