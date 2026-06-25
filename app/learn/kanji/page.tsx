'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, PenTool, ChevronRight } from 'lucide-react';

const kanjiData = [
  { kanji: '日', meaning_en: 'Day, Sun', meaning_ta: 'நாள்', onyomi: 'ニチ', kunyomi: 'ひ', strokes: 4, examples: ['日本', '日曜日'], level: 'N5' },
  { kanji: '本', meaning_en: 'Book, Origin', meaning_ta: 'புத்தகம்', onyomi: 'ホン', kunyomi: 'もと', strokes: 5, examples: ['日本', '本'], level: 'N5' },
  { kanji: '人', meaning_en: 'Person', meaning_ta: 'மனிதர்', onyomi: 'ジン', kunyomi: 'ひと', strokes: 2, examples: ['日本人', '三人'], level: 'N5' },
  { kanji: '学', meaning_en: 'Learn', meaning_ta: 'கற்றல்', onyomi: 'ガク', kunyomi: 'まなぶ', strokes: 8, examples: ['学校', '学生'], level: 'N5' },
  { kanji: '大', meaning_en: 'Big', meaning_ta: 'பெரிய', onyomi: 'ダイ', kunyomi: 'おおきい', strokes: 3, examples: ['大丈夫', '大学'], level: 'N5' },
  { kanji: '小', meaning_en: 'Small', meaning_ta: 'சிறிய', onyomi: 'ショウ', kunyomi: 'ちいさい', strokes: 3, examples: ['小学校', '小さい'], level: 'N5' },
];

const levels = ['All', 'N5', 'N4', 'N3', 'N2'];

export default function KanjiPage() {
  const [search, setSearch] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const filtered = kanjiData.filter((item) => {
    const matchesSearch = item.kanji.includes(search) || item.meaning_en.includes(search);
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
              <div><h1 className="text-3xl font-bold">Kanji Studies</h1><p className="text-muted-foreground">Master Japanese characters</p></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search..." className="pl-10" value={search} onChange={(e) => setSearch(e.target.value)} />
              </div>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-[120px]"><SelectValue placeholder="Level" /></SelectTrigger>
                <SelectContent>{levels.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}</SelectContent>
              </Select>
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
                      <div><p className="text-xs text-muted-foreground">音読み</p><p className="font-medium">{item.onyomi}</p></div>
                      <div><p className="text-xs text-muted-foreground">訓読み</p><p className="font-medium">{item.kunyomi}</p></div>
                      <div className="pt-2 border-t"><p className="font-medium">{item.meaning_en}</p><p className="text-sm text-muted-foreground">{item.meaning_ta}</p></div>
                      <div className="flex items-center justify-between pt-2">
                        <Badge variant="secondary">{item.strokes} strokes</Badge>
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
