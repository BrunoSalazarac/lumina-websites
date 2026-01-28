import React from 'react';
import { SiteConfig } from '../site';

interface ServicesProps {
  config: SiteConfig;
}

const Services: React.FC<ServicesProps> = ({ config }) => {
  const services = [
    {
      title: 'Compra',
      description: 'Encuentra la propiedad perfecta con nuestro amplio catálogo',
      icon: '🏠',
    },
    {
      title: 'Venta',
      description: 'Vendemos tu propiedad al mejor precio del mercado',
      icon: '💰',
    },
    {
      title: 'Renta',
      description: 'Administración profesional de propiedades en renta',
      icon: '🔑',
    },
    {
      title: 'Asesoría',
      description: 'Expertos en inversión inmobiliaria a tu servicio',
      icon: '📊',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ color: config.theme.primaryColor }}
        >
          Nuestros Servicios
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Soluciones integrales para todas tus necesidades inmobiliarias
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 
                className="text-2xl font-bold mb-3"
                style={{ color: config.theme.primaryColor }}
              >
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;