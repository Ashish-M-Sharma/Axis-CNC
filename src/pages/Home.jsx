import { Link } from 'react-router-dom'
import { Img, Reveal, SectionHead, CtaBand } from '../components/ui.jsx'
import { services, facilities, clients, process, gallery, company } from '../data.js'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-in">
          <div className="hero-copy">
            <p className="chip">{company.iso} certified tool room</p>
            <h1>Dies, molds and precision parts, made under one roof in Pune.</h1>
            <p className="lead">From 3D design to CNC machining, casting dies and press tools, we build tooling and components for automotive, aerospace, defence and engineering customers.</p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-brass">Request a quote</Link>
              <Link to="/machinery" className="btn btn-ghost">See our machines</Link>
            </div>
            <dl className="hero-stats">
              <div><dt>0.01 mm</dt><dd>machining accuracy</dd></div>
              <div><dt>500 t</dt><dd>press capacity</dd></div>
              <div><dt>5-axis</dt><dd>laser and tube bending</dd></div>
            </dl>
          </div>
          <div className="hero-art" aria-hidden="true">
            <Img n="hero" className="a1" fetchpriority="high" loading="eager" />
            <Img n="die3" className="a2" loading="eager" />
            <Img n="dc5" className="a3" loading="eager" />
          </div>
        </div>
      </section>

      <section className="facts">
        <div className="wrap facts-in">
          {facilities.map(([n, l]) => <div key={l}><b>{n}</b><span>{l}</span></div>)}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead title="What we make" text="Tooling, castings and machined parts, designed and produced in our own tool room." />
          <div className="grid-3">
            {services.map(s => (
              <Link to={`/services/${s.slug}`} className="card svc" key={s.slug}>
                <div className="card-img"><Img n={s.images[0]} alt={s.title} /></div>
                <div className="card-body"><h3>{s.title}</h3><p>{s.short}</p><span className="more">View details</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap split">
          <div className="split-img"><Img n="factory" alt="Axis CNC Technologies facility in Bhosari, Pune" /></div>
          <div>
            <SectionHead title="A complete tool room, not just a machine shop" />
            <p>Design, programming, machining, EDM, fitting, trial and inspection happen in the same facility. That keeps lead times short and lets us fix a problem the day it appears.</p>
            <ul className="ticks">
              <li>Design in CATIA and NX, programming in WorkNC</li>
              <li>5 VMCs, HMC, gantry, VTL, CNC turning, jig boring, EDM and wirecut</li>
              <li>2D and 5-axis laser cutting, 5-axis CNC pipe bending</li>
              <li>Reverse engineering, prototype, batch and production</li>
            </ul>
            <Link to="/about" className="btn">About Axis CNC</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead title="From drawing to dispatch" text="Our nine-step process, followed on every job." />
          <ol className="steps">
            {process.map((p, i) => (
              <Reveal as="li" key={p} delay={i * 40}><span>{i + 1}</span>{p}</Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead title="Parts we have developed" />
          <div className="mosaic">
            {gallery.filter((_, i) => i % 3 === 0).slice(0, 8).map(g => <Img key={g.img} n={g.img} alt={g.tag} />)}
          </div>
          <p className="center-cta"><Link to="/gallery" className="btn btn-ghost">Open full gallery</Link></p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead title="Trusted by leading manufacturers" center />
        </div>
        <div className="marquee" aria-label="Our customers">
          <div className="marquee-track">
            {[...clients, ...clients].map((c, i) => <span key={i}>{c}</span>)}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
