import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { blogPosts, type BlogPost } from '@/lib/data';
import { getArticleContent, renderContentBlock } from '@/lib/blog-content';
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Tag,
  User,
  Mail,
  BookOpen,
  Sparkles,
} from 'lucide-react';

type Params = { slug: string };

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function generateStaticParams(): Params[] {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images: [{ url: post.image, width: 800, height: 600, alt: post.title }],
    },
  };
}

function RelatedPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <Badge className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-xs">
            {post.category}
          </Badge>
        </div>
        <CardContent className="pt-4">
          <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="h-3 w-3 mr-1.5" />
            <span>{post.readTime}</span>
            <Calendar className="h-3 w-3 ml-3 mr-1.5" />
            <span>{formatDate(post.date)}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const content = getArticleContent(post.slug);
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  // If fewer than 3 related posts from same category, fill with other posts
  if (relatedPosts.length < 3) {
    const otherPosts = blogPosts
      .filter((p) => p.slug !== post.slug && !relatedPosts.includes(p))
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...otherPosts);
  }

  return (
    <>
      <Header />
      <main>
        {/* Article Header */}
        <article>
          <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-12 pb-16 lg:pt-16 lg:pb-20">
            <div className="absolute inset-0 hero-pattern" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                {/* Back to Blog Link */}
                <Link
                  href="/blog"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
                >
                  <ArrowLeft className="h-4 w-4 mr-1.5" />
                  Back to Blog
                </Link>

                {/* Category Badge */}
                <Badge variant="secondary" className="mb-4">
                  {post.category}
                </Badge>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
                  {post.title}
                </h1>

                {/* Excerpt */}
                <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1.5" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1.5" />
                    {post.readTime}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs font-normal">
                      <Tag className="h-2.5 w-2.5 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Hero Image */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                {content.length > 0 ? (
                  content.map((block, index) => renderContentBlock(block, index))
                ) : (
                  <p className="text-lg text-muted-foreground">
                    Content for this article is coming soon. Please check back later!
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Author Info Section */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <Card className="overflow-hidden">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                      <div className="flex-shrink-0 h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-10 w-10 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-primary">Written by</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Nihongo Bridge Team</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          The Nihongo Bridge editorial team is dedicated to providing
                          high-quality, practical content for Japanese learners, students, and
                          professionals. Our writers include language teachers, former
                          international students, and working professionals in Japan.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">
                            <Sparkles className="h-2.5 w-2.5 mr-1" />
                            Japanese Language Expert
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <BookOpen className="h-2.5 w-2.5 mr-1" />
                            Study in Japan Guide
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Related Posts Section */}
          {relatedPosts.length > 0 && (
            <section className="py-16 lg:py-20 bg-background">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Related Articles</h2>
                      <p className="text-sm text-muted-foreground">
                        Continue reading about {post.category.toLowerCase()}
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <RelatedPostCard key={relatedPost.slug} post={relatedPost} />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Newsletter Signup CTA */}
          <section className="py-20 lg:py-28 japan-gradient text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Enjoyed This Article?
                </h2>
                <p className="text-xl opacity-90 mb-8">
                  Subscribe to our newsletter and never miss new articles on Japanese language
                  learning, study abroad guides, and career advice. Join 10,000+ learners on
                  the path to Japan.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                  <Button size="lg" variant="secondary" className="whitespace-nowrap">
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="mt-8">
                  <Link href="/blog">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to All Articles
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
