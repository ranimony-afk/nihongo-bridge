import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, ArrowRight, BookOpen, PenTool, Headphones, FileText, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'JLPT Preparation - N5, N4, N3, N2',
  description: 'Comprehensive JLPT preparation for all levels.',
};

const jlptLevels = [
  { level: 'N5', subtitle: 'Beginner', desc: 'Basic grammar & vocabulary', vocabulary: 800, kanji: 100, href: '/jlpt/n5', color: 'from-green-500 to-emerald-600' },
  { level: 'N4', subtitle: 'Elementary', desc: 'Daily conversation skills', vocabulary: 1500, kanji: 300, href: '/jlpt/n4', color: 'from-blue-500 to-cyan-600' },
  { level: 'N3', subtitle: 'Intermediate', desc: 'Natural communication', vocabulary: 3000, kanji: 650, href: '/jlpt/n3', color: 'from-purple-500 to-violet-600' },
  { level: 'N2', subtitle: 'Pre-Advanced', desc: 'Business Japanese', vocabulary: 6000, kanji: 1000, href: '/jlpt/n2', color: 'from-red-500 to-orange-600' },
];

const features = [
  { icon: BookOpen, title: 'Vocabulary Lists', description: 'All vocabulary with Tamil & English meanings' },
  { icon: PenTool, title: 'Kanji Study', description: 'Kanji with stroke order and readings' },
  { icon: FileText, title: 'Grammar Guides', description: 'Complete grammar patterns' },
  { icon: Headphones, title: 'Listening Practice', description: 'Audio exercises' },
];

export default function JLPTPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4"><GraduationCap className="h-3 w-3 mr-1" />JLPT Preparation</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Ace Your <span className="text-primary">JLPT Exam</span></h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Study materials for all JLPT levels.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-background rounded-lg p-4 text-center border"><p className="text-2xl font-bold text-primary">2</p><p className="text-sm text-muted-foreground">Exams/Year</p></div>
              <div className="bg-background rounded-lg p-4 text-center border"><p className="text-2xl font-bold text-primary">5</p><p className="text-sm text-muted-foreground">Levels (N5-N1)</p></div>
              <div className="bg-background rounded-lg p-4 text-center border"><p className="text-2xl font-bold text-primary">180</p><p className="text-sm text-muted-foreground">Minutes (N2)</p></div>
              <div className="bg-background rounded-lg p-4 text-center border"><p className="text-2xl font-bold text-primary">98%</p><p className="text-sm text-muted-foreground">Pass Rate</p></div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Choose Your Level</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">JLPT Study Programs</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {jlptLevels.map((item) => (
                <Link key={item.level} href={item.href}>
                  <Card className="h-full group hover:shadow-lg transition overflow-hidden">
                    <div className={`bg-gradient-to-r ${item.color} p-6 text-white`}>
                      <div className="flex items-center justify-between">
                        <div><p className="text-4xl font-bold">{item.level}</p><p className="opacity-90">{item.subtitle}</p></div>
                        <GraduationCap className="h-12 w-12 opacity-50" />
                      </div>
                    </div>
                    <CardHeader><CardTitle>JLPT {item.level}</CardTitle><CardDescription>{item.desc}</CardDescription></CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div><p className="text-sm text-muted-foreground">Vocabulary</p><p className="font-semibold">{item.vocabulary} words</p></div>
                        <div><p className="text-sm text-muted-foreground">Kanji</p><p className="font-semibold">{item.kanji} characters</p></div>
                      </div>
                      <Button className="w-full">Start Studying<ArrowRight className="ml-2 h-4 w-4" /></Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">What&apos;s Included</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Complete JLPT Preparation</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <Card key={feature.title} className="bg-background">
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 japan-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start?</h2>
            <p className="text-lg opacity-90 mb-8">Begin your JLPT journey today.</p>
            <Button size="lg" variant="secondary" asChild><Link href="/jlpt/n5">Start with N5<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
