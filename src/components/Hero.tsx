"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ChannelSearch from "./ChannelSearch";
import { Star, ShieldCheck } from "lucide-react";

import Image from "next/image";

export default function Hero() {
  const backgrounds = [
    "/hero-bg.png",
    "/hero-sports.png",
    "/hero-movies.png"
  ];
  
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '8rem',
      overflow: 'hidden',
      zIndex: 1
    }}>
      {/* Background Images with Fade Transition */}
      {backgrounds.map((bg, index) => (
        <div key={bg} style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: currentBg === index ? 1 : 0,
          transition: 'opacity 1.5s ease-in-out',
          zIndex: -2
        }}>
          <Image
            src={bg}
            alt={`Hero Background ${index + 1}`}
            fill
            priority={index === 0}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      ))}

      {/* Background Dark Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to bottom, rgba(5,5,5,0.6) 0%, rgba(5,5,5,0.3) 50%, rgba(5,5,5,1) 100%)',
        zIndex: -1
      }}></div>

      <div className="container animate-fade-in" style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }}>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          


          <h1 className="heading-xl" style={{ marginBottom: '1.5rem' }}>
            The Ultimate UK <br />
            <span style={{ color: 'var(--primary)', WebkitTextFillColor: 'var(--primary)' }}>Streaming Experience.</span>
          </h1>
          
          <p className="text-muted heading-md" style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto', lineHeight: 1.6 }}>
            Access exclusive content from the UK, US, and worldwide in stunning 4K UHD. 
            <span style={{ color: '#fff', fontWeight: 500 }}> No freezing, no buffering. Just premium entertainment.</span>
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="#pricing" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              View UK Plans
            </Link>
            <div style={{ minWidth: '250px', width: '100%', maxWidth: '500px', marginTop: '1rem' }}>
              <ChannelSearch />
            </div>
          </div>

          {/* Trust Badges */}
          <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(20,20,20,0.6)', padding: '0.75rem 1.5rem', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="#10b981" color="#10b981" />)}
              </div>
              <div style={{ width: '1px', height: '24px', background: 'var(--glass-border)' }}></div>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fff' }}>Trustpilot <span style={{ color: 'var(--muted)', fontWeight: 400 }}>4.9/5 Excellent</span></span>
              
              <div style={{ width: '1px', height: '24px', background: 'var(--glass-border)', marginLeft: '0.5rem', marginRight: '0.5rem' }} className="hide-on-mobile"></div>
              
              <div className="hide-on-mobile" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={20} color="var(--primary)" />
                <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#fff' }}>Verified Secure</span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--success)' }}>✓</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--foreground)' }}>4K UHD & HDR10+</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--success)' }}>✓</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--foreground)' }}>99.9% Uptime</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--success)' }}>✓</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--foreground)' }}>Anti-Freeze 3.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
