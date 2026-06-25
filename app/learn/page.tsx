import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, PenTool, Layers, Headphones, ArrowRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Learn Japanese - Vocabulary, Grammar, Kanji',
  description: 'Master Japanese with lessons in vocabulary, grammar, and kanji.',
};

const learningPaths = [
  { icon: BookOpen, title: 'Vocabulary', description: 'Daily Japanese words with meanings in Tamil & English.', count: '500+ Words', href: '/learn/vocabulary', color: 'bg-red-500' },
  { icon: Layers, title: 'Grammar', description: 'Japanese grammar patterns with examples.', count: '100+ Lessons', href: '/learn/grammar', color: 'bg-amber-500' },
  { icon: PenTool, title: 'Kanji', description: 'Master kanji with stroke order and readings.', count: '200+ Kanji', href: '/learn/kanji', color: 'bg-emerald-500' },
];

export default function LearnPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-b from-background to-muted/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4"><Sparkles className="h-3 w-3 mr-1" />Learning Portal</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Learn Japanese</h1>
              <p className="text-xl text-muted-foreground">Master vocabulary, grammar, kanji, and more.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-background rounded-lg p-4 text-center border"><p className="text-2xl font-bold text-primary">500+</p><p className="text-sm text-muted-foreground">Vocabulary</p></div>
              <div className="bg-background rounded-lg p-4 text-center border"><p className="text-2xl font-bold text-primary">200+</p><p className="text-sm text-muted-foreground">Kanji</p></div>
              <div className="bg-background rounded-lg p-4 text-center border"><p className="text-2xl font-bold text-primary">100+</p><p className="text-sm text-muted-foreground">Lessons</p></div>
              <div className="bg-background rounded-lg p-4 text-center border"><p className="text-2xl font-bold text-primary">4</p><p className="text-sm text-muted-foreground">JLPT Levels</p></div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningPaths.map((path) => (
                <Link key={path.title} href={path.href}>
                  <Card className="h-full group hover:shadow-lg transition hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className={`h-14 w-14 ${path.color} rounded-xl flex items-center justify-center mb-4`}>
                        <path.icon className="h-7 w-7 text-white" />
                      </div>
                      <h2 className="text-xl font-semibold mb-2">{path.title}</h2>
                      <p className="text-muted-foreground mb-4">{path.description}</p>
                      <p className="text-sm text-primary font-medium">{path.count}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 japan-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
            <p className="opacity-90 mb-8">Begin your JLPT journey today.</p>
            <Button size="lg" variant="secondary" asChild><Link href="/jlpt/n5">Start JLPT N5<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
