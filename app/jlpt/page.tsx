import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  GraduationCap,
  ArrowRight,
  BookOpen,
  PenTool,
  FileText,
  CheckCircle,
  ClipboardList,
  Languages,
  Clock,
  Award,
  Calendar,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'JLPT Preparation - N5, N4, N3, N2 Levels',
  description:
    'Comprehensive JLPT preparation for all levels. Structured study plans, vocabulary lists, grammar guides, and practice tests for Nihongo Bridge.',
  keywords: [
    'JLPT preparation',
    'JLPT N5',
    'JLPT N4',
    'JLPT N3',
    'JLPT N2',
    'Japanese language test',
    'JLPT study plan',
  ],
  alternates: {
    canonical: '/jlpt',
  },
};

const jlptLevels = [
  {
    level: 'N5',
    subtitle: 'Beginner',
    desc: 'Basic grammar, everyday vocabulary, and simple conversations.',
    vocabulary: 800,
    kanji: 100,
    href: '/jlpt/n5',
    color: 'from-green-500 to-emerald-600',
  },
  {
    level: 'N4',
    subtitle: 'Elementary',
    desc: 'Daily conversation skills and comprehension of everyday topics.',
    vocabulary: 1500,
    kanji: 300,
    href: '/jlpt/n4',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    level: 'N3',
    subtitle: 'Intermediate',
    desc: 'Natural communication in everyday situations and general topics.',
    vocabulary: 3000,
    kanji: 650,
    href: '/jlpt/n3',
    color: 'from-amber-500 to-orange-600',
  },
  {
    level: 'N2',
    subtitle: 'Pre-Advanced',
    desc: 'Business Japanese and comprehension of complex written material.',
    vocabulary: 6000,
    kanji: 1000,
    href: '/jlpt/n2',
    color: 'from-rose-500 to-red-600',
  },
];

const features = [
  {
    icon: ClipboardList,
    title: 'Structured Study Plans',
    description: 'Week-by-week plans tailored to each level with clear milestones.',
  },
  {
    icon: CheckCircle,
    title: 'Practice Tests',
    description: 'Realistic mock exams that mirror the actual JLPT format.',
  },
  {
    icon: BookOpen,
    title: 'Vocabulary Lists',
    description: 'Curated word lists with furigana, meanings, and audio support.',
  },
  {
    icon: FileText,
    title: 'Grammar Guides',
    description: 'Clear explanations of every grammar point with example sentences.',
  },
];

const stats = [
  { icon: Calendar, value: '2', label: 'Exams per Year' },
  { icon: GraduationCap, value: '5', label: 'Levels (N5–N1)' },
  { icon: Clock, value: '180', label: 'Minutes (N2)' },
  { icon: Award, value: '98%', label: 'Pass Rate' },
];

export default function JLPTPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="secondary" className="mb-4">
                <GraduationCap className="mr-1 h-3 w-3" />
                JLPT Preparation
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Ace Your <span className="text-primary">JLPT Exam</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
                Comprehensive study materials, structured plans, and practice tests for every JLPT
                level — from N5 beginner to N2 pre-advanced.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/jlpt/n5">
                    Start with N5
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#levels">Explore Levels</Link>
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border bg-background p-4 text-center"
                >
                  <stat.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Level Cards */}
        <section id="levels" className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <Badge variant="outline" className="mb-4">
                Choose Your Level
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                JLPT Study Programs
              </h2>
              <p className="mt-4 text-muted-foreground">
                Each level builds on the previous one. Pick where you are and follow a clear path to
                mastery.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {jlptLevels.map((item) => (
                <Link key={item.level} href={item.href} className="block">
                  <Card className="h-full overflow-hidden transition group hover:shadow-lg">
                    <div className={`bg-gradient-to-r ${item.color} p-6 text-white`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-4xl font-bold">{item.level}</p>
                          <p className="opacity-90">{item.subtitle}</p>
                        </div>
                        <GraduationCap className="h-12 w-12 opacity-50" />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>JLPT {item.level}</CardTitle>
                      <CardDescription>{item.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Vocabulary</p>
                          <p className="font-semibold">{item.vocabulary.toLocaleString()} words</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Kanji</p>
                          <p className="font-semibold">{item.kanji.toLocaleString()} characters</p>
                        </div>
                      </div>
                      <Button className="w-full">
                        Start Studying
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <Badge variant="outline" className="mb-4">
                What&apos;s Included
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Complete JLPT Preparation
              </h2>
              <p className="mt-4 text-muted-foreground">
                Everything you need to prepare confidently, all in one place.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <Card key={feature.title} className="bg-background">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="japan-gradient py-16 text-white lg:py-24">
          <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to Start?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">
              Begin your JLPT journey today. Whether you&apos;re starting from zero or aiming for
              N2, we have a plan for you.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/jlpt/n5">
                  Start with N5
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <Link href="/learn">Browse Lessons</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
