'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BookOpen,
  PenTool,
  Headphones,
  FileText,
  ArrowRight,
  ChevronRight,
  Clock,
  Calendar,
  Award,
  GraduationCap,
  CheckCircle,
  Sparkles,
} from 'lucide-react';

const vocabulary = [
  { word: 'ありがとう', furigana: 'ありがとう', romaji: 'arigatou', meaning: 'Thank you' },
  { word: 'おはよう', furigana: 'おはよう', romaji: 'ohayou', meaning: 'Good morning' },
  { word: 'こんにちは', furigana: 'こんにちは', romaji: 'konnichiwa', meaning: 'Hello / Good afternoon' },
  { word: 'さようなら', furigana: 'さようなら', romaji: 'sayounara', meaning: 'Goodbye' },
  { word: '学校', furigana: 'がっこう', romaji: 'gakkou', meaning: 'School' },
  { word: '先生', furigana: 'せんせい', romaji: 'sensei', meaning: 'Teacher' },
  { word: 'ともだち', furigana: 'ともだち', romaji: 'tomodachi', meaning: 'Friend' },
  { word: 'がくせい', furigana: 'がくせい', romaji: 'gakusei', meaning: 'Student' },
  { word: 'ほん', furigana: 'ほん', romaji: 'hon', meaning: 'Book' },
  { word: 'いぬ', furigana: 'いぬ', romaji: 'inu', meaning: 'Dog' },
];

const grammarPoints = [
  {
    name: '〜です',
    meaning: 'To be (polite copula)',
    explanation: 'Used to state that something "is" something. The polite form of だ.',
    examples: [
      { jp: '私は学生です。', en: 'I am a student.' },
      { jp: 'これは本です。', en: 'This is a book.' },
    ],
  },
  {
    name: '〜ます',
    meaning: 'Polite verb form',
    explanation: 'The polite (masu) form of verbs, used in formal and everyday speech.',
    examples: [
      { jp: '毎日日本語を勉強します。', en: 'I study Japanese every day.' },
      { jp: '水を飲みます。', en: 'I drink water.' },
    ],
  },
  {
    name: '〜たい',
    meaning: 'Want to do',
    explanation: 'Attached to a verb stem to express the desire to do something.',
    examples: [
      { jp: '寿司を食べたいです。', en: 'I want to eat sushi.' },
      { jp: '日本へ行きたいです。', en: 'I want to go to Japan.' },
    ],
  },
  {
    name: '〜が好き',
    meaning: 'To like',
    explanation: 'Used with the particle が to express liking something or someone.',
    examples: [
      { jp: '猫が好きです。', en: 'I like cats.' },
      { jp: '音楽が好きです。', en: 'I like music.' },
    ],
  },
  {
    name: '〜にあります',
    meaning: 'Exists in / at',
    explanation: 'Used to state that an inanimate object exists in a certain place.',
    examples: [
      { jp: '本はつくえにあります。', en: 'The book is on the desk.' },
      { jp: '駅はあそこにあります。', en: 'The station is over there.' },
    ],
  },
  {
    name: '〜より',
    meaning: 'More than / compared to',
    explanation: 'Used to compare two things, stating that one is more [adjective] than the other.',
    examples: [
      { jp: '肉より魚が好きです。', en: 'I like fish more than meat.' },
      { jp: '夏は冬より暑いです。', en: 'Summer is hotter than winter.' },
    ],
  },
];

const studyPlan = [
  { week: 1, focus: 'Hiragana & Katakana', hours: 10, details: 'Master all 46 basic characters of each syllabary.' },
  { week: 2, focus: 'Basic Vocabulary', hours: 8, details: 'Learn greetings, numbers, and everyday nouns.' },
  { week: 3, focus: 'Particles (は, が, を, に)', hours: 8, details: 'Understand the core particles and their functions.' },
  { week: 4, focus: 'Basic Verbs & Conjugation', hours: 10, details: 'Learn common verbs and the ます form.' },
  { week: 5, focus: 'Adjectives (い & な)', hours: 8, details: 'Distinguish and conjugate both adjective types.' },
  { week: 6, focus: 'Grammar Patterns & Review', hours: 10, details: 'Combine all elements and take a practice test.' },
];

const stats = [
  { icon: BookOpen, value: '800', label: 'Vocabulary' },
  { icon: PenTool, value: '100', label: 'Kanji' },
  { icon: FileText, value: '50', label: 'Grammar' },
  { icon: Clock, value: '8-10', label: 'Weekly Hours' },
];

