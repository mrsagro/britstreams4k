"use client";

import { useState } from "react";
import { MonitorPlay, Trophy, Film, Newspaper, Baby, Music, PlayCircle, Radio } from "lucide-react";

export default function Channels() {
  const [activeTab, setActiveTab] = useState("sports");

  const categories = [
    { id: "sports", label: "UK Sports", icon: <Trophy size={18} />, color: "#3b82f6", bg: "linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(29,78,216,0.05) 100%)", image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=600&auto=format&fit=crop" },
    { id: "movies", label: "Movies & PPV", icon: <Film size={18} />, color: "#8b5cf6", bg: "linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(109,40,217,0.05) 100%)", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=600&auto=format&fit=crop" },
    { id: "entertainment", label: "Entertainment", icon: <MonitorPlay size={18} />, color: "#f59e0b", bg: "linear-gradient(135deg, rgba(245,158,11,0.2) 0%, rgba(180,83,9,0.05) 100%)", image: "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?q=80&w=600&auto=format&fit=crop" },
    { id: "news", label: "News", icon: <Newspaper size={18} />, color: "#ef4444", bg: "linear-gradient(135deg, rgba(239,68,68,0.2) 0%, rgba(185,28,28,0.05) 100%)", image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=600&auto=format&fit=crop" },
    { id: "kids", label: "Kids", icon: <Baby size={18} />, color: "#10b981", bg: "linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(4,120,87,0.05) 100%)", image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=600&auto=format&fit=crop" },
    { id: "music", label: "Music", icon: <Music size={18} />, color: "#ec4899", bg: "linear-gradient(135deg, rgba(236,72,153,0.2) 0%, rgba(190,24,93,0.05) 100%)", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop" },
  ];

  const channelData: Record<string, string[]> = {
    sports: ["Sky Sports Main Event", "Sky Sports Premier League", "TNT Sports 1", "TNT Sports 2", "Sky Sports F1", "LFCTV", "MUTV", "Eurosport 1 & 2"],
    movies: ["Sky Cinema Premiere", "Sky Cinema Action", "Sky Cinema Hits", "Sky Cinema Comedy", "Box Office PPV", "TCM Movies", "Film4 HD", "Sky Cinema Sci-Fi"],
    entertainment: ["BBC One HD", "ITV 1 HD", "Channel 4 HD", "Channel 5 HD", "Sky Showcase", "Sky Max", "Comedy Central", "Dave HD"],
    news: ["Sky News HD", "BBC News HD", "GB News", "TalkTV", "CNN International", "Al Jazeera English", "Bloomberg TV", "Fox News"],
    kids: ["CBBC", "CBeebies", "Cartoon Network", "Nickelodeon", "Disney Channel", "Boomerang", "Nick Jr.", "Pop"],
    music: ["MTV Base", "MTV Hits", "Kiss", "Magic", "Kerrang!", "The Box", "4Music", "Clubland TV"],
  };

  const activeCategory = categories.find(c => c.id === activeTab) || categories[0];

  return (
    <section id="channels" className="section" style={{ background: '#030303', position: 'relative', overflow: 'hidden' }}>
      
      {/* Dynamic Background Glow based on active tab */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        background: `radial-gradient(circle at center, ${activeCategory.color}15 0%, transparent 60%)`,
        transition: 'background 0.5s ease',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1.5rem', fontSize: '3.5rem', letterSpacing: '-1px' }}>
            Ultimate <span style={{ color: activeCategory.color, transition: 'color 0.3s ease' }}>Channel Lineup</span>
          </h2>
          <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
            Ditch the boring lists. Experience 20,000+ premium networks in glorious 4K/HD. Switch categories to explore our massive library.
          </p>
        </div>

        {/* Cinematic Tabs */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '1rem', 
          marginBottom: '4rem',
        }}>
          {categories.map((cat) => (
            <button 
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.5rem',
                borderRadius: '1rem',
                border: '1px solid',
                borderColor: activeTab === cat.id ? `${cat.color}50` : 'rgba(255,255,255,0.05)',
                background: activeTab === cat.id ? `${cat.color}20` : 'rgba(255,255,255,0.02)',
                color: activeTab === cat.id ? '#fff' : '#888',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '1rem',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(10px)',
                boxShadow: activeTab === cat.id ? `0 10px 30px -10px ${cat.color}80` : 'none',
                transform: activeTab === cat.id ? 'translateY(-2px)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== cat.id) {
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== cat.id) {
                  e.currentTarget.style.color = '#888';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                }
              }}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Premium Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
          {channelData[activeTab].map((channel, index) => (
            <div key={index} className="animate-fade-in" style={{
              backgroundImage: `linear-gradient(180deg, rgba(15,15,15,0.4) 0%, rgba(5,5,5,0.95) 100%), url(${activeCategory.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              padding: '2rem 1.5rem',
              borderRadius: '1.25rem',
              border: `1px solid ${activeCategory.color}20`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              gap: '1rem',
              color: '#fff',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              cursor: 'default',
              position: 'relative',
              overflow: 'hidden',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 10px 30px -15px rgba(0,0,0,0.5)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
              e.currentTarget.style.borderColor = `${activeCategory.color}80`;
              e.currentTarget.style.boxShadow = `0 20px 40px -10px ${activeCategory.color}40, inset 0 0 20px ${activeCategory.color}20`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.borderColor = `${activeCategory.color}20`;
              e.currentTarget.style.boxShadow = '0 10px 30px -15px rgba(0,0,0,0.5)';
            }}
            >
              {/* Background Watermark Icon */}
              <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-10%',
                opacity: 0.05,
                transform: 'scale(4) rotate(-15deg)',
                color: activeCategory.color,
                zIndex: 0,
                pointerEvents: 'none'
              }}>
                {activeCategory.icon}
              </div>

              {/* LIVE Badge */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                background: 'rgba(0,0,0,0.5)',
                padding: '0.25rem 0.5rem',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.7rem',
                fontWeight: 800,
                letterSpacing: '1px',
                border: '1px solid rgba(255,255,255,0.1)',
                zIndex: 1
              }}>
                <Radio size={10} color={activeCategory.color} className="indicator-pulse" />
                <span style={{ color: activeCategory.color }}>4K LIVE</span>
              </div>

              {/* Play Button Decoration */}
              <div style={{ 
                background: 'rgba(255,255,255,0.05)', 
                padding: '1rem', 
                borderRadius: '50%',
                color: activeCategory.color,
                marginBottom: '0.5rem',
                zIndex: 1
              }}>
                <PlayCircle size={32} strokeWidth={1.5} />
              </div>

              {/* Channel Name */}
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 700, 
                lineHeight: 1.3,
                zIndex: 1,
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}>
                {channel}
              </h3>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <p className="text-muted" style={{ fontSize: '1.1rem', letterSpacing: '0.5px' }}>
            + 19,900 more channels available in HD, FHD, and true 4K UHD.
          </p>
        </div>

      </div>
    </section>
  );
}
