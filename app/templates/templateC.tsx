import React from 'react';
import Head from 'next/head';
import { Site } from '../site';
import Hero from '../sections/hero';
import Services from '../sections/service';
import Properties from '../sections/properties';
import Contact from '../sections/contect';

interface TemplateCProps {
  site: Site;
}

const TemplateC: React.FC<TemplateCProps> = ({ site }) => {
  const { config } = site;

  return (
    <>
      <Head>
        <title>{config.seo.title}</title>
        <meta name="description" content={config.seo.description} />
        <meta name="keywords" content={config.seo.keywords} />
        <meta property="og:title" content={config.seo.title} />
        <meta property="og:description" content={config.seo.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen">
        {/* Header casual y moderno */}
        <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 border-b-4" style={{ borderColor: config.theme.primaryColor }}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl"
                  style={{ backgroundColor: config.theme.primaryColor }}
                >
                  🏡
                </div>
                <h1 className="text-xl md:text-2xl font-bold">
                  {config.content.companyName}
                </h1>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#hero" className="font-medium hover:opacity-70">Inicio</a>
                {config.sections.services && <a href="#services" className="font-medium hover:opacity-70">Servicios</a>}
                {config.sections.properties && <a href="#properties" className="font-medium hover:opacity-70">Propiedades</a>}
                {config.sections.about && <a href="#about" className="font-medium hover:opacity-70">Nosotros</a>}
                {config.sections.contact && <a href="#contact" className="font-medium hover:opacity-70">Contacto</a>}
              </nav>
            </div>
          </div>
        </header>

        {/* Espaciador */}
        <div className="h-16"></div>

        {/* Contenido */}
        <div id="hero">
          {config.sections.hero && <Hero config={config} />}
        </div>

        <div id="services">
          {config.sections.services && <Services config={config} />}
        </div>

        <div id="properties">
          {config.sections.properties && <Properties config={config} />}
        </div>

        {/* Sección About (placeholder) */}
        {config.sections.about && (
          <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 
                  className="text-4xl md:text-5xl font-bold mb-6"
                  style={{ color: config.theme.primaryColor }}
                >
                  Sobre Nosotros
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Somos una inmobiliaria joven y dinámica, enfocada en hacer que tu 
                  experiencia de compra sea simple, transparente y emocionante. 
                  Creemos que encontrar tu hogar ideal no tiene que ser complicado.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="text-4xl mb-3">🎯</div>
                    <h3 className="text-xl font-bold mb-2">Misión</h3>
                    <p className="text-gray-600">Hacer accesible la compra de tu primera propiedad</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="text-4xl mb-3">💡</div>
                    <h3 className="text-xl font-bold mb-2">Visión</h3>
                    <p className="text-gray-600">Ser la inmobiliaria #1 para millennials</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="text-4xl mb-3">❤️</div>
                    <h3 className="text-xl font-bold mb-2">Valores</h3>
                    <p className="text-gray-600">Transparencia, simplicidad y cercanía</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <div id="contact">
          {config.sections.contact && <Contact config={config} />}
        </div>

        {/* Footer juvenil */}
        <footer 
          className="py-10 text-white"
          style={{ backgroundColor: config.theme.primaryColor }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">{config.content.companyName}</h3>
                <p className="opacity-90">Tu primera casa te espera 🏡</p>
              </div>
              <div className="flex space-x-6 text-3xl">
                <a href="#" className="hover:scale-110 transition-transform">📱</a>
                <a href="#" className="hover:scale-110 transition-transform">📧</a>
                <a href="#" className="hover:scale-110 transition-transform">💬</a>
              </div>
            </div>
            <div className="text-center mt-6 pt-6 border-t border-white border-opacity-30">
              <p className="text-sm opacity-80">© 2024 {config.content.companyName} - Template: Fresh</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TemplateC;