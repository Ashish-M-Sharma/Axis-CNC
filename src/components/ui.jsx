import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { setOn(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.15 })
    io.observe(el); return () => io.disconnect()
  }, [])
  return <Tag ref={ref} className={`reveal ${on ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</Tag>
}

export const Img = ({ n, alt = '', className = '', ...p }) => (
  <img src={`/img/${n}.webp`} alt={alt} className={className} loading="lazy" decoding="async" {...p} />
)

export function SectionHead({ title, text, center }) {
  return (
    <div className={'sec-head' + (center ? ' center' : '')}>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

export function PageHero({ title, text, crumbs }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <p className="crumbs"><Link to="/">Home</Link>{crumbs && crumbs.map(c => <span key={c.t}> / {c.to ? <Link to={c.to}>{c.t}</Link> : c.t}</span>)}</p>
        <h1>{title}</h1>
        {text && <p className="lead">{text}</p>}
      </div>
    </section>
  )
}

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="wrap cta-in">
        <div><h2>Have a drawing or a sample part?</h2><p>Send it over and we will come back with feasibility, timeline and a quote.</p></div>
        <Link to="/contact" className="btn btn-brass">Request a quote</Link>
      </div>
    </section>
  )
}
