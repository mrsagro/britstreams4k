import { Play } from "lucide-react";
import Image from "next/image";
import SpeedTest from "./SpeedTest";

export default function Showcase() {
  return (
    <section className="section" style={{ background: '#000', overflow: 'hidden', position: 'relative' }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
        zIndex: 0
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', padding: '0.25rem 1rem', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase' }}>
            Experience Real 4K
          </div>
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>See the Action Like <span style={{ color: 'var(--success)' }}>Never Before</span></h2>
          <p className="text-muted" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
            No more pixelated streams. Watch the biggest UK matches in breathtaking 4K UHD at 60 FPS.
          </p>
        </div>

        <div style={{ 
          maxWidth: '1000px', 
          margin: '0 auto', 
          position: 'relative',
          borderRadius: '1rem',
          boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {/* TV Mockup Frame */}
          <div style={{
            position: 'relative',
            paddingTop: '56.25%', /* 16:9 Aspect Ratio */
            background: '#111',
            borderRadius: '1rem',
            overflow: 'hidden'
          }}>
            <Image 
              src="/tv-showcase.png" 
              alt="4K Football Broadcast"
              fill
              style={{
                objectFit: 'cover'
              }}
            />
            
            {/* Play Button Overlay to make it look like a video */}
            <div className="hover-video-overlay" style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.3s ease',
              cursor: 'pointer'
            }}>
              <div className="hover-play-btn" style={{
                width: '80px',
                height: '80px',
                background: 'var(--primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 30px rgba(0, 68, 255, 0.6)',
                color: 'white',
                transform: 'scale(1)',
                transition: 'transform 0.2s ease',
              }}>
                <Play size={40} style={{ marginLeft: '5px' }} />
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '4rem' }}>
          <SpeedTest />
        </div>

      </div>
    </section>
  );
}
