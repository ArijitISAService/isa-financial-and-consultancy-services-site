import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import '../App.css'
import Layout from '../layout/Layout'
import ScrollToTop from '../components/ScrollToTop'

export const metadata = {
  title: 'ISA Financial & Consultancy Services',
  description: 'Clear support for tax planning, business setup, compliance, and day-to-day financial decisions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollToTop />
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
