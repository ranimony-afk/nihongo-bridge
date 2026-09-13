'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Layers, ChevronRight, CheckCircle } from 'lucide-react';

type Example = { japanese: string; english: string };

type GrammarPoint = {
  pattern: string;
  title: string;
  level: string;
  explanation: string;
  examples: Example[];
};

const grammarData: GrammarPoint[] = [
  {
    pattern: '〜です / 〜ます',
    title: 'Desu/Masu Form',
    level: 'N5',
    explanation: 'The basic polite sentence ending. Use です for nouns/adjectives and ます for verbs to form polite statements.',
    examples: [
      { japanese: '私は学生です。', english: 'I am a student.' },
      { japanese: '毎日学校へ行きます。', english: 'I go to school every day.' },
    ],
  },
  {
    pattern: '〜は〜です',
    title: 'Topic Marker は',
    level: 'N5',
    explanation: 'The particle は marks the topic of the sentence. It tells the listener what the sentence is about.',
    examples: [
      { japanese: '私は日本人です。', english: 'I am Japanese.' },
      { japanese: 'これは本です。', english: 'This is a book.' },
    ],
  },
  {
    pattern: '〜を',
    title: 'Object Marker を',
    level: 'N5',
    explanation: 'The particle を marks the direct object of a transitive verb — the thing that receives the action.',
    examples: [
      { japanese: '本を読みます。', english: 'I read a book.' },
      { japanese: 'ご飯を食べます。', english: 'I eat rice.' },
    ],
  },
  {
    pattern: '〜に',
    title: 'Location/Time Marker に',
    level: 'N5',
    explanation: 'The particle に indicates a point in time, a destination, or a location where something exists.',
    examples: [
      { japanese: '家にいます。', english: 'I am at home.' },
      { japanese: '七時に起きます。', english: 'I wake up at seven.' },
    ],
  },
  {
    pattern: '〜てください',
    title: 'Te-form Request',
    level: 'N5',
    explanation: 'Attach ください to the te-form of a verb to make a polite request or command.',
    examples: [
      { japanese: '待ってください。', english: 'Please wait.' },
      { japanese: 'ここに座ってください。', english: 'Please sit here.' },
    ],
  },
  {
    pattern: '〜たい',
    title: 'Expressing Desire',
    level: 'N5',
    explanation: 'Attach たい to the stem of a verb to express wanting to do something. Conjugates like an i-adjective.',
    examples: [
      { japanese: '日本へ行きたいです。', english: 'I want to go to Japan.' },
      { japanese: '寿司を食べたいです。', english: 'I want to eat sushi.' },
    ],
  },
  {
    pattern: '〜ている',
    title: 'Continuous Action',
    level: 'N4',
    explanation: 'Attach ている to the te-form of a verb to express an ongoing action or a continuing state.',
    examples: [
      { japanese: '日本語を勉強しています。', english: 'I am studying Japanese.' },
      { japanese: '東京に住んでいます。', english: 'I live in Tokyo.' },
    ],
  },
  {
    pattern: '〜たことがある',
    title: 'Experience',
    level: 'N4',
    explanation: 'Attach ことがある to the past tense of a verb to express having experienced something at least once.',
    examples: [
      { japanese: '日本へ行ったことがあります。', english: 'I have been to Japan before.' },
      { japanese: '寿司を食べたことがあります。', english: 'I have eaten sushi before.' },
    ],
  },
];

const levels = ['All', 'N5', 'N4', 'N3', 'N2'];

export default function GrammarPage() {
  const [search, setSearch] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const filtered = grammarData.filter((item) => {
    const q = search.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(q) ||
      item.pattern.includes(search) ||
      item.explanation.toLowerCase().includes(q);
    const matchesLevel = selectedLevel === 'All' || item.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-b from-background to-muted/30 py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm mb-8">
              <Link href="/" className="text-muted-foreground hover:text-primary">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/learn" className="text-muted-foreground hover:text-primary">Learn</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="font-medium">Grammar</span>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 bg-amber-500 rounded-xl flex items-center justify-center">
                <Layers className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Japanese Grammar</h1>
                <p className="text-muted-foreground">Essential patterns explained with examples</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search grammar patterns..."
                  className="pl-10"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {levels.map((l) => (
                  <button
                    key={l}
                    onClick={() => setSelectedLevel(l)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                      selectedLevel === l
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/70'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-muted-foreground mb-6">Showing {filtered.length} grammar patterns</p>
            <div className="space-y-6">
              {filtered.map((item, i) => (
                <Card key={i} className="hover:shadow-lg transition">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                      <div>
                        <h2 className="text-xl font-semibold">{item.title}</h2>
                        <p className="text-lg text-primary kanji-text">{item.pattern}</p>
                      </div>
                      <Badge>{item.level}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.explanation}</p>
                    <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Example Sentences</p>
                      {item.examples.map((ex, j) => (
                        <div key={j} className="border-l-2 border-primary/40 pl-3">
                          <p className="text-sm kanji-text">{ex.japanese}</p>
                          <p className="text-xs text-muted-foreground">{ex.english}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-primary/5 rounded-lg mt-4">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm">Practice this pattern in formal situations and with people you don&apos;t know well.</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No grammar patterns found. Try a different search or level.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
