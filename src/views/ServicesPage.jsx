import Link from 'next/link'
import PageBanner from '../components/PageBanner'
import { serviceDetails, services } from '../data/siteContent'

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Services"
        description="A focused service list that covers planning, setup, documentation, and ongoing support."
      />

      <section className="section-space">
        <div className="container">
          <div className="section-title mb-4">
            <span className="eyebrow">What we cover</span>
            <h2>Support that fits common financial and business needs</h2>
            <p>
              Each service opens a full details page, so you can scan every item before you reach out.
            </p>
          </div>

          <div className="service-grid service-grid--poster mb-5">
            {services.map((service) => (
              <Link
                key={service.title}
                href={`/services/${service.slug}`}
                className="service-card service-card--poster p-4"
                style={{
                  background: `linear-gradient(135deg, ${service.soft}, rgba(255, 255, 255, 0.96))`,
                }}
              >
                <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
                  <div className="feature-icon" style={{ background: service.soft, color: service.accent }}>
                    {service.code}
                  </div>
                  <span className="pill-dark">Open page</span>
                </div>
                <h3 className="h4">{service.title}</h3>
                <p className="text-muted mb-2">{service.description}</p>
                <p className="mb-0 fw-semibold" style={{ color: service.accent }}>
                  {service.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space-tight">
        <div className="container">
          <div className="surface-card p-4 p-lg-5">
            <div className="row g-4 align-items-start">
              <div className="col-lg-4">
                <span className="eyebrow d-block mb-2">How it works</span>
                <h2 className="mb-3">A light process with a clear rhythm</h2>
                <p className="text-muted mb-0">
                  We keep the steps visible so the work feels guided rather than open-ended.
                </p>
              </div>

              <div className="col-lg-8">
                <div className="row g-3">
                  {[
                    ['Tell us the goal', 'Share the problem, deadline, or decision you are facing.'],
                    ['Review the options', 'We outline practical paths and explain the trade-offs.'],
                    ['Move forward', 'You get a clear next step list and the support to finish it.'],
                  ].map(([title, description], index) => (
                    <div className="col-md-4" key={title}>
                      <div className="subtle-card p-4 h-100">
                        <div className="step-chip mb-3">{index + 1}</div>
                        <h3 className="h5">{title}</h3>
                        <p className="mb-0 text-muted">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space-tight">
        <div className="container">
          <div className="surface-card p-4 p-lg-5">
            <div className="row g-4 align-items-start">
              <div className="col-lg-4">
                <span className="eyebrow d-block mb-2">Service details</span>
                <h2 className="mb-3">A practical menu of support</h2>
                <p className="text-muted mb-0">
                  These are the common service groupings we use to keep conversations simple and organized.
                </p>
              </div>

              <div className="col-lg-8">
                <div className="row g-3">
                  {serviceDetails.map((detail) => (
                    <div className="col-md-4" key={detail.title}>
                      <div className="subtle-card p-4 h-100">
                        <h3 className="h5">{detail.title}</h3>
                        <ul className="ps-3 mb-0 text-muted">
                          {detail.points.map((point) => (
                            <li key={point} className="mb-2">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
