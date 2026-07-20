import { UserPlus, Zap, Clock, Users } from "lucide-react";

export default function ResellerDashboardFeatures() {
  const features = [
    {
      icon: <UserPlus size={28} />,
      title: "Create Customer Accounts",
      desc: "Add new IPTV lines instantly and send login credentials to your clients directly from your reseller dashboard."
    },
    {
      icon: <Zap size={28} />,
      title: "Activate Subscriptions",
      desc: "Use your IPTV reseller credits to activate monthly, quarterly, or yearly subscriptions for any client in seconds."
    },
    {
      icon: <Clock size={28} />,
      title: "Issue Free Trials",
      desc: "Generate 24-hour IPTV trial accounts for potential clients so they can test the service before buying a plan."
    },
    {
      icon: <Users size={28} />,
      title: "Manage Existing Clients",
      desc: "Renew subscriptions, update account details, extend lines, and monitor every client status from one dashboard."
    }
  ];

  return (
    <section className="section" style={{ background: '#020202', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1rem', textTransform: 'uppercase' }}>
            Manage Every Client and Subscription From Your <span style={{ color: '#38bdf8' }}>IPTV Reseller Panel</span>
          </h2>
          <p className="text-muted" style={{ fontSize: '1.25rem', lineHeight: 1.8 }}>
            With the IPTV reseller panel, managing your customers becomes simple and easy. Spend less time on manual work and more time growing your client base. Create accounts, activate subscriptions, and handle renewals all from one single dashboard.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', 
          gap: '1.5rem' 
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '1.5rem',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #38bdf8, transparent)' }}></div>
              
              <div style={{ 
                background: 'rgba(56, 189, 248, 0.1)', 
                width: '60px', 
                height: '60px', 
                borderRadius: '1rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#38bdf8',
                marginBottom: '0.5rem'
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>
                {feature.title}
              </h3>
              <p style={{ color: '#a1a1aa', lineHeight: 1.6 }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
