import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  GraduationCap,
  Briefcase,
  Globe,
  Award,
  Heart,
  ArrowRight,
  MapPin,
  Calendar,
  BookOpen,
  Languages,
  Target,
  Lightbulb,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Japan Bridge Tamil - Japanese language educators bridging India and Japan through education.',
};

const timeline = [
  {
    year: 'Foundation',
    title: 'Passion for Japanese',
    description: 'Started learning Japanese language and culture with a vision to help others access opportunities in Japan.',
    icon: Heart,
  },
  {
    year: 'Education',
    title: 'Engineering Background',
    description: 'Combined technical expertise with language skills to create comprehensive learning resources.',
    icon: GraduationCap,
  },
  {
    year: 'Japan Experience',
    title: 'Life in Tokyo',
    description: 'Immersed in Japanese society, traditions, and work culture throughout Japan.',
    icon: Globe,
  },
  {
    year: 'Mission',
    title: 'Japan Bridge Tamil',
    description: 'Founded to help others learn Japanese, study in Japan, and build careers with Japanese companies.',
    icon: Target,
  },
];

const languages = [
  { name: 'English', level: 'Fluent', flag: '🇬🇧' },
  { name: 'Tamil', level: 'Native', flag: '🇮🇳' },
  { name: 'Japanese', level: 'Advanced', flag: '🇯🇵' },
  { name: 'Malayalam', level: 'Conversational', flag: '🇮🇳' },
];

const values = [
  {
    icon: Lightbulb,
    title: 'Education First',
    description: 'Believe that education is the key to bridging cultures and creating opportunities.',
  },
  {
    icon: Heart,
    title: 'Cultural Respect',
    description: 'Deep appreciation for both Indian and Japanese cultures, promoting mutual understanding.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'International experience that allows for unique insights into both Eastern and Western approaches.',
  },
  {
    icon: Target,
    title: 'Practical Guidance',
    description: 'Real-world experience and actionable advice for students and professionals.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
          <div className="absolute inset-0 hero-pattern" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  About Us
                </Badge>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                  Japan Bridge Tamil Team
                </h1>
                <p className="text-xl text-muted-foreground mb-4">
                  Japanese Language Educators | India-Japan Bridge Builders
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  We are passionate about connecting India and Japan through language education,
                  study abroad guidance, and career mentorship. Our mission is to help Tamil-speaking
                  students and professionals achieve their Japanese dreams.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  <Badge variant="outline" className="text-sm">
                    <MapPin className="h-3 w-3 mr-1" />
                    India
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    <Calendar className="h-3 w-3 mr-1" />
                    Tokyo Experience
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    <Languages className="h-3 w-3 mr-1" />
                    4 Languages
                  </Badge>
                </div>

                <Button asChild>
                  <Link href="/contact">
                    Work with Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Japan Bridge Tamil Team"
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-black rounded-xl p-4 shadow-lg border hidden sm:block">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-2xl">10,000+</p>
                      <p className="text-sm text-muted-foreground">Students Helped</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-white dark:bg-black rounded-xl p-4 shadow-lg border hidden sm:block">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-2xl">4+</p>
                      <p className="text-sm text-muted-foreground">Countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4">
                Our Story
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                From Tamil Nadu to Tokyo: Our Journey
              </h2>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  What started as a passion for Japanese language and culture has grown into a
                  comprehensive platform helping thousands of students achieve their dreams of
                  learning Japanese and building careers connected to Japan.
                </p>

                <p className="text-lg text-muted-foreground mb-6">
                  Having experienced life in Japan firsthand, our team understands the challenges
                  and opportunities that come with learning Japanese and adapting to Japanese
                  culture. We created Japan Bridge Tamil to make this journey smoother for others.
                </p>

                <p className="text-lg text-muted-foreground mb-6">
                  Our content combines engineering precision with cultural insight, providing
                  practical learning materials in both Tamil and English. Whether you&apos;re
                  preparing for JLPT, applying for scholarships, or seeking career opportunities,
                  we guide you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Journey
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Key Milestones
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 sm:pl-12 pb-8 last:pb-0 border-l-2 border-primary/30 last:border-l-0"
                >
                  <div className="absolute left-0 top-0 transform -translate-x-1/2 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                    <item.icon className="h-3 w-3 text-white" />
                  </div>

                  <div className="bg-background rounded-lg p-6 shadow-sm">
                    <Badge variant="secondary" className="mb-2">
                      {item.year}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4">
                Languages
              </Badge>
              <h2 className="text-3xl font-bold mb-8">
                Multilingual Communication
              </h2>

              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl">{lang.flag}</span>
                      <div>
                        <p className="font-semibold">{lang.name}</p>
                        <p className="text-sm text-muted-foreground">{lang.level}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-lg border">
                <p className="text-muted-foreground italic">
                  &quot;Being able to communicate in Tamil, English, and Japanese allows us to
                  create content that truly resonates with Indian learners while maintaining
                  authenticity in Japanese language education.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Philosophy
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Values That Drive Our Work
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="bg-background">
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 lg:py-28 japan-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-xl opacity-90 mb-8">
                To create a bridge between India and Japan by providing quality Japanese language
                education, study abroad guidance, and career mentorship - all accessible in Tamil
                and English. We believe everyone deserves the opportunity to explore Japan and
                build a global career.
              </p>

              <Button size="lg" variant="secondary" asChild>
                <Link href="/learn">
                  Start Learning Japanese
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
