import { useRef, useState } from 'react';
import { ArrowUpRight, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import projects from '@/data/projects';
export default function ProjectsSection({
  featured = false
}) {
  const [query, setQuery] = useState(''),
    [page, setPage] = useState(0),
    [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const filtered = projects.filter(p => (p.title + ' ' + p.description + ' ' + p.tags.join(' ')).toLowerCase().includes(query.toLowerCase()));
  const visible = featured ? projects.slice(0, 3) : filtered.slice(page * 6, page * 6 + 6);
  return <section className="project-collection container max-w-6xl" aria-label={featured ? 'Featured work' : 'Work'}>
 <div className="flex flex-wrap items-end justify-between gap-4 mb-7"><div><p className="section-kicker">{featured ? 'A selection of my work' : 'Projects & experiments'}</p>{featured ? <h2 className="text-2xl font-bold">Featured <span className="text-primary">work</span></h2> : <h1 className="text-4xl sm:text-5xl font-bold">Built with <span className="text-primary">purpose.</span></h1>}</div>{featured ? <Link to="/work" className="text-primary text-sm">Explore all work ↗</Link> : <label className="project-search"><Search size={18} /><input aria-label="Search projects or technologies" placeholder="Search projects or technologies" value={query} onChange={e => {
          setQuery(e.target.value);
          setPage(0);
        }} /></label>}</div>
 <div className="project-grid">{visible.map(project => <button key={project.id} className="project-tile" onClick={() => {
        setSelected(project);
        dialog.current.showModal();
      }}><img src={project.image} alt="" loading="lazy" /><div className="p-5"><div className="flex justify-between gap-3"><h3 className="text-lg font-semibold">{project.title}</h3><ArrowUpRight size={18} className="text-primary shrink-0" /></div><p className="text-muted-foreground text-sm mt-2 line-clamp-2">{project.description}</p><p className="text-primary text-xs mt-4">{project.tags.slice(0, 3).join(' · ')}</p></div></button>)}</div>
 {!visible.length && <p className="py-12 text-center" role="status">No matching projects. Try another name or technology.</p>}
 {!featured && filtered.length > 6 && <div className="project-pagination"><button disabled={page === 0} onClick={() => setPage(page - 1)}>Previous</button><span aria-live="polite">{page + 1} / {Math.ceil(filtered.length / 6)}</span><button disabled={(page + 1) * 6 >= filtered.length} onClick={() => setPage(page + 1)}>Next</button></div>}
 <dialog ref={dialog} className="portfolio-dialog" aria-labelledby="project-detail-title" onClose={() => setSelected(null)}><button className="dialog-close" aria-label="Close project details" onClick={() => dialog.current.close()}><X /></button>{selected && <div className="p-6 sm:p-9"><img className="detail-image" src={selected.image} alt={selected.title + ' screenshot'} /><p className="section-kicker mt-6">Project overview</p><h2 id="project-detail-title" className="text-3xl font-bold">{selected.title}</h2><p className="text-muted-foreground my-5">{selected.description}</p><div className="flex flex-wrap gap-2">{selected.tags.map(tag => <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">{tag}</span>)}</div><div className="flex flex-wrap gap-4 mt-7">{selected.urls.map((url, i) => <a className="cosmic-button" key={i} href={url.href} target="_blank" rel="noreferrer">{url.type === 'github' ? 'View source' : url.type === 'resource' ? 'Download' : 'Live demo'} {url.module} ↗</a>)}</div></div>}</dialog></section>;
}
