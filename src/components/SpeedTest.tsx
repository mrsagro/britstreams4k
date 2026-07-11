"use client";

import { useState, useEffect } from "react";
import { Activity, Wifi, ShieldCheck, Download, Upload, Zap, AlertTriangle } from "lucide-react";

export default function SpeedTest() {
  const [testing, setTesting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("");
  const [results, setResults] = useState<{ ping: number, down: number, up: number, status: string, isReal: boolean } | null>(null);
  const [error, setError] = useState(false);

  const startTest = async () => {
    setTesting(true);
    setProgress(0);
    setResults(null);
    setError(false);

    try {
      // 1. PING TEST
      setStatusText("Measuring Ping...");
      const pingStart = Date.now();
      await fetch('/api/speedtest?ping=true', { cache: 'no-store' });
      const pingEnd = Date.now();
      const pingResult = Math.max(1, pingEnd - pingStart);
      setProgress(20);

      // 2. DOWNLOAD TEST (2MB)
      setStatusText("Testing Download Speed...");
      const dlStart = Date.now();
      const dlRes = await fetch('/api/speedtest?download=true', { cache: 'no-store' });
      await dlRes.arrayBuffer(); // Wait for full download
      const dlEnd = Date.now();
      
      const dlDurationSeconds = (dlEnd - dlStart) / 1000;
      const dlBits = 2 * 1024 * 1024 * 8; // 2MB in bits
      const dlMbps = (dlBits / dlDurationSeconds) / 1000000; // Convert to Mbps
      setProgress(60);

      // 3. UPLOAD TEST (1MB)
      setStatusText("Testing Upload Speed...");
      const ulData = new Uint8Array(1 * 1024 * 1024); // 1MB payload
      const ulStart = Date.now();
      await fetch('/api/speedtest', {
        method: 'POST',
        body: ulData,
        cache: 'no-store'
      });
      const ulEnd = Date.now();

      const ulDurationSeconds = (ulEnd - ulStart) / 1000;
      const ulBits = 1 * 1024 * 1024 * 8; // 1MB in bits
      const ulMbps = (ulBits / ulDurationSeconds) / 1000000;
      setProgress(100);

      // EVALUATE
      let status = "Excellent for 4K UHD";
      if (dlMbps < 15) status = "Good for 1080p HD";
      if (dlMbps < 5) status = "Warning: Buffering Possible";

      setResults({
        ping: Math.round(pingResult),
        down: Math.round(dlMbps),
        up: Math.round(ulMbps),
        status,
        isReal: true
      });
      setTesting(false);

    } catch (err) {
      console.error(err);
      setError(true);
      setTesting(false);
    }
  };

  return (
    <div className="glass" style={{ 
      padding: '2rem', 
      borderRadius: '1.5rem', 
      maxWidth: '500px', 
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        background: testing ? 'radial-gradient(circle, rgba(0, 68, 255, 0.1) 0%, transparent 70%)' : (results && !error ? 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)' : (error ? 'radial-gradient(circle, rgba(255, 0, 0, 0.1) 0%, transparent 70%)' : 'transparent')),
        transition: 'background 1s ease',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '999px', marginBottom: '1rem' }}>
            <Activity size={16} className={testing ? "indicator-pulse" : ""} style={{ color: testing ? 'var(--primary)' : '#a1a1aa' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>REAL Network Diagnostic</span>
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Check Your Connection</h3>
          <p style={{ fontSize: '0.9rem', color: '#a1a1aa' }}>Ensure your internet is fast enough for buffer-free 4K streaming.</p>
        </div>

        {!testing && !results && !error && (
          <div style={{ textAlign: 'center' }}>
            <button 
              onClick={startTest}
              style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, #002288 100%)',
                color: '#fff',
                border: 'none',
                padding: '1rem 2.5rem',
                borderRadius: '999px',
                fontSize: '1.1rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 10px 25px -5px rgba(0, 68, 255, 0.5)',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Wifi size={20} />
              Start 100% Real Speed Test
            </button>
            <p style={{ fontSize: '0.75rem', color: '#71717a', marginTop: '1rem' }}>This test uses real bandwidth to measure your connection to our servers.</p>
          </div>
        )}

        {testing && (
          <div style={{ padding: '1rem 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
              <span style={{ color: 'var(--primary)' }}>{statusText}</span>
              <span>{Math.floor(progress)}%</span>
            </div>
            <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '999px', overflow: 'hidden' }}>
              <div style={{ 
                height: '100%', 
                width: `${progress}%`, 
                background: 'var(--primary)',
                boxShadow: '0 0 10px var(--primary)',
                transition: 'width 0.5s ease'
              }}></div>
            </div>
          </div>
        )}

        {error && (
          <div style={{ textAlign: 'center', color: '#ef4444' }}>
            <AlertTriangle size={32} style={{ margin: '0 auto 1rem auto' }} />
            <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Test Failed</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Could not connect to the testing server. Please check your internet connection.</p>
            <button onClick={() => { setError(false); startTest(); }} style={{ background: 'transparent', border: '1px solid #ef4444', color: '#ef4444', padding: '0.5rem 1.5rem', borderRadius: '999px', cursor: 'pointer' }}>
              Try Again
            </button>
          </div>
        )}

        {results && !error && (
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))', gap: '0.5rem', textAlign: 'center' }}>
              
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.75rem 0.25rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                <Zap size={18} style={{ color: '#f59e0b', margin: '0 auto 0.5rem auto' }} />
                <div style={{ fontSize: '0.7rem', color: '#a1a1aa', textTransform: 'uppercase' }}>Ping</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>{results.ping} <span style={{ fontSize: '0.7rem', fontWeight: 500, color: '#71717a' }}>ms</span></div>
              </div>

              <div style={{ background: 'rgba(0, 68, 255, 0.1)', padding: '0.75rem 0.25rem', borderRadius: '1rem', border: '1px solid rgba(0, 68, 255, 0.2)' }}>
                <Download size={18} style={{ color: 'var(--primary)', margin: '0 auto 0.5rem auto' }} />
                <div style={{ fontSize: '0.7rem', color: '#a1a1aa', textTransform: 'uppercase' }}>Download</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>{results.down} <span style={{ fontSize: '0.7rem', fontWeight: 500, color: '#71717a' }}>Mbps</span></div>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.75rem 0.25rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                <Upload size={18} style={{ color: '#a1a1aa', margin: '0 auto 0.5rem auto' }} />
                <div style={{ fontSize: '0.7rem', color: '#a1a1aa', textTransform: 'uppercase' }}>Upload</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>{results.up} <span style={{ fontSize: '0.7rem', fontWeight: 500, color: '#71717a' }}>Mbps</span></div>
              </div>

            </div>

            <div style={{ 
              background: results.down >= 15 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)', 
              border: results.down >= 15 ? '1px solid rgba(16, 185, 129, 0.2)' : '1px solid rgba(245, 158, 11, 0.2)', 
              borderRadius: '1rem', 
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              color: results.down >= 15 ? '#10b981' : '#f59e0b',
              fontWeight: 700
            }}>
              <ShieldCheck size={24} />
              {results.status}
            </div>

            <div style={{ textAlign: 'center' }}>
              <button onClick={() => setResults(null)} style={{ background: 'transparent', border: 'none', color: '#a1a1aa', fontSize: '0.9rem', cursor: 'pointer', textDecoration: 'underline' }}>
                Test Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
