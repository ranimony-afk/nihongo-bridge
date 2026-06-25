import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - Japanese Learning, Culture & Career Tips',
  description: 'Explore articles on Japanese language learning, JLPT preparation, study in Japan, career opportunities.',
};

const categories = ['All', 'JLPT N5', 'JLPT N4', 'Grammar', 'Culture', 'Study in Japan', 'Careers'];

const featuredPost = {
  title: 'Complete Guide to MEXT Scholarship 2024',
  excerpt: 'Everything you need to know about applying for the MEXT scholarship program from India.',
  category: 'Study in Japan',
  readTime: '15 min',
  date: 'January 15, 2024',
  image: 'https://images.pexels.com/photos/2175829/pexels-photo-2175829.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

const blogPosts = [
  {
    title: 'JLPT N5 Grammar: Complete Study Guide',
    excerpt: 'Master all grammar points required for JLPT N5.',
    category: 'JLPT N5',
    readTime: '12 min',
    date: 'January 10, 2024',
    image: 'https://images.pexels.com/photos/3825585/pexels-photo-3825585.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Japanese Work Culture Tips',
    excerpt: 'Important cultural differences for working in Japanese companies.',
    category: 'Careers',
    readTime: '10 min',
    date: 'January 8, 2024',
    image: 'https://images.pexels.com/photos/2182980/pexels-photo-2182980.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Daily Japanese Vocabulary: 50 Essential Words',
    excerpt: 'Learn the most commonly used Japanese words.',
    category: 'JLPT N5',
    readTime: '8 min',
    date: 'January 5, 2024',
    image: 'https://images.pexels.com/photos/6995098/pexels-photo-6995098.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Understanding Japanese Honorifics',
    excerpt: 'Navigate the complex world of Japanese keigo.',
    category: 'Grammar',
    readTime: '14 min',
    date: 'January 3, 2024',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Top 10 Language Schools in Tokyo',
    excerpt: 'A review of the best schools for international students.',
    category: 'Study in Japan',
    readTime: '13 min',
    date: 'December 25, 2023',
    image: 'https://images.pexels.com/photos/2183272/pexels-photo-2183272.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Japanese Tea Ceremony',
    excerpt: 'Experience the beauty of traditional Japanese tea.',
    category: 'Culture',
    readTime: '7 min',
    date: 'December 18, 2023',
    image: 'https://images.pexels.com/photos/236294/pexels-photo-236294.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-b from-background to-muted/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <BookOpen className="h-3 w-3 mr-1" />
                Blog
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Japanese Learning & Culture
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert insights and guides for your Japan journey.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input placeholder="Search articles..." className="pl-10" />
                </div>
                <Select defaultValue="All">
                  <SelectTrigger className="w-full sm:w-[200px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={`/blog/${featuredPost.title.toLowerCase().replace(/\s+/g, '-')}`} className="block group mb-12">
              <Card className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto relative overflow-hidden">
                    <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge variant="outline" className="w-fit mb-4">{featuredPost.category}</Badge>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary">{featuredPost.title}</h2>
                    <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" />{featuredPost.date}</span>
                      <span className="flex items-center"><Clock className="h-4 w-4 mr-1" />{featuredPost.readTime}</span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Link key={index} href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`} className="group">
                  <Card className="h-full overflow-hidden hover:shadow-lg transition">
                    <div className="aspect-video relative overflow-hidden">
                      <img src={post.image} alt={post.title} className="object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <CardContent className="pt-6">
                      <Badge variant="secondary" className="mb-3">{post.category}</Badge>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary">{post.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{post.date}</span>
                        <Clock className="h-3 w-3 ml-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">Load More Articles</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
