export default function ResellerSteps() {
  const steps = [
    {
      num: "01",
      title: "Pick Your IPTV Reseller Package",
      desc: "Choose the credit package that fits your expected client volume perfectly."
    },
    {
      num: "02",
      title: "Get Your Reseller Panel Access",
      desc: "Log in to your IPTV reseller dashboard and check your available credits right away."
    },
    {
      num: "03",
      title: "Create Your First Client Account",
      desc: "Activate a free trial or subscription line for your very first customer instantly."
    },
    {
      num: "04",
      title: "Set Your Own Prices and Start Selling",
      desc: "Decide what you charge your clients and keep every penny of profit you make."
    },
    {
      num: "05",
      title: "Manage and Grow Your Client Base",
      desc: "Track active users, renewals, and account details all from one single dashboard."
    }
  ];

  return (
    <section className="section" style={{ background: '#020202', position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1rem', textTransform: 'uppercase' }}>
            How to Become an IPTV Reseller UK — <span style={{ color: '#38bdf8' }}>Step by Step</span>
          </h2>
          <p className="text-muted" style={{ fontSize: '1.25rem' }}>
            No experience needed. Your IPTV reseller panel is ready to use the moment you sign up.
          </p>
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
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Giant background number */}
              <div style={{ 
                position: 'absolute', 
                right: '-10px', 
                top: '-20px', 
                fontSize: '8rem', 
                fontWeight: 900, 
                color: 'rgba(56, 189, 248, 0.05)',
                zIndex: 0,
                lineHeight: 1
              }}>
                {step.num}
              </div>

              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                background: 'rgba(56, 189, 248, 0.1)', 
                color: '#38bdf8',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 800,
                flexShrink: 0,
                zIndex: 1,
                border: '2px solid rgba(56, 189, 248, 0.3)'
              }}>
                {step.num}
              </div>

              <div style={{ zIndex: 1 }}>
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
