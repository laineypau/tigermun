/**
 * Card — the base surface container. Cool hairline border, soft shadow,
 * optional accent stripe along the top edge.
 */
export function Card({ accent = false, hover = false, padding = 'var(--space-6)', children, style = {}, ...rest }) {
  return (
    <div
      style={{
        position: 'relative',
        background: 'var(--surface-card)',
        border: 'var(--border-card)',
        borderRadius: 'var(--radius-card)',
        boxShadow: 'var(--shadow-sm)',
        padding,
        overflow: 'hidden',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        ...style,
      }}
      onMouseEnter={hover ? (e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      } : undefined}
      onMouseLeave={hover ? (e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      } : undefined}
      {...rest}
    >
      {accent && (
        <span style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
          background: 'var(--brand)',
        }} />
      )}
      {children}
    </div>
  );
}
