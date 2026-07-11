"use client";

import { useState } from "react";
import { Search, X, Tv, Film, Baby, Trophy } from "lucide-react";

export default function ChannelSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Simulated popular channels for search preview
  const categories = [
    { name: "Sports (UK)", icon: <Trophy size={18} />, channels: ["Sky Sports Main Event FHD", "Sky Sports Premier League FHD", "TNT Sports 1 4K", "TNT Sports 2 4K", "Sky Sports F1"] },
    { name: "Entertainment (UK)", icon: <Tv size={18} />, channels: ["BBC One HD", "ITV 1 HD", "Channel 4 HD", "Sky Showcase HD", "Sky Atlantic HD"] },
    { name: "Movies", icon: <Film size={18} />, channels: ["Sky Cinema Premiere HD", "Sky Cinema Action HD", "Sky Cinema Comedy HD"] },
    { name: "Kids", icon: <Baby size={18} />, channels: ["Cartoon Network HD", "Disney Channel HD", "Nickelodeon HD", "CBeebies HD"] }
  ];

  const filteredCategories = query.trim() === "" 
    ? categories 
    : categories.map(cat => ({
        ...cat,
        channels: cat.channels.filter(ch => ch.toLowerCase().includes(query.toLowerCase()))
      })).filter(cat => cat.channels.length > 0);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="btn btn-outline" 
        style={{ padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%', justifyContent: 'center' }}
      >
        <Search size={20} />
        Check if your channel is included
      </button>

      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(10px)',
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}>
          <div className="animate-fade-in" style={{
            background: 'linear-gradient(180deg, rgba(20,20,20,1) 0%, rgba(10,10,10,1) 100%)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '1.5rem',
            width: '100%',
            maxWidth: '600px',
            maxHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
          }}>
            
            {/* Header & Search Input */}
            <div style={{ padding: '2rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>Channel Search</h3>
                <button 
                  onClick={() => setIsOpen(false)}
                  style={{ background: 'transparent', border: 'none', color: '#a1a1aa', cursor: 'pointer' }}
                >
                  <X size={24} />
                </button>
              </div>

              <div style={{ position: 'relative' }}>
                <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#71717a' }} />
                <input 
                  type="text" 
                  placeholder="Search for Sky Sports, BBC..." 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '1rem 1rem 1rem 3rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '0.75rem',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* Results Area */}
            <div style={{ padding: '2rem', overflowY: 'auto', flexGrow: 1 }}>
              {query.trim() === "" && (
                <div style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                  Showing Popular Channels (20,000+ Total Available)
                </div>
              )}

              {filteredCategories.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {filteredCategories.map((cat, i) => (
                    <div key={i}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e4e4e7', fontWeight: 600, marginBottom: '1rem' }}>
                        {cat.icon}
                        {cat.name}
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {cat.channels.map((ch, j) => (
                          <span key={j} style={{
                            background: 'rgba(16, 185, 129, 0.1)',
                            border: '1px solid rgba(16, 185, 129, 0.2)',
                            color: '#10b981',
                            padding: '0.5rem 1rem',
                            borderRadius: '999px',
                            fontSize: '0.85rem',
                            fontWeight: 500
                          }}>
                            {ch}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem 0', color: '#a1a1aa' }}>
                  <div style={{ marginBottom: '1rem' }}>✅</div>
                  <div style={{ fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>Channel Likely Included!</div>
                  <p style={{ fontSize: '0.9rem' }}>We have over 20,000 channels globally. If it's a major network, we definitely have it.</p>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
}
