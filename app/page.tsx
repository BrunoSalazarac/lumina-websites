import { headers } from 'next/headers';
import { Site } from './site';
import TemplateA from './templates/templateA';
import TemplateB from './templates/templateB';
import TemplateC from './templates/templateC';

interface HomeProps {
  site: Site | null;
  error?: string;
}

async function getSiteConfig(): Promise<HomeProps> {
  try {
    const headersList = await headers();
    const host = headersList.get('host') || '';
    const domain = host.split(':')[0];

    console.log('🌐 Dominio detectado:', domain);

    const API_URL =
      process.env.NEXT_PUBLIC_API_URL || 'https://lumina-server-test-production.up.railway.app';

    const response = await fetch(
      `${API_URL}/sites/config?domain=${domain}`,
      {
        cache: 'no-store', // 👈 importante (SSR real)
      }
    );

    if (!response.ok) {
      return {
        site: null,
        error: `Configuración no encontrada para el dominio: ${domain}`,
      };
    }

    const site: Site = await response.json();

    return { site };
  } catch (error) {
    console.error('❌ Error al cargar el sitio:', error);
    return {
      site: null,
      error: 'Error al conectar con el servidor',
    };
  }
}

export default async function Home() {
  const { site, error } = await getSiteConfig();

  // Error fallback
  if (error || !site) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🏠 Sitio no encontrado
          </h1>
          <p className="text-gray-600 mb-8">
            {error || 'No se pudo cargar la configuración del sitio'}
          </p>
          <p className="text-sm text-gray-500">
            Dominio: {site ? site.domain : 'desconocido'}
          </p>
        </div>
      </div>
    );
  }

  // Renderizar template según configuración
  switch (site.template_id) {
    case 'template-a':
      return <TemplateA site={site} />;
    case 'template-b':
      return <TemplateB site={site} />;
    case 'template-c':
      return <TemplateC site={site} />;
    default:
      return <TemplateA site={site} />;
  }
}