export default function N5Page() {
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-green-50 to-background py-12 lg:py-16 dark:from-green-950/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="mb-8 flex items-center space-x-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/jlpt" className="text-muted-foreground hover:text-primary">
                JLPT
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="font-medium">N5</span>
            </nav>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600">
                <span className="text-3xl font-bold text-white">N5</span>
              </div>
              <div>
                <Badge variant="outline" className="mb-2 border-green-600 text-green-600">
                  Beginner Level
                </Badge>
                <h1 className="text-3xl font-bold sm:text-4xl">JLPT N5 Preparation</h1>
                <p className="text-muted-foreground">Master basic Japanese in 3–6 months</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border bg-background p-4">
                  <stat.icon className="mb-2 h-5 w-5 text-green-600" />
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="mb-8 flex w-full flex-wrap justify-start gap-1 sm:w-auto">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="vocabulary">Vocabulary</TabsTrigger>
                <TabsTrigger value="grammar">Grammar</TabsTrigger>
                <TabsTrigger value="plan">Study Plan</TabsTrigger>
              </TabsList>

              {/* Overview */}
              <TabsContent value="overview" className="space-y-8">
                <div className="grid gap-8 lg:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-green-600" />
                        What is JLPT N5?
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        JLPT N5 is the entry-level Japanese Language Proficiency Test. It assesses
                        your ability to understand basic Japanese used in daily life. At this level,
                        you can:
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                          Read basic kanji and understand simple vocabulary
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                          Comprehend simple grammar patterns
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                          Follow basic reading passages and listening exercises
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                          Greet people and hold short, simple conversations
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-green-600" />
                        Exam Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Exams</span>
                        <span className="font-medium">2 per year (July &amp; Dec)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration</span>
                        <span className="font-medium">105 minutes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Pass Score</span>
                        <span className="font-medium">80 / 180</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sections</span>
                        <span className="font-medium">Vocabulary, Grammar, Reading, Listening</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <Link href="/learn/vocabulary">
                    <Card className="h-full cursor-pointer transition hover:shadow-md">
                      <CardContent className="pt-6">
                        <BookOpen className="mb-3 h-8 w-8 text-green-600" />
                        <h3 className="font-semibold">Vocabulary</h3>
                        <p className="text-sm text-muted-foreground">800 words</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href="/learn/kanji">
                    <Card className="h-full cursor-pointer transition hover:shadow-md">
                      <CardContent className="pt-6">
                        <PenTool className="mb-3 h-8 w-8 text-green-600" />
                        <h3 className="font-semibold">Kanji</h3>
                        <p className="text-sm text-muted-foreground">100 characters</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href="/learn/grammar">
                    <Card className="h-full cursor-pointer transition hover:shadow-md">
                      <CardContent className="pt-6">
                        <FileText className="mb-3 h-8 w-8 text-green-600" />
                        <h3 className="font-semibold">Grammar</h3>
                        <p className="text-sm text-muted-foreground">Basic patterns</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href="/resources">
                    <Card className="h-full cursor-pointer transition hover:shadow-md">
                      <CardContent className="pt-6">
                        <Headphones className="mb-3 h-8 w-8 text-green-600" />
                        <h3 className="font-semibold">Listening</h3>
                        <p className="text-sm text-muted-foreground">Audio practice</p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </TabsContent>

              {/* Vocabulary */}
              <TabsContent value="vocabulary" className="space-y-6">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold">Essential N5 Vocabulary</h2>
                  <p className="text-muted-foreground">
                    Start with these 10 fundamental words. Each includes furigana and English
                    meaning.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {vocabulary.map((item, i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-3 text-white">
                        <p className="text-2xl font-bold">{item.word}</p>
                        <p className="text-sm opacity-90">{item.furigana}</p>
                      </div>
                      <CardContent className="pt-4">
                        <p className="text-sm text-muted-foreground">{item.romaji}</p>
                        <p className="font-medium">{item.meaning}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-center pt-4">
                  <Button asChild>
                    <Link href="/learn/vocabulary">
                      View All N5 Vocabulary
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>

              {/* Grammar */}
              <TabsContent value="grammar" className="space-y-6">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold">Essential N5 Grammar</h2>
                  <p className="text-muted-foreground">
                    Master these 6 grammar points to build a strong foundation.
                  </p>
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                  {grammarPoints.map((point, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-green-600">{point.name}</Badge>
                        </div>
                        <CardTitle className="pt-2">{point.meaning}</CardTitle>
                        <CardDescription>{point.explanation}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-2 text-sm font-semibold text-muted-foreground">
                          Examples:
                        </p>
                        <div className="space-y-3">
                          {point.examples.map((ex, j) => (
                            <div key={j} className="rounded-lg bg-muted/50 p-3">
                              <p className="font-medium">{ex.jp}</p>
                              <p className="text-sm text-muted-foreground">{ex.en}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Study Plan */}
              <TabsContent value="plan" className="space-y-6">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold">6-Week Study Plan</h2>
                  <p className="text-muted-foreground">
                    A structured week-by-week plan to prepare for JLPT N5.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {studyPlan.map((week) => (
                    <Card key={week.week} className="transition hover:border-green-500">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="flex items-center gap-2">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                              {week.week}
                            </span>
                            Week {week.week}
                          </CardTitle>
                          <Badge variant="outline" className="border-green-600 text-green-600">
                            <Clock className="mr-1 h-3 w-3" />
                            {week.hours} hrs
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="font-semibold text-green-600">{week.focus}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{week.details}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Card className="bg-muted/30">
                  <CardContent className="flex items-start gap-3 pt-6">
                    <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Tip:</span> Consistency beats
                      intensity. Studying 1–2 hours daily is more effective than cramming on
                      weekends. Review previous weeks&apos; material regularly.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden border-0 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
              <CardContent className="p-8 text-center lg:p-12">
                <GraduationCap className="mx-auto mb-4 h-12 w-12 opacity-80" />
                <h2 className="text-2xl font-bold sm:text-3xl">Ready to Begin Your N5 Journey?</h2>
                <p className="mx-auto mt-3 max-w-xl opacity-90">
                  Start with vocabulary and build your way up. Every expert was once a beginner.
                </p>
                <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/learn/vocabulary">
                      Start N5 Vocabulary
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 hover:text-white"
                    asChild
                  >
                    <Link href="/learn/grammar">Explore Grammar</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
