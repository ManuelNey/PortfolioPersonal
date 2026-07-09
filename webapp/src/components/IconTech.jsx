export default function IconTech({ path, size = 21, glow = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      style={
        glow
          ? { color: '#B8E85E', filter: 'drop-shadow(0 0 6px rgba(184,232,94,.5))' }
          : { color: 'currentColor' }
      }
    >
      <path d={path} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
