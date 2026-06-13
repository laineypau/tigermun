import { Badge } from './ui/Badge.jsx';

/**
 * CommitteeCard — a committee listing tile. Shows committee type, name,
 * topic, and difficulty. Composes Badge. Hover lifts the card.
 */
export function CommitteeCard({
  type = 'General Assembly', code, name, topic, difficulty = 'Beginner', onClick, style = {},
}) {
  const typeTone = { 'General Assembly': 'sky', 'Specialized': 'brand', 'Crisis': 'ink' }[type] || 'neutral';
  const diffTone = { Beginner: 'success', Intermediate: 'warn', Advanced: 'danger' }[difficulty] || 'neutral';
  return (
    <div
      onClick={onClick}
      style={{
        position: 'relative',
        background: 'var(--surface-card)',
        border: 'var(--border-card)',
        borderRadius: 'var(--radius-card)',
        boxShadow: 'var(--shadow-sm)',
        padding: 'var(--space-5)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        cursor: onClick ? 'pointer' : 'default',
        overflow: 'hidden',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        ...style,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
        <Badge tone={typeTone}>{type}</Badge>
        {code && (
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: 'var(--tracking-wide)', color: 'var(--text-faint)' }}>
            {code}
          </span>
        )}
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 700, lineHeight: 1.15, color: 'var(--text-strong)', margin: 0 }}>
        {name}
      </h3>
      {topic && (
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-body)', margin: 0 }}>
          {topic}
        </p>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 'auto', paddingTop: 'var(--space-2)' }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-2xs)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: 'var(--text-faint)' }}>Level</span>
        <Badge tone={diffTone} variant="soft">{difficulty}</Badge>
      </div>
    </div>
  );
}
