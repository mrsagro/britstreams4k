export default function ResellerManagementTable() {
  const tableData = [
    { feature: "Trial Accounts", desc: "Create 24-hour IPTV free trials for interested customers instantly" },
    { feature: "Subscription Activations", desc: "Use credits to activate new IPTV accounts for clients right away" },
    { feature: "Account Renewals", desc: "Extend any existing client subscription without creating a new account" },
    { feature: "Client Information", desc: "Update login details, usernames, passwords, and subscription status anytime" },
    { feature: "Device Setup Support", desc: "Guide your customers to install IPTV on any compatible device they own" },
    { feature: "Sub-Reseller Management", desc: "Add sub-resellers under your account and assign them credits directly" }
  ];

  return (
    <section className="section" style={{ background: '#020202', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1rem', textTransform: 'uppercase' }}>
            What Can You Manage With the <span style={{ color: '#38bdf8' }}>IPTV Reseller Panel?</span>
          </h2>
          <p className="text-muted" style={{ fontSize: '1.25rem', lineHeight: 1.8 }}>
            The best IPTV reseller panel gives you every tool you need to run your reseller business smoothly every single day.
          </p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', overflowX: 'auto' }}>
          <table style={{ 
            width: '100%', 
            minWidth: '600px',
            borderCollapse: 'separate', 
            borderSpacing: '0 0.5rem',
            textAlign: 'left'
          }}>
            <thead>
              <tr>
                <th style={{ padding: '1rem 1.5rem', color: 'var(--muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Features</th>
                <th style={{ padding: '1rem 1.5rem', color: 'var(--muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>What You Can Do</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} style={{ 
                  background: 'rgba(255, 255, 255, 0.02)',
                  boxShadow: 'inset 4px 0 0 #38bdf8'
                }}>
                  <td style={{ padding: '1.5rem', color: '#fff', fontWeight: 700, borderRadius: '1rem 0 0 1rem', width: '35%', fontSize: '1.1rem' }}>
                    {row.feature}
                  </td>
                  <td style={{ padding: '1.5rem', color: '#a1a1aa', borderRadius: '0 1rem 1rem 0', lineHeight: 1.6 }}>
                    {row.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
