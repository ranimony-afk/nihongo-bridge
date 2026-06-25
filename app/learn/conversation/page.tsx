import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Languages,
  User,
  UtensilsCrossed,
  MapPin,
  ShoppingBag,
  Stethoscope,
  Briefcase,
  ArrowRight,
  ChevronRight,
  MessageCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Japanese Conversation Lessons - Real-Life Dialogues',
  description:
    'Practice Japanese conversation with real-life scenarios: self-introductions, restaurants, directions, shopping, doctor visits, and business meetings.',
};

type DialogueLine = { speaker: string; japanese: string; english: string };

type Scenario = {
  icon: typeof User;
  title: string;
  situation: string;
  dialogue: DialogueLine[];
};

const scenarios: Scenario[] = [
  {
    icon: User,
    title: 'Self Introduction',
    situation: 'Meeting someone for the first time and introducing yourself.',
    dialogue: [
      { speaker: 'You', japanese: 'はじめまして。私の名前はラメッシュです。', english: 'Nice to meet you. My name is Ramesh.' },
      { speaker: 'Partner', japanese: 'はじめまして。私は田中です。', english: 'Nice to meet you. I am Tanaka.' },
      { speaker: 'You', japanese: 'インドから来ました。今、日本語を勉強しています。', english: 'I am from India. I am studying Japanese now.' },
      { speaker: 'Partner', japanese: 'そうですか。がんばってください！', english: 'Is that so? Do your best!' },
    ],
  },
  {
    icon: UtensilsCrossed,
    title: 'At the Restaurant',
    situation: 'Ordering food and drinks at a Japanese restaurant.',
    dialogue: [
      { speaker: 'Staff', japanese: 'いらっしゃいませ。何名様ですか？', english: 'Welcome. How many people?' },
      { speaker: 'You', japanese: '一人です。', english: 'Just one person.' },
      { speaker: 'Staff', japanese: 'こちらへどうぞ。メニューです。', english: 'Please come this way. Here is the menu.' },
      { speaker: 'You', japanese: '寿司とお茶をお願いします。', english: 'Sushi and green tea, please.' },
    ],
  },
  {
    icon: MapPin,
    title: 'Asking Directions',
    situation: 'Asking someone how to get to the train station.',
    dialogue: [
      { speaker: 'You', japanese: 'すみません。駅はどこですか？', english: 'Excuse me. Where is the station?' },
      { speaker: 'Local', japanese: 'あの信号を右に曲がってください。', english: 'Please turn right at that traffic light.' },
      { speaker: 'You', japanese: '右ですね。どのくらい遠いですか？', english: 'Right, okay. How far is it?' },
      { speaker: 'Local', japanese: '歩いて五分ぐらいです。', english: 'About five minutes on foot.' },
    ],
  },
  {
    icon: ShoppingBag,
    title: 'Shopping',
    situation: 'Buying items and asking about prices at a store.',
    dialogue: [
      { speaker: 'You', japanese: 'これはいくらですか？', english: 'How much is this?' },
      { speaker: 'Staff', japanese: 'それは千円です。', english: 'That is 1,000 yen.' },
      { speaker: 'You', japanese: 'じゃ、これをください。', english: 'Then, I will take this one.' },
      { speaker: 'Staff', japanese: 'ありがとうございます。', english: 'Thank you very much.' },
    ],
  },
  {
    icon: Stethoscope,
    title: 'At the Doctor',
    situation: 'Visiting a clinic and describing your symptoms.',
    dialogue: [
      { speaker: 'Doctor', japanese: 'どうしましたか？', english: 'What seems to be the problem?' },
      { speaker: 'You', japanese: '頭が痛いです。熱もあります。', english: 'I have a headache. I also have a fever.' },
      { speaker: 'Doctor', japanese: 'いつからですか？', english: 'Since when?' },
      { speaker: 'You', japanese: '昨日からです。', english: 'Since yesterday.' },
    ],
  },
  {
    icon: Briefcase,
    title: 'Business Meeting',
    situation: 'Exchanging business cards and starting a meeting.',
    dialogue: [
      { speaker: 'You', japanese: '初めまして。どうぞよろしくお願いします。', english: 'Nice to meet you. I look forward to working with you.' },
      { speaker: 'Host', japanese: 'こちらこそ、よろしくお願いいたします。', english: 'The pleasure is mine. I look forward to working with you too.' },
      { speaker: 'You', japanese: 'これは私の名刺です。', english: 'This is my business card.' },
      { speaker: 'Host', japanese: 'ありがとうございます。会議を始めましょう。', english: 'Thank you. Let us begin the meeting.' },
    ],
  },
];

export default function ConversationPage() {
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
              <span className="font-medium">Conversation</span>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 bg-blue-500 rounded-xl flex items-center justify-center">
                <Languages className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Conversation Lessons</h1>
                <p className="text-muted-foreground">Practice real-life Japanese dialogues</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              Master everyday Japanese through practical scenarios. Each lesson includes a realistic dialogue
              with Japanese text and English translations.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6">
              {scenarios.map((scenario, i) => (
                <Card key={i} className="hover:shadow-lg transition">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <scenario.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{scenario.title}</CardTitle>
                    </div>
                    <CardDescription>{scenario.situation}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {scenario.dialogue.map((line, j) => (
                        <div
                          key={j}
                          className={`flex ${line.speaker === 'You' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[85%] rounded-lg p-3 ${
                              line.speaker === 'You'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted'
                            }`}
                          >
                            <p className="text-xs opacity-70 mb-1">{line.speaker}</p>
                            <p className="text-sm kanji-text">{line.japanese}</p>
                            <p className="text-xs opacity-80 mt-1">{line.english}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 japan-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Practice with Real Vocabulary</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Build your word bank so you can use these conversations with confidence in real life.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/learn/vocabulary">
                Browse Vocabulary
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
