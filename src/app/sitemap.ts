import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.studiolegalejessicafici.it'
  
  const services = [
    'diritto-di-famiglia',
    'recupero-crediti', 
    'immigrazione-e-cittadinanza',
    'diritto-tributario',
    'diritto-penale',
    'diritto-del-lavoro',
    'mediazione-e-negoziazione-assistita',
    'volontaria-giurisdizione'
  ]

  const currentDate = new Date()
  
  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1
    },
    // Contatti
    {
      url: `${baseUrl}/contatti`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    // Servizi
    ...services.map(service => ({
      url: `${baseUrl}/aree-di-attivita/${service}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9
    }))
  ]
}