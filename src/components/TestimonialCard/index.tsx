import React from 'react';

const TestimonialCard: React.FC = () => {
  return (
    <div className="relative bg-[#051622]/50 backdrop-blur-sm text-white rounded-xl p-8 shadow-lg max-w-xl mx-auto">
      {/* 
        Gradient Layer:
        - Absolutely positioned behind the card content.
        - Creates a soft gradient glow with a blur effect.
      */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-indigo-500 opacity-30 blur-xl -z-10" />

      <p className="mb-4 leading-relaxed">
        “I couldn’t ask for a better Designer. Communication was 200% and this
        went above my expectations. He threw in some additional perks for me. 
        I will definitely be working with him for future projects. 
        Happy and very satisfied customer.”
      </p>

      <div className="font-semibold text-right">Valenthino</div>
    </div>
  );
};

export default TestimonialCard;
