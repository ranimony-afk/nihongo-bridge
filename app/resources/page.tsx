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
  FileText,
  Download,
  BookOpen,
  PenTool,
  GraduationCap,
  Briefcase,
  Search,
  Layers,
  Users,
  Sparkles,
  ArrowRight,
  ChevronRight,
  ClipboardList,
  FileCheck,
  Award,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resources - Free Japanese Learning Downloads',
  description:
    'Download free Japanese learning resources including vocabulary PDFs, JLPT study sheets, grammar notes, and interview preparation materials. Everything you need to master Japanese.',
  alternates: { canonical: '/resources' },
};

/* ------------------------------------------------------------------ */
/* Resource Data                                                       */
/* ------------------------------------------------------------------ */

type Resource = {
  title: string;
  description: string;
  level: string;
  downloads: number;
  size: string;
};

const vocabularyResources: Resource[] = [
  {
    title: 'JLPT N5 Vocabulary Complete List',
    description:
      '800 essential N5 vocabulary words with furigana, English meanings, and example sentences. Perfect for beginners.',
    level: 'N5',
    downloads: 12450,
    size: '2.3 MB',
  },
  {
    title: 'JLPT N4 Vocabulary Complete List',
    description:
      '1,500 intermediate vocabulary words organized by topic. Includes usage notes and common collocations.',
    level: 'N4',
    downloads: 9820,
    size: '3.1 MB',
  },
  {
    title: 'JLPT N3 Vocabulary Master List',
    description:
      '3,000 advanced vocabulary words with nuanced meanings, kanji readings, and contextual examples.',
    level: 'N3',
    downloads: 7340,
    size: '4.8 MB',
  },
  {
    title: 'Business Japanese Vocabulary Guide',
    description:
      '500+ essential business terms for office communication, meetings, emails, and professional settings.',
    level: 'N2-N3',
    downloads: 6120,
    size: '1.9 MB',
  },
  {
    title: 'Onomatopoeia & Mimetic Words Guide',
    description:
      '200+ Japanese onomatopoeic expressions (giongo/gitaigo) with meanings and usage examples.',
    level: 'N3-N2',
    downloads: 4890,
    size: '1.5 MB',
  },
  {
    title: 'Daily Life Vocabulary Flashcards',
    description:
      'Printable flashcards covering 500 everyday words across food, shopping, transport, and more.',
    level: 'N5-N4',
    downloads: 8230,
    size: '5.2 MB',
  },
];

const jlptStudySheets: Resource[] = [
  {
    title: 'JLPT N5 Complete Study Sheet',
    description:
      'All-in-one cheat sheet covering N5 grammar points, vocabulary, kanji, and reading patterns.',
    level: 'N5',
    downloads: 15600,
    size: '3.4 MB',
  },
  {
    title: 'JLPT N4 Complete Study Sheet',
    description:
      'Comprehensive N4 study guide with grammar patterns, verb conjugations, and listening tips.',
    level: 'N4',
    downloads: 11200,
    size: '4.1 MB',
  },
  {
    title: 'JLPT N3 Complete Study Sheet',
    description:
      'Intermediate-level study sheet with complex grammar, reading strategies, and vocabulary lists.',
    level: 'N3',
    downloads: 8450,
    size: '5.6 MB',
  },
  {
    title: 'JLPT N2 Complete Study Sheet',
    description:
      'Advanced study sheet covering N2 grammar, kanji compounds, reading comprehension, and listening.',
    level: 'N2',
    downloads: 6780,
    size: '6.2 MB',
  },
  {
    title: 'JLPT Kanji Quick Reference (N5-N2)',
    description:
      'All 1,000+ kanji across JLPT levels with readings, meanings, stroke order, and common compounds.',
    level: 'N5-N2',
    downloads: 13400,
    size: '8.7 MB',
  },
  {
    title: 'JLPT Exam Strategy & Time Management Guide',
    description:
      'Proven strategies for tackling each JLPT section, managing time, and avoiding common mistakes.',
    level: 'All',
    downloads: 9200,
    size: '1.1 MB',
  },
];

const grammarNotes: Resource[] = [
  {
    title: 'Basic Japanese Grammar Cheatsheet',
    description:
      'Quick reference for essential N5-N4 grammar patterns including particles, verb forms, and sentence structure.',
    level: 'N5-N4',
    downloads: 14200,
    size: '1.2 MB',
  },
  {
    title: 'Intermediate Grammar Patterns Guide',
    description:
      '80+ N3-level grammar patterns with conjugation tables, example sentences, and usage notes.',
    level: 'N3',
    downloads: 7600,
    size: '2.8 MB',
  },
  {
    title: 'Advanced Grammar & Keigo Handbook',
    description:
      'Master N2-level grammar and honorific language (keigo) with detailed explanations and business examples.',
    level: 'N2',
    downloads: 5400,
    size: '3.5 MB',
  },
  {
    title: 'Japanese Particles Complete Guide',
    description:
      'Complete guide to all major particles (wa, ga, ni, de, wo, etc.) with usage rules and example sentences.',
    level: 'N5-N3',
    downloads: 10900,
    size: '890 KB',
  },
];

const interviewResources: Resource[] = [
  {
    title: 'Japanese Job Interview Question Bank',
    description:
      '100+ common interview questions at Japanese companies with model answers in Japanese and English.',
    level: 'N3-N2',
    downloads: 8700,
    size: '2.4 MB',
  },
  {
    title: 'Self-Introduction Template (Jikoshoukai)',
    description:
      'Step-by-step guide to crafting a professional self-introduction for interviews, networking, and business.',
    level: 'N4-N2',
    downloads: 11200,
    size: '1.6 MB',
  },
  {
    title: 'Business Email & Resume Writing Guide',
    description:
      'Templates and examples for Japanese rirekisho, shokumukeirekisho, and professional email correspondence.',
    level: 'N3-N2',
    downloads: 6800,
    size: '3.2 MB',
  },
  {
    title: 'Japanese Workplace Etiquette Handbook',
    description:
      'Essential guide to business manners, meishi exchange, seating hierarchy, and office communication norms.',
    level: 'All',
    downloads: 7900,
    size: '2.1 MB',
  },
];

