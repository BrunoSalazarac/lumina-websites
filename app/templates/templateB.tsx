import React from 'react';
import Head from 'next/head';
import { Site } from '../site';
import Hero from '../sections/hero';
import Services from '../sections/service';
import Properties from '../sections/properties';
import Contact from '../sections/contect';

interface TemplateBProps {
  site: Site;
}

const TemplateB: React.FC<TemplateBProps> = ({ site }) => {
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

      <div className="min-h-screen bg-gray-900">
        {/* Header elegante con fondo oscuro */}
        <header 
          className="fixed top-0 left-0 right-0 z-50"
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <h1 
              className="text-3xl font-bold tracking-wider"
              style={{ color: config.theme.primaryColor }}
            >
              {config.content.companyName}
            </h1>
            <nav className="hidden md:flex space-x-10 text-white">
              <a href="#hero" className="hover:opacity-70 transition-opacity uppercase text-sm tracking-wide">Inicio</a>
              {config.sections.properties && <a href="#properties" className="hover:opacity-70 transition-opacity uppercase text-sm tracking-wide">Propiedades</a>}
              {config.sections.testimonials && <a href="#testimonials" className="hover:opacity-70 transition-opacity uppercase text-sm tracking-wide">Testimonios</a>}
              {config.sections.contact && <a href="#contact" className="hover:opacity-70 transition-opacity uppercase text-sm tracking-wide">Contacto</a>}
            </nav>
          </div>
        </header>

        {/* Espaciador */}
        <div className="h-20"></div>

        {/* Contenido */}
        <div className="bg-white">
          <div id="hero">
            {config.sections.hero && <Hero config={config} />}
          </div>

          <div id="services">
            {config.sections.services && <Services config={config} />}
          </div>

          <div id="properties">
            {config.sections.properties && <Properties config={config} />}
          </div>

          {/* Sección de testimonios (placeholder) */}
          {config.sections.testimonials && (
            <section className="py-20 bg-gray-100">
              <div className="container mx-auto px-4">
                <h2 
                  className="text-4xl font-bold text-center mb-12"
                  style={{ color: config.theme.primaryColor }}
                >
                  Lo que dicen nuestros clientes
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white p-8 rounded-lg shadow-lg">
                      <p className="text-gray-600 mb-4 italic">
                        Excelente servicio, encontré mi casa ideal en tiempo récord
                        </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                        <div>
                          <p className="font-bold">Cliente {i}</p>
                          <p className="text-sm text-gray-500">Propietario</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          <div id="contact">
            {config.sections.contact && <Contact config={config} />}
          </div>
        </div>

        {/* Footer corporativo */}
        <footer 
          className="py-12 text-white"
          style={{ backgroundColor: '#111827' }}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 
              className="text-3xl font-bold mb-4"
              style={{ color: config.theme.primaryColor }}
            >
              {config.content.companyName}
            </h2>
            <p className="mb-2">{config.content.email}</p>
            <p className="mb-4">{config.content.phone}</p>
            <p className="text-sm opacity-70">© 2024 Todos los derechos reservados.</p>
            <p className="text-xs mt-2 opacity-50">Template: Elegant</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TemplateB;