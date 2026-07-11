export default function Loading() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--background)',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <div style={{
        width: '50px',
        height: '50px',
        border: '4px solid var(--glass-border)',
        borderTopColor: 'var(--primary)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} className="spinner"></div>
      
      <p style={{ color: 'var(--muted)', fontSize: '1.25rem', fontWeight: 500 }}>
        Loading BritStream 4K...
      </p>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
