'use client'

export default function PageBanner({ title, description }) {
  return (
    <section className="page-banner">
      <div className="container py-5">
        <div className="row align-items-end g-4">
          <div className="col-lg-8">
            <span className="badge-soft mb-3">ISA Financial & Consultancy Services</span>
            <h1 className="mb-3">{title}</h1>
            <p className="mb-0 lead" style={{ maxWidth: '62ch', color: 'rgba(255,255,255,0.8)' }}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
