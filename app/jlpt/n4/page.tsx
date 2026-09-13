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
  { word: '勉強', furigana: 'べんきょう', romaji: 'benkyou', meaning: 'Study' },
  { word: '仕事', furigana: 'しごと', romaji: 'shigoto', meaning: 'Work / Job' },
  { word: '電車', furigana: 'でんしゃ', romaji: 'densha', meaning: 'Train' },
  { word: '天気', furigana: 'てんき', romaji: 'tenki', meaning: 'Weather' },
  { word: '病院', furigana: 'びょういん', romaji: 'byouin', meaning: 'Hospital' },
  { word: '料理', furigana: 'りょうり', romaji: 'ryouri', meaning: 'Cooking / Cuisine' },
  { word: '約束', furigana: 'やくそく', romaji: 'yakusoku', meaning: 'Promise / Appointment' },
  { word: '経験', furigana: 'けいけん', romaji: 'keiken', meaning: 'Experience' },
  { word: '予定', furigana: 'よてい', romaji: 'yotei', meaning: 'Plan / Schedule' },
  { word: '説明', furigana: 'せつめい', romaji: 'setsumei', meaning: 'Explanation' },
];

const grammarPoints = [
  {
    name: '〜てある',
    meaning: 'State resulting from an action',
    explanation: 'Describes a state that exists as a result of someone&apos;s intentional action.',
    examples: [
      { jp: '壁にポスターが貼ってある。', en: 'A poster is put up on the wall.' },
      { jp: 'テーブルにお皿が並べてある。', en: 'Dishes are arranged on the table.' },
    ],
  },
  {
    name: '〜ことにする',
    meaning: 'To decide to do',
    explanation: 'Expresses a personal decision to do (or not do) something.',
    examples: [
      { jp: '明日から日本語を勉強することにした。', en: 'I decided to study Japanese from tomorrow.' },
      { jp: '甘いものを食べないことにしている。', en: 'I make it a rule not to eat sweets.' },
    ],
  },
  {
    name: '〜ようと思う',
    meaning: 'To intend to',
    explanation: 'Expresses the speaker&apos;s intention or plan to do something.',
    examples: [
      { jp: '来年日本へ行こうと思っている。', en: 'I am thinking of going to Japan next year.' },
      { jp: '新しい仕事を始めようと思う。', en: 'I intend to start a new job.' },
    ],
  },
  {
    name: '〜かもしれない',
    meaning: 'Might / Maybe',
    explanation: 'Indicates possibility — something may or may not happen.',
    examples: [
      { jp: '明日は雨が降るかもしれない。', en: 'It might rain tomorrow.' },
      { jp: '彼は来ないかもしれない。', en: 'He might not come.' },
    ],
  },
  {
    name: '〜と',
    meaning: 'If / When',
    explanation: 'Expresses a natural or habitual consequence — when A happens, B happens.',
    examples: [
      { jp: '春になると、花が咲く。', en: 'When spring comes, flowers bloom.' },
      { jp: '右に曲がると、駅がある。', en: 'If you turn right, there is a station.' },
    ],
  },
  {
    name: '〜ながら',
    meaning: 'While doing',
    explanation: 'Indicates doing two actions simultaneously — doing A while doing B.',
    examples: [
      { jp: '音楽を聞きながら勉強する。', en: 'I study while listening to music.' },
      { jp: 'テレビを見ながらご飯を食べる。', en: 'I eat while watching TV.' },
    ],
  },
];

const studyPlan = [
  { week: 1, focus: 'Review N5 & Transition', hours: 10, details: 'Solidify N5 grammar and vocabulary before moving forward.' },
  { week: 2, focus: 'N4 Vocabulary (Part 1)', hours: 12, details: 'Learn 500 new words grouped by theme (daily life, work).' },
  { week: 3, focus: 'N4 Vocabulary (Part 2)', hours: 12, details: 'Continue with 500 more words and start kanji practice.' },
  { week: 4, focus: 'N4 Kanji (100 characters)', hours: 10, details: 'Learn 100 new kanji with their readings and common compounds.' },
  { week: 5, focus: 'Grammar: て-form & Conditionals', hours: 12, details: 'Master 〜てある, 〜と, 〜たら, and 〜ば patterns.' },
  { week: 6, focus: 'Grammar: Intentions & Modality', hours: 12, details: 'Study 〜ことにする, 〜ようと思う, 〜かもしれない.' },
  { week: 7, focus: 'Reading & Listening Practice', hours: 10, details: 'Work through N4-level passages and audio exercises.' },
  { week: 8, focus: 'Mock Exam & Review', hours: 12, details: 'Take a full practice test and review weak areas.' },
];

