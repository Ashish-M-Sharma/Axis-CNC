import { useState } from 'react'
import { Img, PageHero, CtaBand } from '../components/ui.jsx'
import { machines, machineCats } from '../data.js'

export default function Machinery() {
  const [cat, setCat] = useState('All')
  const list = machines.filter(m => cat === 'All' || m.cat === cat)
  return (
    <>
      <PageHero title="Machinery and infrastructure" text="Advanced CNC machines and sophisticated software, backed by a full conventional set-up." crumbs={[{ t: 'Machinery' }]} />
      <section className="section">
        <div className="wrap">
          <div className="filters" role="tablist">{machineCats.map(c => <button key={c} className={c === cat ? 'on' : ''} onClick={() => setCat(c)}>{c}</button>)}</div>
          <div className="grid-3">
            {list.map(m => (
              <article className="card" key={m.name}>
                <div className="card-img"><Img n={m.img} alt={m.name} /></div>
                <div className="card-body">
                  <h3>{m.name}</h3>
                  <dl className="kv">{m.specs.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
                </div>
              </article>
            ))}
          </div>
          <p className="muted small">Also in house: HMC, jig boring, EDM and wirecut, WorkNC, CATIA and NX software, and press machinery up to 500 tons.</p>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
