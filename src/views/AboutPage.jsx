import PageBanner from '../components/PageBanner'
import { serviceDetails, timeline, values } from '../data/siteContent'

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About ISA"
        description="A consultancy experience built to feel steady, trustworthy, and easy to act on."
      />

      <section className="section-space">
        <div className="container about-grid">
          <div className="surface-card p-4 p-lg-5">
            <span className="eyebrow d-block mb-2">Our story</span>
            <h2 className="mb-3">Simple advice, better structure, fewer surprises</h2>
            <p className="text-muted mb-4">
              ISA Financial & Consultancy Services is framed around one idea: financial support should reduce
              confusion instead of adding to it. We keep the process readable, the communication direct, and the next
              steps realistic.
            </p>

            <div className="row g-3">
              {values.map((value) => (
                <div className="col-md-4" key={value.title}>
                  <div className="value-card p-3">
                    <div className="feature-icon mb-3">{value.code}</div>
                    <h3 className="h5">{value.title}</h3>
                    <p className="mb-0 text-muted">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card p-4 p-lg-5">
            <span className="eyebrow d-block mb-2">Our process</span>
            <h2 className="mb-4">How we work with you</h2>
            <div className="timeline">
              {timeline.map((item) => (
                <article key={item.step} className="timeline-card p-3 p-md-4">
                  <div className="timeline-icon">{item.step}</div>
                  <div>
                    <h3 className="h5 mb-2">{item.title}</h3>
                    <p className="mb-0 text-muted">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space-tight">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7">
              <div className="surface-card p-4 p-lg-5 h-100">
                <span className="eyebrow d-block mb-2">What clients can expect</span>
                <h2 className="mb-3">A service style that is practical, responsive, and easy to trust</h2>
                <p className="text-muted mb-4">
                  We aim to keep every interaction useful. That means explaining options clearly, flagging trade-offs
                  honestly, and helping you move ahead without unnecessary friction.
                </p>
                <div className="row g-3">
                  {serviceDetails.map((detail) => (
                    <div className="col-md-4" key={detail.title}>
                      <div className="subtle-card p-3 h-100">
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

            <div className="col-lg-5">
              <div className="map-box p-4 p-lg-5 h-100 d-flex flex-column justify-content-between">
                <div>
                  <span className="badge-soft mb-3">ISA perspective</span>
                  <h2 className="mb-3 text-white">Focused on clarity, not clutter</h2>
                  <p className="mb-0" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    The visual language is intentionally calm: navy for trust, teal for momentum, and gold for the
                    important action points.
                  </p>
                </div>
                <div className="mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <div className="map-pin">
                      <strong>ISA</strong>
                    </div>
                    <div>
                      <div className="fw-bold text-white">Responsive service</div>
                      <div style={{ color: 'rgba(255,255,255,0.78)' }}>Built to work well on every screen size.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
