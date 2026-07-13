"use client";

import { Check, MessageCircle, Send } from "lucide-react";
import { siteConfig } from "../config";

export default function Pricing() {
  const whatsappNumber = siteConfig.contact.whatsappNumber;
  const telegramHandle = "Iptvuk10";

  const plans = [
    {
      id: "1-month",
      name: "1 Month",
      price: "14.99",
      popular: false,
      features: ["All UK & International Channels", "4K UHD Quality", "Anti-Freeze 3.0", "VOD & Series Library", "Standard Support"]
    },
    {
      id: "3-months",
      name: "3 Months",
      price: "34.99",
      popular: false,
      features: ["All UK & International Channels", "4K UHD Quality", "Anti-Freeze 3.0", "VOD & Series Library", "Standard Support"]
    },
    {
      id: "6-months",
      name: "6 Months",
      price: "59.99",
      popular: true,
      badge: "Most Popular",
      features: ["All UK & International Channels", "4K UHD Quality", "Anti-Freeze 3.0", "VOD & Series Library", "Priority Support", "2 Connections"]
    },
    {
      id: "12-months",
      name: "12 Months",
      price: "89.99",
      popular: false,
      badge: "Best Value",
      features: ["All UK & International Channels", "4K UHD Quality", "Anti-Freeze 3.0", "VOD & Series Library", "VIP 24/7 Support", "2 Connections", "Free VPN Included"]
    }
  ];

  const handleWhatsApp = (planName: string, price: string) => {
    const text = encodeURIComponent(`Hi, I'm interested in the ${planName} plan for £${price}.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const handleTelegram = () => {
    window.open(`https://t.me/${telegramHandle}`, '_blank');
  };

  return (
    <section id="pricing" className="section" style={{ background: 'var(--background)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>Simple, <span style={{ color: 'var(--primary)' }}>Transparent Pricing</span></h2>
          <p className="text-muted" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
            No hidden fees, no contracts. Choose the plan that fits you best and start watching immediately.
          </p>
        </div>

        <div className="responsive-grid" style={{ alignItems: 'center' }}>
          {plans.map((plan) => (
            <div key={plan.id} className="glass" style={{
              position: 'relative',
              padding: '3rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              border: plan.popular ? '2px solid var(--primary)' : '1px solid var(--glass-border)',
              boxShadow: plan.popular ? '0 0 40px -10px rgba(236, 72, 153, 0.3)' : '0 4px 20px rgba(0,0,0,0.05)',
              transform: 'scale(1)',
              zIndex: plan.popular ? 10 : 1,
              background: plan.popular ? 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,248,248,1) 100%)' : 'var(--card-bg)'
            }}>
              
              {plan.badge && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: plan.popular ? 'var(--primary)' : 'var(--success)',
                  color: '#fff',
                  padding: '4px 16px',
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {plan.badge}
                </div>
              )}

              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', textAlign: 'center' }}>{plan.name}</h3>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '0.25rem', marginBottom: '2rem' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 600 }}>£</span>
                <span style={{ fontSize: '3rem', fontWeight: 800 }}>{plan.price}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem', flexGrow: 1 }}>
                {plan.features.map((feature, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Check size={18} style={{ color: 'var(--success)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.875rem', color: 'var(--foreground)' }}>{feature}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <button onClick={() => handleWhatsApp(plan.name, plan.price)} className="btn" style={{
                  background: '#25D366',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)'
                }}>
                  <MessageCircle size={20} />
                  Buy via WhatsApp
                </button>
                <button onClick={handleTelegram} className="btn" style={{
                  background: '#0088cc',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 14px rgba(0, 136, 204, 0.3)'
                }}>
                  <Send size={20} />
                  Buy via Telegram
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Secure Payments Section */}
        <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted)' }}>
            <span style={{ width: '30px', height: '1px', background: 'var(--glass-border)' }}></span>
            <span style={{ fontSize: '0.875rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>100% Secure Payments</span>
            <span style={{ width: '30px', height: '1px', background: 'var(--glass-border)' }}></span>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--glass-bg)', padding: '0.5rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)' }}>
              <span style={{ fontSize: '1rem', fontWeight: 600, color: '#fff' }}>VISA</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--glass-bg)', padding: '0.5rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)' }}>
              <span style={{ fontSize: '1rem', fontWeight: 600, color: '#fff' }}>MasterCard</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--glass-bg)', padding: '0.5rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)' }}>
              <span style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', fontStyle: 'italic' }}>PayPal</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
