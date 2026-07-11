"use client";

import { Play } from "lucide-react";

export default function VodSlider() {
  // Using locally hosted cinematic images to ensure they never expire
  const movies = [
    { title: "Action & Adventure", image: "/images/vod/action.jpg" },
    { title: "Sci-Fi Epics", image: "/images/vod/scifi.jpg" },
    { title: "Horror Classics", image: "/images/vod/horror.jpg" },
    { title: "Award Winning Drama", image: "/images/vod/drama.jpg" },
    { title: "Standup Comedy", image: "/images/vod/comedy.jpg" },
    { title: "Crime Thrillers", image: "/images/vod/thriller.jpg" },
    { title: "Nature Documentaries", image: "/images/vod/documentary.jpg" }
  ];

  return (
    <section className="section" style={{ background: '#050505', position: 'relative', overflow: 'hidden' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 1, marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'inline-flex', padding: '0.25rem 1rem', background: 'rgba(255, 17, 0, 0.1)', color: 'var(--accent)', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase' }}>
              VOD Library
            </div>
            <h2 className="heading-lg" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              50,000+ <span style={{ color: '#fff' }}>Movies & Series</span>
            </h2>
          </div>
          <p className="text-muted" style={{ maxWidth: '400px', fontSize: '1rem', lineHeight: 1.6 }}>
            Updated daily with the latest cinema releases, complete box sets, and Netflix, Prime, & Disney+ originals.
          </p>
        </div>
      </div>

      {/* Netflix Style Horizontal Slider */}
      <div className="hide-scrollbar" style={{ 
        display: 'flex', 
        gap: '1rem', 
        overflowX: 'auto', 
        paddingBottom: '2rem', 
        scrollSnapType: 'x mandatory', 
        scrollBehavior: 'smooth', 
        WebkitOverflowScrolling: 'touch',
        paddingLeft: 'max(1.5rem, calc((100vw - 1200px) / 2 + 1.5rem))', // Aligns with container left edge
        paddingRight: '1.5rem'
      }}>
        {movies.map((movie, index) => (
          <div key={index} className="hover-card" style={{ 
            minWidth: '200px', 
            width: '200px',
            aspectRatio: '2/3',
            flex: '0 0 auto',
            scrollSnapAlign: 'start',
            position: 'relative',
            borderRadius: '0.75rem',
            overflow: 'hidden',
            cursor: 'pointer',
            border: '1px solid rgba(255,255,255,0.05)',
            boxShadow: '0 10px 20px rgba(0,0,0,0.5)'
          }}>
            {/* Standard img tag to avoid Next.js domain config errors */}
            <img 
              src={movie.image} 
              alt={movie.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            
            {/* Gradient Overlay for Text */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '60%',
              background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '1rem'
            }}>
              <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                {movie.title}
              </h4>
            </div>

            {/* Hover Play Button Overlay */}
            <div className="hover-video-overlay" style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.3s ease'
            }}>
              <div className="hover-play-btn" style={{
                width: '50px',
                height: '50px',
                background: 'rgba(255, 17, 0, 0.9)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                transform: 'scale(0)',
                transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}>
                <Play size={24} style={{ marginLeft: '3px' }} />
              </div>
            </div>
          </div>
        ))}
        {/* Empty div for padding at the very end to ensure scroll completes smoothly */}
        <div style={{ minWidth: '1px', flex: '0 0 auto' }}></div>
      </div>
      
    </section>
  );
}
