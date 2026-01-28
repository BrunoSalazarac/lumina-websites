# 🏠 Inmobiliarias Frontend - Next.js

Frontend multi-dominio con SSR para sitios inmobiliarios.

## 🎯 ¿Qué hace este proyecto?

- ✅ Detecta el dominio automáticamente (`uno.tudominio.com`, `dos.tudominio.com`, etc.)
- ✅ Carga la configuración desde el backend según el dominio
- ✅ Renderiza el template correspondiente (A, B o C)
- ✅ SEO perfecto con meta tags dinámicos
- ✅ Secciones activables/desactivables por configuración

## 🚀 Deploy en Vercel

### Paso 1: Conectar repositorio
1. Ve a [vercel.com](https://vercel.com)
2. Click en "Add New" → "Project"
3. Importa tu repositorio de GitHub
4. Vercel detecta automáticamente que es Next.js

### Paso 2: Configurar variables de entorno
En Vercel, ve a "Settings" → "Environment Variables":

```
NEXT_PUBLIC_API_URL = https://tu-backend.railway.app
```

### Paso 3: Deploy
Click en "Deploy" y espera 2-3 minutos.

### Paso 4: Configurar dominios personalizados
1. Ve a "Settings" → "Domains"
2. Agrega tus dominios:
   - `uno.tudominio.com`
   - `dos.tudominio.com`
   - `tres.tudominio.com`

3. Vercel te dará registros DNS para configurar:
   ```
   Tipo: CNAME
   Nombre: uno
   Valor: cname.vercel-dns.com
   ```

4. En tu proveedor de DNS (GoDaddy, Cloudflare, etc.):
   - Agrega los registros CNAME para cada subdominio
   - Espera 5-30 minutos para propagación

### Paso 5: Verificar
Vercel verificará automáticamente los dominios y emitirá certificados SSL.

## 🧪 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Copiar .env.example
cp .env.local.example .env.local

# Editar .env.local con tu URL del backend
# NEXT_PUBLIC_API_URL=http://localhost:3001

# Iniciar en modo desarrollo
npm run dev
```

Para probar diferentes dominios localmente:
```bash
# Editar /etc/hosts (Mac/Linux) o C:\Windows\System32\drivers\etc\hosts (Windows)
127.0.0.1 uno.localhost
127.0.0.1 dos.localhost
127.0.0.1 tres.localhost
```

Luego accede a: `http://uno.localhost:3000`

## 📁 Estructura del Proyecto

```
├── pages/
│   ├── index.tsx              # Página principal (SSR)
│   ├── _app.tsx               # Configuración global
│   └── _document.tsx          # HTML base
├── templates/
│   ├── TemplateA.tsx          # Template moderno
│   ├── TemplateB.tsx          # Template elegante
│   └── TemplateC.tsx          # Template fresco
├── components/
│   └── sections/
│       ├── Hero.tsx           # Sección hero
│       ├── Services.tsx       # Servicios
│       ├── Properties.tsx     # Propiedades
│       └── Contact.tsx        # Contacto
├── services/
│   └── siteService.ts         # Llamadas a la API
├── types/
│   └── site.ts                # TypeScript types
└── styles/
    └── globals.css            # Estilos globales
```

## 🎨 Templates Disponibles

### Template A - Modern
- Diseño limpio y minimalista
- Colores: Azul (#2563eb)
- Ideal para: Inmobiliarias premium

### Template B - Elegant
- Diseño corporativo oscuro
- Colores: Rojo (#dc2626)
- Ideal para: Inversión inmobiliaria

### Template C - Fresh
- Diseño juvenil y fresco
- Colores: Verde (#059669)
- Ideal para: Primera vivienda

## 🔧 Cómo funciona el multi-dominio

1. **Usuario visita**: `uno.tudominio.com`
2. **Next.js SSR**: Detecta el dominio en `getServerSideProps`
3. **API Call**: Consulta configuración al backend
4. **Render**: Carga el template correcto con meta tags
5. **SEO**: Google indexa correctamente cada sitio

## 🌐 Testing

Puedes probar en local modificando el archivo `/etc/hosts`:
```
127.0.0.1 uno.localhost
127.0.0.1 dos.localhost
127.0.0.1 tres.localhost
```

Luego accede a `http://uno.localhost:3000` en tu navegador.

## 📊 Secciones Configurables

Cada template puede mostrar/ocultar:
- ✅ Hero (banner principal)
- ✅ Services (servicios)
- ✅ Properties (propiedades destacadas)
- ✅ Testimonials (testimonios)
- ✅ About (sobre nosotros)
- ✅ Contact (formulario de contacto)

Configuración se hace desde el backend en la tabla `sites`.