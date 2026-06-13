import { Link } from 'react-router-dom';
import { Logo } from './Logo.jsx';

export function Footer() {
  return (
    <footer style={{ background: 'var(--ink-900)', color: 'var(--ink-200)' }}>
      <div style={{ height: 4, background: 'var(--brand)' }} />
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '56px 32px 40px',
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 36,
      }}>
        <div style={{ maxWidth: 330 }}>
          <Logo variant="lockup" tone="light" size={48} />
          <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.65, color: 'var(--ink-200)', margin: '18px 0 0' }}>
            School for Advanced Studies Model United Nations Conference
          </p>
          <div style={{
            marginTop: 18, fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--sky-300)',
          }}>
            Oct 16–17 · 2026 · Miami, FL
          </div>
        </div>
        <div style={{ display: 'flex', gap: 64, flexWrap: 'wrap' }}>
          <FootCol title="Explore" items={[['Home', '/'], ['Committees', '/committees'], ['About', '/about'], ['Secretariat', '/secretariat'], ['Register', '/registration']]} />
          <FootCol title="Committees" items={[['General Assembly', '/committees'], ['Specialized', '/committees'], ['Crisis', '/committees']]} />
          <FootCol title="Connect" items={[['Instagram', 'https://www.instagram.com/tigermun26/'], ['Email Us', 'mailto:alexav.pla@gmail.com'], ['SAS Dream Factory', 'https://sasdreamfactory.net/']]} />
        </div>
      </div>
      <div style={{
        borderTop: '1px solid var(--ink-700)', padding: '18px 32px',
        maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between',
        fontSize: 'var(--text-xs)', color: 'var(--ink-300)', flexWrap: 'wrap', gap: 8,
      }}>
        <span>© 2026 TigerMUN · School for Advanced Studies</span>
        <span style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>@tigermun26</span>
      </div>
    </footer>
  );
}

function FootCol({ title, items }) {
  return (
    <div>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
        textTransform: 'uppercase', color: 'var(--ink-300)', marginBottom: 14,
      }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map(([label, to]) => {
          const linkStyle = { fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--white)', textDecoration: 'none' };
          if (!to) return <span key={label} style={linkStyle}>{label}</span>;
          if (to.startsWith('http') || to.startsWith('mailto:')) {
            return (
              <a key={label} href={to} style={linkStyle}
                target={to.startsWith('http') ? '_blank' : undefined}
                rel={to.startsWith('http') ? 'noreferrer' : undefined}>
                {label}
              </a>
            );
          }
          return <Link key={label} to={to} style={linkStyle}>{label}</Link>;
        })}
      </div>
    </div>
  );
}
