import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import { services, serviceGroups, company } from '../data.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [mega, setMega] = useState(false)
  const [mobSvc, setMobSvc] = useState(false)
  const [stuck, setStuck] = useState(false)
  const loc = useLocation()
  const timer = useRef()

  useEffect(() => { setOpen(false); setMega(false) }, [loc.pathname])
  useEffect(() => {
    const on = () => setStuck(window.scrollY > 8)
    on(); window.addEventListener('scroll', on, { passive: true })
    const esc = e => { if (e.key === 'Escape') { setMega(false); setOpen(false) } }
    window.addEventListener('keydown', esc)
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('keydown', esc) }
  }, [])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])

  const enter = () => { clearTimeout(timer.current); setMega(true) }
  const leave = () => { timer.current = setTimeout(() => setMega(false), 140) }

  return (
    <header className={'nav' + (stuck ? ' stuck' : '')}>
      <div className="topbar">
        <div className="wrap topbar-in">
          <span>{company.iso} certified &middot; Bhosari, Pune</span>
          <span className="tb-links">
            <a href={`tel:${company.phones[0].tel}`}>{company.phones[0].label}</a>
            <a href={`mailto:${company.emails[2]}`}>{company.emails[2]}</a>
          </span>
        </div>
      </div>
      <div className="wrap nav-in">
        <Link to="/" aria-label="Axis CNC Technologies home"><Logo /></Link>

        <nav className={'menu' + (open ? ' open' : '')} aria-label="Main">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>

          <div className="has-mega" onMouseEnter={enter} onMouseLeave={leave}>
            <button className={'mega-btn' + (loc.pathname.startsWith('/services') ? ' active' : '')} aria-expanded={mega} aria-haspopup="true"
              onClick={() => (window.innerWidth < 1000 ? setMobSvc(v => !v) : setMega(v => !v))}>
              Services <svg viewBox="0 0 12 12" width="11" height="11" className={(mega || mobSvc) ? 'flip' : ''} aria-hidden="true"><path d="m2 4 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>
            </button>
            <div className={'mega' + (mega ? ' show' : '') + (mobSvc ? ' mob-show' : '')} onFocus={enter} onBlur={leave}>
              <div className="mega-grid">
                {serviceGroups.map(g => (
                  <div key={g} className="mega-col">
                    <h4>{g}</h4>
                    {services.filter(s => s.group === g).map(s => (
                      <Link key={s.slug} to={`/services/${s.slug}`}><b>{s.title}</b><span>{s.short}</span></Link>
                    ))}
                  </div>
                ))}
                <Link to="/machinery" className="mega-feature">
                  <img src="/img/m-gantry.webp" alt="" loading="lazy" />
                  <b>Our machine shop</b>
                  <span>VMCs, 5-axis laser, gantry up to 2100 mm, presses to 500 tons.</span>
                </Link>
              </div>
            </div>
          </div>

          <NavLink to="/machinery">Machinery</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/clients">Clients</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <Link to="/contact" className="btn btn-sm hide-sm">Get a quote</Link>
          <button className="icon-btn burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(v => !v)}>
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round">{open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg>
          </button>
        </div>
      </div>
    </header>
  )
}
