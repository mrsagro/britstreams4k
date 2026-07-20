import { siteConfig } from "../config";
import { PlaySquare, MonitorPlay, Smartphone, Settings } from "lucide-react";

export default function ContactFreeTrial() {
  const whatsappNumber = siteConfig.contact.whatsappNumber;

  const features = [
    {
      icon: <PlaySquare size={24} />,
      title: "Experience the Full Channel Library",
      desc: "Browse all live channels and see everything your IPTV subscription includes before spending anything."
    },
    {
      icon: <MonitorPlay size={24} />,
      title: "Test Streaming Quality on Your Device",
      desc: "Experience HD, UHD, and 4K streaming performance directly on your own screen and judge for yourself."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Check Device Compatibility",
      desc: "Confirm that our IPTV service runs smoothly on your preferred streaming device before committing to a plan."
    },
    {
      icon: <Settings size={24} />,
      title: "Get Full Setup Process Guidance",
      desc: "Learn how easy the IPTV login, account activation, and full setup process actually feels from start to finish."
    }
  ];

  return (
    <section className="section" style={{ background: '#050505', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1rem', textTransform: 'uppercase' }}>
            Not Sure Yet? Try Our IPTV Service <span style={{ color: 'var(--primary)' }}>Free for 24 Hours</span> Before You Buy
          </h2>
          <p className="text-muted" style={{ fontSize: '1.25rem', lineHeight: 1.8 }}>
            Your free IPTV trial gives you full 24-hour access to check device compatibility, test streaming performance, explore all features, and evaluate picture quality before choosing any subscription plan. 
            Try it on any device you own, whether that is a Firestick, Smart TV, Android phone, iPhone, MAG Box, or Windows PC, and see how smoothly our IPTV service runs on your personal setup.
          </p>
        </div>

        <div style={{ 
          background: 'rgba(255, 255, 255, 0.02)', 
          border: '1px solid rgba(255, 255, 255, 0.05)', 
          borderRadius: '2rem', 
          padding: '4rem 2rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255,51,102,0.1) 0%, transparent 70%)', zIndex: 0 }}></div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', marginBottom: '3rem', textAlign: 'center' }}>
              What You Can Do During Your Free IPTV Trial
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
              {features.map((feature, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', textAlign: 'center' }}>
                  <div style={{ 
                    background: 'rgba(255, 51, 102, 0.1)', 
                    color: 'var(--primary)', 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '1rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid rgba(255, 51, 102, 0.2)'
                  }}>
                    {feature.icon}
                  </div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#fff' }}>
                    {feature.title}
                  </h4>
                  <p style={{ color: '#a1a1aa', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I'd like to request my free 24-hour IPTV trial to test the service.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary" 
                style={{ padding: '1.25rem 3rem', fontSize: '1.25rem', display: 'inline-flex', boxShadow: '0 10px 30px rgba(255,51,102,0.3)' }}
              >
                Request My Free IPTV Trial
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
