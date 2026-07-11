"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem("britstream_cookie_consent");
    if (!consent) {
      // Delay showing banner slightly for better UX
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("britstream_cookie_consent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="animate-fade-in" style={{
      position: 'fixed',
      bottom: '1rem',
      left: '0.5rem',
      right: '0.5rem',
      margin: '0 auto',
      zIndex: 9999,
      maxWidth: '700px',
      background: 'rgba(20, 20, 20, 0.95)',
      backdropFilter: 'blur(16px)',
      border: '1px solid var(--glass-border)',
      borderRadius: '0.75rem',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '1.25rem' }}>🍪</span>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff' }}>We value your privacy</h3>
      </div>
      
      <p className="hide-on-mobile" style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.5 }}>
        We use cookies to enhance your streaming experience, serve personalized ads or content, and analyze our traffic. 
        By clicking "Accept All", you consent to our use of cookies in accordance with UK and EU regulations. 
        Read our <Link href="/privacy" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Privacy Policy</Link>.
      </p>
      
      <p className="show-on-mobile" style={{ color: 'var(--muted)', fontSize: '0.75rem', lineHeight: 1.4 }}>
        We use cookies to enhance your experience. Read our <Link href="/privacy" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Privacy Policy</Link>.
      </p>

      {/* Desktop Buttons */}
      <div className="hide-on-mobile" style={{ display: 'flex', gap: '0.75rem', alignSelf: 'flex-end', marginTop: '0.5rem' }}>
        <button 
          onClick={() => setShow(false)}
          className="btn btn-outline" 
          style={{ padding: '0.5rem 1.5rem', fontSize: '0.875rem' }}
        >
          Decline
        </button>
        <button 
          onClick={acceptCookies}
          className="btn btn-primary" 
          style={{ padding: '0.5rem 1.5rem', fontSize: '0.875rem' }}
        >
          Accept All
        </button>
      </div>

      {/* Mobile Buttons */}
      <div className="show-on-mobile" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%', marginTop: '0.5rem' }}>
        <button 
          onClick={acceptCookies}
          className="btn btn-primary" 
          style={{ padding: '0.75rem', fontSize: '1rem', width: '100%', textAlign: 'center', fontWeight: 600 }}
        >
          Accept All
        </button>
        <button 
          onClick={() => setShow(false)}
          className="btn btn-outline" 
          style={{ padding: '0.75rem', fontSize: '0.875rem', width: '100%', textAlign: 'center' }}
        >
          Decline
        </button>
      </div>
    </div>
  );
}
