import { notFound } from 'next/navigation'
import ServiceDetailPage from '../../../views/ServiceDetailPage'
import { services } from '../../../data/siteContent'

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default function Page({ params }) {
  const service = services.find((item) => item.slug === params.slug)

  if (!service) {
    notFound()
  }

  return <ServiceDetailPage service={service} />
}
