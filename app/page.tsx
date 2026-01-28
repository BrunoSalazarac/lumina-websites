// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }










// import { GetServerSideProps } from 'next';
// import { Site } from './site';
// import TemplateA from './templates/templateA';
// import TemplateB from './templates/templateB';
// import TemplateC from './templates/templateC';

// interface HomeProps {
//   site: Site | null;
//   error?: string;
// }

// export default function Home({ site, error }: HomeProps) {
//   // Error fallback
//   if (error || !site) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">
//             🏠 Sitio no encontrado
//           </h1>
//           <p className="text-gray-600 mb-8">
//             {error || 'No se pudo cargar la configuración del sitio'}
//           </p>
//           <p className="text-sm text-gray-500">
//             Dominio: {typeof window !== 'undefined' ? window.location.hostname : 'desconocido'}
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // Renderizar template según configuración
//   switch (site.template_id) {
//     case 'template-a':
//       return <TemplateA site={site} />;
//     case 'template-b':
//       return <TemplateB site={site} />;
//     case 'template-c':
//       return <TemplateC site={site} />;
//     default:
//       return <TemplateA site={site} />;
//   }
// }

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   try {
//     // Obtener el dominio de la petición
//     const host = context.req.headers.host || '';
//     const domain = host.split(':')[0]; // Remover puerto si existe

//     console.log('🌐 Dominio detectado:', domain);

//     // Llamar a la API para obtener la configuración
//     const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
//     const response = await fetch(`${API_URL}/sites/config?domain=${domain}`);

//     if (!response.ok) {
//       console.error('❌ Error al obtener configuración:', response.status);
//       return {
//         props: {
//           site: null,
//           error: `Configuración no encontrada para el dominio: ${domain}`,
//         },
//       };
//     }

//     const site: Site = await response.json();
//     console.log('✅ Configuración cargada:', site.template_id);

//     return {
//       props: {
//         site,
//       },
//     };
//   } catch (error) {
//     console.error('❌ Error en getServerSideProps:', error);
//     return {
//       props: {
//         site: null,
//         error: 'Error al conectar con el servidor',
//       },
//     };
//   }
// };


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
      process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

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
      site: {
        id: 1,
        template_id: 'template-c',
        domain: 'brunito.com',
        config:   {
          sections: {
            "hero": true,
            "services": true,
            "properties": true,
            "testimonials": false,
            "about": true,
            "contact": true
          },
          theme: {
            "primaryColor": "#059669",
            "secondaryColor": "#047857",
            "logo": "/logos/logo-c.png"
          },
          seo: {
            "title": "Mi Primera Casa - Propiedades para jóvenes",
            "description": "Tu primera propiedad está aquí. Financiamiento accesible y proceso simplificado.",
            "keywords": "primera casa, crédito hipotecario, departamentos jóvenes"
          },
          content: {
            "companyName": "Mi Primera Casa",
            "email": "hola@tres.tudominio.com",
            "phone": "+52 555 123 4567",
            "address": "Centro Comercial Plaza Norte"
          },
        },
        is_active: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      error: '',
    };
  }
}

export default async function Home() {
  const { site, error } = await getSiteConfig();

  // site?.template_id = 'template-a'

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
