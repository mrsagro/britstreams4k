"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header style={{
      position: 'relative',
      width: '100%',
      zIndex: 50,
      padding: '1rem 0',
      transition: 'all 0.3s ease',
      background: scrolled || mobileMenuOpen ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: scrolled || mobileMenuOpen ? 'blur(16px)' : 'none',
      borderBottom: scrolled || mobileMenuOpen ? '1px solid var(--glass-border)' : '1px solid transparent'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <Image 
            src="/logo.png" 
            alt="BritStream 4K Logo" 
            width={32}
            height={32}
            style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--primary)' }} 
          />
          <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.02em' }}>
            BritStream <span style={{ color: 'var(--primary)' }}>4K</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          <Link href="/#channels" style={{ color: 'var(--foreground)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--foreground)'}>Channels</Link>
          <Link href="/setup" style={{ color: 'var(--foreground)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--foreground)'}>Setup</Link>
          <Link href="/reseller" style={{ color: 'var(--foreground)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--foreground)'}>Reseller</Link>
          <Link href="/blog" style={{ color: 'var(--foreground)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--foreground)'}>Blog</Link>
          <Link href="/#pricing" style={{ color: 'var(--foreground)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--foreground)'}>Pricing</Link>
          
          <Link href="#pricing" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
            Get Started
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          className="show-on-mobile"
          aria-label="Toggle mobile menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'transparent', border: 'none', color: 'var(--foreground)', cursor: 'pointer', padding: '0.25rem' }}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="animate-fade-in" style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(5, 5, 5, 0.98)',
          borderBottom: '1px solid var(--glass-border)',
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'center',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)'
        }}>
          <Link href="/#channels" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontSize: '1.125rem', fontWeight: 500, textDecoration: 'none' }}>Channels</Link>
          <Link href="/setup" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontSize: '1.125rem', fontWeight: 500, textDecoration: 'none' }}>Setup</Link>
          <Link href="/reseller" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontSize: '1.125rem', fontWeight: 500, textDecoration: 'none' }}>Reseller</Link>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontSize: '1.125rem', fontWeight: 500, textDecoration: 'none' }}>Blog</Link>
          <Link href="/#pricing" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontSize: '1.125rem', fontWeight: 500, textDecoration: 'none' }}>Pricing</Link>
          
          <Link href="#pricing" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem', fontSize: '1.125rem' }}>
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
