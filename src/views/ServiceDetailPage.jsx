import Link from 'next/link'
import PageBanner from '../components/PageBanner'

export default function ServiceDetailPage({ service }) {
  return (
    <>
      <PageBanner title={service.title} description={service.description} />

      <section className="section-space">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-8">
              <div className="surface-card p-4 p-lg-5 h-100">
                <span className="eyebrow d-block mb-2">What’s included</span>
                <h2 className="mb-3">{service.summary}</h2>
                <p className="text-muted mb-4">
                  This page opens the service fully, so every item is easy to scan before you contact us.
                </p>

                <div className="row g-3">
                  {service.items.map((item) => (
                    <div key={item} className="col-md-6">
                      <div className="subtle-card p-3 h-100 d-flex align-items-center">
                        <div className="feature-icon me-3" style={{ background: service.soft, color: service.accent }}>
                          {service.code}
                        </div>
                        <span className="fw-semibold">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="why-panel why-panel--compact p-4 p-lg-5 h-100">
                <span className="eyebrow d-block mb-2 text-white-50">Need help choosing?</span>
                <h2 className="mb-3 text-white">We can guide the best next step.</h2>
                <p className="mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  Share your requirement and we will point you to the right service, process, and documents.
                </p>
                <div className="d-grid gap-3">
                  <Link href="/contact" className="btn btn-gold btn-lg">
                    Contact ISA
                  </Link>
                  <Link href="/services" className="btn btn-outline-isa btn-lg">
                    Back to services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
