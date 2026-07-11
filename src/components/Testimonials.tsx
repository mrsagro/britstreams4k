"use client";

import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "David M.",
      location: "London, UK",
      text: "Been using BritStream for 3 months now. Watched every Premier League game without a single buffer. Miles better than my old Sky package and way cheaper.",
      rating: 5,
      date: "2 days ago"
    },
    {
      name: "Sarah T.",
      location: "Manchester, UK",
      text: "Setup was incredibly easy on my Firestick. The support team walked me through it on WhatsApp in 5 minutes. The movie selection is massive.",
      rating: 5,
      date: "1 week ago"
    },
    {
      name: "James L.",
      location: "Birmingham, UK",
      text: "Finally an IPTV service that doesn't freeze during big fights. The 4K quality on the sports channels is genuinely impressive.",
      rating: 5,
      date: "2 weeks ago"
    },
    {
      name: "Michael R.",
      location: "Glasgow, UK",
      text: "Switched from another provider and the difference is night and day. Catch-up feature works perfectly for the soaps.",
      rating: 5,
      date: "3 weeks ago"
    },
    {
      name: "Emma W.",
      location: "Liverpool, UK",
      text: "The VOD library is basically Netflix, Prime, and Disney+ combined. Saved me so much money canceling my other subs.",
      rating: 5,
      date: "1 month ago"
    },
    {
      name: "Robert K.",
      location: "Leeds, UK",
      text: "Best customer service I've ever experienced for IPTV. Had a minor issue with EPG and they fixed it remotely in seconds.",
      rating: 5,
      date: "1 month ago"
    }
  ];

  return (
    <section id="reviews" className="section" style={{ background: '#020202', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background elements */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0, 182, 122, 0.05) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', background: 'rgba(0, 182, 122, 0.1)', padding: '0.5rem 1rem', borderRadius: '999px', border: '1px solid rgba(0, 182, 122, 0.2)' }}>
            <span style={{ color: '#00b67a', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Excellent 4.9/5</span>
            <div style={{ display: 'flex', gap: '2px', color: '#00b67a' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
          </div>
          <h2 className="heading-lg" style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
            Trusted by <span style={{ color: 'var(--primary)', textShadow: '0 0 20px rgba(0,68,255,0.4)' }}>UK Viewers</span>
          </h2>
          <p className="text-muted" style={{ fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
            Swipe to see what our community has to say about their streaming experience.
          </p>
        </div>

        {/* Horizontal Slider */}
        <div className="hide-scrollbar" style={{ 
          display: 'flex', 
          gap: '1.5rem', 
          overflowX: 'auto', 
          paddingBottom: '2rem', 
          scrollSnapType: 'x mandatory', 
          scrollBehavior: 'smooth', 
          WebkitOverflowScrolling: 'touch',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          margin: '0 -1rem'
        }}>
          {reviews.map((review, index) => (
            <div key={index} style={{ 
              minWidth: '320px', 
              maxWidth: '400px',
              flex: '0 0 auto',
              scrollSnapAlign: 'center',
              padding: '2rem', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem',
              background: 'linear-gradient(180deg, rgba(20,20,20,0.8) 0%, rgba(10,10,10,0.95) 100%)',
              border: '1px solid rgba(255,255,255,0.03)',
              borderRadius: '1.5rem',
              position: 'relative',
              boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
            }}>
              
              <Quote size={40} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: 'rgba(255,255,255,0.03)', zIndex: 0 }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', gap: '4px', color: '#00b67a' }}>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <span style={{ fontSize: '0.8rem', color: '#52525b' }}>{review.date}</span>
              </div>
              
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: 1.6, 
                color: '#e4e4e7',
                position: 'relative', 
                zIndex: 1,
                flexGrow: 1
              }}>
                "{review.text}"
              </p>
              
              <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', position: 'relative', zIndex: 1, paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, var(--primary) 0%, #002288 100%)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  boxShadow: '0 4px 10px rgba(0,68,255,0.3)'
                }}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>{review.name}</div>
                  <div style={{ fontSize: '0.8rem', color: '#a1a1aa' }}>{review.location} &middot; Verified Buyer</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
