/**
 * Avatar — circular portrait with optional ring. Falls back to initials.
 * Used across the Secretariat and delegate lists.
 */
export function Avatar({ src, name = '', size = 56, ring = false, style = {}, ...rest }) {
  const initials = name.split(' ').map((w) => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        borderRadius: '999px',
        background: 'var(--ink-100)',
        color: 'var(--ink-600)',
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--weight-bold)',
        fontSize: size * 0.36,
        overflow: 'hidden',
        flexShrink: 0,
        border: ring ? '3px solid var(--white)' : 'none',
        boxShadow: ring ? '0 0 0 2px var(--brand)' : 'none',
        ...style,
      }}
      {...rest}
    >
      {src
        ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : <span>{initials}</span>}
    </span>
  );
}
