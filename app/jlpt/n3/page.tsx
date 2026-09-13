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
  { word: '環境', furigana: 'かんきょう', romaji: 'kankyou', meaning: 'Environment' },
  { word: '経済', furigana: 'けいざい', romaji: 'keizai', meaning: 'Economy' },
  { word: '技術', furigana: 'ぎじゅつ', romaji: 'gijutsu', meaning: 'Technology / Technique' },
  { word: '文化', furigana: 'ぶんか', romaji: 'bunka', meaning: 'Culture' },
  { word: '社会', furigana: 'しゃかい', romaji: 'shakai', meaning: 'Society' },
  { word: '教育', furigana: 'きょういく', romaji: 'kyouiku', meaning: 'Education' },
  { word: '健康', furigana: 'けんこう', romaji: 'kenkou', meaning: 'Health' },
  { word: '開発', furigana: 'かいはつ', romaji: 'kaihatsu', meaning: 'Development' },
  { word: '責任', furigana: 'せきにん', romaji: 'sekinin', meaning: 'Responsibility' },
  { word: '機会', furigana: 'きかい', romaji: 'kikai', meaning: 'Opportunity' },
];

const grammarPoints = [
  {
    name: '〜ばかりでなく',
    meaning: 'Not only... but also',
    explanation:
      'Used to emphasize that something applies not just to one thing, but to additional things as well.',
    examples: [
      { jp: '彼は英語ばかりでなく、フランス語も話せる。', en: 'He can speak not only English but also French.' },
      { jp: 'この店は安いばかりでなく、品物もいい。', en: 'This shop is not only cheap but also has good products.' },
    ],
  },
  {
    name: '〜つもりだ',
    meaning: 'To intend to',
    explanation:
      'Expresses a strong intention or plan to do something. More assertive than 〜ようと思う.',
    examples: [
      { jp: '来年、日本に留学するつもりだ。', en: 'I intend to study abroad in Japan next year.' },
      { jp: '週末は家で勉強するつもりです。', en: 'I plan to study at home this weekend.' },
    ],
  },
  {
    name: '〜はずだ',
    meaning: 'Should be / Supposed to',
    explanation:
      'Indicates a strong expectation based on logic, common sense, or prior information.',
    examples: [
      { jp: '彼はもう着いているはずだ。', en: 'He should have arrived by now.' },
      { jp: 'この薬を飲めば、すぐよくなるはずです。', en: 'If you take this medicine, you should feel better soon.' },
    ],
  },
  {
    name: '〜ようにする',
    meaning: 'To make sure to / Try to',
    explanation:
      'Expresses an effort or habit — making a conscious effort to do (or not do) something.',
    examples: [
      { jp: '毎日、日本語を話すようにしている。', en: 'I make sure to speak Japanese every day.' },
      { jp: '遅刻しないようにしてください。', en: 'Please make sure not to be late.' },
    ],
  },
  {
    name: '〜によって',
    meaning: 'Depending on / By means of',
    explanation:
      'Indicates the cause, means, or agent of an action. Also used to show variation depending on something.',
    examples: [
      { jp: '国によって文化が違う。', en: 'Culture differs depending on the country.' },
      { jp: 'この問題は先生によって解決された。', en: 'This problem was solved by the teacher.' },
    ],
  },
  {
    name: '〜に対して',
    meaning: 'Towards / Against / In contrast to',
    explanation:
      'Expresses an attitude or action directed at someone or something, or a contrast between two things.',
    examples: [
      { jp: '彼の発言に対して抗議した。', en: 'I protested against his remark.' },
      { jp: '姉に対して、弟はとても背が高い。', en: 'In contrast to his sister, the brother is very tall.' },
    ],
  },
];

const studyPlan = [
  { week: 1, focus: 'Review N4 & Gap Filling', hours: 12, details: 'Identify and fill any gaps in your N4 knowledge before starting N3.' },
  { week: 2, focus: 'N3 Vocabulary (Part 1)', hours: 15, details: 'Learn 750 new words focused on society, culture, and current events.' },
  { week: 3, focus: 'N3 Vocabulary (Part 2)', hours: 15, details: 'Continue with 750 more words and begin themed kanji study.' },
  { week: 4, focus: 'N3 Kanji (200 characters)', hours: 12, details: 'Learn 200 new kanji, focusing on readings and common compounds.' },
  { week: 5, focus: 'Grammar: Complex Sentences', hours: 15, details: 'Master 〜ばかりでなく, 〜はずだ, 〜つもりだ, and related patterns.' },
  { week: 6, focus: 'Grammar: Expressions & Nuance', hours: 15, details: 'Study 〜ようにする, 〜によって, 〜に対して, and modal expressions.' },
  { week: 7, focus: 'Reading Comprehension', hours: 12, details: 'Practice reading N3-level passages, articles, and essays.' },
  { week: 8, focus: 'Listening & Shadowing', hours: 12, details: 'Train your ear with N3 audio and practice shadowing native speech.' },
  { week: 9, focus: 'Mock Exam (Part 1)', hours: 15, details: 'Take a half-length practice test and analyze your results.' },
  { week: 10, focus: 'Mock Exam (Part 2) & Review', hours: 15, details: 'Full-length mock exam, targeted review, and final preparation.' },
];

