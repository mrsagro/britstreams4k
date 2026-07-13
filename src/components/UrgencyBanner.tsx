"use client";

import { useEffect, useState } from "react";

export default function UrgencyBanner() {
  // Avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);


  return (
    <div style={{
      background: 'linear-gradient(90deg, #cc0000 0%, #ff3333 100%)',
      padding: '0.5rem',
      textAlign: 'center',
      fontSize: '0.875rem',
      fontWeight: 700,
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
      position: 'relative',
      boxShadow: '0 2px 20px rgba(204, 0, 0, 0.5)'
    }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span className="indicator-pulse" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff', flexShrink: 0 }}></span>
        <span className="hide-on-mobile">FLASH SALE: 50% OFF ALL UK PLANS!</span>
        <span className="show-on-mobile" style={{ whiteSpace: 'nowrap' }}>50% OFF UK PLANS!</span>
      </span>
      <span style={{ 
        background: 'rgba(0,0,0,0.5)', 
        padding: '0.25rem 0.75rem', 
        borderRadius: '0.25rem',
        fontFamily: 'monospace',
        fontSize: '1rem',
        letterSpacing: '1px',
        border: '1px solid rgba(255,255,255,0.2)'
      }}>
        {mounted ? "ENDS MIDNIGHT!" : "ENDS MIDNIGHT!"}
      </span>
    </div>
  );
}
