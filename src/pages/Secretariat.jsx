import { PageHeader } from '../components/PageHeader.jsx';
import { SECRETARIAT } from '../data/secretariat.js';

export default function Secretariat() {
  const lead = SECRETARIAT.slice(0, 2);
  const rest = SECRETARIAT.slice(2);

  return (
    <div>
      <PageHeader eyebrow="About" title="The Secretariat" />
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 32px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {lead.map((p) => <LeadCard key={p.name} p={p} />)}
        </div>
      </section>
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '8px 32px 96px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
          {rest.map((p) => <BioCard key={p.name} p={p} />)}
        </div>
      </section>
    </div>
  );
}

function LeadCard({ p }) {
  return (
    <div style={{
      display: 'flex', gap: 22, padding: 24, background: 'var(--white)',
      border: '1px solid var(--border-hair)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)',
    }}>
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <img src={p.img} alt={p.name} style={{
          width: 180, height: 224, objectFit: 'cover', objectPosition: p.imgPosition || 'center', borderRadius: 'var(--radius-md)',
        }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: -2, height: 5, background: 'var(--brand)', borderRadius: '0 0 var(--radius-md) var(--radius-md)' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand)' }}>{p.role}</span>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-xl)', color: 'var(--ink-800)', margin: '6px 0 10px' }}>{p.name}</h3>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', lineHeight: 1.6, color: 'var(--text-body)', margin: 0, whiteSpace: 'pre-line' }}>{p.bio}</p>
      </div>
    </div>
  );
}

function BioCard({ p }) {
  return (
    <div style={{
      background: 'var(--white)', border: '1px solid var(--border-hair)',
      borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ display: 'flex', gap: 16, padding: 20, alignItems: 'center', borderBottom: '1px solid var(--border-hair)' }}>
        <img src={p.img} alt={p.name} style={{ width: 96, height: 96, borderRadius: '999px', objectFit: 'cover', objectPosition: p.imgPosition || 'center', border: '3px solid var(--white)', boxShadow: '0 0 0 2px var(--sky-300)' }} />
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-md)', color: 'var(--ink-800)', margin: 0, lineHeight: 1.15 }}>{p.name}</h3>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sky-600)' }}>{p.role}</span>
        </div>
      </div>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', lineHeight: 1.6, color: 'var(--text-body)', margin: 0, padding: '18px 20px 22px', whiteSpace: 'pre-line' }}>{p.bio}</p>
    </div>
  );
}
