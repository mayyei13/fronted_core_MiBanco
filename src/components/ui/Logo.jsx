export default function Logo({
  size = 44,
  wordmark = true,
  variant = 'dark',
  subtitle = 'CORE FINANCIERO',
}) {
  const subColor = variant === 'light' ? 'rgba(255,255,255,.9)' : '#3f5f46'
  const subSize = Math.max(9, Math.round(size * 0.22))

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <img
        src="/mibanco-logo.png"
        width={Math.round(size * 3.2)}
        height={size}
        alt="MiBanco"
        style={{ objectFit: 'cover', borderRadius: 8 }}
      />

      {wordmark && subtitle && (
        <span
          style={{
            fontSize: subSize,
            fontWeight: 800,
            color: subColor,
            letterSpacing: '1.2px',
            whiteSpace: 'nowrap',
          }}
        >
          {subtitle}
        </span>
      )}
    </span>
  )
}
