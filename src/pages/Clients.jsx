import { PageHero, CtaBand } from '../components/ui.jsx'
import { clients } from '../data.js'
const sectors = ['Automobile', 'Aerospace', 'Defence', 'Railways', 'Tractor and EV', 'Engineering and industrial']
export default function Clients() {
  return (
    <>
      <PageHero title="Our clients" text="We supply OEMs and Tier-1 suppliers across India." crumbs={[{ t: 'Clients' }]} />
      <section className="section">
        <div className="wrap">
          <div className="grid-3">{clients.map(c => <div key={c} className="panel flat client">{c}</div>)}</div>
          <h3 className="mt">Sectors we serve</h3>
          <div className="tags">{sectors.map(s => <span key={s} className="chip">{s}</span>)}</div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
