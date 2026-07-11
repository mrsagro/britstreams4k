import { Check, X, ShieldAlert, Zap } from "lucide-react";

export default function Comparison() {
  const features = [
    { name: "Monthly Cost", us: "From £10/mo", them: "£80 - £120/mo" },
    { name: "Live Channels", us: "20,000+", them: "200 - 500" },
    { name: "Sports & PPV", us: "Included Free", them: "Extra £40/mo" },
    { name: "Movies & Series (VOD)", us: "50,000+ Included", them: "Extra subscriptions" },
    { name: "Multi-Device", us: "Yes (TV, Mobile, PC)", them: "Extra box fee" },
    { name: "Setup Time", us: "5 Minutes", them: "3-7 Days" },
    { name: "Contracts", us: "None. Cancel anytime.", them: "18-24 Months" },
  ];

  return (
    <section id="comparison" className="section" style={{ background: '#020202', position: 'relative', overflow: 'hidden' }}>
      
      {/* Abstract Background */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(0, 68, 255, 0.05) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', padding: '0.5rem 1rem', borderRadius: '999px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Why Switch?</span>
          </div>
          <h2 className="heading-lg" style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
            The Ultimate <span style={{ color: 'var(--primary)', textShadow: '0 0 30px rgba(0,68,255,0.4)' }}>Upgrade</span>
          </h2>
          <p className="text-muted" style={{ fontSize: '1.15rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.8 }}>
            See why thousands of UK households are ditching traditional cable and expensive satellite packages for BritStream 4K.
          </p>
        </div>

        {/* DESKTOP VIEW (TABLE) */}
        <div className="hide-on-mobile" style={{ 
          maxWidth: '1000px', 
          margin: '0 auto', 
          background: 'rgba(10,10,10,0.6)',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: '1.5rem',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.8)',
          overflow: 'hidden'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr>
                <th style={{ padding: '2rem 1.5rem', fontSize: '1.1rem', color: '#a1a1aa', fontWeight: 600, width: '34%' }}>Feature Comparison</th>
                <th style={{ 
                  padding: '2rem 1.5rem', 
                  fontSize: '1.4rem', 
                  color: '#fff', 
                  fontWeight: 800, 
                  textAlign: 'center', 
                  width: '33%',
                  background: 'linear-gradient(180deg, rgba(0,68,255,0.2) 0%, rgba(0,68,255,0.05) 100%)',
                  borderTop: '3px solid var(--primary)'
                }}>
                  BritStream 4K
                </th>
                <th style={{ padding: '2rem 1.5rem', fontSize: '1.2rem', color: '#71717a', fontWeight: 600, textAlign: 'center', width: '33%' }}>Traditional Cable</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} style={{ 
                  background: index % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                  borderBottom: index === features.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.03)'
                }}>
                  <td style={{ padding: '1.5rem', fontWeight: 500, color: '#e4e4e7', fontSize: '1.05rem' }}>{feature.name}</td>
                  
                  {/* BritStream Column */}
                  <td style={{ 
                    padding: '1.5rem', 
                    textAlign: 'center', 
                    fontWeight: 700, 
                    color: '#fff',
                    background: 'rgba(0,68,255,0.05)'
                  }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', background: 'rgba(16, 185, 129, 0.1)', padding: '0.5rem 1rem', borderRadius: '999px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                      <Check size={18} style={{ color: '#10b981' }} />
                      <span>{feature.us}</span>
                    </div>
                  </td>
                  
                  {/* Cable Column */}
                  <td style={{ padding: '1.5rem', textAlign: 'center', color: '#71717a', fontWeight: 500 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                      <X size={18} style={{ color: '#ef4444' }} />
                      <span>{feature.them}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE VIEW (STACKED CARDS) */}
        <div className="show-on-mobile" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {features.map((feature, index) => (
            <div key={index} style={{ 
              background: 'rgba(20,20,20,0.6)', 
              border: '1px solid rgba(255,255,255,0.05)', 
              borderRadius: '1rem',
              padding: '1.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              
              <h3 style={{ fontSize: '1.1rem', color: '#a1a1aa', fontWeight: 600, marginBottom: '1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                {feature.name}
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                
                {/* BritStream Side */}
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center', 
                  gap: '0.5rem',
                  background: 'linear-gradient(180deg, rgba(0,68,255,0.1) 0%, rgba(0,68,255,0.02) 100%)',
                  border: '1px solid rgba(0,68,255,0.2)',
                  borderRadius: '0.75rem',
                  padding: '1rem'
                }}>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--primary)', fontWeight: 800 }}>BritStream 4K</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>
                    <Check size={20} style={{ color: '#10b981' }} />
                    {feature.us}
                  </div>
                </div>

                {/* Cable Side */}
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center', 
                  gap: '0.5rem',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '0.75rem',
                  padding: '1rem'
                }}>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#71717a', fontWeight: 600 }}>Cable/Satellite</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#a1a1aa', fontWeight: 500 }}>
                    <X size={18} style={{ color: '#ef4444' }} />
                    {feature.them}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
