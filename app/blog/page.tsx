'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { blogPosts, blogCategories, type BlogPost } from '@/lib/data';
import { Search, Calendar, Clock, ArrowRight, BookOpen, Sparkles, Tag } from 'lucide-react';

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <Badge className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm">
            {post.category}
          </Badge>
        </div>
        <CardContent className="pt-6">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs font-normal">
                <Tag className="h-2.5 w-2.5 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center text-xs text-muted-foreground pt-3 border-t">
            <Calendar className="h-3 w-3 mr-1.5" />
            <span>{formatDate(post.date)}</span>
            <Clock className="h-3 w-3 ml-3 mr-1.5" />
            <span>{post.readTime}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

function FeaturedPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="aspect-video lg:aspect-auto relative overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <Badge className="absolute top-4 left-4 bg-primary">
              <Sparkles className="h-3 w-3 mr-1" />
              Featured
            </Badge>
          </div>
          <CardContent className="p-8 lg:p-10 flex flex-col justify-center">
            <Badge variant="outline" className="w-fit mb-4">
              {post.category}
            </Badge>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-muted-foreground mb-6">{post.excerpt}</p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {post.tags.slice(0, 4).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs font-normal">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1.5" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1.5" />
                {post.readTime}
              </span>
            </div>
            <div className="mt-6 flex items-center text-primary font-medium group-hover:gap-2 transition-all">
              Read article
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
}

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const featuredPosts = useMemo(
    () => blogPosts.filter((post) => post.featured === true),
    []
  );

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const isFiltering = searchQuery !== '' || selectedCategory !== 'All';

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-16 lg:py-24">
          <div className="absolute inset-0 hero-pattern" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <Badge variant="secondary" className="mb-4">
                <BookOpen className="h-3 w-3 mr-1" />
                Nihongo Bridge Blog
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Insights for Your <span className="text-primary">Japan Journey</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert guides on Japanese language learning, JLPT preparation, studying in
                Japan, cultural insights, and career opportunities — all in one place.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search articles by title or topic..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-base"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="border-b bg-background sticky top-16 z-30 backdrop-blur-md bg-background/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {blogCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts Section */}
        {!isFiltering && featuredPosts.length > 0 && (
          <section className="py-16 lg:py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Featured Articles</h2>
                  <p className="text-sm text-muted-foreground">
                    Must-read guides handpicked by our team
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {featuredPosts.map((post) => (
                  <FeaturedPostCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts Grid */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    {isFiltering ? 'Search Results' : 'All Articles'}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                    {isFiltering && ' found'}
                  </p>
                </div>
              </div>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filter to find what you&apos;re looking for.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 japan-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur">
                  <span className="text-3xl kanji-text">
                    <ruby className="kanji-text">
                      橋<rt>はし</rt>
                    </ruby>
                  </span>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Never Miss an Article
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Subscribe to our newsletter and get the latest Japanese learning tips, study
                guides, and career advice delivered straight to your inbox.
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
