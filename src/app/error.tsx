"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

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
        <AlertCircle size={64} style={{ color: 'var(--accent)', margin: '0 auto 1.5rem auto' }} />
        
        <h2 className="heading-md" style={{ marginBottom: '1rem', color: '#fff' }}>
          Oops! Something went wrong.
        </h2>
        
        <p style={{ color: 'var(--muted)', marginBottom: '2rem', fontSize: '1.125rem' }}>
          We hit a small bump in the road. Don't worry, your streaming experience is still safe.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => reset()}
            className="btn btn-primary"
            style={{ padding: '0.75rem 2rem' }}
          >
            Try again
          </button>
          
          <Link href="/" className="btn btn-outline" style={{ padding: '0.75rem 2rem' }}>
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
