import { ShoppingCart, CreditCard, KeyRound, Play } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "PICK YOUR PLAN",
      desc: "Choose a 1, 3, 6, or 12-month IPTV Subscription plan and select how many devices you need.",
      icon: <ShoppingCart size={28} />
    },
    {
      step: "02",
      title: "COMPLETE PAYMENT",
      desc: "Pay securely by card, PayPal, bank transfer, Stripe, Wise, Google Pay, Shopify, cryptocurrency, or your preferred method.",
      icon: <CreditCard size={28} />
    },
    {
      step: "03",
      title: "RECEIVE IPTV LOGIN",
      desc: "You will get your IPTV login details by email or WhatsApp straight after payment.",
      icon: <KeyRound size={28} />
    },
    {
      step: "04",
      title: "START WATCHING IPTV",
      desc: "Enter your details into the app and start streaming live TV, sport, and movies in 4K.",
      icon: <Play size={28} />
    }
  ];

  return (
    <section className="section" style={{ background: '#020202' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
            HOW IT WORKS - <span style={{ color: 'var(--primary)' }}>4 Easy Steps</span>
          </h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '2rem',
          position: 'relative'
        }}>
          {/* Connecting Line for Desktop */}
          <div className="hide-on-mobile" style={{
            position: 'absolute',
            top: '40px',
            left: '10%',
            right: '10%',
            height: '2px',
            background: 'linear-gradient(90deg, rgba(0,68,255,0.1) 0%, rgba(0,68,255,0.5) 50%, rgba(0,68,255,0.1) 100%)',
            zIndex: 0
          }}></div>

          {steps.map((item, index) => (
            <div key={index} style={{ 
              position: 'relative', 
              zIndex: 1, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center',
              background: 'rgba(255,255,255,0.02)',
              padding: '2rem',
              borderRadius: '1.5rem',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                background: '#020202',
                border: '2px solid var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                color: 'var(--primary)',
                position: 'relative',
                boxShadow: '0 0 20px rgba(0,68,255,0.2)'
              }}>
                {item.icon}
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  background: 'var(--accent)',
                  color: '#fff',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 800
                }}>
                  {item.step}
                </div>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', color: '#fff' }}>{item.title}</h3>
              <p style={{ color: '#a1a1aa', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
