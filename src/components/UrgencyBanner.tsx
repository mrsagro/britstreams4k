"use client";

import { useEffect, useState } from "react";

export default function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState(7200); // 2 hours

  useEffect(() => {
    // Check if we have a saved end time in localStorage to keep countdown consistent across reloads
    const savedEndTime = localStorage.getItem('saleEndTime');
    if (savedEndTime) {
      const remaining = Math.floor((parseInt(savedEndTime) - Date.now()) / 1000);
      if (remaining > 0) {
        setTimeLeft(remaining);
      } else {
        // Reset timer if expired
        const newEndTime = Date.now() + 7200 * 1000;
        localStorage.setItem('saleEndTime', newEndTime.toString());
        setTimeLeft(7200);
      }
    } else {
      const newEndTime = Date.now() + 7200 * 1000;
      localStorage.setItem('saleEndTime', newEndTime.toString());
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Avoid hydration mismatch by not rendering the timer on the server
  const [mounted, setMounted] = useState(false);
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
        {mounted ? formatTime(timeLeft) : "02:00:00"}
      </span>
    </div>
  );
}
