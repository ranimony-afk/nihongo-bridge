'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Volume2, ArrowRight, BookOpen, ChevronRight } from 'lucide-react';

const vocabularyData = [
  { japanese: 'おはようございます', romaji: 'ohayou gozaimasu', english: 'Good morning (polite)', tamil: 'காலை வணக்கம்', category: 'Greetings', level: 'N5' },
  { japanese: 'ありがとう', romaji: 'arigatou', english: 'Thank you', tamil: 'நன்றி', category: 'Greetings', level: 'N5' },
  { japanese: '水', romaji: 'mizu', english: 'Water', tamil: 'தண்ணீர்', category: 'Nouns', level: 'N5' },
  { japanese: '食べる', romaji: 'taberu', english: 'To eat', tamil: 'சாப்பிடு', category: 'Verbs', level: 'N5' },
  { japanese: '飲む', romaji: 'nomu', english: 'To drink', tamil: 'குடி', category: 'Verbs', level: 'N5' },
  { japanese: '大きい', romaji: 'ookii', english: 'Big', tamil: 'பெரிய', category: 'Adjectives', level: 'N5' },
  { japanese: '学校', romaji: 'gakkou', english: 'School', tamil: 'பள்ளி', category: 'Places', level: 'N5' },
  { japanese: '先生', romaji: 'sensei', english: 'Teacher', tamil: 'ஆசிரியர்', category: 'People', level: 'N5' },
];

const categories = ['All', 'Greetings', 'Nouns', 'Verbs', 'Adjectives', 'Places', 'People'];
const levels = ['All', 'N5', 'N4', 'N3', 'N2'];

export default function VocabularyPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filtered = vocabularyData.filter((word) => {
    const matchesSearch = word.japanese.includes(search) || word.romaji.includes(search) || word.english.includes(search);
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
                <p className="text-muted-foreground">Build your word bank</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search..." className="pl-10" value={search} onChange={(e) => setSearch(e.target.value)} />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]"><SelectValue placeholder="Category" /></SelectTrigger>
                <SelectContent>{categories.map((cat) => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}</SelectContent>
              </Select>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-muted-foreground mb-6">Showing {filtered.length} words</p>
            <div className="space-y-4">
              {filtered.map((word, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-4 gap-0">
                      <div className="p-6 bg-muted/30 text-center">
                        <p className="text-3xl font-semibold kanji-text">{word.japanese}</p>
                        <p className="text-sm text-muted-foreground">{word.romaji}</p>
                        <Button variant="ghost" size="icon" className="mt-2"><Volume2 className="h-4 w-4" /></Button>
                      </div>
                      <div className="p-6 md:col-span-2 grid grid-cols-2 gap-4">
                        <div><p className="text-xs text-muted-foreground">English</p><p className="font-medium">{word.english}</p></div>
                        <div><p className="text-xs text-muted-foreground">Tamil</p><p className="font-medium">{word.tamil}</p></div>
                      </div>
                      <div className="p-6 bg-muted/10 flex items-center justify-end gap-2">
                        <Badge variant="secondary">{word.category}</Badge>
                        <Badge variant="outline">{word.level}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
