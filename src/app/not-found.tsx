import Link from "next/link";
import { Tv } from "lucide-react";

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--background)',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '500px',
        textAlign: 'center',
        background: 'var(--card-bg)',
        border: '1px solid var(--glass-border)',
        borderRadius: '1.5rem',
        padding: '3rem 2rem',
        backdropFilter: 'blur(16px)'
      }}>
        <Tv size={64} style={{ color: 'var(--muted)', margin: '0 auto 1.5rem auto' }} />
        
        <h2 className="heading-md" style={{ marginBottom: '1rem', color: '#fff' }}>
          404 - Channel Not Found
        </h2>
        
        <p style={{ color: 'var(--muted)', marginBottom: '2.5rem', fontSize: '1.125rem' }}>
          Looks like this page has gone off the air. Let's get you back to the main broadcast.
        </p>
        
        <Link href="/" className="btn btn-primary" style={{ padding: '0.75rem 2.5rem' }}>
          Return Home
        </Link>
      </div>
    </div>
  );
}
