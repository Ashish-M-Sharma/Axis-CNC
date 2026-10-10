import { Img, PageHero, SectionHead, CtaBand } from '../components/ui.jsx'
import { directors, company } from '../data.js'

const tech = ['Automated CNC and multi-axis machining', 'Digital CAD/CAM integration', 'Reverse engineering and rapid prototyping', 'Continuous improvement systems']
const goals = ['Zero-defect manufacturing through strict process control', 'Continuous upgrades in CNC, VMC, 5-axis and CAD/CAM', 'Optimized solutions that reduce cost and improve function', 'Industry-leading development lead times', 'Growth through training and process improvement', 'Stronger partnerships with OEMs and Tier-1 customers']

export default function About() {
  return (
    <>
      <PageHero title="About Axis CNC Technologies" text="A precision engineering and tool-room company in Bhosari, Pune, serving automobile, aerospace, defence and engineering customers across India." crumbs={[{ t: 'About' }]} />
      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Who we are</h2>
            <p>Axis CNC Technologies designs and manufactures plastic and rubber molds, PDC, GDC and sand casting dies, press tools, jigs and fixtures, special purpose machines and machined components.</p>
            <p>With advanced CNC infrastructure, modern design tools and skilled people, we deliver accuracy, quality and quick turnaround to OEMs and Tier-1 suppliers. Tie-ups with trusted vendors cover surface grinding, heat treatment and other processes.</p>
          </div>
          <div className="split-img"><Img n="factory" alt="Axis CNC facility" /></div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap grid-2">
          <div className="panel"><h3>Vision</h3><p>To be a globally trusted engineering and tooling solutions provider known for precision, innovation and excellence in manufacturing.</p></div>
          <div className="panel"><h3>Mission</h3><ul className="ticks">
            <li>Deliver high-quality, precise and cost-effective engineering solutions</li>
            <li>Invest continuously in technology, automation and skilled manpower</li>
            <li>Maintain quality systems aligned with {company.iso}</li>
            <li>Support customers with fast development and technical expertise</li>
            <li>Build long-term, trust-driven relationships</li></ul></div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead title="Strategic goals" />
          <div className="grid-3">{goals.map(g => <div className="panel flat" key={g}>{g}</div>)}</div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap split">
          <div>
            <h2>Technology we work with</h2>
            <ul className="ticks">{tech.map(t => <li key={t}>{t}</li>)}</ul>
            <p className="muted">CATIA, NX and WorkNC for design and programming.</p>
          </div>
          <div className="panel"><h3>Company details</h3>
            <dl className="kv"><div><dt>GSTIN</dt><dd>{company.gstin}</dd></div><div><dt>PAN</dt><dd>{company.pan}</dd></div><div><dt>Certification</dt><dd>{company.iso}</dd></div><div><dt>Plot area</dt><dd>6,000 sq ft</dd></div><div><dt>Built-up area</dt><dd>8,500 sq ft</dd></div></dl>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead title="Directors" />
          <div className="grid-2 directors">
            {directors.map(d => (
              <div className="director" key={d.name}>
                <Img n={d.img} alt={d.name} />
                <div><h3>{d.name}</h3><p className="muted">{d.role}</p><a href={`tel:${d.tel}`} className="btn btn-sm">{d.label}</a></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
