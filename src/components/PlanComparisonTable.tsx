export default function PlanComparisonTable() {
  const plans = [
    { name: "1 Month", bestFor: "First-Time and Short-Term IPTV Users", duration: "1 Month", setup: "Free", price: "£12.99", support: "24/7 WhatsApp", value: "Flexible" },
    { name: "3 Months", bestFor: "Regular Daily Streamers", duration: "3 Months", setup: "Free", price: "£29.99", support: "24/7 WhatsApp", value: "Balanced" },
    { name: "6 Months", bestFor: "Frequent and Extended Viewers", duration: "6 Months", setup: "Free", price: "£49.99", support: "24/7 WhatsApp", value: "Popular", highlight: true },
    { name: "12 Months", bestFor: "Long Term IPTV Subscribers", duration: "12 Months", setup: "Free", price: "£84.99", support: "24/7 WhatsApp", value: "Best Value", highlight: true }
  ];

  return (
    <section className="section" style={{ background: '#050505' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1rem', textTransform: 'uppercase' }}>
            Compare Our <span style={{ color: 'var(--primary)' }}>IPTV Subscription Plans</span>
          </h2>
          <p className="text-muted" style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
            Not sure which UK IPTV subscription suits you best? Compare all four plans side by side and pick the one that fits your budget and streaming habits perfectly.
          </p>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ 
            width: '100%', 
            minWidth: '800px',
            borderCollapse: 'separate', 
            borderSpacing: '0 0.5rem',
            textAlign: 'left'
          }}>
            <thead>
              <tr>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Plans</th>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Best For</th>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Duration</th>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Setup</th>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Price</th>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Support</th>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Value</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan, index) => (
                <tr key={index} style={{ 
                  background: plan.highlight ? 'rgba(0, 68, 255, 0.05)' : 'rgba(255, 255, 255, 0.02)',
                  boxShadow: plan.highlight ? 'inset 2px 0 0 var(--primary)' : 'none'
                }}>
                  <td style={{ padding: '1.5rem 1rem', color: '#fff', fontWeight: 700, borderRadius: '1rem 0 0 1rem' }}>{plan.name}</td>
                  <td style={{ padding: '1.5rem 1rem', color: '#a1a1aa' }}>{plan.bestFor}</td>
                  <td style={{ padding: '1.5rem 1rem', color: '#e4e4e7' }}>{plan.duration}</td>
                  <td style={{ padding: '1.5rem 1rem', color: 'var(--success)', fontWeight: 600 }}>{plan.setup}</td>
                  <td style={{ padding: '1.5rem 1rem', color: '#fff', fontWeight: 800, fontSize: '1.125rem' }}>{plan.price}</td>
                  <td style={{ padding: '1.5rem 1rem', color: '#e4e4e7' }}>{plan.support}</td>
                  <td style={{ padding: '1.5rem 1rem', color: plan.highlight ? 'var(--primary)' : '#a1a1aa', fontWeight: 700, borderRadius: '0 1rem 1rem 0' }}>{plan.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
