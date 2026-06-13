/**
 * SectionHeading — eyebrow (mono caps) + display title + optional intro.
 * The standard way TigerMUN opens a section. Centered or left-aligned.
 */
export function SectionHeading({
  eyebrow, title, intro, align = 'left', onDark = false, style = {}, ...rest
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        textAlign: align,
        alignItems: align === 'center' ? 'center' : 'flex-start',
        maxWidth: align === 'center' ? '720px' : '640px',
        marginInline: align === 'center' ? 'auto' : undefined,
        ...style,
      }}
      {...rest}
    >
      {eyebrow && (
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '10px',
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 700,
          letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase',
          color: 'var(--brand)',
        }}>
          <span style={{ width: 22, height: 2, background: 'var(--brand)' }} />
          {eyebrow}
        </span>
      )}
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--weight-bold)',
        lineHeight: 'var(--leading-snug)',
        letterSpacing: 'var(--tracking-tight)',
        color: onDark ? 'var(--cream)' : 'var(--text-strong)',
        margin: 0,
      }}>
        {title}
      </h2>
      {intro && (
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-md)',
          lineHeight: 'var(--leading-relaxed)',
          color: onDark ? 'var(--ink-200)' : 'var(--text-body)',
          margin: 0,
        }}>
          {intro}
        </p>
      )}
    </div>
  );
}
