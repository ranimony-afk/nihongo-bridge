import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Download, Video, Music, Search, BookOpen, PenTool } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resources - Free Japanese Learning Downloads',
  description: 'Download free Japanese learning resources.',
};

const resources = [
  { title: 'JLPT N5 Vocabulary Complete List', description: '800 N5 vocabulary words with meanings.', type: 'pdf', level: 'N5', downloads: 2450, size: '2.3 MB' },
  { title: 'JLPT N4 Vocabulary Complete List', description: '1,500 essential N4 vocabulary.', type: 'pdf', level: 'N4', downloads: 1820, size: '3.1 MB' },
  { title: 'N5 Kanji Writing Practice Sheets', description: '100 N5 kanji with stroke order.', type: 'pdf', level: 'N5', downloads: 3100, size: '4.5 MB' },
  { title: 'Basic Japanese Grammar Cheatsheet', description: 'Quick reference for N5-N4 grammar.', type: 'pdf', level: 'N4-N5', downloads: 4200, size: '1.2 MB' },
  { title: 'Hiragana & Katakana Practice', description: 'Printable practice sheets.', type: 'pdf', level: 'N5', downloads: 5800, size: '1.8 MB' },
  { title: 'Japanese Particles Guide', description: 'Complete guide to all major particles.', type: 'pdf', level: 'N5-N3', downloads: 2900, size: '890 KB' },
];

const getIcon = (type: string) => type === 'video' ? Video : type === 'audio' ? Music : FileText;

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-b from-background to-muted/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4"><Download className="h-3 w-3 mr-1" />Free Downloads</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Learning <span className="text-primary">Resources</span></h1>
              <p className="text-xl text-muted-foreground">Download free Japanese learning materials.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-background rounded-lg p-4 text-center border"><BookOpen className="h-8 w-8 text-primary mx-auto mb-2" /><p className="text-2xl font-bold">12</p><p className="text-sm text-muted-foreground">Vocabulary Lists</p></div>
              <div className="bg-background rounded-lg p-4 text-center border"><PenTool className="h-8 w-8 text-primary mx-auto mb-2" /><p className="text-2xl font-bold">8</p><p className="text-sm text-muted-foreground">Kanji Sheets</p></div>
              <div className="bg-background rounded-lg p-4 text-center border"><FileText className="h-8 w-8 text-primary mx-auto mb-2" /><p className="text-2xl font-bold">10</p><p className="text-sm text-muted-foreground">Grammar Guides</p></div>
              <div className="bg-background rounded-lg p-4 text-center border"><Music className="h-8 w-8 text-primary mx-auto mb-2" /><p className="text-2xl font-bold">5</p><p className="text-sm text-muted-foreground">Audio Files</p></div>
            </div>
          </div>
        </section>

        <section className="py-8 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search resources..." className="pl-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]"><SelectValue placeholder="Category" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="vocabulary">Vocabulary</SelectItem>
                  <SelectItem value="kanji">Kanji</SelectItem>
                  <SelectItem value="grammar">Grammar</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[120px]"><SelectValue placeholder="Level" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="n5">N5</SelectItem>
                  <SelectItem value="n4">N4</SelectItem>
                  <SelectItem value="n3">N3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((r, i) => {
                const Icon = getIcon(r.type);
                return (
                  <Card key={i} className="hover:shadow-md transition">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-semibold">{r.title}</h3>
                            <Badge variant="outline">{r.level}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{r.description}</p>
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span className="flex items-center"><Download className="h-3 w-3 mr-1" />{r.downloads.toLocaleString()}</span>
                              <span>{r.size}</span>
                            </div>
                            <Button size="sm"><Download className="h-4 w-4 mr-1" />Download</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Start With These</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/jlpt/n5"><Card className="hover:shadow-md transition"><CardContent className="p-6 text-center"><BookOpen className="h-8 w-8 text-primary mx-auto mb-3" /><h3 className="font-semibold">JLPT N5 Course</h3><p className="text-sm text-muted-foreground">Structured beginner lessons</p></CardContent></Card></Link>
              <Link href="/learn/vocabulary"><Card className="hover:shadow-md transition"><CardContent className="p-6 text-center"><FileText className="h-8 w-8 text-primary mx-auto mb-3" /><h3 className="font-semibold">Vocabulary Builder</h3><p className="text-sm text-muted-foreground">Daily words and phrases</p></CardContent></Card></Link>
              <Link href="/learn/kanji"><Card className="hover:shadow-md transition"><CardContent className="p-6 text-center"><PenTool className="h-8 w-8 text-primary mx-auto mb-3" /><h3 className="font-semibold">Kanji Master</h3><p className="text-sm text-muted-foreground">Character by character</p></CardContent></Card></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
