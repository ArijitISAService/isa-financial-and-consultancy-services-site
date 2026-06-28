import Image from 'next/image'
import Link from 'next/link'
import heroImg from '../assets/hero.png'
import { features, services, stats, whyChooseUs } from '../data/siteContent'

export default function HomePage() {
  return (
    <>
      <section className="hero-shell">
        <div className="container hero-grid">
          <div className="row align-items-center g-5">
            <div className="col-lg-7 hero-copy">
              <span className="badge-soft">ISA Financial & Consultancy Services</span>
              <h1>One Stop Solution for All Your Financial Needs</h1>
              <p>
                Support for loans, insurance, account opening, GST, ITR, and everyday financial decisions, wrapped in
                a clean process that feels simple instead of stressful.
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link href="/contact" className="btn btn-gold btn-lg">
                  Book a consultation
                </Link>
                <Link href="/services" className="btn btn-outline-isa btn-lg">
                  Explore services
                </Link>
              </div>

              <div className="hero-meta mt-4">
                {stats.map((item) => (
                  <div key={item.value} className="mini-card">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-5 hero-visual">
              <div className="visual-frame">
                <Image src={heroImg} alt="ISA brand visual" priority />
                <div className="mt-4 p-4 subtle-card bg-white">
                  <div className="d-flex justify-content-between align-items-start gap-3">
                    <div>
                      <div className="text-uppercase text-muted small fw-bold">What clients get</div>
                      <h3 className="h4 mb-2 text-dark">A calm, structured advisory process</h3>
                      <p className="mb-0 text-muted">
                        Clear checklists, practical advice, and responsive follow-through from the first call onward.
                      </p>
                    </div>
                    <div className="step-chip">01</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="section-title mb-4">
            <span className="eyebrow">Our Services</span>
            <h2>One stop solution for all your financial needs</h2>
            <p>Tap any service to open the full details page with every item listed clearly.</p>
          </div>

          <div className="row g-4 align-items-stretch">
            <div className="col-lg-8">
              <div className="service-grid service-grid--poster">
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
                    <p className="mb-2 text-muted">{service.description}</p>
                    <p className="mb-0 fw-semibold" style={{ color: service.accent }}>
                      {service.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="col-lg-4">
              <aside className="why-panel p-4 p-lg-5 h-100">
                <h2 className="mb-4 text-white">Why choose us?</h2>

                <div className="d-grid gap-3">
                  {whyChooseUs.map((item) => (
                    <div key={item.title} className="why-item">
                      <h3 className="h5 text-white mb-1">{item.title}</h3>
                      <p className="mb-0" style={{ color: 'rgba(255,255,255,0.8)' }}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="why-panel__quote mt-4 mb-0">
                  Let us manage your finance, so you can focus on what matters!
                </p>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space-tight">
        <div className="container">
          <div className="contact-strip p-4 p-lg-5">
            <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3 mb-4">
              <div>
                <span className="eyebrow d-block mb-2">Contact Us</span>
                <h2 className="mb-0">Quick contact details in one place</h2>
              </div>
              <Link href="/contact" className="btn btn-gold btn-lg">
                Contact ISA
              </Link>
            </div>

            <div className="contact-strip-grid">
              <div className="contact-strip-card">
                <span className="contact-strip-label">Phone</span>
                <strong>{'9836284383'}</strong>
              </div>
              <div className="contact-strip-card">
                <span className="contact-strip-label">Email</span>
                <strong>{'arijit@isafinancialconsultancyservices.com'}</strong>
              </div>
              <div className="contact-strip-card">
                <span className="contact-strip-label">Address</span>
                <strong>{'Kaikhali VIP, Bhogir Bagan, Kolkata - 700052'}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space-tight">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-5">
              <div className="surface-card h-100 p-4 p-lg-5">
                <span className="eyebrow d-block mb-2">Why ISA</span>
                <h2 className="mb-3">A boutique service style with enterprise-level structure</h2>
                <p className="text-muted mb-0">
                  The experience is designed to feel personal, but the workflow stays organized, professional, and easy
                  to revisit whenever you need a next step.
                </p>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="feature-grid h-100">
                {features.map((feature) => (
                  <article key={feature.title} className="feature-card p-4">
                    <div className="feature-icon mb-3">ISA</div>
                    <h3 className="h5">{feature.title}</h3>
                    <p className="mb-0 text-muted">{feature.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="surface-card p-4 p-lg-5">
            <div className="row g-4 align-items-center">
              <div className="col-lg-8">
                <span className="eyebrow d-block mb-2">Ready to start</span>
                <h2 className="mb-3">If you want organized financial support, we can begin with one conversation.</h2>
                <p className="mb-0 text-muted">
                  Use the contact page to describe your need, and we will help you decide the most practical next move.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <Link href="/contact" className="btn btn-gold btn-lg">
                  Contact ISA
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
