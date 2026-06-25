import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Header, Footer } from '@/components/layout';
import {
  BookOpen,
  GraduationCap,
  Briefcase,
  Globe,
  ArrowRight,
  Sparkles,
  Users,
  Award,
  Heart,
  ChevronRight,
  FileText,
  Layers,
  PenTool,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Japan Bridge Tamil - Learn Japanese, Study in Japan, Work with Japan',
  description: 'Your bridge to Japan. Learn Japanese language, prepare for JLPT, discover study abroad opportunities, and explore career paths in Japan.',
};

const features = [
  {
    icon: BookOpen,
    title: 'Learn Japanese',
    description: 'Master Japanese vocabulary, grammar, and kanji with structured lessons designed for Indian learners.',
    href: '/learn',
    color: 'text-red-500',
  },
  {
    icon: GraduationCap,
    title: 'JLPT Preparation',
    description: 'ACE your JLPT exams with comprehensive N5-N2 study materials, quizzes, and practice tests.',
    href: '/jlpt',
    color: 'text-amber-500',
  },
  {
    icon: Globe,
    title: 'Study in Japan',
    description: 'Discover scholarships, language schools, visa guidance, and everything you need to study in Japan.',
    href: '/study-in-japan',
    color: 'text-green-500',
  },
  {
    icon: Briefcase,
    title: 'Career Opportunities',
    description: 'Find Japanese interpreter jobs, IT positions, engineering roles, and learn interview preparation.',
    href: '/careers',
    color: 'text-blue-500',
  },
];

const jlptLevels = [
  { level: 'N5', title: 'Beginner', desc: 'Basic grammar & vocabulary', count: '150+ lessons' },
  { level: 'N4', title: 'Elementary', desc: 'Daily conversation skills', count: '200+ lessons' },
  { level: 'N3', title: 'Intermediate', desc: 'Natural communication', count: '250+ lessons' },
  { level: 'N2', title: 'Pre-Advanced', desc: 'Business Japanese', count: '300+ lessons' },
];