const stats = [
  { icon: BookOpen, value: '3,000', label: 'Vocabulary' },
  { icon: PenTool, value: '650', label: 'Kanji' },
  { icon: FileText, value: '120', label: 'Grammar' },
  { icon: Clock, value: '12-15', label: 'Weekly Hours' },
];

export default function N3Page() {
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-amber-50 to-background py-12 lg:py-16 dark:from-amber-950/20">
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
              <span className="font-medium">N3</span>
            </nav>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600">
                <span className="text-3xl font-bold text-white">N3</span>
              </div>
              <div>
                <Badge variant="outline" className="mb-2 border-amber-600 text-amber-600">
                  Intermediate Level
                </Badge>
                <h1 className="text-3xl font-bold sm:text-4xl">JLPT N3 Preparation</h1>
                <p className="text-muted-foreground">Natural Japanese in 9–12 months</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border bg-background p-4">
                  <stat.icon className="mb-2 h-5 w-5 text-amber-600" />
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
                        <BookOpen className="h-5 w-5 text-amber-600" />
                        What is JLPT N3?
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        JLPT N3 is the intermediate level — the bridge between basic and advanced
                        Japanese. At this level, you can:
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                          Understand Japanese in everyday situations to a reasonable degree
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                          Read and comprehend general-topic materials with some effort
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                          Follow the main points of spoken Japanese at near-natural speed
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                          Express opinions, intentions, and nuanced ideas in conversation
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-amber-600" />
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
                        <span className="font-medium">155 minutes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Pass Score</span>
                        <span className="font-medium">95 / 180</span>
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
                        <BookOpen className="mb-3 h-8 w-8 text-amber-600" />
                        <h3 className="font-semibold">Vocabulary</h3>
                        <p className="text-sm text-muted-foreground">3,000 words</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href="/learn/kanji">
                    <Card className="h-full cursor-pointer transition hover:shadow-md">
                      <CardContent className="pt-6">
                        <PenTool className="mb-3 h-8 w-8 text-amber-600" />
                        <h3 className="font-semibold">Kanji</h3>
                        <p className="text-sm text-muted-foreground">650 characters</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href="/learn/grammar">
                    <Card className="h-full cursor-pointer transition hover:shadow-md">
                      <CardContent className="pt-6">
                        <FileText className="mb-3 h-8 w-8 text-amber-600" />
                        <h3 className="font-semibold">Grammar</h3>
                        <p className="text-sm text-muted-foreground">Intermediate patterns</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href="/resources">
                    <Card className="h-full cursor-pointer transition hover:shadow-md">
                      <CardContent className="pt-6">
                        <Headphones className="mb-3 h-8 w-8 text-amber-600" />
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
                  <h2 className="text-2xl font-bold">Essential N3 Vocabulary</h2>
                  <p className="text-muted-foreground">
                    These 10 words appear frequently in N3-level reading and listening materials.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {vocabulary.map((item, i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-3 text-white">
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
                      View All N3 Vocabulary
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>

              {/* Grammar */}
              <TabsContent value="grammar" className="space-y-6">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold">Essential N3 Grammar</h2>
                  <p className="text-muted-foreground">
                    These 6 grammar points are essential for expressing complex ideas at the
                    intermediate level.
                  </p>
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                  {grammarPoints.map((point, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-amber-600">{point.name}</Badge>
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
                  <h2 className="text-2xl font-bold">10-Week Study Plan</h2>
                  <p className="text-muted-foreground">
                    A thorough week-by-week plan to prepare for JLPT N3.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {studyPlan.map((week) => (
                    <Card key={week.week} className="transition hover:border-amber-500">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="flex items-center gap-2">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">
                              {week.week}
                            </span>
                            Week {week.week}
                          </CardTitle>
                          <Badge variant="outline" className="border-amber-600 text-amber-600">
                            <Clock className="mr-1 h-3 w-3" />
                            {week.hours} hrs
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="font-semibold text-amber-600">{week.focus}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{week.details}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Card className="bg-muted/30">
                  <CardContent className="flex items-start gap-3 pt-6">
                    <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Tip:</span> At the N3 level,
                      reading speed becomes critical. Practice timed reading exercises and try to
                      understand the gist without looking up every word. Immersion through news,
                      podcasts, and TV shows accelerates progress significantly.
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
            <Card className="overflow-hidden border-0 bg-gradient-to-r from-amber-500 to-orange-600 text-white">
              <CardContent className="p-8 text-center lg:p-12">
                <GraduationCap className="mx-auto mb-4 h-12 w-12 opacity-80" />
                <h2 className="text-2xl font-bold sm:text-3xl">Ready to Reach Intermediate?</h2>
                <p className="mx-auto mt-3 max-w-xl opacity-90">
                  N3 is your bridge to advanced Japanese. Start building real-world fluency today.
                </p>
                <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/learn/vocabulary">
                      Start N3 Vocabulary
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
