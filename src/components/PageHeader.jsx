import { Logo } from './Logo.jsx';

export function PageHeader({ eyebrow, title, intro }) {
  return (
    <section style={{ position: 'relative', background: 'var(--ink-900)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: -60, top: '50%', transform: 'translateY(-50%)', opacity: 0.10, pointerEvents: 'none' }}>
        <Logo variant="mark" tone="light" size={300} />
      </div>
      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '64px 32px 60px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sky-300)' }}>{eyebrow}</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-3xl)', color: 'var(--white)', letterSpacing: '-0.02em', margin: '12px 0 0' }}>{title}</h1>
        {intro && <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', color: 'var(--ink-200)', margin: '14px 0 0', maxWidth: 600 }}>{intro}</p>}
      </div>
    </section>
  );
}
