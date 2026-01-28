export interface SiteConfig {
  sections: {
    hero: boolean;
    services: boolean;
    properties: boolean;
    testimonials: boolean;
    about: boolean;
    contact: boolean;
  };
  theme: {
    primaryColor: string;
    secondaryColor: string;
    logo: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  content: {
    companyName: string;
    email: string;
    phone: string;
    address: string;
  };
}

export interface Site {
  id: number;
  domain: string;
  template_id: string;
  config: SiteConfig;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}