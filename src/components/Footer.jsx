import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { company, services } from '../data.js'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div>
          <Logo />
          <p className="muted">Design and manufacture of plastic and rubber molds, PDC, GDC and sand casting dies, press tools, jigs and fixtures, and precision machined components.</p>
          <p className="chip">{company.iso} certified</p>
        </div>
        <div>
          <h4>Services</h4>
          {services.slice(0, 6).map(s => <Link key={s.slug} to={`/services/${s.slug}`}>{s.title}</Link>)}
        </div>
        <div>
          <h4>Company</h4>
          <Link to="/about">About us</Link><Link to="/machinery">Machinery</Link><Link to="/gallery">Gallery</Link><Link to="/clients">Clients</Link><Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Reach us</h4>
          {company.phones.map(p => <a key={p.tel} href={`tel:${p.tel}`}>{p.name.split(' ')[0]}: {p.label}</a>)}
          {company.emails.map(e => <a key={e} href={`mailto:${e}`}>{e}</a>)}
          <p className="muted small">{company.units[0]}</p>
        </div>
      </div>
      <div className="wrap foot-bottom">
        <span>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</span>
        <span>GSTIN {company.gstin}</span>
      </div>
    </footer>
  )
}
