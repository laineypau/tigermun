/**
 * Badge — small status / category pill. Used for committee types,
 * difficulty levels, and inline status.
 */
export function Badge({ tone = 'neutral', variant = 'soft', children, style = {}, ...rest }) {
  const palettes = {
    neutral: { soft: ['var(--neutral-100)', 'var(--neutral-700)'], solid: ['var(--neutral-800)', 'var(--white)'] },
    brand:   { soft: ['var(--blue-50)', 'var(--blue-700)'],       solid: ['var(--brand)', 'var(--text-on-brand)'] },
    sky:     { soft: ['var(--sky-50)', 'var(--sky-700)'],         solid: ['var(--sky-400)', 'var(--white)'] },
    ink:     { soft: ['var(--ink-100)', 'var(--ink-700)'],        solid: ['var(--ink-800)', 'var(--white)'] },
    success: { soft: ['var(--success-50)', 'var(--success-500)'], solid: ['var(--success-500)', 'var(--white)'] },
    warn:    { soft: ['var(--warn-50)', 'var(--warn-500)'],       solid: ['var(--warn-500)', 'var(--white)'] },
    danger:  { soft: ['var(--danger-50)', 'var(--danger-500)'],   solid: ['var(--danger-500)', 'var(--white)'] },
  };
  const [bg, fg] = palettes[tone][variant];
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px 11px',
        background: bg,
        color: fg,
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: '0.02em',
        borderRadius: 'var(--radius-pill)',
        lineHeight: 1.4,
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
