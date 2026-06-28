'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { services } from '../data/siteContent'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function SiteHeader() {
  const pathname = usePathname() || ''
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href))
  const closeMenus = () => {
    setMenuOpen(false)
    setServicesOpen(false)
  }

  return (
    <header
      className="navbar navbar-expand-lg navbar-dark sticky-top"
      style={{ background: 'linear-gradient(90deg, rgba(22, 87, 184, 0.92), rgba(255, 45, 141, 0.88))' }}
    >
      <div className="container py-2">
        <Link className="navbar-brand d-flex align-items-center gap-3" href="/" onClick={closeMenus}>
          <span className="brand-mark" aria-hidden="true" />
          <span className="d-flex flex-column lh-sm">
            <strong className="fs-5 text-white">ISA</strong>
            <small className="brand-subtitle text-uppercase d-block">
              Financial & Consultancy Services
            </small>
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-controls="isaNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="isaNav">
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-2 py-3 py-lg-0">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link px-lg-3 ${isActive(item.href) ? 'active' : ''}`}
                onClick={closeMenus}
              >
                {item.label}
              </Link>
            ))}

            <div className="nav-item dropdown service-menu">
              <button
                type="button"
                className={`nav-link px-lg-3 service-menu__toggle ${isActive('/services') ? 'active' : ''}`}
                onClick={() => setServicesOpen((value) => !value)}
                aria-expanded={servicesOpen}
                aria-controls="serviceMenuPanel"
              >
                Services
                <span className="service-menu__chevron" aria-hidden="true">
                  ▾
                </span>
              </button>

              <div className={`service-menu__panel ${servicesOpen ? 'show' : ''}`} id="serviceMenuPanel">
                <Link href="/services" className="service-menu__all" onClick={closeMenus}>
                  All Services
                </Link>
                <div className="service-menu__list">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className={`service-menu__link ${pathname === `/services/${service.slug}` ? 'active' : ''}`}
                      onClick={closeMenus}
                    >
                      <span className="service-menu__code">{service.code}</span>
                      <span>{service.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/contact" className="btn btn-gold ms-lg-3 mt-3 mt-lg-0" onClick={closeMenus}>
              Book a consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
