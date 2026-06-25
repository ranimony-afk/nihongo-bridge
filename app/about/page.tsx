import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Briefcase,
  GraduationCap,
  Heart,
  Target,
  Eye,
  BookOpen,
  Languages,
  Building2,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
  Sparkles,
  Compass,
  Rocket,
  Trophy,
  MapPin,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Nihongo Bridge — our mission to provide structured Japanese language education combined with real-world guidance on studying, living, and working in Japan.',
  alternates: { canonical: '/about' },
};

const whyLearnJapanese = [
  {
    icon: Briefcase,
    title: 'Career Opportunities',
    description:
      'Japanese language skills open doors to careers in translation, interpretation, IT, engineering, and global business with Japanese companies worldwide.',
  },
  {
    icon: Heart,
    title: 'Cultural Understanding',
    description:
      'Language is the gateway to culture. Learn Japanese to truly appreciate anime, literature, traditions, and the nuances of Japanese daily life.',
  },
  {
    icon: GraduationCap,
    title: 'Study Abroad',
    description:
      'Access scholarships, language schools, and universities in Japan. Open the door to world-class education and life-changing experiences.',
  },
  {
    icon: TrendingUp,
    title: 'Business Potential',
    description:
      'Japan is the world\u2019s third-largest economy. Speaking Japanese gives you a competitive edge in international trade and partnerships.',
  },
];

const howWeHelp = [
  {
    icon: BookOpen,
    title: 'Structured Lessons',
    description:
      'Step-by-step lessons covering vocabulary, grammar, kanji, and pronunciation — designed for learners at every level.',
  },
  {
    icon: Award,
    title: 'JLPT Preparation',
    description:
      'Comprehensive study materials, practice tests, and strategies for JLPT N5 through N2 certification exams.',
  },
  {
    icon: Compass,
    title: 'Study in Japan Guides',
    description:
      'Detailed guidance on scholarships, visas, language schools, and universities to help you study in Japan.',
  },
  {
    icon: Briefcase,
    title: 'Career Resources',
    description:
      'Job boards, interview preparation, and career advice for working with Japanese companies at home and abroad.',
  },
  {
    icon: Languages,
    title: 'Cultural Insights',
    description:
      'Articles and guides on Japanese customs, etiquette, and daily life to help you navigate Japan with confidence.',
  },
  {
    icon: Building2,
    title: 'Community Support',
    description:
      'Join thousands of learners, ask questions, and share your journey with a supportive community of Japan enthusiasts.',
  },
];

const methodology = [
  {
    step: '01',
    title: 'Build a Strong Foundation',
    description:
      'Start with hiragana, katakana, basic vocabulary, and essential grammar. We make the fundamentals approachable and memorable.',
  },
  {
    step: '02',
    title: 'Practice with Real Content',
    description:
      'Engage with authentic Japanese — conversations, articles, and media — to develop practical reading and listening skills.',
  },
  {
    step: '03',
    title: 'Track and Achieve Goals',
    description:
      'Use our structured JLPT-aligned curriculum to measure progress and stay motivated as you advance through each level.',
  },
  {
    step: '04',
    title: 'Apply in the Real World',
    description:
      'Connect language skills to real opportunities — study abroad, career advancement, and meaningful cultural exchange.',
  },
];

const timeline = [
  {
    year: '2020',
    title: 'Founded',
    description:
      'Nihongo Bridge was founded with a simple goal: to make Japanese language education accessible to learners everywhere.',
    icon: Rocket,
  },
  {
    year: '2021',
    title: '1,000 Students',
    description:
      'Reached our first major milestone of 1,000 active learners, expanding our lesson library and community features.',
    icon: Users,
  },
  {
    year: '2022',
    title: 'JLPT Prep Launch',
    description:
      'Launched comprehensive JLPT preparation courses for N5 and N4, helping students pass their certification exams.',
    icon: Award,
  },
  {
    year: '2023',
    title: 'Study Abroad Guides',
    description:
      'Introduced detailed study-in-Japan guides covering scholarships, visas, language schools, and university applications.',
    icon: Compass,
  },
  {
    year: '2024',
    title: '10,000+ Students',
    description:
      'Crossed 10,000 learners worldwide and expanded to include career resources and cultural content for the global community.',
    icon: Trophy,
  },
];

