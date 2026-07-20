import { Tv, PlaySquare, MonitorPlay, Headset } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background elements */}
      <div style={{ position: 'absolute', top: '10%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0, 68, 255, 0.15) 0%, transparent 70%)', zIndex: 0 }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255, 17, 0, 0.1) 0%, transparent 70%)', zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '900px', margin: '0 auto 4rem auto' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', padding: '0.5rem 1rem', borderRadius: '999px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Best IPTV UK</span>
          </div>

          <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>
            #1 UK Premium IPTV Service Provider with <span style={{ color: 'var(--primary)' }}>Discounted IPTV Subscription UK</span>
          </h2>
          
          <p className="text-muted" style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '1rem' }}>
            The best IPTV UK has to offer. Fast, stable, and built for British screens.
          </p>
          <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Britstreams4K is a premium IPTV UK service built for smooth 4K streaming. We provide thousands of live channels, movies, all sports, news, web series, and more with zero buffering. Watch live TV UK wide, on any device, in any room, every single night.
          </p>

        </div>

        {/* Feature Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem' 
        }}>
          
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1rem', transition: 'all 0.3s ease' }} className="hover-card">
            <div style={{ background: 'rgba(0,68,255,0.1)', padding: '1rem', borderRadius: '1rem', color: 'var(--primary)' }}>
              <Tv size={28} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>Live Channels</h3>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1rem', transition: 'all 0.3s ease' }} className="hover-card">
            <div style={{ background: 'rgba(255,17,0,0.1)', padding: '1rem', borderRadius: '1rem', color: 'var(--accent)' }}>
              <PlaySquare size={28} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>VOD Library</h3>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1rem', transition: 'all 0.3s ease' }} className="hover-card">
            <div style={{ background: 'rgba(16,185,129,0.1)', padding: '1rem', borderRadius: '1rem', color: '#10b981' }}>
              <MonitorPlay size={28} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>HD/UHD/4k/8k</h3>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1rem', transition: 'all 0.3s ease' }} className="hover-card">
            <div style={{ background: 'rgba(255,153,0,0.1)', padding: '1rem', borderRadius: '1rem', color: '#ff9900' }}>
              <Headset size={28} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>24/7 Support</h3>
          </div>

        </div>

      </div>
    </section>
  );
}
