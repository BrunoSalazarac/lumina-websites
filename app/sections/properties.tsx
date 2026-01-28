import React from 'react';
import { SiteConfig } from '../site';

interface PropertiesProps {
  config: SiteConfig;
}

const Properties: React.FC<PropertiesProps> = ({ config }) => {
  const properties = [
    {
      title: 'Casa Moderna en Residencial',
      price: '$4,500,000',
      location: 'Colonia Residencial',
      beds: 3,
      baths: 2,
      area: '180 m²',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500',
    },
    {
      title: 'Departamento Céntrico',
      price: '$2,800,000',
      location: 'Centro de la Ciudad',
      beds: 2,
      baths: 2,
      area: '95 m²',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500',
    },
    {
      title: 'Penthouse Premium',
      price: '$8,900,000',
      location: 'Zona Exclusiva',
      beds: 4,
      baths: 3,
      area: '250 m²',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ color: config.theme.primaryColor }}
        >
          Propiedades Destacadas
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Selección exclusiva de las mejores propiedades disponibles
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-64 bg-gray-200">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute top-4 right-4 px-4 py-2 rounded-full text-white font-bold"
                  style={{ backgroundColor: config.theme.primaryColor }}
                >
                  {property.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">📍 {property.location}</p>
                
                <div className="flex justify-between text-sm text-gray-600">
                  <span>🛏️ {property.beds} rec</span>
                  <span>🚿 {property.baths} baños</span>
                  <span>📐 {property.area}</span>
                </div>

                <button 
                  className="w-full mt-4 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: config.theme.primaryColor }}
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;