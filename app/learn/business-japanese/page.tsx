import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  BriefcaseBusiness,
  Mail,
  UserCheck,
  ArrowRight,
  ChevronRight,
  Building2,
  CheckCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Business Japanese - Keigo, Email & Interview Phrases',
  description:
    'Learn business Japanese: keigo (honorifics), workplace vocabulary, email writing tips, and common interview phrases for Japanese companies.',
};

type BusinessWord = {
  japanese: string;
  furigana: string;
  english: string;
  tamil: string;
};

const businessVocab: BusinessWord[] = [
  { japanese: '会社', furigana: 'かいしゃ', english: 'Company', tamil: 'நிறுவனம்' },
  { japanese: '仕事', furigana: 'しごと', english: 'Work, Job', tamil: 'வேலை' },
  { japanese: '会議', furigana: 'かいぎ', english: 'Meeting', tamil: 'கூட்டம்' },
  { japanese: '社長', furigana: 'しゃちょう', english: 'Company President', tamil: 'நிறுவனத் தலைவர்' },
  { japanese: '部長', furigana: 'ぶちょう', english: 'Department Head', tamil: 'துறைத் தலைவர்' },
  { japanese: '同僚', furigana: 'どうりょう', english: 'Colleague', tamil: 'சக ஊழியர்' },
  { japanese: '取引先', furigana: 'とりひきさき', english: 'Client', tamil: 'வாடிக்கையாளர்' },
  { japanese: '名刺', furigana: 'めいし', english: 'Business Card', tamil: 'வணிக அட்டை' },
  { japanese: '残業', furigana: 'ざんぎょう', english: 'Overtime Work', tamil: 'ஓவர்டைம்' },
  { japanese: '給料', furigana: 'きゅうりょう', english: 'Salary', tamil: 'சம்பளம்' },
];

type Keigo = {
  japanese: string;
  furigana: string;
  english: string;
  usage: string;
};

const keigoExpressions: Keigo[] = [
  {
    japanese: 'お世話になっております',
    furigana: 'おせわになっております',
    english: 'Thank you for your continued support',
    usage: 'Standard opening for emails and calls to clients or colleagues.',
  },
  {
    japanese: 'よろしくお願いいたします',
    furigana: 'よろしくおねがいいたします',
    english: 'I look forward to working with you',
    usage: 'Polite request or closing used in nearly every business interaction.',
  },
  {
    japanese: '申し訳ございません',
    furigana: 'もうしわけございません',
    english: 'I am very sorry (polite)',
    usage: 'Formal apology used when a mistake affects a client or superior.',
  },
  {
    japanese: '少々お待ちください',
    furigana: 'しょうしょうおまちください',
    english: 'Please wait a moment',
    usage: 'Polite way to ask someone to wait on the phone or in person.',
  },
  {
    japanese: 'お疲れ様です',
    furigana: 'おつかれさまです',
    english: 'Thank you for your hard work',
    usage: 'Daily greeting among coworkers, acknowledging each other\'s effort.',
  },
];

const emailTips = [
  {
    title: 'Start with a proper greeting',
    description: 'Always open with お世話になっております to the recipient, followed by their name and 様 (sama).',
  },
  {
    title: 'State your purpose clearly',
    description: 'Use 用件 (youken) to briefly state the reason for your email before going into details.',
  },
  {
    title: 'Use keigo throughout',
    description: 'Apply sonkeigo (respectful) for the recipient and kenjougo (humble) for yourself and your team.',
  },
  {
    title: 'Close politely',
    description: 'End with よろしくお願いいたします and your company name, department, and signature block.',
  },
  {
    title: 'Keep it concise',
    description: 'Japanese business emails value brevity. Avoid long paragraphs and use bullet points where possible.',
  },
];

type InterviewPhrase = {
  japanese: string;
  furigana: string;
  english: string;
};

