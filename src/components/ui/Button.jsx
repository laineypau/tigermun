/**
 * TigerMUN Button — the primary call-to-action primitive.
 * Variants map to the brand hierarchy: solid royal-blue for primary actions,
 * ink-navy for secondary authority, outline + ghost for low-emphasis.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  as = 'button',
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: 'var(--text-sm)', gap: '7px' },
    md: { padding: '12px 24px', fontSize: 'var(--text-base)', gap: '9px' },
    lg: { padding: '16px 34px', fontSize: 'var(--text-md)', gap: '11px' },
  };

  const variants = {
    primary: {
      background: 'var(--brand)',
      color: 'var(--text-on-brand)',
      border: '1px solid var(--brand)',
      boxShadow: 'var(--shadow-brand)',
    },
    secondary: {
      background: 'var(--ink-700)',
      color: 'var(--cream)',
      border: '1px solid var(--ink-700)',
      boxShadow: 'var(--shadow-sm)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--ink-700)',
      border: '1.5px solid var(--ink-700)',
      boxShadow: 'none',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--brand)',
      border: '1.5px solid transparent',
      boxShadow: 'none',
    },
  };

  const Comp = as;

  return (
    <Comp
      disabled={as === 'button' ? disabled : undefined}
      style={{
        display: full ? 'flex' : 'inline-flex',
        width: full ? '100%' : 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        gap: sizes[size].gap,
        padding: sizes[size].padding,
        fontFamily: 'var(--font-sans)',
        fontSize: sizes[size].fontSize,
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: '0.01em',
        lineHeight: 1,
        borderRadius: 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        textDecoration: 'none',
        transition: 'transform var(--dur-fast) var(--ease-standard), filter var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard)',
        ...variants[variant],
        ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(1px) scale(0.99)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = ''; }}
      onMouseEnter={(e) => {
        if (disabled) return;
        if (variant === 'primary') e.currentTarget.style.background = 'var(--brand-hover)';
        if (variant === 'secondary') e.currentTarget.style.background = 'var(--ink-600)';
        if (variant === 'outline') { e.currentTarget.style.background = 'var(--ink-700)'; e.currentTarget.style.color = 'var(--cream)'; }
        if (variant === 'ghost') e.currentTarget.style.background = 'var(--brand-subtle)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.background = variants[variant].background;
        e.currentTarget.style.color = variants[variant].color;
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Comp>
  );
}
