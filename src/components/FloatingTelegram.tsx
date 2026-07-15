"use client";

import { Send } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingTelegram() {
  const [isVisible, setIsVisible] = useState(false);
  const telegramHandle = "Iptvuk10";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = () => {
    window.open(`https://t.me/${telegramHandle}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '6.5rem', // Stacked above WhatsApp
      right: '2rem',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '0.75rem'
    }}>
      
      {/* Telegram Button */}
      <a 
        href={`https://t.me/${telegramHandle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join our Telegram channel"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#0088cc', // Official Telegram blue
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px rgba(0, 136, 204, 0.4)',
          color: '#fff',
          transition: 'all 0.3s ease',
          textDecoration: 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <Send size={28} style={{ marginLeft: '-3px', marginTop: '3px' }} />
      </a>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes bounce-tele {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}} />
    </div>
  );
}
