import React from 'react';
import Head from 'next/head';
import { Site } from '../site';
import Hero from '../sections/hero';
import Services from '../sections/service';
import Properties from '../sections/properties';
import Contact from '../sections/contect';

interface TemplateAProps {
  site: Site;
}

const TemplateA: React.FC<TemplateAProps> = ({ site }) => {
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
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 
              className="text-2xl font-bold"
              style={{ color: config.theme.primaryColor }}
            >
              {config.content.companyName}
            </h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#hero" className="hover:opacity-70 transition-opacity">Inicio</a>
              {config.sections.services && <a href="#services" className="hover:opacity-70 transition-opacity">Servicios</a>}
              {config.sections.properties && <a href="#properties" className="hover:opacity-70 transition-opacity">Propiedades</a>}
              {config.sections.contact && <a href="#contact" className="hover:opacity-70 transition-opacity">Contacto</a>}
            </nav>
          </div>
        </header>

        {/* Espaciador para el header fijo */}
        <div className="h-16"></div>

        {/* Secciones condicionales */}
        <div id="hero">
          {config.sections.hero && <Hero config={config} />}
        </div>

        <div id="services">
          {config.sections.services && <Services config={config} />}
        </div>

        <div id="properties">
          {config.sections.properties && <Properties config={config} />}
        </div>

        <div id="contact">
          {config.sections.contact && <Contact config={config} />}
        </div>

        {/* Footer */}
        <footer 
          className="py-8 text-white text-center"
          style={{ backgroundColor: config.theme.primaryColor }}
        >
          <p>© 2024 {config.content.companyName}. Todos los derechos reservados.</p>
          <p className="text-sm mt-2 opacity-80">Template: Modern</p>
        </footer>
      </div>
    </>
  );
};

export default TemplateA;