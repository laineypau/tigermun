import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/Button.jsx';
import { Logo } from './Logo.jsx';

const links = [
  ['/', 'Home'],
  ['/committees', 'Committees'],
  ['/about', 'About'],
  ['/secretariat', 'Secretariat'],
];

export function Nav() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '12px 32px', background: 'rgba(255,255,255,0.88)',
      backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${scrolled ? 'var(--border-hair)' : 'transparent'}`,
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)',
    }}>
      <Link to="/" style={{ display: 'inline-flex' }}>
        <Logo variant="lockup" tone="dark" size={40} />
      </Link>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {links.map(([to, label]) => (
          <Link key={to} to={to} style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 600,
            color: pathname === to ? 'var(--brand)' : 'var(--ink-700)',
            padding: '8px 14px', borderRadius: 'var(--radius-sm)',
            textDecoration: 'none',
          }}>
            {label}
          </Link>
        ))}
        <span style={{ width: 8 }} />
        <Button as={Link} to="/registration" size="sm">Register</Button>
      </nav>
    </header>
  );
}
