import { useId, useState } from 'react';

/**
 * Input — text field with label and optional helper / error text.
 * Cool surface, sky focus ring.
 */
export function Input({
  label, helper, error, id, required = false, style = {}, ...rest
}) {
  const autoId = useId();
  const inputId = id || autoId;
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', ...style }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--weight-semibold)',
          color: 'var(--ink-800)',
        }}>
          {label}{required && <span style={{ color: 'var(--brand)', marginLeft: 3 }}>*</span>}
        </label>
      )}
      <input
        id={inputId}
        onFocus={(e) => { setFocused(true); rest.onFocus?.(e); }}
        onBlur={(e) => { setFocused(false); rest.onBlur?.(e); }}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-base)',
          color: 'var(--ink-900)',
          background: 'var(--white)',
          padding: '11px 14px',
          borderRadius: 'var(--radius-md)',
          border: `1.5px solid ${error ? 'var(--danger-500)' : focused ? 'var(--sky-400)' : 'var(--border-soft)'}`,
          boxShadow: focused ? '0 0 0 3px rgba(95,151,221,0.22)' : 'none',
          outline: 'none',
          transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
          width: '100%',
        }}
        {...rest}
      />
      {(helper || error) && (
        <span style={{
          fontSize: 'var(--text-xs)',
          color: error ? 'var(--danger-500)' : 'var(--text-muted)',
        }}>
          {error || helper}
        </span>
      )}
    </div>
  );
}