const featuredPosts = [
  {
    title: 'How to Get MEXT Scholarship: Complete Guide',
    excerpt: 'A detailed guide on applying for the MEXT scholarship program from India.',
    category: 'Study in Japan',
    readTime: '12 min',
    image: 'https://images.pexels.com/photos/2175829/pexels-photo-2175829.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'JLPT N5 Grammar: Complete Study Guide',
    excerpt: 'Master all grammar points required for the JLPT N5 examination.',
    category: 'JLPT N5',
    readTime: '15 min',
    image: 'https://images.pexels.com/photos/3825585/pexels-photo-3825585.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Japanese Work Culture: What Indians Should Know',
    excerpt: 'Important cultural differences and tips for working in Japanese companies.',
    category: 'Career',
    readTime: '10 min',
    image: 'https://images.pexels.com/photos/2182980/pexels-photo-2182980.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const stats = [
  { value: '10,000+', label: 'Students Helped' },
  { value: '500+', label: 'Japanese Lessons' },
  { value: '50+', label: 'Countries Reached' },
  { value: '98%', label: 'Success Rate' },
];

const testimonials = [
  {
    name: 'Student from Chennai',
    location: 'Chennai',
    text: 'This platform helped me clear JLPT N4 and now I work as a Japanese interpreter in Tokyo!',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Engineering Graduate',
    location: 'Madurai',
    text: 'The study materials and scholarship guide helped me get into a top Japanese university.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Language Enthusiast',
    location: 'Coimbatore',
    text: 'Learning Japanese through Tamil explanations made everything so much easier to understand.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
          <div className="absolute inset-0 hero-pattern" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <Badge variant="secondary" className="mb-6">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Your Gateway to Japan
                </Badge>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  Learn Japanese,{' '}
                  <span className="text-primary">
                    Study in Japan,{' '}
                  </span>
                  Work with Japan
                </h1>

                <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                  Your bridge to mastering Japanese language, qualifying JLPT, and building a
                  successful career connecting India and Japan.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="text-base">
                    <Link href="/learn">
                      Start Learning Free
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/about">About Us</Link>
                  </Button>
                </div>

                <div className="mt-12 flex items-center space-x-8">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-2xl font-bold text-primary">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative lg:pl-8">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/2613210/pexels-photo-2613210.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Tokyo cityscape with Mount Fuji"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Floating Card */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 dark:bg-black/80 backdrop-blur rounded-xl p-4 shadow-xl">
                      <div className="flex items-center space-x-3">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-2xl">🌉</span>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">日本 Bridge Tamil</p>
                          <p className="text-sm text-muted-foreground">
                            India-Japan Cultural Bridge
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                What We Offer
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Everything You Need to{' '}
                <span className="text-primary">Connect with Japan</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive resources for Japanese language learning, exam preparation, and career guidance.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <Link key={feature.title} href={feature.href}>
                  <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        <feature.icon className={`h-6 w-6 ${feature.color} group-hover:text-white`} />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <CardDescription className="mt-2">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="text-sm text-primary font-medium inline-flex items-center group-hover:underline">
                        Explore
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* JLPT Levels Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4">
                  JLPT Preparation
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Ace Your JLPT Exam
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Structured study materials, practice tests, and expert guidance for all JLPT levels.
                  Start from basics and progress to advanced Japanese proficiency.
                </p>

                <div className="space-y-4">
                  {jlptLevels.map((item) => (
                    <Link
                      key={item.level}
                      href={`/jlpt/${item.level.toLowerCase()}`}
                      className="flex items-center p-4 rounded-lg bg-background border hover:border-primary hover:shadow-md transition-all group"
                    >
                      <div className="h-14 w-14 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-lg mr-4">
                        {item.level}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <div className="text-sm text-primary font-medium hidden sm:block">
                        {item.count}
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3825585/pexels-photo-3825585.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Japanese study materials"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-black rounded-xl p-4 shadow-lg border hidden sm:block">
                  <div className="flex items-center space-x-3">
                    <Award className="h-10 w-10 text-primary" />
                    <div>
                      <p className="font-bold text-2xl">98%</p>
                      <p className="text-sm text-muted-foreground">Pass Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Portal Preview */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Learning Portal
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Learn Japanese Your Way
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Interactive lessons with vocabulary, grammar, kanji, and more - all explained in Tamil and English.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden group">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/6995098/pexels-photo-6995098.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Japanese vocabulary"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-primary">500+ Words</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <CardTitle>Vocabulary</CardTitle>
                  </div>
                  <CardDescription>
                    Daily Japanese words with furigana, meanings in Tamil & English, and example sentences.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/learn/vocabulary">
                      Start Learning
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden group">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/7084942/pexels-photo-7084942.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Japanese kanji"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-primary">200+ Kanji</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <PenTool className="h-5 w-5 text-primary" />
                    <CardTitle>Kanji</CardTitle>
                  </div>
                  <CardDescription>
                    Master kanji with stroke order animations, readings, meanings, and practical examples.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/learn/kanji">
                      Start Learning
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden group">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Japanese grammar"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-primary">100+ Lessons</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Layers className="h-5 w-5 text-primary" />
                    <CardTitle>Grammar</CardTitle>
                  </div>
                  <CardDescription>
                    Clear grammar explanations with examples and practice exercises for all levels.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/learn/grammar">
                      Start Learning
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Blog Posts */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <Badge variant="outline" className="mb-4">
                  From the Blog
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Latest Articles
                </h2>
              </div>
              <Button variant="outline" asChild className="hidden sm:flex">
                <Link href="/blog">
                  View All Posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <Link key={index} href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Card className="h-full overflow-hidden group hover:shadow-lg transition-all">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="pt-6">
                      <Badge variant="secondary" className="mb-3">
                        {post.category}
                      </Badge>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <FileText className="h-4 w-4 mr-1" />
                        {post.readTime} read
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Button variant="outline" asChild>
                <Link href="/blog">
                  View All Posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Success Stories
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                What Our Students Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of students who achieved their Japanese language and career goals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="pt-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div className="flex mt-4 text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Heart key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Badge variant="outline" className="mb-4">
                  About Us
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Japan Bridge Tamil Team
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  A team of Japanese language enthusiasts and engineers bridging the gap between
                  India and Japan through education and cultural exchange.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <GraduationCap className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Engineering Background</p>
                      <p className="text-sm text-muted-foreground">
                        Technical expertise combined with Japanese language skills
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Globe className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Experience in Tokyo, Japan</p>
                      <p className="text-sm text-muted-foreground">
                        Immersive Japanese language and cultural education
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Multilingual Communication</p>
                      <p className="text-sm text-muted-foreground">
                        English, Tamil, Malayalam, and Japanese fluency
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="mt-8" asChild>
                  <Link href="/about">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="order-1 lg:order-2 relative">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Japan Bridge Tamil Team"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-black rounded-xl p-4 shadow-lg border hidden sm:block">
                  <p className="text-3xl font-bold text-primary">4+</p>
                  <p className="text-sm text-muted-foreground">Languages</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="py-20 lg:py-28 japan-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Start Your Japanese Journey Today
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Join 10,000+ learners getting weekly Japanese lessons, JLPT tips, and career opportunities directly to their inbox.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 placeholder:text-white/60 text-white"
                />
                <Button size="lg" variant="secondary" className="sm:w-auto w-full">
                  Subscribe Free
                </Button>
              </form>

              <p className="text-sm opacity-70 mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
