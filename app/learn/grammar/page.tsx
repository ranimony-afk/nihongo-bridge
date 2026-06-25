'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Layers, ChevronRight, CheckCircle } from 'lucide-react';

const grammarData = [
  { pattern: '〜です / 〜ます', title: 'Desu/Masu Form', level: 'N5', explanation: 'Basic polite sentence ending.', examples: ['私は学生です。', '毎日学校へ行きます。'] },
  { pattern: '〜は', title: 'Particle Wa', level: 'N5', explanation: 'Topic marker.', examples: ['私は日本人です。', 'これは本です。'] },
  { pattern: '〜を', title: 'Particle Wo', level: 'N5', explanation: 'Object marker.', examples: ['本を読みます。', 'ご飯を食べます。'] },
  { pattern: '〜に', title: 'Particle Ni', level: 'N5', explanation: 'Location/time/direction marker.', examples: ['家にいます。', '7時に起きます。'] },
  { pattern: '〜て', title: 'Te-form', level: 'N5', explanation: 'Connective form of verbs.', examples: ['待ってください。', '家に帰って寝ます。'] },
];

const levels = ['All', 'N5', 'N4', 'N3', 'N2'];

export default function GrammarPage() {
  const [search, setSearch] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const filtered = grammarData.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || item.pattern.includes(search);
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
              <div><h1 className="text-3xl font-bold">Japanese Grammar</h1><p className="text-muted-foreground">Essential patterns explained</p></div>
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
            <div className="space-y-6">
              {filtered.map((item, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div><h2 className="text-xl font-semibold">{item.title}</h2><p className="text-lg text-primary">{item.pattern}</p></div>
                      <Badge>{item.level}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.explanation}</p>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <p className="text-xs text-muted-foreground mb-2">Examples</p>
                      {item.examples.map((ex, j) => <p key={j} className="text-sm">{ex}</p>)}
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-primary/5 rounded-lg mt-4">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm">Use in formal situations and with strangers.</p>
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
