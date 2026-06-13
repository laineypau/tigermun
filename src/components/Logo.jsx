import tigerCrest from '../assets/logo/tiger-crest.png';
import tigerCrestWhite from '../assets/logo/tiger-crest-white.png';

/**
 * Logo — the official TigerMUN crest (engraved leaping tiger + globe + laurel).
 * Use the white crest on dark surfaces, the black crest on light.
 */
export function Logo({
  variant = 'lockup',          // 'mark' | 'lockup' | 'stacked'
  tone = 'dark',               // 'dark' = black crest (light bg) · 'light' = white crest (dark bg)
  size = 44,                   // crest height in px
  tagline = null,              // optional tagline under the wordmark (stacked/lockup)
  style = {},
  ...rest
}) {
  const crestSrc = tone === 'light' ? tigerCrestWhite : tigerCrest;
  const wordColor = tone === 'light' ? 'var(--white)' : 'var(--ink-900)';
  const subColor = tone === 'light' ? 'var(--ink-200)' : 'var(--text-muted)';

  const crest = (h) => (
    <img src={crestSrc} alt="TigerMUN crest" style={{ height: h, width: 'auto', display: 'block', flexShrink: 0 }} />
  );

  const word = (fs) => (
    <span style={{
      fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: fs,
      letterSpacing: '-0.01em', color: wordColor, lineHeight: 1,
    }}>
      TigerMUN
    </span>
  );

  if (variant === 'mark') {
    return <span style={{ display: 'inline-flex', ...style }} {...rest}>{crest(size)}</span>;
  }

  if (variant === 'stacked') {
    return (
      <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 12, ...style }} {...rest}>
        {crest(size)}
        <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          {word(size * 0.46)}
          {tagline && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: subColor }}>{tagline}</span>}
        </span>
      </span>
    );
  }

  // lockup (horizontal)
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.28, ...style }} {...rest}>
      {crest(size)}
      <span style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {word(size * 0.5)}
        {tagline && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: subColor }}>{tagline}</span>}
      </span>
    </span>
  );
}
