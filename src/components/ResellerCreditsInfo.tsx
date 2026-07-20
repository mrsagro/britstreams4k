import { Coins, Layers, Infinity, RotateCw, CheckCircle2, AlertCircle } from "lucide-react";

export default function ResellerCreditsInfo() {
  const creditRules = [
    {
      icon: <Coins size={24} />,
      title: "1 Credit = 1 Month Per Client",
      desc: "One credit gives one customer one full month of IPTV access. Simple as that."
    },
    {
      icon: <Layers size={24} />,
      title: "Build Any Subscription Length",
      desc: "Combine credits to create 1-month, 3-month, 6-month, or 12-month plans for any client."
    },
    {
      icon: <Infinity size={24} />,
      title: "Your Credits Never Expire",
      desc: "Every unused IPTV reseller credit stays in your panel permanently with no expiry date at all."
    },
    {
      icon: <RotateCw size={24} />,
      title: "Renewals Done in Seconds",
      desc: "When a client subscription ends, simply apply credits to renew their access instantly with zero delay."
    }
  ];

  const benefits = [
    "Flexible account management",
    "Easy subscription control",
    "Instant client activation",
    "Hassle-free renewal process",
    "Better client organisation",
    "Non-expiring credits for full peace of mind",
    "Buy more credits and pay less per credit",
    "Sub-reseller management under your master account"
  ];

  return (
    <section className="section" style={{ background: '#050505', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1rem', textTransform: 'uppercase' }}>
            How IPTV Reseller <span style={{ color: '#38bdf8' }}>Credits Work</span>
          </h2>
          <p className="text-muted" style={{ fontSize: '1.25rem', lineHeight: 1.8 }}>
            The IPTV reseller panel runs on a simple credit-based system that gives you complete flexibility over how you serve your clients. Buy credits once, use them whenever you need, and create, renew, and extend customer subscriptions based on their individual requirements.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          
          {/* Rules Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
            {creditRules.map((rule, index) => (
              <div key={index} style={{ 
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                padding: '1.5rem',
                borderRadius: '1rem',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start'
              }}>
                <div style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', padding: '0.75rem', borderRadius: '0.75rem', flexShrink: 0 }}>
                  {rule.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#fff', marginBottom: '0.25rem' }}>
                    {rule.title}
                  </h3>
                  <p style={{ color: '#a1a1aa', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                    {rule.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits List */}
          <div style={{ 
            background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.01) 100%)',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '1.5rem',
            padding: '2.5rem'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '2rem', textTransform: 'uppercase' }}>
              Benefits of the IPTV Reseller Credit-Based Program
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {benefits.map((benefit, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#e4e4e7', fontSize: '1.05rem' }}>
                  <CheckCircle2 size={20} color="#38bdf8" style={{ flexShrink: 0 }} />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Important Notice */}
        <div style={{ 
          background: 'rgba(239, 68, 68, 0.1)', 
          border: '1px solid rgba(239, 68, 68, 0.2)', 
          borderRadius: '1rem', 
          padding: '2rem',
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'flex-start'
        }}>
          <AlertCircle size={32} color="#ef4444" style={{ flexShrink: 0 }} />
          <div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ef4444', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              Important Notice
            </h4>
            <p style={{ color: '#fca5a5', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
              IPTV reseller credits are used solely for creating and managing customer subscription lines through your reseller panel. Content access and streaming quality are handled entirely by the server infrastructure on our end.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
