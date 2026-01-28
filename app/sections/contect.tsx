import React from 'react';
import { SiteConfig } from '../site';

interface ContactProps {
  config: SiteConfig;
}

const Contact: React.FC<ContactProps> = ({ config }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ color: config.theme.primaryColor }}
        >
          Contáctanos
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Estamos listos para ayudarte a encontrar tu propiedad ideal
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Información de contacto */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Información</h3>
            
            <div className="flex items-start space-x-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0"
                style={{ backgroundColor: config.theme.primaryColor }}
              >
                📧
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-gray-600">{config.content.email}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0"
                style={{ backgroundColor: config.theme.primaryColor }}
              >
                📱
              </div>
              <div>
                <h4 className="font-semibold mb-1">Teléfono</h4>
                <p className="text-gray-600">{config.content.phone}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0"
                style={{ backgroundColor: config.theme.primaryColor }}
              >
                📍
              </div>
              <div>
                <h4 className="font-semibold mb-1">Dirección</h4>
                <p className="text-gray-600">{config.content.address}</p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
            <form className="space-y-4">
              <input 
                type="text"
                placeholder="Nombre completo"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input 
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input 
                type="tel"
                placeholder="Teléfono"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <textarea 
                placeholder="Mensaje"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              ></textarea>
              <button 
                type="submit"
                className="w-full py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: config.theme.primaryColor }}
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;