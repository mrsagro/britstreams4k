import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tv, MonitorSmartphone, Apple } from "lucide-react";
import { siteConfig } from "../../config";

export const metadata = {
  title: "Setup Guides | BritStream 4K IPTV",
  description: "Step-by-step instructions on how to install and setup BritStream 4K on Firestick, Android, Smart TVs, and Apple devices.",
};

export default function SetupPage() {
  const whatsappNumber = siteConfig.contact.whatsappNumber;

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <section className="section" style={{ background: '#020202', paddingTop: '10rem', flexGrow: 1 }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 className="heading-lg" style={{ marginBottom: '1rem' }}>Installation <span style={{ color: 'var(--primary)' }}>Guides</span></h1>
            <p className="text-muted" style={{ fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
              Select your device below for step-by-step instructions on how to install our premium service. Setup takes less than 5 minutes.
            </p>
          </div>

          <div className="responsive-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Amazon Firestick */}
            <div className="glass" style={{ padding: '2.5rem 2rem', borderRadius: '1.5rem', borderTop: '3px solid #ff9900' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'rgba(255, 153, 0, 0.1)', padding: '1rem', borderRadius: '1rem', color: '#ff9900' }}>
                  <Tv size={32} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Amazon Firestick</h3>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#a1a1aa' }}>
                <p>1. Go to <strong>Settings {'>'} My Fire TV {'>'} Developer Options</strong> and turn ON "Apps from Unknown Sources".</p>
                <p>2. Search for the <strong>Downloader</strong> app on your Firestick home screen and install it.</p>
                <p>3. Open Downloader and enter our quick-install code: <strong style={{ color: '#fff', background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '4px' }}>123456</strong> (ask support for current code).</p>
                <p>4. Click Download, then Install the BritStream app.</p>
                <p>5. Open the app and enter the Username and Password provided to your email/WhatsApp after purchase.</p>
              </div>
            </div>

            {/* Android / Smart TV */}
            <div className="glass" style={{ padding: '2.5rem 2rem', borderRadius: '1.5rem', borderTop: '3px solid #3ddc84' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'rgba(61, 220, 132, 0.1)', padding: '1rem', borderRadius: '1rem', color: '#3ddc84' }}>
                  <MonitorSmartphone size={32} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Android & Smart TVs</h3>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#a1a1aa' }}>
                <p>1. Open the <strong>Google Play Store</strong> (or your TV's App Store).</p>
                <p>2. Search for <strong>"IPTV Smarters Pro"</strong> or <strong>"IBO Player"</strong> and install it.</p>
                <p>3. Open the app and select <strong>"Login with Xtream Codes API"</strong>.</p>
                <p>4. Enter any Name (e.g., BritStream).</p>
                <p>5. Enter the Username, Password, and Server URL provided to you after purchase.</p>
                <p>6. Click Add User, and wait for the channels to download.</p>
              </div>
            </div>

            {/* Apple Devices */}
            <div className="glass" style={{ padding: '2.5rem 2rem', borderRadius: '1.5rem', borderTop: '3px solid #fff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '1rem', borderRadius: '1rem', color: '#fff' }}>
                  <Apple size={32} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Apple TV / iOS</h3>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#a1a1aa' }}>
                <p>1. Open the <strong>Apple App Store</strong> on your iPhone, iPad, or Apple TV.</p>
                <p>2. Search for <strong>"Smarters Player Lite"</strong> or <strong>"GSE Smart IPTV"</strong> and download it.</p>
                <p>3. Open the app and Accept the Terms.</p>
                <p>4. Choose <strong>"Login with Xtream Codes API"</strong>.</p>
                <p>5. Enter the exact Username, Password, and Portal URL we provided you.</p>
                <p>6. Click Add User to start watching.</p>
              </div>
            </div>

          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem', padding: '3rem', background: 'linear-gradient(135deg, rgba(0,68,255,0.1) 0%, rgba(0,68,255,0.02) 100%)', borderRadius: '1.5rem', border: '1px solid rgba(0,68,255,0.2)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>Still Need Help?</h3>
            <p style={{ color: '#a1a1aa', marginBottom: '2rem' }}>Our UK-based support team is available 24/7 on WhatsApp to help you get connected instantly.</p>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I need help setting up my IPTV.")}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Contact Support on WhatsApp
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
