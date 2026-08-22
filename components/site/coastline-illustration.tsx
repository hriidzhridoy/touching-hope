// Signature illustration: a stylized skyline of El Pescadero — ocean tide,
// furrowed farm rows, and palm silhouettes — echoing the real place this
// organization serves. Reused (in miniature, via WaveDivider) between
// sections so the horizon line ties the whole page together.
export function CoastlineIllustration() {
  return (
    <svg
      viewBox="0 0 1440 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      {/* sun */}
      <circle cx="1180" cy="140" r="86" fill="url(#sunGradient)" opacity="0.9" />

      {/* tide band */}
      <path
        d="M0 260C180 230 260 300 440 280C620 260 700 210 900 235C1100 260 1220 300 1440 250V340H0V260Z"
        fill="#2B7A8C"
        opacity="0.55"
      />

      {/* far field rows */}
      <path
        d="M0 330C220 300 320 350 520 320C740 288 880 340 1080 315C1240 296 1340 330 1440 315V520H0V330Z"
        fill="#2A7852"
      />
      <g opacity="0.25" stroke="#0F2B1E" strokeWidth="2">
        <path d="M40 360 L 420 340" />
        <path d="M60 390 L 460 368" />
        <path d="M90 420 L 500 396" />
        <path d="M120 450 L 540 424" />
        <path d="M760 340 L 1100 330" />
        <path d="M780 372 L 1130 360" />
        <path d="M800 404 L 1160 392" />
        <path d="M820 436 L 1190 424" />
      </g>

      {/* near hill / field */}
      <path
        d="M0 400C260 370 340 430 620 405C900 380 1020 440 1260 412C1340 403 1400 408 1440 402V520H0V400Z"
        fill="#153A28"
      />

      {/* palms */}
      {[
        { x: 150, s: 1 },
        { x: 230, s: 0.75 },
        { x: 990, s: 0.85 },
        { x: 1080, s: 1.05 },
        { x: 1320, s: 0.7 },
      ].map((p, i) => (
        <g key={i} transform={`translate(${p.x} 330) scale(${p.s})`}>
          <rect x="-4" y="0" width="8" height="70" rx="4" fill="#0F2B1E" />
          <g fill="#4C9A6A">
            <path d="M0 0 C -10 -22 -34 -30 -52 -24 C -34 -14 -14 -10 0 0Z" />
            <path d="M0 0 C 10 -24 36 -30 54 -22 C 36 -12 14 -8 0 0Z" />
            <path d="M0 0 C -6 -28 -6 -46 2 -60 C 10 -46 8 -26 0 0Z" />
            <path d="M0 0 C -18 -14 -40 -12 -54 -2 C -38 4 -16 6 0 0Z" />
            <path d="M0 0 C 16 -12 38 -10 52 2 C 36 8 14 8 0 0Z" />
          </g>
        </g>
      ))}

      <defs>
        <radialGradient id="sunGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1180 140) rotate(90) scale(86)">
          <stop stopColor="#F4A94A" />
          <stop offset="1" stopColor="#E2760F" stopOpacity="0.7" />
        </radialGradient>
      </defs>
    </svg>
  );
}
