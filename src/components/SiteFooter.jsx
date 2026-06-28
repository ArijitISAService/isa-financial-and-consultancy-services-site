import Link from 'next/link'
import { officeInfo, ownerInfo, socialLinks } from '../data/siteContent'

export default function SiteFooter() {
  return (
    <footer className="footer-shell footer-shell--compact">
      <div className="container">
        <div className="footer-grid footer-grid--compact">
          <div>
            <div className="d-flex align-items-center gap-3 mb-2">
              <span className="brand-mark" aria-hidden="true" />
              <div>
                <strong className="fs-4 d-block text-white">ISA</strong>
                <span className="footer-note">Financial & Consultancy Services</span>
              </div>
            </div>
            <p className="mb-0 footer-copy">
              Clear, steady support for tax, business, and everyday financial decisions. Built for clients who want
              less noise and more confidence.
            </p>
          </div>

          <div>
            <h3 className="h5 text-white mb-2">Quick Links</h3>
            <ul className="list-unstyled d-grid gap-1 mb-0">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="h5 text-white mb-2">Services</h3>
            <ul className="list-unstyled d-grid gap-1 mb-0">
              <li>
                <span>LOANS</span>
              </li>
              <li>
                <span>INSURANCE</span>
              </li>
              <li>
                <span>ACCOUNT OPENING</span>
              </li>
              <li>
                <span>ITR FILING</span>
              </li>
              <li>
                <span>GST FILING</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="h5 text-white mb-2">Contact</h3>
            <div className="footer-contact-block mb-2">
              <p className="mb-1 fw-semibold text-white">{ownerInfo.name}</p>
              <p className="mb-1 footer-note">{ownerInfo.title}</p>
              <p className="mb-1">
                <a href={`tel:${ownerInfo.phone}`}>{ownerInfo.phone}</a>
              </p>
              <p className="mb-1 text-white fw-semibold">{officeInfo.label}</p>
              <p className="mb-1 footer-note footer-address">{officeInfo.address}</p>
              <p className="mb-0 d-grid gap-1">
                {officeInfo.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`}>
                    {email}
                  </a>
                ))}
              </p>
            </div>
            <Link href="/contact" className="btn btn-outline-isa btn-sm">
              Open contact page
            </Link>
          </div>
        </div>

        <div className="footer-follow mt-2">
          <h3 className="h5 text-white mb-1">Follow Us</h3>
          <ul className="list-unstyled social-links social-links--inline mb-0">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noreferrer">
                  <span className="social-chip" aria-hidden="true">
                    {social.abbr}
                  </span>
                  <span>{social.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <hr className="footer-divider my-2" />

        <div className="d-flex flex-column flex-md-row justify-content-between gap-1 footer-note small">
          <span>ISA Financial & Consultancy Services</span>
          <span className="ms-md-auto text-md-end">
            Copyright (c) 2026 ISA Financial & Consultancy Services. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
