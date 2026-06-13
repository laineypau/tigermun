/**
 * Placard — the signature MUN delegate nameplate. Mono, uppercase, centered,
 * with a folded-card base. Use for country names, committee codes, delegate IDs.
 */
export function Placard({ children, tone = 'ink', size = 'md', style = {}, ...rest }) {
  const tones = {
    ink:   { face: 'var(--ink-700)', base: 'var(--ink-900)', text: 'var(--white)' },
    blue:  { face: 'var(--brand)', base: 'var(--blue-700)', text: 'var(--white)' },
    paper: { face: 'var(--white)', base: 'var(--neutral-200)', text: 'var(--ink-800)' },
  };
  const sizes = {
    sm: { pad: '8px 16px', fs: 'var(--text-xs)' },
    md: { pad: '12px 24px', fs: 'var(--text-sm)' },
    lg: { pad: '18px 38px', fs: 'var(--text-md)' },
  };
  const t = tones[tone];
  return (
    <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'stretch', ...style }} {...rest}>
      <span
        style={{
          background: t.face,
          color: t.text,
          padding: sizes[size].pad,
          fontFamily: 'var(--font-mono)',
          fontSize: sizes[size].fs,
          fontWeight: 700,
          letterSpacing: 'var(--tracking-wider)',
          textTransform: 'uppercase',
          textAlign: 'center',
          borderRadius: 'var(--radius-xs) var(--radius-xs) 0 0',
          lineHeight: 1.2,
          border: tone === 'paper' ? '1px solid var(--neutral-300)' : 'none',
          borderBottom: 'none',
        }}
      >
        {children}
      </span>
      {/* folded base */}
      <span style={{ height: '6px', background: t.base, borderRadius: '0 0 var(--radius-xs) var(--radius-xs)' }} />
    </span>
  );
}
