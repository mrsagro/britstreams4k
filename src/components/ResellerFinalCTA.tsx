import { siteConfig } from "../config";

export default function ResellerFinalCTA() {
  const whatsappNumber = siteConfig.contact.whatsappNumber;

  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(15, 23, 42, 1) 100%)', zIndex: 0 }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.02)', 
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(56, 189, 248, 0.3)', 
          borderRadius: '2rem', 
          padding: '5rem 3rem',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 0 40px rgba(56, 189, 248, 0.1)'
        }}>
          
          <h2 className="heading-lg" style={{ marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            TURN YOUR NETWORK INTO A MONTHLY INCOME WITH <span style={{ color: '#38bdf8' }}>IPTV RESELLING</span>
          </h2>
          
          <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 3rem auto', lineHeight: 1.8 }}>
            Join hundreds of active IPTV resellers UK already earning consistent monthly income from their own client base. Set your own prices, keep all your profits, and manage everything from one simple panel. Getting started takes less than 5 minutes.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="#plans" 
              className="btn" 
              style={{ padding: '1rem 2rem', fontSize: '1.125rem', background: '#38bdf8', color: '#000', fontWeight: 700, textDecoration: 'none', borderRadius: '999px' }}
            >
              Get Your IPTV Reseller Panel Now
            </a>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I want to become an IPTV Reseller")}`}
              target="_blank"
              rel="noreferrer"
              className="btn" 
              style={{ padding: '1rem 2rem', fontSize: '1.125rem', background: '#25D366', color: '#fff', boxShadow: '0 4px 15px rgba(37,211,102,0.3)', fontWeight: 600, textDecoration: 'none', borderRadius: '999px' }}
            >
              Chat With Us on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
