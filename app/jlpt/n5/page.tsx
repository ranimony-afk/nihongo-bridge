'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, PenTool, Headphones, FileText, ArrowRight, ChevronRight, Clock, Calendar, Award } from 'lucide-react';

const studyPlan = [
  { week: 1, focus: 'Hiragana & Katakana', hours: 10 },
  { week: 2, focus: 'Basic Vocabulary', hours: 8 },
  { week: 3, focus: 'Particles', hours: 8 },
  { week: 4, focus: 'Basic Verbs', hours: 10 },
  { week: 5, focus: 'Adjectives', hours: 8 },
  { week: 6, focus: 'Grammar Patterns', hours: 10 },
];

const grammarPoints = [
  { name: 'Desu/Masu Form', mastered: true },
  { name: 'Particle Wa (は)', mastered: true },
  { name: 'Particle Wo (を)', mastered: true },
  { name: 'Particle Ni (に)', mastered: false },
  { name: 'Verb Te-form', mastered: false },
];

export default function N5Page() {
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-b from-green-50 to-background dark:from-green-950/20 py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm mb-8">
              <Link href="/" className="text-muted-foreground hover:text-primary">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/jlpt" className="text-muted-foreground hover:text-primary">JLPT</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="font-medium">N5</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-3xl font-bold text-white">N5</span>
              </div>
              <div>
                <Badge variant="outline" className="text-green-600 border-green-600 mb-2">Beginner Level</Badge>
                <h1 className="text-3xl sm:text-4xl font-bold">JLPT N5 Preparation</h1>
                <p className="text-muted-foreground">Master basic Japanese in 3-6 months</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-background rounded-lg p-4 border"><p className="text-sm text-muted-foreground">Vocabulary</p><p className="text-2xl font-bold">800</p></div>
              <div className="bg-background rounded-lg p-4 border"><p className="text-sm text-muted-foreground">Kanji</p><p className="text-2xl font-bold">100</p></div>
              <div className="bg-background rounded-lg p-4 border"><p className="text-sm text-muted-foreground">Grammar</p><p className="text-2xl font-bold">50</p></div>
              <div className="bg-background rounded-lg p-4 border"><p className="text-sm text-muted-foreground">Weekly Hours</p><p className="text-2xl font-bold">8-10</p></div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="mb-6"><TabsTrigger value="overview">Overview</TabsTrigger><TabsTrigger value="grammar">Grammar</TabsTrigger><TabsTrigger value="plan">Study Plan</TabsTrigger></TabsList>
              <TabsContent value="overview" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader><CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5 text-primary" />What is JLPT N5?</CardTitle></CardHeader>
                    <CardContent className="prose dark:prose-invert">
                      <p className="text-muted-foreground">JLPT N5 is the easiest level, testing basic Japanese including:</p>
                      <ul className="text-muted-foreground"><li>Basic kanji and vocabulary</li><li>Simple grammar patterns</li><li>Basic reading and listening</li></ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader><CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5 text-primary" />Exam Details</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between"><span className="text-muted-foreground">Exams</span><span>2 per year (July & Dec)</span></div>
                      <div className="flex justify-between"><span className="text-muted-foreground">Duration</span><span>105 minutes</span></div>
                      <div className="flex justify-between"><span className="text-muted-foreground">Pass Score</span><span>80/180</span></div>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Link href="/learn/vocabulary"><Card className="hover:shadow-md transition cursor-pointer"><CardContent className="pt-6"><BookOpen className="h-8 w-8 text-primary mb-3" /><h3 className="font-semibold">Vocabulary</h3><p className="text-sm text-muted-foreground">800 words</p></CardContent></Card></Link>
                  <Link href="/learn/kanji"><Card className="hover:shadow-md transition cursor-pointer"><CardContent className="pt-6"><PenTool className="h-8 w-8 text-primary mb-3" /><h3 className="font-semibold">Kanji</h3><p className="text-sm text-muted-foreground">100 characters</p></CardContent></Card></Link>
                  <Link href="/learn/grammar"><Card className="hover:shadow-md transition cursor-pointer"><CardContent className="pt-6"><FileText className="h-8 w-8 text-primary mb-3" /><h3 className="font-semibold">Grammar</h3><p className="text-sm text-muted-foreground">Basic patterns</p></CardContent></Card></Link>
                  <Link href="/resources"><Card className="hover:shadow-md transition cursor-pointer"><CardContent className="pt-6"><Headphones className="h-8 w-8 text-primary mb-3" /><h3 className="font-semibold">Listening</h3><p className="text-sm text-muted-foreground">Audio practice</p></CardContent></Card></Link>
                </div>
              </TabsContent>
              <TabsContent value="grammar">
                <Card>
                  <CardHeader><CardTitle>Essential N5 Grammar</CardTitle><CardDescription>Master these to pass</CardDescription></CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {grammarPoints.map((point, i) => (
                        <div key={i} className="flex items-center justify-between p-4 rounded-lg border">
                          <span>{point.name}</span>
                          <Badge variant={point.mastered ? 'default' : 'secondary'}>{point.mastered ? 'Mastered' : 'In Progress'}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="plan">
                <Card>
                  <CardHeader><CardTitle className="flex items-center gap-2"><Clock className="h-5 w-5" />12-Week Study Plan</CardTitle></CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {studyPlan.map((week) => (
                        <div key={week.week} className="p-4 rounded-lg border hover:border-primary transition">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold">Week {week.week}</span>
                            <Badge variant="outline">{week.hours} hours</Badge>
                          </div>
                          <p className="font-medium text-primary">{week.focus}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-2">Ready to Begin?</h2>
                <p className="opacity-90 mb-6">Start with vocabulary.</p>
                <Button size="lg" variant="secondary" asChild><Link href="/learn/vocabulary">Start N5 Vocabulary<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
