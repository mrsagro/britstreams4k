import { blogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    }
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
        <Header />
      </div>
      
      <article className="section" style={{ paddingTop: '150px', minHeight: '80vh', background: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <time style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1rem', display: 'block', marginBottom: '1rem' }}>
              {post.date}
            </time>
            <h1 className="heading-lg" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '2rem' }}>
              {post.title}
            </h1>
            <div style={{
              width: '100%',
              aspectRatio: '16/9',
              borderRadius: '1rem',
              overflow: 'hidden',
              background: '#111',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}>
              <img 
                src={post.image} 
                alt={post.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </header>

          <div className="blog-content" style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--foreground)' }}>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