const interviewPhrases: InterviewPhrase[] = [
  {
    japanese: 'よろしくお願いいたします',
    furigana: 'よろしくおねがいいたします',
    english: 'I look forward to this opportunity (used when entering the room)',
  },
  {
    japanese: '私は〇〇と申します',
    furigana: 'わたしは〇〇ともうします',
    english: 'My name is ___ (humble self-introduction)',
  },
  {
    japanese: '御社で働きたいです',
    furigana: 'おんしゃではたらきたいです',
    english: 'I would like to work at your company',
  },
  {
    japanese: '強みは〇〇です',
    furigana: 'つよみは〇〇です',
    english: 'My strength is ___',
  },
  {
    japanese: '本日はありがとうございました',
    furigana: 'ほんじつはありがとうございました',
    english: 'Thank you for today (used when leaving the interview)',
  },
];

export default function BusinessJapanesePage() {
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
              <span className="font-medium">Business Japanese</span>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 bg-purple-500 rounded-xl flex items-center justify-center">
                <BriefcaseBusiness className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Business Japanese</h1>
                <p className="text-muted-foreground">Keigo, email writing, and interview preparation</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              Master the polite Japanese used in professional settings — from honorific expressions to
              workplace vocabulary, email etiquette, and interview phrases.
            </p>
          </div>
        </section>

        {/* Business Vocabulary */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <Badge variant="outline" className="mb-3">Vocabulary</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Business Vocabulary</h2>
              <p className="text-muted-foreground">Essential workplace words with furigana and meanings.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {businessVocab.map((word, i) => (
                <Card key={i} className="hover:shadow-md transition">
                  <CardContent className="p-5">
                    <div className="mb-3">
                      <ruby className="kanji-text text-2xl font-bold text-primary">
                        {word.japanese}
                        <rt className="text-xs text-muted-foreground font-normal">{word.furigana}</rt>
                      </ruby>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-xs text-muted-foreground">English</p>
                        <p className="font-medium text-sm">{word.english}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Tamil</p>
                        <p className="font-medium text-sm">{word.tamil}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Keigo Expressions */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <Badge variant="outline" className="mb-3">Keigo (敬語)</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Business Expressions</h2>
              <p className="text-muted-foreground">Honorific language essential for professional communication.</p>
            </div>

            <div className="space-y-4">
              {keigoExpressions.map((item, i) => (
                <Card key={i} className="hover:shadow-md transition">
                  <CardContent className="p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="sm:w-1/3">
                        <ruby className="kanji-text text-xl font-bold text-primary">
                          {item.japanese}
                          <rt className="text-xs text-muted-foreground font-normal">{item.furigana}</rt>
                        </ruby>
                      </div>
                      <div className="sm:w-2/3">
                        <p className="font-medium mb-1">{item.english}</p>
                        <p className="text-sm text-muted-foreground">{item.usage}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Email Writing Tips */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <Badge variant="outline" className="mb-3">
                <Mail className="h-3 w-3 mr-1" />
                Email Writing
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Email Writing Tips</h2>
              <p className="text-muted-foreground">Write professional Japanese business emails with confidence.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {emailTips.map((tip, i) => (
                <Card key={i} className="hover:shadow-md transition">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">{i + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{tip.title}</h3>
                        <p className="text-sm text-muted-foreground">{tip.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Interview Phrases */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <Badge variant="outline" className="mb-3">
                <UserCheck className="h-3 w-3 mr-1" />
                Interview Phrases
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Common Interview Phrases</h2>
              <p className="text-muted-foreground">Make a strong impression in Japanese job interviews.</p>
            </div>

            <div className="space-y-4">
              {interviewPhrases.map((phrase, i) => (
                <Card key={i} className="hover:shadow-md transition">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <ruby className="kanji-text text-lg font-semibold">
                          {phrase.japanese}
                          <rt className="text-xs text-muted-foreground font-normal">{phrase.furigana}</rt>
                        </ruby>
                        <p className="text-sm text-muted-foreground mt-1">{phrase.english}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 japan-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Building2 className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready for a Japanese Career?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Put your business Japanese to work. Explore career opportunities with Japanese companies in India
              and Japan.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/careers">
                Explore Careers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
