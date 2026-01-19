import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageWrapper from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Blog | Dietitian Poonam Sagar',
  description:
    'Expert health tips, nutrition advice, recipes, and wellness insights from Dietitian Poonam Sagar.',
};

const blogPosts = [
  {
    id: 1,
    title: 'The Power Of Self-Care In Your Wellness Journey',
    image: 'https://placehold.co/400x300/0d4043/ffffff?text=Self+Care',
    slug: 'power-of-self-care',
  },
  {
    id: 2,
    title: 'Understanding The Impact Of Sleep On Health',
    image: 'https://placehold.co/400x300/0d4043/ffffff?text=Sleep+Health',
    slug: 'impact-of-sleep',
  },
  {
    id: 3,
    title: 'Overcoming Common Fitness To Challenge',
    image: 'https://placehold.co/400x300/0d4043/ffffff?text=Fitness+Challenge',
    slug: 'overcoming-fitness-challenges',
  },
  {
    id: 4,
    title: 'The Power Of Self-Care In Your Wellness Journey',
    image: 'https://placehold.co/400x300/0d4043/ffffff?text=Self+Care+2',
    slug: 'power-of-self-care-2',
  },
  {
    id: 5,
    title: 'Understanding The Impact Of Sleep On Health',
    image: 'https://placehold.co/400x300/0d4043/ffffff?text=Sleep+Health+2',
    slug: 'impact-of-sleep-2',
  },
  {
    id: 6,
    title: 'Overcoming Common Fitness To Challenges',
    image: 'https://placehold.co/400x300/0d4043/ffffff?text=Fitness+Challenge+2',
    slug: 'overcoming-fitness-challenges-2',
  },
];

export default function BlogPage() {
  return (
    <>
      <PageWrapper>
        {/* Hero Section */}
        <section className="page-header">
          <div className="container">
            <h1 className="section-title light">Blog</h1>
            <div className="breadcrumb light">
              <span>Home</span> / <span>Blog</span>
            </div>
          </div>
        </section>
      </PageWrapper>

      {/* Blog Grid Section */}
      <section className="about-section">
        <div className="container">
          <div className="blog-grid simple-blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card simple-blog-card">
                <Link href={`/blog/${post.slug}`} className="blog-card-link">
                  <div className="blog-card-image simple-image">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={300}
                      style={{ objectFit: 'cover', borderRadius: '16px', width: '100%', height: 'auto' }}
                    />
                  </div>
                  <div className="blog-card-content simple-content">
                    <h3 className="blog-card-title">{post.title}</h3>
                    <span className="blog-card-read-more">
                      Read More →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
