"use client";

import { Trophy } from "lucide-react";

export default function SportsSection() {
  const sports = [
    "Premier League", "Champions League", "NFL", "NBA", "MLB", "NHL", "Boxing", "UFC", "Cricket", "Formula 1"
  ];

  return (
    <section className="section" style={{ 
      position: 'relative', 
      background: 'linear-gradient(135deg, rgba(20,20,20,1) 0%, rgba(5,5,5,1) 100%)',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          textAlign: 'center', 
          maxWidth: '900px', 
          margin: '0 auto' 
        }}>
          
          <div style={{ 
            background: 'linear-gradient(90deg, rgba(255,153,0,0.1), rgba(255,17,0,0.1))',
            padding: '1rem',
            borderRadius: '50%',
            color: '#ff9900',
            marginBottom: '1.5rem',
            boxShadow: '0 0 30px rgba(255,153,0,0.2)'
          }}>
            <Trophy size={48} />
          </div>

          <h2 className="heading-lg" style={{ marginBottom: '1rem', textTransform: 'uppercase' }}>
            Best IPTV for Sports Fans in the <span style={{ color: 'var(--primary)' }}>UK and USA</span>
          </h2>
          
          <p style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            Built for the best IPTV for sports fans, UK and USA alike.
          </p>

          <p className="text-muted" style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '3rem' }}>
            Premier League Saturdays, Champions League nights, and NFL Sundays. Boxing, UFC, cricket, F1, NBA, and MLB, all in one place. Britstreams4K carries the sports coverage that makes cutting the cord an easy decision, all included in your plan.
          </p>

          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '1rem', 
            justifyContent: 'center' 
          }}>
            {sports.map((sport, index) => (
              <div key={index} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '0.75rem 1.5rem',
                borderRadius: '999px',
                color: '#fff',
                fontWeight: 600,
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary)';
                e.currentTarget.style.borderColor = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
              >
                {sport}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
