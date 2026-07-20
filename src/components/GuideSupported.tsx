import { Monitor, AppWindow } from "lucide-react";

export default function GuideSupported() {
  const devices = [
    "Firestick / Fire TV",
    "Smart TV",
    "Android TV / Android Box",
    "iPhone / iPad / iOS",
    "Windows PC",
    "Mac",
    "Android Smartphones / Tablets",
    "Roku Devices"
  ];

  const apps = [
    "GSE Smart IPTV",
    "My IPTV Player",
    "Smart IPTV",
    "iPlayTV Apple TV",
    "Smart STB",
    "SET IPTV",
    "NET IPTV",
    "Kodi",
    "IPTV Smart Purple",
    "VLC Player",
    "TiviMate",
    "Chromecast",
    "Duplex IPTV",
    "IPTV Extreme",
    "IPTV Smarters Pro"
  ];

  return (
    <section className="section" style={{ background: '#050505', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1rem', textTransform: 'uppercase' }}>
            IPTV Installation Guide: <span style={{ color: 'var(--primary)' }}>All Supported Devices for IPTV</span>
          </h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          
          {/* Devices List */}
          <div style={{ 
            background: 'rgba(255,255,255,0.02)', 
            border: '1px solid rgba(255,255,255,0.05)', 
            borderRadius: '1.5rem', 
            padding: '2.5rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--primary)' }}></div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ background: 'rgba(0, 68, 255, 0.1)', padding: '0.75rem', borderRadius: '1rem', color: 'var(--primary)' }}>
                <Monitor size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Devices
              </h3>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {devices.map((device, index) => (
                <li key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  color: '#e4e4e7',
                  fontSize: '1.1rem'
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }}></span>
                  {device}
                </li>
              ))}
            </ul>
          </div>

          {/* Apps List */}
          <div style={{ 
            background: 'rgba(255,255,255,0.02)', 
            border: '1px solid rgba(255,255,255,0.05)', 
            borderRadius: '1.5rem', 
            padding: '2.5rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--success)' }}></div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '0.75rem', borderRadius: '1rem', color: 'var(--success)' }}>
                <AppWindow size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>
                IPTV Player Apps
              </h3>
            </div>

            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0, 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
              gap: '1rem' 
            }}>
              {apps.map((app, index) => (
                <li key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  color: '#a1a1aa',
                  fontSize: '1rem'
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--success)', flexShrink: 0 }}></span>
                  {app}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
