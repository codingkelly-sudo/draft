import { useState } from 'react';

interface Work {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
}

interface Props {
  works: Work[];
}

export default function WorksFilter({ works }: Props) {
  const [filter, setFilter] = useState('all');

  const filteredWorks = filter === 'all'
    ? works
    : works.filter(w => w.category === filter);

  return (
    <>
      <ul className="filters">
        {['all', 'commercial', 'hospitality', 'office', 'residential'].map(cat => (
          <li key={cat}>
            <a
              href="#"
              className={filter === cat ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); setFilter(cat); }}
            >
              {cat === 'all' ? 'All Works' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <div className="gallery">
        {filteredWorks.map(w => (
          <div className="gallery-item" key={w.id}>
            <a href={w.link}>
              <span className="overlay"><span className="project-name">{w.title}</span></span>
              <div className="gallery-img" style={{ backgroundImage: `url('${w.image}')` }}></div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}