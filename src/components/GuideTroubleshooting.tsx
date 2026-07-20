import { AlertTriangle, CheckCircle2 } from "lucide-react";

export default function GuideTroubleshooting() {
  const problems = [
    {
      issue: "Channels Not Loading",
      solution: "Re-enter your IPTV login credentials carefully and make sure no extra spaces are included anywhere."
    },
    {
      issue: "Buffering During Playback",
      solution: "Switch to a wired Ethernet connection and confirm your internet speed is at least 25 Mbps."
    },
    {
      issue: "Wrong Credentials Error",
      solution: "Copy your username and password directly from WhatsApp or email instead of typing them manually."
    },
    {
      issue: "App Crashes on Launch",
      solution: "Delete the app completely, reinstall it fresh from your app store, and re-enter your details from scratch."
    },
    {
      issue: "No Channels After Login",
      solution: "Wait 60 seconds for the full channel list to load, as the EPG guide takes a moment to sync properly."
    },
    {
      issue: "IPTV Subscription Not Activating",
      solution: "Confirm your payment was completed successfully and contact our team on WhatsApp to activate immediately."
    },
    {
      issue: "Black Screen on Playback",
      solution: "Lower your stream quality inside your IPTV player settings and restart the channel from scratch."
    },
    {
      issue: "Portal URL Not Working",
      solution: "Paste the portal URL directly from our WhatsApp message and avoid retyping it manually to prevent errors."
    },
    {
      issue: "Wi-Fi Signal Too Weak",
      solution: "Move your router closer to your streaming device or switch to the 5 GHz band for a stronger signal."
    },
    {
      issue: "EPG Guide Not Showing",
      solution: "Go into your IPTV player settings, find the EPG source option, and tap Refresh to reload it within 30 seconds."
    },
    {
      issue: "Device Not Compatible",
      solution: "Contact our team on WhatsApp, and we will recommend the best IPTV app for your specific device right away."
    }
  ];

  return (
    <section className="section" style={{ background: '#050505', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1rem', textTransform: 'uppercase' }}>
            Common IPTV Installation <span style={{ color: 'var(--primary)' }}>Problems and Solutions</span>
          </h2>
          <p className="text-muted" style={{ fontSize: '1.15rem' }}>
            Running into issues? Here are the quickest fixes to get your stream up and running.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {problems.map((item, index) => (
            <div key={index} style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '1rem',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <AlertTriangle size={20} color="#ff9900" style={{ flexShrink: 0, marginTop: '2px' }} />
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#fff', lineHeight: 1.4 }}>
                  {item.issue}
                </h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', background: 'rgba(16, 185, 129, 0.05)', padding: '1rem', borderRadius: '0.75rem' }}>
                <CheckCircle2 size={20} color="var(--success)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <p style={{ color: '#e4e4e7', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
