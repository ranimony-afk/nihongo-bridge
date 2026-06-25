import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, PenTool, Headphones, FileText, ArrowRight, ChevronRight, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'JLPT N4 - Elementary Level',
  description: 'Prepare for JLPT N4.',
};

export default function N4Page() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-b from-blue-50 to-background py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm mb-8">
              <Link href="/" className="text-muted-foreground hover:text-primary">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/jlpt" className="text-muted-foreground hover:text-primary">JLPT</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="font-medium">N4</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <span className="text-3xl font-bold text-white">N4</span>
              </div>
              <div>
                <Badge variant="outline" className="text-blue-600 border-blue-600 mb-2">Elementary Level</Badge>
                <h1 className="text-3xl sm:text-4xl font-bold">JLPT N4 Preparation</h1>
                <p className="text-muted-foreground">Everyday Japanese in 6-9 months</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-background rounded-lg p-4 border"><p className="text-sm text-muted-foreground">Vocabulary</p><p className="text-2xl font-bold">1,500</p></div>
              <div className="bg-background rounded-lg p-4 border"><p className="text-sm text-muted-foreground">Kanji</p><p className="text-2xl font-bold">300</p></div>
              <div className="bg-background rounded-lg p-4 border"><p className="text-sm text-muted-foreground">Grammar</p><p className="text-2xl font-bold">80</p></div>
              <div className="bg-background rounded-lg p-4 border"><p className="text-sm text-muted-foreground">Weekly Hours</p><p className="text-2xl font-bold">10-12</p></div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5 text-primary" />What is JLPT N4?</CardTitle></CardHeader>
                <CardContent className="prose dark:prose-invert">
                  <p className="text-muted-foreground">JLPT N4 tests your ability to understand basic Japanese in everyday situations.</p>
                  <ul className="text-muted-foreground"><li>Hold simple daily conversations</li><li>Read basic texts</li><li>Understand everyday spoken Japanese</li></ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5 text-primary" />Exam Details</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between"><span className="text-muted-foreground">Exams</span><span>2 per year (July & Dec)</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Duration</span><span>125 minutes</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Pass Score</span><span>90/180</span></div>
                </CardContent>
              </Card>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <Link href="/learn/vocabulary"><Card className="hover:shadow-md transition cursor-pointer"><CardContent className="pt-6"><BookOpen className="h-8 w-8 text-primary mb-3" /><h3 className="font-semibold">Vocabulary</h3><p className="text-sm text-muted-foreground">1,500 words</p></CardContent></Card></Link>
              <Link href="/learn/kanji"><Card className="hover:shadow-md transition cursor-pointer"><CardContent className="pt-6"><PenTool className="h-8 w-8 text-primary mb-3" /><h3 className="font-semibold">Kanji</h3><p className="text-sm text-muted-foreground">300 characters</p></CardContent></Card></Link>
              <Link href="/learn/grammar"><Card className="hover:shadow-md transition cursor-pointer"><CardContent className="pt-6"><FileText className="h-8 w-8 text-primary mb-3" /><h3 className="font-semibold">Grammar</h3><p className="text-sm text-muted-foreground">Essential patterns</p></CardContent></Card></Link>
              <Link href="/resources"><Card className="hover:shadow-md transition cursor-pointer"><CardContent className="pt-6"><Headphones className="h-8 w-8 text-primary mb-3" /><h3 className="font-semibold">Listening</h3><p className="text-sm text-muted-foreground">Audio practice</p></CardContent></Card></Link>
            </div>

            <Card className="mt-8">
              <CardHeader><CardTitle>N4 Grammar Preview</CardTitle><CardDescription>Key patterns you will learn</CardDescription></CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {['~てある (state)', '~ことにする (decide)', '~ようと思う (intend)', '~かもしれない (might)', '~と (if/when)', '~ながら (while)'].map((p) => (
                    <div key={p} className="p-3 bg-muted/30 rounded-lg"><p className="font-medium">{p}</p></div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-0">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-2">Start Your N4 Journey</h2>
                <p className="opacity-90 mb-6">Have N5 level ready before starting N4.</p>
                <Button size="lg" variant="secondary" asChild><Link href="/learn/vocabulary">Begin N4 Study<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
