"use client";

import { useState } from "react";
import { ChevronDown, MessageSquareText } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is this streaming package easy to install?",
      answer: "Yes! After purchase, you'll receive simple, step-by-step instructions. Most of our UK customers are set up and streaming within 5 minutes on their Firestick or Smart TV."
    },
    {
      question: "What does 'anti-freeze' mean?",
      answer: "Anti-Freeze 3.0 is our proprietary server technology that prioritizes traffic for live events. It drastically reduces buffering, even during peak UK viewing times like Saturday football matches."
    },
    {
      question: "Do you support multiple devices?",
      answer: "Absolutely. Depending on your plan, you can use our service on your TV, smartphone, tablet, and PC. Our 6 and 12-month plans include 2 connections simultaneously."
    },
    {
      question: "Can I watch 3pm Premier League kick-offs?",
      answer: "Yes, our comprehensive sports package includes all Premier League games, including the 3pm kick-offs, Champions League, SPFL, and international sports."
    },
    {
      question: "Do I need a VPN?",
      answer: "A VPN is not strictly required as our servers are highly secure. However, we recommend one if your ISP blocks IPTV. Our 12-month plan includes a free VPN configuration."
    }
  ];

  return (
    <section id="faq" className="section" style={{ background: '#050505', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '50%',
        background: 'radial-gradient(ellipse at center, rgba(0, 68, 255, 0.05) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ 
            display: 'inline-block', 
            padding: '0.5rem 1.5rem', 
            background: 'rgba(255,255,255,0.03)', 
            border: '1px solid rgba(255,255,255,0.1)', 
            borderRadius: '999px',
            marginBottom: '1.5rem',
            color: 'var(--primary)',
            fontSize: '0.9rem',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            Support Center
          </div>
          <h2 className="heading-lg" style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
            Frequently Asked <span style={{ color: '#fff', textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>Questions</span>
          </h2>
          <p className="text-muted" style={{ fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto' }}>
            Got questions about setup, channels, or compatibility? We have all the answers right here.
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="animate-fade-in" style={{ 
                background: isOpen ? 'rgba(20,20,20,0.8)' : 'rgba(10,10,10,0.4)',
                border: '1px solid',
                borderColor: isOpen ? 'rgba(0, 68, 255, 0.3)' : 'rgba(255,255,255,0.05)',
                borderRadius: '1.25rem',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                boxShadow: isOpen ? '0 10px 30px -10px rgba(0, 68, 255, 0.2)' : 'none',
              }}>
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  style={{ 
                    width: '100%', 
                    padding: '1.5rem 2rem', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    gap: '1rem',
                    background: 'transparent',
                    border: 'none',
                    color: isOpen ? '#fff' : '#e4e4e7',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isOpen) e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    if (!isOpen) e.currentTarget.style.color = '#e4e4e7';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <MessageSquareText size={20} style={{ color: isOpen ? 'var(--primary)' : 'rgba(255,255,255,0.2)', transition: 'color 0.3s ease' }} />
                    {faq.question}
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: isOpen ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                    color: isOpen ? '#fff' : 'rgba(255,255,255,0.5)',
                    transition: 'all 0.3s ease',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                
                <div style={{
                  maxHeight: isOpen ? '300px' : '0',
                  opacity: isOpen ? 1 : 0,
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  padding: isOpen ? '0 2rem 2rem 4rem' : '0 2rem 0 4rem',
                  color: '#a1a1aa',
                  lineHeight: 1.7,
                  fontSize: '1rem'
                }}>
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>

      </div>
      
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}
