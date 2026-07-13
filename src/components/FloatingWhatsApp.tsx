"use client";

import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

import { siteConfig } from "../config";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = siteConfig.contact.whatsappNumber; // The user's provided number

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = () => {
    const text = encodeURIComponent("Hi, I have a question about BritStream 4K.");
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '0.75rem'
    }} className="animate-fade-in">
      
      {/* WhatsApp Button */}
      <a 
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#25D366', // Official WhatsApp green
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
          color: '#fff',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <MessageCircle size={32} />
      </a>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}} />
    </div>
  );
}
