import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <SiteHeader />

      <main className="main-content">
        {children}
      </main>

      <SiteFooter />
    </div>
  )
}
