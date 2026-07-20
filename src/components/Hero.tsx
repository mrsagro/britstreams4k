"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "../config";

export default function Hero() {
  const whatsappNumber = siteConfig.contact.whatsappNumber;

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '8rem',
      paddingBottom: '4rem',
      overflow: 'hidden',
      zIndex: 1
    }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -2
      }}>
        <Image
          src="/hero-sports.png"
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          quality={60}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      {/* Background Dark Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to bottom, rgba(2,2,2,0.7) 0%, rgba(2,2,2,0.4) 50%, rgba(2,2,2,1) 100%)',
        zIndex: -1
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            marginBottom: '1.5rem',
            textShadow: '0 4px 30px rgba(0,0,0,1), 0 2px 10px rgba(0,0,0,0.8)'
          }}>
            Best IPTV Provider UK 2026 | Buy IPTV Subscription UK & Get <span style={{ color: 'var(--primary)' }}>Premium IPTV Streaming UK</span>
          </h1>
          
          <p className="text-muted" style={{ 
            fontSize: '1.25rem', 
            marginBottom: '2.5rem', 
            maxWidth: '750px', 
            margin: '0 auto 2.5rem auto', 
            lineHeight: 1.8,
            color: '#e4e4e7',
            textShadow: '0 2px 10px rgba(0,0,0,0.8)'
          }}>
            Premium IPTV UK service providers at cheap prices. Get IPTV for Firestick, Smart TV, Android TV, iPads/iPhones, Mac, & Windows with a free setup guide. Watch 10,000+ IPTV Channels UK in 4k.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I want to start my 24h Free Trial")}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary" 
              style={{ padding: '1rem 2rem', fontSize: '1.125rem', background: '#25D366', color: '#fff', boxShadow: '0 4px 15px rgba(37,211,102,0.3)' }}
            >
              Start 24h Free Trial
            </a>
            <Link href="/iptv-installation-plans" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.125rem', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
              View Subscription Plans
            </Link>
          </div>

          {/* Stats Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.05)',
            backdropFilter: 'blur(12px)',
            borderRadius: '1.5rem',
            padding: '2rem'
          }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>10,000+</div>
              <div style={{ fontSize: '0.9rem', color: '#a1a1aa', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}>Live channels</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--success)' }}>99.9%</div>
              <div style={{ fontSize: '0.9rem', color: '#a1a1aa', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}>Server uptime</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>4K / UHD</div>
              <div style={{ fontSize: '0.9rem', color: '#a1a1aa', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}>Stream quality</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ff9900' }}>24/7</div>
              <div style={{ fontSize: '0.9rem', color: '#a1a1aa', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}>UK support</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
