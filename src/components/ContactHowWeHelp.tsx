import { Zap, Wrench, PlayCircle, Key, Activity } from "lucide-react";

export default function ContactHowWeHelp() {
  const steps = [
    {
      icon: <Zap size={28} />,
      title: "IPTV Account Activation",
      desc: "Our team sends your IPTV login credentials to your WhatsApp or email within minutes of payment confirmation."
    },
    {
      icon: <Wrench size={28} />,
      title: "Device Installation Support",
      desc: "We guide you through free IPTV installation on any device, including Firestick, Android TV, Smart TV, iPhone, iOS, Android phones, Windows, and Mac."
    },
    {
      icon: <PlayCircle size={28} />,
      title: "Free Trial Setup",
      desc: "Request your 24-hour IPTV free trial and get instant account activation and a full setup guide from our team."
    },
    {
      icon: <Key size={28} />,
      title: "IPTV Login Credentials Help",
      desc: "One message to our team and your full IPTV login details, including username, password, and server URL, are back in your hands immediately."
    },
    {
      icon: <Activity size={28} />,
      title: "Technical Support",
      desc: "Whether you are dealing with setup difficulties, activation issues, account questions, or streaming problems, our team jumps in immediately and gets everything working fast."
    }
  ];

  return (
    <section className="section" style={{ background: '#020202', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="heading-lg" style={{ textTransform: 'uppercase' }}>
            How We Help Our <span style={{ color: 'var(--primary)' }}>IPTV Customers</span>
          </h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {steps.map((step, index) => (
            <div key={index} style={{ 
              display: 'flex', 
              gap: '1.5rem', 
              alignItems: 'flex-start',
              background: 'rgba(255,255,255,0.02)',
              padding: '2rem',
              borderRadius: '1.5rem',
              border: '1px solid rgba(255,255,255,0.05)',
              position: 'relative'
            }}>
              
              {/* Connector line (except last) */}
              {index !== steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  left: '3.75rem',
                  top: '5rem',
                  bottom: '-2rem',
                  width: '2px',
                  background: 'rgba(255,51,102,0.1)',
                  zIndex: 0
                }}></div>
              )}

              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '1rem', 
                background: 'rgba(255, 51, 102, 0.1)', 
                color: 'var(--primary)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0,
                zIndex: 1,
                border: '1px solid rgba(255, 51, 102, 0.2)'
              }}>
                {step.icon}
              </div>

              <div style={{ zIndex: 1, paddingTop: '0.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                  {step.title}
                </h3>
                <p style={{ color: '#a1a1aa', lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
