import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  Layers,
  PenTool,
  Languages,
  BriefcaseBusiness,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Learn Japanese - Vocabulary, Grammar, Kanji & Conversation',
  description:
    'Master Japanese with Nihongo Bridge. Learn vocabulary, grammar, kanji, conversation, and business Japanese with lessons in English and Tamil.',
};

const categories = [
  {
    icon: BookOpen,
    title: 'Vocabulary',
    description: 'Essential Japanese words with meanings in Tamil & English, plus example sentences.',
    count: '500+ Words',
    href: '/learn/vocabulary',
    color: 'bg-red-500',
  },
  {
    icon: Layers,
    title: 'Grammar',
    description: 'Japanese grammar patterns explained with clear examples and usage notes.',
    count: '100+ Lessons',
    href: '/learn/grammar',
    color: 'bg-amber-500',
  },
  {
    icon: PenTool,
    title: 'Kanji',
    description: 'Master kanji with stroke order, onyomi, kunyomi, and vocabulary examples.',
    count: '200+ Kanji',
    href: '/learn/kanji',
    color: 'bg-emerald-500',
  },
  {
    icon: Languages,
    title: 'Conversation',
    description: 'Practice real-life dialogues from greetings to business meetings.',
    count: '50+ Scenarios',
    href: '/learn/conversation',
    color: 'bg-blue-500',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Business Japanese',
    description: 'Keigo, email writing, interview phrases, and workplace etiquette.',
    count: 'Business Ready',
    href: '/learn/business-japanese',
    color: 'bg-purple-500',
  },
];

const stats = [
  { value: '500+', label: 'Vocabulary Words' },
  { value: '200+', label: 'Kanji Characters' },
  { value: '100+', label: 'Lessons' },
  { value: '4', label: 'JLPT Levels' },
];

const dailyVocab = [
  {
    japanese: '日本',
    furigana: 'にほん',
    english: 'Japan',
    example: '日本へ行きたいです。',
    exampleEn: 'I want to go to Japan.',
  },
  {
    japanese: '学校',
    furigana: 'がっこう',
    english: 'School',
    example: '学校は九時に始まります。',
    exampleEn: 'School starts at nine.',
  },
  {
    japanese: '先生',
    furigana: 'せんせい',
    english: 'Teacher',
    example: '先生は親切です。',
    exampleEn: 'The teacher is kind.',
  },
  {
    japanese: '友達',
    furigana: 'ともだち',
    english: 'Friend',
    example: '友達と遊びます。',
    exampleEn: 'I play with my friend.',
  },
  {
    japanese: '勉強',
    furigana: 'べんきょう',
    english: 'Study',
    example: '日本語を勉強しています。',
    exampleEn: 'I am studying Japanese.',
  },
];

export default function LearnPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-16 lg:py-24">
          <div className="absolute inset-0 hero-pattern" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <Badge variant="secondary" className="mb-4">
                <Sparkles className="h-3 w-3 mr-1" />
                Learning Portal
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Learn <span className="text-primary">Japanese</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Master vocabulary, grammar, kanji, conversation, and business Japanese — all in one place,
                with explanations in English and Tamil.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-background rounded-lg p-4 text-center border hover:border-primary/40 hover:shadow-sm transition"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Cards */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                Learning Paths
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Choose Your Path</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Five structured categories to take you from beginner to business-ready.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((path) => (
                <Link key={path.title} href={path.href} className="group">
                  <Card className="h-full group hover:shadow-lg transition hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div
                        className={`h-14 w-14 ${path.color} rounded-xl flex items-center justify-center mb-4`}
                      >
                        <path.icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
                      <p className="text-muted-foreground mb-4">{path.description}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-primary font-medium">{path.count}</p>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Vocabulary Preview */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                Daily Vocabulary
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Learn a New Word Every Day</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Essential Japanese words with furigana, meanings, and example sentences.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {dailyVocab.map((word, i) => (
                <Card key={i} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6 text-center">
                    <div className="mb-3">
                      <ruby className="kanji-text text-3xl font-bold text-primary">
                        {word.japanese}
                        <rt className="text-sm text-muted-foreground font-normal">{word.furigana}</rt>
                      </ruby>
                    </div>
                    <p className="font-semibold mb-2">{word.english}</p>
                    <p className="text-xs text-muted-foreground italic mb-1">{word.example}</p>
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

        {/* CTA Section */}
        <section className="py-16 lg:py-20 japan-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Your JLPT Journey?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Begin with JLPT N5 and work your way up. Structured lessons, vocabulary lists, and practice
              materials for every level.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/jlpt/n5">
                Start JLPT N5
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
