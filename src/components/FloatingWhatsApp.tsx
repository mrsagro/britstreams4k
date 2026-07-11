"use client";

import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

import { siteConfig } from "../config";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = siteConfig.contact.whatsappNumber; // The user's provided number

  // Add a slight delay before showing the button so it slides in
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
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
      <button 
        onClick={handleClick}
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
      </button>

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
