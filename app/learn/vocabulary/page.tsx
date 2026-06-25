'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Volume2, BookOpen, ChevronRight } from 'lucide-react';

type Word = {
  japanese: string;
  romaji: string;
  english: string;
  tamil: string;
  category: string;
  level: string;
  example: string;
  exampleEn: string;
};

const vocabularyData: Word[] = [
  {
    japanese: 'おはようございます',
    romaji: 'ohayou gozaimasu',
    english: 'Good morning (polite)',
    tamil: 'காலை வணக்கம்',
    category: 'Greetings',
    level: 'N5',
    example: 'おはようございます。今日もいい天気ですね。',
    exampleEn: 'Good morning. It is nice weather today as well.',
  },
  {
    japanese: 'ありがとう',
    romaji: 'arigatou',
    english: 'Thank you',
    tamil: 'நன்றி',
    category: 'Greetings',
    level: 'N5',
    example: '手伝ってくれてありがとう。',
    exampleEn: 'Thank you for helping me.',
  },
  {
    japanese: '学校',
    romaji: 'gakkou',
    english: 'School',
    tamil: 'பள்ளி',
    category: 'School',
    level: 'N5',
    example: '私は毎日学校へ行きます。',
    exampleEn: 'I go to school every day.',
  },
  {
    japanese: '先生',
    romaji: 'sensei',
    english: 'Teacher',
    tamil: 'ஆசிரியர்',
    category: 'School',
    level: 'N5',
    example: '田中先生は日本語を教えます。',
    exampleEn: 'Tanaka-sensei teaches Japanese.',
  },
  {
    japanese: '仕事',
    romaji: 'shigoto',
    english: 'Work, Job',
    tamil: 'வேலை',
    category: 'Work',
    level: 'N5',
    example: '父の仕事は大変です。',
    exampleEn: 'My father\'s work is demanding.',
  },
  {
    japanese: '会社',
    romaji: 'kaisha',
    english: 'Company',
    tamil: 'நிறுவனம்',
    category: 'Work',
    level: 'N4',
    example: 'あの会社で働いています。',
    exampleEn: 'I work at that company.',
  },
  {
    japanese: '水',
    romaji: 'mizu',
    english: 'Water',
    tamil: 'தண்ணீர்',
    category: 'Food',
    level: 'N5',
    example: '水を飲みたいです。',
    exampleEn: 'I want to drink water.',
  },
  {
    japanese: 'ご飯',
    romaji: 'gohan',
    english: 'Rice, Meal',
    tamil: 'சாதம்',
    category: 'Food',
    level: 'N5',
    example: '毎朝ご飯を食べます。',
    exampleEn: 'I eat rice every morning.',
  },
  {
    japanese: '電車',
    romaji: 'densha',
    english: 'Train',
    tamil: 'ரயில்',
    category: 'Travel',
    level: 'N5',
    example: '電車で駅へ行きます。',
    exampleEn: 'I go to the station by train.',
  },
  {
    japanese: '旅行',
    romaji: 'ryokou',
    english: 'Travel',
    tamil: 'பயணம்',
    category: 'Travel',
    level: 'N4',
    example: '来月、日本へ旅行します。',
    exampleEn: 'I will travel to Japan next month.',
  },
  {
    japanese: '家族',
    romaji: 'kazoku',
    english: 'Family',
    tamil: 'குடும்பம்',
    category: 'Family',
    level: 'N5',
    example: '私の家族は五人です。',
    exampleEn: 'My family has five people.',
  },
  {
    japanese: '母',
    romaji: 'haha',
    english: 'Mother (my own)',
    tamil: 'தாய்',
    category: 'Family',
    level: 'N5',
    example: '母は料理が上手です。',
    exampleEn: 'My mother is good at cooking.',
  },
  {
    japanese: '山',
    romaji: 'yama',
    english: 'Mountain',
    tamil: 'மலை',
    category: 'Nature',
    level: 'N5',
    example: '週末に山へ登ります。',
    exampleEn: 'I climb a mountain on weekends.',
  },
  {
    japanese: '川',
    romaji: 'kawa',
    english: 'River',
    tamil: 'ஆறு',
    category: 'Nature',
    level: 'N5',
    example: 'この川はきれいです。',
    exampleEn: 'This river is beautiful.',
  },
];

const categories = ['All', 'Greetings', 'Daily Life', 'School', 'Work', 'Food', 'Travel', 'Family', 'Nature'];

export default function VocabularyPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filtered = vocabularyData.filter((word) => {
    const q = search.toLowerCase();
    const matchesSearch =
      word.japanese.includes(search) ||
      word.romaji.toLowerCase().includes(q) ||
      word.english.toLowerCase().includes(q);
    const matchesCategory = selectedCategory === 'All' || word.category === selectedCategory;
    return matchesSearch && matchesCategory;
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
              <span className="font-medium">Vocabulary</span>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 bg-red-500 rounded-xl flex items-center justify-center">
                <BookOpen className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Japanese Vocabulary</h1>
                <p className="text-muted-foreground">Build your word bank with meanings in Tamil & English</p>
              </div>
            </div>

            <div className="relative mt-8 max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search by Japanese, romaji, or English..."
                className="pl-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                    selectedCategory === cat
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/70'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-muted-foreground mb-6">Showing {filtered.length} words</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((word, i) => (
                <Card key={i} className="overflow-hidden hover:shadow-lg transition">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-3xl font-semibold kanji-text">{word.japanese}</p>
                        <p className="text-sm text-muted-foreground">{word.romaji}</p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Volume2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div>
                        <p className="text-xs text-muted-foreground">English</p>
                        <p className="font-medium">{word.english}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Tamil</p>
                        <p className="font-medium">{word.tamil}</p>
                      </div>
                    </div>

                    <div className="bg-muted/30 rounded-lg p-3 mb-4">
                      <p className="text-sm kanji-text mb-1">{word.example}</p>
                      <p className="text-xs text-muted-foreground">{word.exampleEn}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{word.category}</Badge>
                      <Badge variant="outline">{word.level}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No words found. Try a different search or category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
