import { trustedPartners } from '../data/siteContent'

export default function TrustBoard() {
  const bankPartners = trustedPartners.filter((partner) => partner.group === 'bank')
  const insurancePartners = trustedPartners.filter((partner) => partner.group === 'insurance')

  return (
    <section className="section-space-tight">
      <div className="container">
        <div className="trust-board surface-card p-4 p-lg-5">
          <div className="row g-4 align-items-start">
            <div className="col-lg-4">
              <span className="eyebrow d-block mb-2">Associate With :</span>
              <h2 className="mb-3">Trusted by major banking and insurance names</h2>
              <p className="text-muted mb-0">
                A logo-collage style trust board that builds confidence before the final call to action.
              </p>
            </div>

            <div className="col-lg-8">
              <div className="trust-collage trust-collage--banks">
                {bankPartners.map((partner) => (
                  <div
                    key={partner.name}
                    className="trust-logo-card"
                    style={{
                      '--partner-accent': partner.accent,
                      '--partner-accent-soft': `${partner.accent}22`,
                    }}
                  >
                    <span className="trust-logo-mark">{partner.mark}</span>
                    <span className="trust-logo-name">
                      {partner.lines.map((line, index) => (
                        <span key={line} className={`trust-logo-line ${index > 0 ? 'trust-logo-line--small' : ''}`}>
                          {line}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>

              <div className="trust-collage trust-collage--insurance mt-3">
                {insurancePartners.map((partner) => (
                  <div
                    key={partner.name}
                    className="trust-logo-card trust-logo-card--insurance"
                    style={{
                      '--partner-accent': partner.accent,
                      '--partner-accent-soft': `${partner.accent}22`,
                    }}
                  >
                    <span className="trust-logo-mark">{partner.mark}</span>
                    <span className="trust-logo-name">
                      {partner.lines.map((line, index) => (
                        <span key={line} className={`trust-logo-line ${index > 0 ? 'trust-logo-line--small' : ''}`}>
                          {line}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
