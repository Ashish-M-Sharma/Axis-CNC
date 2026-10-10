import { useEffect, useState } from 'react'
import { Img, PageHero, CtaBand } from '../components/ui.jsx'
import { gallery, galleryTags } from '../data.js'

export default function Gallery() {
  const [tag, setTag] = useState('All')
  const [view, setView] = useState(null)
  const list = gallery.filter(g => tag === 'All' || g.tag === tag)
  useEffect(() => {
    if (view === null) return
    const k = e => { if (e.key === 'Escape') setView(null); if (e.key === 'ArrowRight') setView(v => (v + 1) % list.length); if (e.key === 'ArrowLeft') setView(v => (v - 1 + list.length) % list.length) }
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [view, list.length])
  return (
    <>
      <PageHero title="Product gallery" text="Components, castings, dies and tooling developed at Axis CNC." crumbs={[{ t: 'Gallery' }]} />
      <section className="section">
        <div className="wrap">
          <div className="filters">{galleryTags.map(t => <button key={t} className={t === tag ? 'on' : ''} onClick={() => setTag(t)}>{t}</button>)}</div>
          <div className="masonry">
            {list.map((g, i) => <button key={g.img} className="m-item" onClick={() => setView(i)} aria-label={`Open ${g.tag} image`}><Img n={g.img} alt={g.tag} /></button>)}
          </div>
        </div>
      </section>
      {view !== null && list[view] && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setView(null)}>
          <button className="lb-x" aria-label="Close">&times;</button>
          <button className="lb-n prev" aria-label="Previous" onClick={e => { e.stopPropagation(); setView((view - 1 + list.length) % list.length) }}>&#8249;</button>
          <img src={`/img/${list[view].img}.webp`} alt={list[view].tag} onClick={e => e.stopPropagation()} />
          <button className="lb-n next" aria-label="Next" onClick={e => { e.stopPropagation(); setView((view + 1) % list.length) }}>&#8250;</button>
        </div>
      )}
      <CtaBand />
    </>
  )
}
