"use client";

import { useState, useEffect } from "react";
import { X, Tv, MonitorSmartphone, Apple, PlaySquare, ArrowRight } from "lucide-react";
import { siteConfig } from "../config";

export default function FreeTrialModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [name, setName] = useState("");
  const [device, setDevice] = useState("firestick"); // Set default device so form doesn't silently fail

  const devices = [
    { id: "firestick", label: "Firestick / Android TV", icon: <Tv size={18} /> },
    { id: "smarttv", label: "Smart TV (Samsung/LG)", icon: <MonitorSmartphone size={18} /> },
    { id: "apple", label: "Apple TV / iOS", icon: <Apple size={18} /> },
    { id: "other", label: "Other App / Device", icon: <PlaySquare size={18} /> },
  ];

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleManualClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      alert("Please enter your name.");
      return;
    }
    if (!device) {
      alert("Please select a device.");
      return;
    }
    
    const message = `Hi! I would like to claim my 24H Free Trial.%0A%0A*Name:* ${name}%0A*Device:* ${devices.find(d => d.id === device)?.label}`;
    const url = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${message}`;
    
    window.open(url, '_blank');
    handleManualClose();
  };

  return (
    <div 
      onClick={handleManualClose}
      style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      backdropFilter: 'blur(8px)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
    }}>
      <div 
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-in" style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--glass-border)',
        borderRadius: '1.5rem',
        width: '100%',
        maxWidth: '500px',
        padding: '2rem',
        position: 'relative',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        
        <button 
          onClick={handleManualClose}
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', color: 'var(--muted)', cursor: 'pointer' }}
        >
          <X size={24} />
        </button>

        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
            Get Your <span style={{ color: 'var(--accent)' }}>24H Free Trial</span>
          </h2>
          <p style={{ color: 'var(--muted)' }}>
            No credit card required. Instant activation.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#fff', fontSize: '0.875rem', fontWeight: 500 }}>
              Your Name
            </label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. John Doe"
              style={{
                width: '100%', padding: '0.875rem 1rem', background: 'rgba(0,0,0,0.4)',
                border: '1px solid var(--glass-border)', borderRadius: '0.75rem',
                color: '#fff', fontSize: '1rem', outline: 'none'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.75rem', color: '#fff', fontSize: '0.875rem', fontWeight: 500 }}>
              What device are you using?
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {devices.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setDevice(d.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.75rem',
                    background: device === d.id ? 'rgba(0, 68, 255, 0.1)' : 'rgba(0,0,0,0.4)',
                    border: `1px solid ${device === d.id ? 'var(--primary)' : 'var(--glass-border)'}`,
                    borderRadius: '0.5rem', color: device === d.id ? '#fff' : 'var(--muted)',
                    cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s',
                    fontSize: '0.875rem'
                  }}
                >
                  {d.icon}
                  <span>{d.label}</span>
                </button>
              ))}
            </div>
          </div>

          <button 
            type="submit" 
            className="btn btn-accent" 
            style={{ width: '100%', padding: '1rem', marginTop: '1rem', fontSize: '1.125rem', display: 'flex', gap: '0.5rem' }}
          >
            Start Free Trial via WhatsApp <ArrowRight size={20} />
          </button>
          
          <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--muted)', marginTop: '-0.5rem' }}>
            By submitting, you will be redirected to WhatsApp to receive your trial details instantly.
          </p>

        </form>
      </div>
    </div>
  );
}
