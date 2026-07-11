import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Legal Disclaimer | BritStream 4K",
  description: "Legal disclaimer and DMCA policy for BritStream 4K.",
};

export default function Disclaimer() {
  return (
    <main>
      <Header />
      <section className="section" style={{ background: 'var(--background)', paddingTop: '150px', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="heading-lg" style={{ marginBottom: '2rem' }}>Legal <span style={{ color: 'var(--primary)' }}>Disclaimer</span></h1>
          
          <div style={{ color: 'var(--muted)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p><strong>Copyright & DMCA</strong><br/>BritStream 4K does not host, provide, archive, store, or distribute media of any kind, and acts merely as an index (or directory) of media posted by other enthusiasts on the internet, which is completely outside of our control.</p>
            
            <p>BritStream 4K respects the rights of others and prohibits the use of referenced material for any purpose other than that for which it is intended (where such use is lawful and free of civil liability or other constraints) and in such circumstances where possession of such material may have any adverse financial, prejudicial or any other effect on any other third party.</p>
            
            <p>Digital Millennium Copyright Act (DMCA) policies are strictly adhered to. We do not stream any of the live IP channels, all channels are third-party links available on the internet. We have no affiliation with any of the IP channels shown or any of these products. TV channels and video content of the services are provided without any liability from us regarding copyrights.</p>
            
            <p>If you believe any content provided through our service infringes your copyright, please contact us immediately, and we will take appropriate action to remove the links from our index.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
