import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Banknote, Shield, Rocket } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "../../config";

export const metadata = {
  title: "Reseller Program | BritStream 4K IPTV",
  description: "Start your own profitable IPTV business in the UK. Get your own white-label panel, bulk credits, and premium 4K servers.",
};

export default function ResellerPage() {
  const whatsappNumber = siteConfig.contact.whatsappNumber;

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <section className="section" style={{ background: '#020202', paddingTop: '10rem', flexGrow: 1, position: 'relative', overflow: 'hidden' }}>
        
        {/* Glow */}
        <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255, 17, 0, 0.1) 0%, transparent 70%)', zIndex: 0 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', background: 'rgba(255, 17, 0, 0.1)', padding: '0.5rem 1rem', borderRadius: '999px', border: '1px solid rgba(255, 17, 0, 0.2)' }}>
              <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>B2B Partnership</span>
            </div>
            <h1 className="heading-xl" style={{ marginBottom: '1.5rem' }}>Start Your Own <br /><span style={{ color: 'var(--accent)' }}>IPTV Business</span></h1>
            <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
              Join the fastest growing UK IPTV network. Get your own reseller panel, manage your own clients, and keep 100% of your profits.
            </p>
          </div>

          <div className="responsive-grid" style={{ maxWidth: '1000px', margin: '0 auto 5rem auto' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ background: 'var(--primary)', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Rocket size={24} color="#fff" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>White Label Panel</h3>
              <p style={{ color: '#a1a1aa' }}>Get a fully branded dashboard (Xtream UI) to manage your customers, create trials, and extend subscriptions instantly.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ background: 'var(--success)', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Banknote size={24} color="#fff" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>Huge Profit Margins</h3>
              <p style={{ color: '#a1a1aa' }}>Buy credits in bulk at wholesale prices. Sell to your customers at your own retail prices and keep the entire margin.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ background: '#ff9900', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Shield size={24} color="#fff" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>Priority Tech Support</h3>
              <p style={{ color: '#a1a1aa' }}>As a reseller, you get access to our VIP engineering team 24/7 to resolve any server issues or customer complaints.</p>
            </div>

          </div>

          {/* Pricing Table for Credits */}
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'rgba(10,10,10,0.8)', border: '1px solid var(--glass-border)', borderRadius: '1.5rem', padding: '3rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>Reseller Packages</h2>
            <p style={{ color: '#a1a1aa', marginBottom: '3rem' }}>1 Credit = 1 Month Subscription. Minimum order is 50 Credits.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              
              <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h4 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '1rem' }}>Bronze</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>50</div>
                <div style={{ color: '#a1a1aa', fontSize: '0.9rem', marginBottom: '1rem' }}>Credits</div>
                <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>£2.00 / credit</div>
              </div>

              <div style={{ padding: '2rem', background: 'linear-gradient(180deg, rgba(255,17,0,0.1) 0%, rgba(255,17,0,0.02) 100%)', borderRadius: '1rem', border: '1px solid rgba(255,17,0,0.3)', transform: 'scale(1.05)', boxShadow: '0 10px 30px rgba(255,17,0,0.2)' }}>
                <div style={{ background: 'var(--accent)', color: '#fff', fontSize: '0.75rem', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', display: 'inline-block', marginBottom: '1rem' }}>BEST SELLER</div>
                <h4 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '1rem' }}>Silver</h4>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>100</div>
                <div style={{ color: '#a1a1aa', fontSize: '0.9rem', marginBottom: '1rem' }}>Credits</div>
                <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>£1.50 / credit</div>
              </div>

              <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h4 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '1rem' }}>Gold</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f59e0b', marginBottom: '0.5rem' }}>500</div>
                <div style={{ color: '#a1a1aa', fontSize: '0.9rem', marginBottom: '1rem' }}>Credits</div>
                <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>£1.00 / credit</div>
              </div>

            </div>

            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I'm interested in becoming a Reseller. Can we discuss pricing?")}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-accent"
              style={{ fontSize: '1.1rem', padding: '1rem 3rem' }}
            >
              Contact Us to Get Started
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
