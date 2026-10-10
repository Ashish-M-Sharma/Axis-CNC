import { Link, useParams } from 'react-router-dom'
import { Img, PageHero, CtaBand, SectionHead } from '../components/ui.jsx'
import { services } from '../data.js'
import Home from './Home.jsx'

export default function ServicePage() {
  const { slug } = useParams()
  const s = services.find(x => x.slug === slug)
  if (!s) return <Home />
  const others = services.filter(x => x.slug !== slug).slice(0, 3)
  return (
    <>
      <PageHero title={s.title} text={s.short} crumbs={[{ t: 'Services' }, { t: s.title }]} />
      <section className="section">
        <div className="wrap split">
          <div>
            <p className="big">{s.intro}</p>
            <ul className="ticks">{s.points.map(p => <li key={p}>{p}</li>)}</ul>
            <Link to="/contact" className="btn">Discuss your requirement</Link>
          </div>
          <div className="split-img"><Img n={s.images[0]} alt={s.title} /></div>
        </div>
      </section>
      {s.images.length > 1 && (
        <section className="section alt">
          <div className="wrap">
            <SectionHead title="Work we have done" />
            <div className="mosaic">{s.images.slice(1).map(i => <Img key={i} n={i} alt={s.title} />)}</div>
          </div>
        </section>
      )}
      <section className="section">
        <div className="wrap">
          <SectionHead title="Other services" />
          <div className="grid-3">
            {others.map(o => (
              <Link to={`/services/${o.slug}`} className="card svc" key={o.slug}>
                <div className="card-img"><Img n={o.images[0]} alt={o.title} /></div>
                <div className="card-body"><h3>{o.title}</h3><p>{o.short}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
