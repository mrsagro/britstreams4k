import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: '#050505', borderTop: '1px solid var(--glass-border)', padding: '4rem 0 2rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Image 
                src="/logo.png" 
                alt="BritStreams 4K Logo" 
                width={32}
                height={32}
                style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--primary)' }} 
              />
              <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em' }}>BritStreams <span style={{ color: 'var(--primary)' }}>4K</span></span>
            </div>
            <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
              The UK's most reliable premium streaming service. Visit us at <strong>britstreams4k.uk</strong>
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><Link href="/#features" style={{ color: 'var(--muted)', fontSize: '0.875rem', textDecoration: 'none' }}>Features</Link></li>
              <li><Link href="/#channels" style={{ color: 'var(--muted)', fontSize: '0.875rem', textDecoration: 'none' }}>Channel Lineup</Link></li>
              <li><Link href="/setup" style={{ color: 'var(--muted)', fontSize: '0.875rem', textDecoration: 'none' }}>Setup Guides</Link></li>
              <li><Link href="/reseller" style={{ color: 'var(--muted)', fontSize: '0.875rem', textDecoration: 'none' }}>Reseller Program</Link></li>
              <li><Link href="/#pricing" style={{ color: 'var(--muted)', fontSize: '0.875rem', textDecoration: 'none' }}>Pricing Plans</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem' }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><Link href="/terms" style={{ color: 'var(--muted)', fontSize: '0.875rem', textDecoration: 'none' }}>Terms & Conditions</Link></li>
              <li><Link href="/privacy" style={{ color: 'var(--muted)', fontSize: '0.875rem', textDecoration: 'none' }}>Privacy Policy</Link></li>
              <li><Link href="/disclaimer" style={{ color: 'var(--muted)', fontSize: '0.875rem', textDecoration: 'none' }}>Disclaimer</Link></li>
            </ul>
          </div>

        </div>

        <div style={{ textAlign: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '2rem', color: 'var(--muted)', fontSize: '0.75rem' }}>
          &copy; {new Date().getFullYear()} britstreams4k.uk. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
