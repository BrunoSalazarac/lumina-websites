import React from 'react';
import { SiteConfig } from '../site';

interface HeroProps {
  config: SiteConfig;
}

const Hero: React.FC<HeroProps> = ({ config }) => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative"
      style={{ 
        background: `linear-gradient(135deg, ${config.theme.primaryColor} 0%, ${config.theme.secondaryColor} 100%)`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          {config.content.companyName}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          {config.seo.description}
        </p>
        <button 
          className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
          style={{ color: config.theme.primaryColor }}
        >
          Ver Propiedades
        </button>
      </div>
      
      {/* Decoración */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;