/* ------------------------------------------------------------------ */
/* Section Config                                                      */
/* ------------------------------------------------------------------ */

type CategorySection = {
  id: string;
  badge: string;
  title: string;
  description: string;
  icon: typeof FileText;
  resources: Resource[];
};

const categories: CategorySection[] = [
  {
    id: 'vocabulary',
    badge: 'Vocabulary',
    title: 'Vocabulary PDFs',
    description:
      'Downloadable vocabulary lists organized by JLPT level and topic. Each PDF includes furigana, meanings, and example sentences.',
    icon: BookOpen,
    resources: vocabularyResources,
  },
  {
    id: 'jlpt',
    badge: 'JLPT Prep',
    title: 'JLPT Study Sheets',
    description:
      'Comprehensive study sheets for every JLPT level from N5 to N2. Grammar, kanji, vocabulary, and exam strategies in one place.',
    icon: GraduationCap,
    resources: jlptStudySheets,
  },
  {
    id: 'grammar',
    badge: 'Grammar',
    title: 'Grammar Notes',
    description:
      'Detailed grammar guides from beginner to advanced, including particles, verb conjugations, and honorific language (keigo).',
    icon: Layers,
    resources: grammarNotes,
  },
  {
    id: 'interview',
    badge: 'Career Prep',
    title: 'Interview Preparation Materials',
    description:
      'Everything you need to ace your Japanese job interview — question banks, self-introduction templates, resume guides, and etiquette tips.',
    icon: Briefcase,
    resources: interviewResources,
  },
];

/* ------------------------------------------------------------------ */
/* Stats                                                               */
/* ------------------------------------------------------------------ */

const resourceStats = [
  { icon: BookOpen, value: '20+', label: 'Vocabulary Lists' },
  { icon: GraduationCap, value: '6', label: 'JLPT Study Sheets' },
  { icon: Layers, value: '4', label: 'Grammar Guides' },
  { icon: Briefcase, value: '4', label: 'Interview Prep Kits' },
];

/* ------------------------------------------------------------------ */
/* Start With These                                                    */
/* ------------------------------------------------------------------ */

const startWithThese = [
  {
    icon: GraduationCap,
    title: 'JLPT N5 Course',
    description: 'Structured beginner lessons with vocabulary, grammar, and kanji.',
    href: '/jlpt/n5',
  },
  {
    icon: BookOpen,
    title: 'Vocabulary Builder',
    description: 'Daily words and phrases with spaced repetition practice.',
    href: '/learn/vocabulary',
  },
  {
    icon: PenTool,
    title: 'Kanji Master',
    description: 'Learn kanji character by character with stroke order guides.',
    href: '/learn/kanji',
  },
];

/* ------------------------------------------------------------------ */
/* Resource Card Component                                             */
/* ------------------------------------------------------------------ */

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
            <FileText className="h-6 w-6 text-primary group-hover:text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-semibold leading-tight">{resource.title}</h3>
              <Badge variant="outline" className="flex-shrink-0">
                {resource.level}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-1 mb-4">
              {resource.description}
            </p>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center">
                  <Download className="h-3 w-3 mr-1" />
                  {resource.downloads.toLocaleString()}
                </span>
                <span>{resource.size}</span>
              </div>
              <Button size="sm" variant="default">
                <Download className="h-4 w-4 mr-1" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function ResourcesPage() {
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
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="secondary" className="mb-4">
                <Download className="h-3 w-3 mr-1" />
                Free Downloads
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                Learning <span className="text-primary">Resources</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Download free Japanese learning materials — vocabulary lists, JLPT
                study sheets, grammar guides, and interview preparation kits. All
                resources are carefully curated and regularly updated.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {resourceStats.map((stat, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="pt-6 pb-6 text-center">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                        <stat.icon className="h-6 w-6 text-primary group-hover:text-white" />
                      </div>
                      <p className="text-2xl font-bold text-primary">
                        {stat.value}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {stat.label}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resource Category Sections */}
        {categories.map((category, catIndex) => {
          const Icon = category.icon;
          const isAlt = catIndex % 2 === 1;
          return (
            <section
              key={category.id}
              id={category.id}
              className={
                isAlt
                  ? 'py-20 lg:py-28 bg-muted/30'
                  : 'py-20 lg:py-28 bg-background'
              }
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline">{category.badge}</Badge>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    {category.title}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl">
                    {category.description}
                  </p>
                </div>

                {/* Resource Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.resources.map((resource, resIndex) => (
                    <ResourceCard key={resIndex} resource={resource} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Start With These Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <Sparkles className="h-3 w-3 mr-1" />
                Recommended
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Start With <span className="text-primary">These</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                New to Japanese? These three resources are the perfect starting
                point for your learning journey.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {startWithThese.map((item, index) => (
                <Link key={index} href={item.href}>
                  <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-8 text-center">
                      <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        <item.icon className="h-8 w-8 text-primary group-hover:text-white" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {item.description}
                      </p>
                      <span className="text-sm text-primary font-medium inline-flex items-center group-hover:underline">
                        Get Started
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
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
                      資料<rt>しりょう</rt>
                    </ruby>
                  </span>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Need More Learning Materials?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Join 10,000+ learners who receive weekly Japanese lessons, JLPT
                tips, and new resource updates directly to their inbox.
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
                  <Link href="/contact">Request Resources</Link>
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
