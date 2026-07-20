"use client";

import Link from "next/link";

export default function Devices() {
  const deviceList = [
    { name: "Firestick / Fire TV", desc: "Amazon Firestick, Fire TV Stick 4K, Fire TV Cube" },
    { name: "Android Devices", desc: "Samsung Galaxy, OnePlus, Xiaomi, Oppo, and Huawei" },
    { name: "Android Box", desc: "Nvidia Shield, Xiaomi Mi Box, H96 Max, and X96 Mini" },
    { name: "Smart TV", desc: "Samsung, LG, Sony, Hisense, Philips, and TCL" },
    { name: "Roku Devices", desc: "Roku Express, Roku Streaming Stick, Roku Ultra, and Roku TV" },
    { name: "iPhone / iOS Devices", desc: "iPhone, iPad, iPod Touch, Apple TV" },
    { name: "macOS / Windows", desc: "MacBook, iMac, Windows 10, Windows 11, Surface Pro" },
    { name: "STB / MAG Box", desc: "MAG 322, MAG 420, MAG 524, Formuler Z8, Formuler Z10" },
    { name: "Enigma2", desc: "Dreambox, Vu+ Duo, Zgemma, Octagon, Gigablue" }
  ];

  return (
    <section id="devices" className="section" style={{ background: '#050505' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1rem', textTransform: 'uppercase' }}>
            IPTV COMPATIBLE <span style={{ color: 'var(--primary)' }}>DEVICES</span>
          </h2>
          <p className="text-muted" style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
            Get a free IPTV Installation Guide for all the devices. You can easily set up IPTV on any compatible device in under 3 to 5 minutes.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          {deviceList.map((device, index) => (
            <div key={index} style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              padding: '1.5rem',
              borderRadius: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              transition: 'background 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
            >
              <h3 style={{ color: '#fff', fontSize: '1.125rem', fontWeight: 700 }}>{device.name}</h3>
              <p style={{ color: '#a1a1aa', fontSize: '0.9rem', lineHeight: 1.5 }}>{device.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/iptv-installation-guide" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
            Free Installation Guide
          </Link>
        </div>

      </div>
    </section>
  );
}