const stats = [
  { icon: BookOpen, value: '1,500', label: 'Vocabulary' },
  { icon: PenTool, value: '300', label: 'Kanji' },
  { icon: FileText, value: '80', label: 'Grammar' },
  { icon: Clock, value: '10-12', label: 'Weekly Hours' },
];

export default function N4Page() {
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-background py-12 lg:py-16 dark:from-blue-950/20">
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
              <span className="font-medium">N4</span>
            </nav>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600">
                <span className="text-3xl font-bold text-white">N4</span>
              </div>
              <div>
                <Badge variant="outline" className="mb-2 border-blue-600 text-blue-600">
                  Elementary Level
                </Badge>
                <h1 className="text-3xl font-bold sm:text-4xl">JLPT N4 Preparation</h1>
                <p className="text-muted-foreground">Everyday Japanese in 6–9 months</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border bg-background p-4">
                  <stat.icon className="mb-2 h-5 w-5 text-blue-600" />
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
                        <BookOpen className="h-5 w-5 text-blue-600" />
                        What is JLPT N4?
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        JLPT N4 builds on N5 and tests your ability to understand basic Japanese in
                        everyday situations. At this level, you can:
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                          Hold simple daily conversations with native speakers
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                          Read and understand basic texts on familiar topics
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                          Comprehend everyday spoken Japanese at a natural pace
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                          Express intentions, conditions, and simultaneous actions
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-blue-600" />
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
                        <span className="font-medium">125 minutes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Pass Score</span>
                        <span className="font-medium">90 / 180</span>
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
                        <BookOpen className="mb-3 h-8 w-8 text-blue-600" />
                        <h3 className="font-semibold">Vocabulary</h3>
                        <p className="text-sm text-muted-foreground">1,500 words</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href="/learn/kanji">
                    <Card className="h-full cursor-pointer transition hover:shadow-md">
                      <CardContent className="pt-6">
                        <PenTool className="mb-3 h-8 w-8 text-blue-600" />
                        <h3 className="font-semibold">Kanji</h3>
                        <p className="text-sm text-muted-foreground">300 characters</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href="/learn/grammar">
                    <Card className="h-full cursor-pointer transition hover:shadow-md">
                      <CardContent className="pt-6">
                        <FileText className="mb-3 h-8 w-8 text-blue-600" />
                        <h3 className="font-semibold">Grammar</h3>
                        <p className="text-sm text-muted-foreground">Essential patterns</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href="/resources">
                    <Card className="h-full cursor-pointer transition hover:shadow-md">
                      <CardContent className="pt-6">
                        <Headphones className="mb-3 h-8 w-8 text-blue-600" />
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
                  <h2 className="text-2xl font-bold">Essential N4 Vocabulary</h2>
                  <p className="text-muted-foreground">
                    These 10 words are commonly used in everyday Japanese. Learn them with furigana
                    and meaning.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {vocabulary.map((item, i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 px-4 py-3 text-white">
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
                      View All N4 Vocabulary
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>

              {/* Grammar */}
              <TabsContent value="grammar" className="space-y-6">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold">Essential N4 Grammar</h2>
                  <p className="text-muted-foreground">
                    These 6 grammar points are key to expressing more nuanced ideas in Japanese.
                  </p>
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                  {grammarPoints.map((point, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-blue-600">{point.name}</Badge>
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
                  <h2 className="text-2xl font-bold">8-Week Study Plan</h2>
                  <p className="text-muted-foreground">
                    A comprehensive week-by-week plan to prepare for JLPT N4.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {studyPlan.map((week) => (
                    <Card key={week.week} className="transition hover:border-blue-500">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="flex items-center gap-2">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                              {week.week}
                            </span>
                            Week {week.week}
                          </CardTitle>
                          <Badge variant="outline" className="border-blue-600 text-blue-600">
                            <Clock className="mr-1 h-3 w-3" />
                            {week.hours} hrs
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="font-semibold text-blue-600">{week.focus}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{week.details}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Card className="bg-muted/30">
                  <CardContent className="flex items-start gap-3 pt-6">
                    <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Tip:</span> Make sure you have
                      a solid N5 foundation before starting N4. Many N4 grammar points build directly
                      on N5 patterns. Review N5 material in week 1 if needed.
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
            <Card className="overflow-hidden border-0 bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
              <CardContent className="p-8 text-center lg:p-12">
                <GraduationCap className="mx-auto mb-4 h-12 w-12 opacity-80" />
                <h2 className="text-2xl font-bold sm:text-3xl">Ready to Level Up to N4?</h2>
                <p className="mx-auto mt-3 max-w-xl opacity-90">
                  Build on your N5 foundation and expand your everyday Japanese skills.
                </p>
                <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/learn/vocabulary">
                      Start N4 Vocabulary
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
