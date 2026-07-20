import { LayoutDashboard, Infinity, Zap, RotateCw, MonitorPlay, TrendingUp } from "lucide-react";

export default function ResellerWhyChoose() {
  const reasons = [
    {
      icon: <LayoutDashboard size={28} />,
      title: "Clean and Simple Dashboard",
      desc: "Manage all your clients, credits, subscriptions, and trials from one easy-to-use panel."
    },
    {
      icon: <Infinity size={28} />,
      title: "Non-Expiring Credits",
      desc: "Your IPTV reseller credits never expire, so you use them at your own pace anytime."
    },
    {
      icon: <Zap size={28} />,
      title: "Instant Account Activation",
      desc: "Create and activate new IPTV accounts for your clients in a matter of seconds."
    },
    {
      icon: <RotateCw size={28} />,
      title: "Effortless Subscription Renewals",
      desc: "Renew any client subscription with one click without touching their account details at all."
    },
    {
      icon: <MonitorPlay size={28} />,
      title: "Works on Every Device",
      desc: "Your clients can stream IPTV on Firestick, Smart TV, Android, iPhone, and more."
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Grows With Your Business",
      desc: "Start with a small client base and scale up to hundreds of clients without switching platforms."
    }
  ];

  return (
    <section className="section" style={{ background: '#050505', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1rem', textTransform: 'uppercase' }}>
            Why Become an IPTV Reseller <span style={{ color: '#38bdf8' }}>With Our Panel?</span>
          </h2>
          <p className="text-muted" style={{ fontSize: '1.25rem', lineHeight: 1.8 }}>
            You do not need to be technical or experienced to run a successful IPTV reseller business. Everything is already set up and ready for you the moment you get your panel.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {reasons.map((reason, index) => (
            <div key={index} style={{ 
              background: 'rgba(255,255,255,0.02)', 
              padding: '2rem', 
              borderRadius: '1.5rem',
              border: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              textAlign: 'center',
              alignItems: 'center'
            }}>
              <div style={{ 
                background: 'rgba(56, 189, 248, 0.1)', 
                width: '64px', 
                height: '64px', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#38bdf8',
                marginBottom: '0.5rem',
                border: '1px solid rgba(56, 189, 248, 0.2)'
              }}>
                {reason.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>
                {reason.title}
              </h3>
              <p style={{ color: '#a1a1aa', lineHeight: 1.6 }}>
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
