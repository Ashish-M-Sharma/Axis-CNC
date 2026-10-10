import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
const About = lazy(() => import('./pages/About.jsx'))
const ServicePage = lazy(() => import('./pages/ServicePage.jsx'))
const Machinery = lazy(() => import('./pages/Machinery.jsx'))
const Gallery = lazy(() => import('./pages/Gallery.jsx'))
const Clients = lazy(() => import('./pages/Clients.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Navbar />
      <ScrollTop />
      <main id="main">
        <Suspense fallback={<div className="page-loading" aria-busy="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/machinery" element={<Machinery />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
