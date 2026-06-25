import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Header, Footer } from '@/components/layout';
import { OrganizationSchema, WebSiteSchema } from '@/components/Schema';
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
  Volume2,
  Building2,
  Home,
  Wallet,
  Languages,
  Code2,
  Stethoscope,
  Cherry,
  Calendar,
  UtensilsCrossed,
} from 'lucide-react';
import {
  dailyVocabulary,
  jlptLevels,
  studyInJapanTopics,
  careerCategories,
  cultureTopics,
  stats,
  testimonials,
  blogPosts,
} from '@/lib/data';

export const metadata: Metadata = {
  title: 'Nihongo Bridge - Learn Japanese, Study in Japan, Build Your Career',
  description:
    'Your gateway to Japanese language and opportunities. Master Japanese, prepare for JLPT, explore Japanese culture, and build your future in Japan.',
  alternates: { canonical: '/' },
};

const features = [
  {
    icon: BookOpen,
    title: 'Learn Japanese',
    description: 'Master Japanese vocabulary, grammar, and kanji with structured lessons designed for all learners.',
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

export default function HomePage() {
  const featuredPosts = blogPosts.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
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
                  Your Gateway to{' '}
                  <span className="text-primary">
                    Japanese Language
                  </span>{' '}
                  and Opportunities
                </h1>

                <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                  Master Japanese, prepare for JLPT, explore Japanese culture, and build your future
                  in Japan.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="text-base">
                    <Link href="/learn">
                      Start Learning
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/jlpt">Explore JLPT</Link>
                  </Button>
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-8">
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

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 dark:bg-black/80 backdrop-blur rounded-xl p-4 shadow-xl">
                      <div className="flex items-center space-x-3">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-2xl kanji-text text-primary">日</span>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Nihongo Bridge</p>
                          <p className="text-sm text-muted-foreground">
                            Learn Japanese • Study in Japan
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

        {/* Daily Vocabulary Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Daily Vocabulary
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Learn a New Word Every Day
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Essential Japanese words with furigana, meanings, and example sentences.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {dailyVocabulary.map((word, i) => (
                <Card key={i} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6 text-center">
                    <div className="mb-3">
                      <ruby className="kanji-text text-3xl font-bold text-primary">
                        {word.japanese}
                        <rt className="text-sm text-muted-foreground font-normal">{word.furigana}</rt>
                      </ruby>
                    </div>
                    <p className="font-semibold mb-2">{word.english}</p>
                    <p className="text-xs text-muted-foreground italic mb-3">{word.example}</p>
                    <p className="text-xs text-muted-foreground">{word.exampleEn}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/learn/vocabulary">
                  View All Vocabulary
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* JLPT Preparation Section */}
        <section className="py-20 lg:py-28 bg-background">
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
                  {jlptLevels.slice(0, 3).map((item) => (
                    <Link
                      key={item.level}
                      href={item.href}
                      className="flex items-center p-4 rounded-lg bg-muted/30 border hover:border-primary hover:shadow-md transition-all group"
                    >
                      <div className={`h-14 w-14 rounded-lg bg-gradient-to-br ${item.color} text-white flex items-center justify-center font-bold text-lg mr-4`}>
                        {item.level}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <div className="text-sm text-primary font-medium hidden sm:block mr-4">
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

        {/* Study in Japan Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Study in Japan
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Your Guide to Studying in Japan
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about visas, schools, scholarships, and living in Japan.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {studyInJapanTopics.map((topic, i) => (
                <Link key={i} href={topic.href}>
                  <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        <topic.icon className="h-6 w-6 text-primary group-hover:text-white" />
                      </div>
                      <CardTitle className="text-lg">{topic.title}</CardTitle>
                      <CardDescription className="mt-2">{topic.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="text-sm text-primary font-medium">{topic.count}</span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/study-in-japan">
                  Explore Study Options
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Careers in Japan Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Careers in Japan
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Build Your Career in Japan
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore job opportunities, interview preparation, and career guidance for working in Japan.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerCategories.map((career, i) => (
                <Link key={i} href={career.href}>
                  <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        <career.icon className="h-6 w-6 text-primary group-hover:text-white" />
                      </div>
                      <CardTitle className="text-lg">{career.title}</CardTitle>
                      <CardDescription className="mt-2">{career.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-medium text-primary">{career.salary}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/careers">
                  Explore Career Options
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Japanese Culture Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Japanese Culture
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Explore Japanese Culture
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the traditions, customs, and daily life that make Japan unique.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cultureTopics.map((topic, i) => (
                <Link key={i} href={topic.href}>
                  <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        <topic.icon className="h-6 w-6 text-primary group-hover:text-white" />
                      </div>
                      <CardTitle className="text-lg">{topic.title}</CardTitle>
                      <CardDescription className="mt-2">{topic.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/culture">
                  Discover Japanese Culture
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Blog Posts */}
        <section className="py-20 lg:py-28 bg-background">
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
              {featuredPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
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
        <section className="py-20 lg:py-28 bg-muted/30">
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
                  aria-label="Email address"
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
