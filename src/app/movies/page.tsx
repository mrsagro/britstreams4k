import Link from "next/link";
import Image from "next/image";
import { Play, Check, ChevronRight } from "lucide-react";

export const metadata = {
  title: "VOD Library | BritStreams 4K",
  description: "Browse our massive library of 50,000+ Movies and Series. Updated daily with the latest cinema releases, complete box sets, and originals.",
};

export default function MoviesPage() {
  const genres = [
    { title: "Action & Adventure", image: "/images/vod/action.jpg", count: "8,500+" },
    { title: "Sci-Fi Epics", image: "/images/vod/scifi.jpg", count: "4,200+" },
    { title: "Horror Classics", image: "/images/vod/horror.jpg", count: "5,100+" },
    { title: "Award Winning Drama", image: "/images/vod/drama.jpg", count: "12,000+" },
    { title: "Standup Comedy", image: "/images/vod/comedy.jpg", count: "3,800+" },
    { title: "Crime Thrillers", image: "/images/vod/thriller.jpg", count: "6,400+" },
    { title: "Nature Documentaries", image: "/images/vod/documentary.jpg", count: "2,900+" }
  ];

  return (
    <main style={{ background: '#050505', minHeight: '100vh', paddingTop: '6rem' }}>
      {/* Header Section */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '2rem' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.875rem' }}>Home</Link>
            <ChevronRight size={14} color="var(--muted)" />
            <span style={{ color: '#fff', fontSize: '0.875rem' }}>VOD Library</span>
          </div>

          <h1 className="heading-xl" style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            The Ultimate <span style={{ color: 'var(--primary)', WebkitTextFillColor: 'var(--primary)' }}>VOD Library</span>
          </h1>
          <p className="text-muted heading-md" style={{ maxWidth: '700px', fontSize: '1.125rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            Get instant access to over <strong>50,000+ Movies and TV Series</strong>. Our library is updated daily with the latest cinema releases, complete box sets, and exclusive Netflix, Prime Video, and Disney+ originals in stunning 4K UHD.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/#pricing" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              Unlock Library - View Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <h2 className="heading-lg" style={{ marginBottom: '2rem', fontSize: '2rem' }}>Browse by Genre</h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {genres.map((genre, index) => (
              <Link href="/#pricing" key={index} style={{ textDecoration: 'none' }}>
                <div className="hover-card" style={{ 
                  aspectRatio: '2/3',
                  position: 'relative',
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.5)'
                }}>
                  <Image 
                    src={genre.image} 
                    alt={genre.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 250px"
                    style={{ objectFit: 'cover' }}
                  />
                  
                  {/* Gradient Overlay for Text */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '60%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '1rem'
                  }}>
                    <h3 style={{ color: '#fff', fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.25rem', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                      {genre.title}
                    </h3>
                    <span style={{ color: 'var(--primary)', fontSize: '0.875rem', fontWeight: 600 }}>
                      {genre.count} Titles
                    </span>
                  </div>

                  {/* Hover Play Button Overlay */}
                  <div className="hover-video-overlay" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.3s ease'
                  }}>
                    <div className="hover-play-btn" style={{
                      width: '60px',
                      height: '60px',
                      background: 'rgba(255, 17, 0, 0.9)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      transform: 'scale(0)',
                      transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    }}>
                      <Play size={28} style={{ marginLeft: '4px' }} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="section" style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(0, 68, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Check color="var(--primary)" size={24} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '1rem' }}>Daily Updates</h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>Our library is synced daily. As soon as a movie hits digital platforms, it is added to your VOD library in 4K UHD.</p>
            </div>
            <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255, 17, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Check color="var(--accent)" size={24} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '1rem' }}>Multi-Language & Subs</h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>Watch your favorite content in multiple audio tracks with built-in subtitles for over 20 different languages.</p>
            </div>
            <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Check color="#10b981" size={24} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '1rem' }}>No Buffering</h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>Hosted on premium 10Gbps dedicated servers to ensure your 4K movies never buffer or freeze.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
