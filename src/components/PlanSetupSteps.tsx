export default function PlanSetupSteps() {
  const steps = [
    {
      num: "01",
      title: "Choose Your IPTV Subscription Plan",
      desc: "Pick the monthly or annual IPTV subscription plan that fits your budget perfectly."
    },
    {
      num: "02",
      title: "Complete Your Secure Payment",
      desc: "Pay safely via card, PayPal, or crypto and get your login details within minutes."
    },
    {
      num: "03",
      title: "Download Your IPTV Player App",
      desc: "Install any compatible IPTV player app on your Firestick, Smart TV, phone or PC."
    },
    {
      num: "04",
      title: "Enter Your IPTV Login Credentials",
      desc: "Add your username, password, and server URL into the app and hit connect."
    },
    {
      num: "05",
      title: "Start Streaming Instantly",
      desc: "Browse 40,000+ live channels, sports, movies, and series, and enjoy buffer-free streaming right away."
    }
  ];

  return (
    <section className="section" style={{ background: '#020202', position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1rem', textTransform: 'uppercase' }}>
            Simple Setup Process for Your <span style={{ color: 'var(--primary)' }}>IPTV Subscription</span>
          </h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {steps.map((step, index) => (
            <div key={index} style={{ 
              display: 'flex', 
              gap: '1.5rem', 
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              background: 'rgba(255,255,255,0.02)',
              padding: '1.5rem',
              borderRadius: '1.5rem',
              border: '1px solid rgba(255,255,255,0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Giant background number for premium feel */}
              <div style={{ 
                position: 'absolute', 
                right: '-10px', 
                top: '-20px', 
                fontSize: '8rem', 
                fontWeight: 900, 
                color: 'rgba(255,255,255,0.03)',
                zIndex: 0,
                lineHeight: 1
              }}>
                {step.num}
              </div>

              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                background: 'rgba(0, 68, 255, 0.1)', 
                color: 'var(--primary)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 800,
                flexShrink: 0,
                zIndex: 1,
                border: '2px solid rgba(0, 68, 255, 0.3)'
              }}>
                {step.num}
              </div>

              <div style={{ zIndex: 1, flex: 1, minWidth: 0 }}>
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
