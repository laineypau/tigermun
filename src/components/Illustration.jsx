const illustrations = import.meta.glob('../assets/illustrations/*.png', { eager: true, import: 'default' });

function srcFor(name) {
  const entry = Object.entries(illustrations).find(([path]) => path.endsWith(`/${name}.png`));
  return entry?.[1];
}

/**
 * Illustration — a TigerMUN hand-drawn engraving (the @madinah set: gavel,
 * scales, books, microphone, coins, speech bubbles, reporters, open hand).
 * Black line-art on transparent ground — sits on any surface. Optional `tint`
 * recolors the linework (via CSS mask) for use on dark backgrounds.
 */
export function Illustration({
  name = 'gavel',
  size = 120,             // longest-edge height in px
  tint = null,            // null = original black ink · any CSS color = recolor linework
  alt = '',
  style = {},
  ...rest
}) {
  const src = srcFor(name);

  if (tint) {
    // recolor the line-art by using it as an alpha mask over a solid fill
    return (
      <span
        role="img"
        aria-label={alt || name}
        style={{
          display: 'inline-block', height: size, width: size * 1.4,
          background: tint,
          WebkitMaskImage: `url(${src})`, maskImage: `url(${src})`,
          WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center', maskPosition: 'center',
          WebkitMaskSize: 'contain', maskSize: 'contain',
          ...style,
        }}
        {...rest}
      />
    );
  }

  return <img src={src} alt={alt || name} style={{ height: size, width: 'auto', display: 'block', flexShrink: 0, ...style }} {...rest} />;
}
