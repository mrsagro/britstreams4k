"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { siteConfig } from "../config";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const whatsappNumber = siteConfig.contact.whatsappNumber;

  const faqs = [
    {
      q: "What is IPTV?",
      a: "IPTV stands for Internet Protocol Television. You can watch live channels and on-demand content through the internet instead of a satellite dish or cable box. All you need is a stable connection and a compatible device."
    },
    {
      q: "Is IPTV legal in the UK?",
      a: "Yes. IPTV itself is a legal technology. We only stream from properly licensed sources, so you can watch without worrying about grey areas or risk to your account."
    },
    {
      q: "Do you offer a free trial?",
      a: "Yes. You can test the channels, picture quality, and stability on your own connection before choosing a paid plan."
    },
    {
      q: "Which devices does Britstreams4K work on?",
      a: "Firestick, Android TV, Samsung and LG Smart TVs, iOS, Windows, Mac, and most MAG and Enigma boxes."
    },
    {
      q: "What internet speed do I need for IPTV?",
      a: "For smooth HD streaming, you need at least 10 Mbps. For 4K and UHD channels, aim for 25 Mbps or higher, especially if more than one person is streaming at once."
    },
    {
      q: "Can I watch on more than one device at the same time?",
      a: "Yes, with a multi-device plan. Choose the connection count that matches your household, from one screen to several rooms streaming at once."
    },
    {
      q: "How long does activation take?",
      a: "Most orders are activated within minutes of payment. You will get your login details by email or WhatsApp as soon as your account is ready."
    },
    {
      q: "Will I actually get 4K and HD quality?",
      a: "Yes. We deliver SD, HD, 4K, and UHD depending on the channel and your device. A stable connection is all you need to see the full picture quality."
    },
    {
      q: "What happens if I get buffering?",
      a: "It should not happen, but if it does, check your internet speed first. If the problem continues, our support team can usually fix it within minutes."
    },
    {
      q: "Do we cover sports?",
      a: "Yes. Premier League, Champions League, NFL, NBA, MLB, boxing, UFC, cricket, and F1 are all included in your plan, with no separate sports add-on needed."
    },
    {
      q: "Do you offer a money-back guarantee?",
      a: "Yes. If something is not right with your service, contact us within the guarantee period, and we will fix it or refund you."
    },
    {
      q: "What happens when my subscription ends?",
      a: "You can renew in a couple of clicks before or after it expires. There is no long contract, so you only pay for the time you actually want."
    },
    {
      q: "How do I contact support?",
      a: "Our support team is available 24/7 through WhatsApp, live chat, or email, whichever is easiest for you."
    }
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section" style={{ background: '#050505', position: 'relative' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1rem', textTransform: 'uppercase' }}>
            Frequently Asked <span style={{ color: 'var(--primary)' }}>Questions</span>
          </h2>
          <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
            Got questions? We've got answers. If you can't find what you're looking for, our support team is ready to help.
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                style={{ 
                  background: 'rgba(255,255,255,0.03)', 
                  border: '1px solid rgba(255,255,255,0.05)', 
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <button 
                  onClick={() => toggle(index)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.5rem',
                    background: isOpen ? 'rgba(0, 68, 255, 0.1)' : 'transparent',
                    border: 'none',
                    color: '#fff',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  {faq.q}
                  {isOpen ? <ChevronUp size={24} color="var(--primary)" /> : <ChevronDown size={24} color="var(--muted)" />}
                </button>
                
                <div style={{
                  maxHeight: isOpen ? '500px' : '0',
                  opacity: isOpen ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  padding: isOpen ? '0 1.5rem 1.5rem 1.5rem' : '0 1.5rem',
                  background: isOpen ? 'rgba(0, 68, 255, 0.05)' : 'transparent'
                }}>
                  <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', color: '#a1a1aa', lineHeight: 1.6 }}>
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
