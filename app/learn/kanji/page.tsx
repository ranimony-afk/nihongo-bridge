'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, PenTool, ChevronRight } from 'lucide-react';

type Kanji = {
  kanji: string;
  meaning_en: string;
  meaning_ta: string;
  onyomi: string;
  kunyomi: string;
  strokes: number;
  examples: string[];
  level: string;
};

const kanjiData: Kanji[] = [
  {
    kanji: '日',
    meaning_en: 'Day, Sun',
    meaning_ta: 'நாள், சூரியன்',
    onyomi: 'ニチ、ジツ',
    kunyomi: 'ひ、-か',
    strokes: 4,
    examples: ['日本 (Japan)', '日曜日 (Sunday)', '毎日 (every day)'],
    level: 'N5',
  },
  {
    kanji: '本',
    meaning_en: 'Book, Origin',
    meaning_ta: 'புத்தகம், தோற்றம்',
    onyomi: 'ホン',
    kunyomi: 'もと',
    strokes: 5,
    examples: ['日本 (Japan)', '本 (book)', '本来 (originally)'],
    level: 'N5',
  },
  {
    kanji: '人',
    meaning_en: 'Person',
    meaning_ta: 'மனிதர்',
    onyomi: 'ジン、ニン',
    kunyomi: 'ひと',
    strokes: 2,
    examples: ['日本人 (Japanese person)', '三人 (three people)', 'この人 (this person)'],
    level: 'N5',
  },
  {
    kanji: '学',
    meaning_en: 'Learn, Study',
    meaning_ta: 'கற்றல்',
    onyomi: 'ガク',
    kunyomi: 'まなぶ',
    strokes: 8,
    examples: ['学校 (school)', '学生 (student)', '大学 (university)'],
    level: 'N5',
  },
  {
    kanji: '大',
    meaning_en: 'Big, Large',
    meaning_ta: 'பெரிய',
    onyomi: 'ダイ、タイ',
    kunyomi: 'おお-、おおきい',
    strokes: 3,
    examples: ['大丈夫 (okay)', '大学 (university)', '大きい (big)'],
    level: 'N5',
  },
  {
    kanji: '小',
    meaning_en: 'Small',
    meaning_ta: 'சிறிய',
    onyomi: 'ショウ',
    kunyomi: 'ちい-、こ-',
    strokes: 3,
    examples: ['小学校 (elementary school)', '小さい (small)', '小人 (small person)'],
    level: 'N5',
  },
  {
    kanji: '山',
    meaning_en: 'Mountain',
    meaning_ta: 'மலை',
    onyomi: 'サン',
    kunyomi: 'やま',
    strokes: 3,
    examples: ['富士山 (Mt. Fuji)', '山 (mountain)', '火山 (volcano)'],
    level: 'N5',
  },
  {
    kanji: '川',
    meaning_en: 'River',
    meaning_ta: 'ஆறு',
    onyomi: 'セン',
    kunyomi: 'かわ',
    strokes: 3,
    examples: ['川 (river)', '小川 (stream)', '河川 (rivers)'],
    level: 'N5',
  },
  {
    kanji: '語',
    meaning_en: 'Language, Word',
    meaning_ta: 'மொழி',
    onyomi: 'ゴ',
    kunyomi: 'かたる',
    strokes: 14,
    examples: ['日本語 (Japanese)', '英語 (English)', '言葉 (word)'],
    level: 'N4',
  },
  {
    kanji: '会',
    meaning_en: 'Meet, Assembly',
    meaning_ta: 'சந்திப்பு',
    onyomi: 'カイ',
    kunyomi: 'あう',
    strokes: 6,
    examples: ['会社 (company)', '会議 (meeting)', '会う (to meet)'],
    level: 'N4',
  },
];

const levels = ['All', 'N5', 'N4', 'N3', 'N2'];

export default function KanjiPage() {
  const [search, setSearch] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const filtered = kanjiData.filter((item) => {
    const q = search.toLowerCase();
    const matchesSearch =
      item.kanji.includes(search) ||
      item.meaning_en.toLowerCase().includes(q) ||
      item.meaning_ta.includes(search) ||
      item.onyomi.toLowerCase().includes(q) ||
      item.kunyomi.toLowerCase().includes(q);
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
              <span className="font-medium">Kanji</span>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 bg-emerald-500 rounded-xl flex items-center justify-center">
                <PenTool className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Kanji Studies</h1>
                <p className="text-muted-foreground">Master Japanese characters with readings and examples</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search by kanji, meaning, or reading..."
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
            <p className="text-muted-foreground mb-6">Showing {filtered.length} kanji</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item, i) => (
                <Card key={i} className="hover:shadow-lg transition">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-6xl font-bold kanji-text text-primary">{item.kanji}</span>
                      <Badge variant="outline">{item.level}</Badge>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs text-muted-foreground">音読み (Onyomi)</p>
                        <p className="font-medium kanji-text">{item.onyomi}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">訓読み (Kunyomi)</p>
                        <p className="font-medium kanji-text">{item.kunyomi}</p>
                      </div>
                      <div className="pt-2 border-t">
                        <p className="font-medium">{item.meaning_en}</p>
                        <p className="text-sm text-muted-foreground">{item.meaning_ta}</p>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <Badge variant="secondary">{item.strokes} strokes</Badge>
                      </div>
                      <div className="pt-2">
                        <p className="text-xs text-muted-foreground mb-1">Examples</p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.examples.map((ex, j) => (
                            <Badge key={j} variant="outline" className="text-xs">
                              {ex}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No kanji found. Try a different search or level.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
