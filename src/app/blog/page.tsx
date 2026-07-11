import Link from "next/link";
import { blogPosts } from "@/lib/blogData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <main>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
        <Header />
      </div>
      
      <section className="section" style={{ paddingTop: '150px', minHeight: '80vh', background: 'var(--background)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 className="heading-lg" style={{ marginBottom: '1rem' }}>BritStream <span style={{ color: 'var(--primary)' }}>Blog</span></h1>
            <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
              Latest news, guides, and updates from the world of Premium IPTV.
            </p>
          </div>

          <div className="responsive-grid">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} style={{ textDecoration: 'none' }}>
                <article className="glass hover-card" style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{
                    width: '100%',
                    height: '200px',
                    borderRadius: '0.5rem',
                    overflow: 'hidden',
                    marginBottom: '1.5rem',
                    background: '#111'
                  }}>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <time style={{ color: 'var(--primary)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                    {post.date}
                  </time>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--foreground)' }}>
                    {post.title}
                  </h2>
                  <p className="text-muted" style={{ flexGrow: 1, marginBottom: '1.5rem', lineHeight: 1.6 }}>
                    {post.excerpt}
                  </p>
                  <div style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem' }}>
                    Read Full Guide &rarr;
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
