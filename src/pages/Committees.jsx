import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.jsx';
import { CommitteeCard } from '../components/CommitteeCard.jsx';
import { COMMITTEES } from '../data/committees.js';

const TABS = ['All', 'General Assembly', 'Specialized', 'Crisis'];

export default function Committees() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? COMMITTEES : COMMITTEES.filter((c) => c.type === filter);

  return (
    <div>
      <PageHeader eyebrow="Committees" title="Three tracks, every level"
        intro="Pick the room that fits you — versatile General Assemblies, focused Specialized agencies, or fast-moving Crisis committees." />
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 32px 88px' }}>
        {/* filter tabs */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
          {TABS.map((t) => {
            const active = filter === t;
            return (
              <button key={t} onClick={() => setFilter(t)} style={{
                fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 600,
                padding: '9px 18px', borderRadius: 'var(--radius-pill)', cursor: 'pointer',
                border: `1.5px solid ${active ? 'var(--ink-800)' : 'var(--border-soft)'}`,
                background: active ? 'var(--ink-800)' : 'transparent',
                color: active ? 'var(--white)' : 'var(--ink-700)',
                transition: 'all var(--dur-fast)',
              }}>
                {t}
              </button>
            );
          })}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 22 }}>
          {shown.map((c) => <CommitteeCard key={c.code} {...c} onClick={() => navigate('/registration')} />)}
        </div>
      </section>
    </div>
  );
}