const stats = [
  { value: '10,000+', label: 'Active Learners', icon: Users },
  { value: '500+', label: 'Lessons Published', icon: BookOpen },
  { value: '50+', label: 'Study Guides', icon: Compass },
  { value: '4 Years', label: 'Of Excellence', icon: Award },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
          <div className="absolute inset-0 hero-pattern" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <Badge variant="secondary" className="mb-4">
                  <Sparkles className="h-3 w-3 mr-1" />
                  About Us
                </Badge>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                  About <span className="text-primary">Nihongo Bridge</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-4">
                  Learn Japanese • Study in Japan • Build Your Career
                </p>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  We are dedicated to bridging the gap between you and Japan through
                  structured language education, practical study guidance, and career
                  mentorship — all in one place.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  <Badge variant="outline" className="text-sm">
                    <MapPin className="h-3 w-3 mr-1" />
                    Global Community
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    <Languages className="h-3 w-3 mr-1" />
                    Japanese & English
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    <Award className="h-3 w-3 mr-1" />
                    JLPT Aligned
                  </Badge>
                </div>

                <Button asChild size="lg">
                  <Link href="/learn">
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/2480717/pexels-photo-2480717.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Traditional Japanese temple with Mount Fuji in the background"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-black rounded-xl p-4 shadow-lg border hidden sm:block">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl kanji-text text-primary">
                        <ruby className="kanji-text">
                          日本語<rt>にほんご</rt>
                        </ruby>
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-lg">Nihongo Bridge</p>
                      <p className="text-sm text-muted-foreground">Your Gateway to Japan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-7 w-7 text-primary" />
                </div>
              </div>
              <Badge variant="outline" className="mb-4">
                Our Mission
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Bridging Learners and Japan
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nihongo Bridge was created to provide structured and practical Japanese
                language education combined with real-world guidance on studying, living,
                and working in Japan. We believe that language learning should be accessible,
                engaging, and directly connected to real opportunities — whether that means
                passing the JLPT, securing a scholarship, or landing a job with a Japanese
                company.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
              </div>
              <Badge variant="outline" className="mb-4">
                Our Vision
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                A World Connected Through Language
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a global community where anyone, regardless of background or
                location, can learn Japanese and unlock the cultural, educational, and
                professional opportunities that Japan has to offer. By combining
                high-quality language instruction with practical life and career guidance,
                we aim to be the most trusted bridge between learners and Japan.
              </p>
            </div>
          </div>
        </section>

        {/* Why Learn Japanese Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Why It Matters
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why Learn <span className="text-primary">Japanese</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Learning Japanese opens doors to a world of opportunities — from career
                growth to cultural discovery.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyLearnJapanese.map((item, index) => (
                <Card
                  key={index}
                  className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <item.icon className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription className="mt-2">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How This Platform Helps Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                What We Offer
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                How This Platform Helps
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to learn Japanese and navigate life in Japan — all in
                one place.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {howWeHelp.map((item, index) => (
                <Card
                  key={index}
                  className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <item.icon className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Methodology Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Our Approach
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Learning Methodology
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven, step-by-step approach that takes you from beginner to confident
                Japanese speaker.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {methodology.map((item, index) => (
                  <div
                    key={index}
                    className="relative group"
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                            <span className="text-xl font-bold text-primary group-hover:text-white transition-colors">
                              {item.step}
                            </span>
                          </div>
                          <div>
                            <CardTitle className="text-lg">{item.title}</CardTitle>
                            <CardDescription className="mt-2 text-base">
                              {item.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Our Journey
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Key Milestones
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From a simple idea to a global learning community — here&apos;s how
                we&apos;ve grown.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 sm:pl-12 pb-8 last:pb-0 border-l-2 border-primary/30 last:border-l-0"
                >
                  <div className="absolute left-0 top-0 transform -translate-x-1/2 h-6 w-6 rounded-full bg-primary flex items-center justify-center ring-4 ring-background">
                    <item.icon className="h-3 w-3 text-white" />
                  </div>

                  <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <Badge variant="secondary" className="text-sm font-bold">
                        {item.year}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                By the Numbers
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our Impact So Far
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real numbers that reflect the trust learners place in Nihongo Bridge.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="pt-8 pb-8">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <stat.icon className="h-7 w-7 text-primary group-hover:text-white" />
                    </div>
                    <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
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
                Ready to Cross the Bridge?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Join 10,000+ learners who are mastering Japanese, preparing for the JLPT,
                and building their futures in Japan. Your journey starts here.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/learn">
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/contact">Get in Touch</Link>
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
