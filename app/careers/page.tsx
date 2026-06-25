import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Briefcase,
  Languages,
  Building2,
  ArrowRight,
  CheckCircle,
  User,
  Globe,
  Award,
  HeartPulse,
  Cpu,
  Stethoscope,
  TrendingUp,
  Users,
  Lightbulb,
  Target,
  Sparkles,
  JapaneseYen,
  GraduationCap,
  MessageCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Japanese Jobs & Careers',
  description:
    'Explore career opportunities in Japan for Japanese speakers. Find jobs as interpreters, engineers, IT professionals, healthcare workers, and business roles. Get interview tips, salary guides, and job hunting advice.',
};

const careerCategories = [
  {
    icon: Languages,
    title: 'Japanese Interpreter',
    href: '#interpreter',
    description: 'Bridge communication gaps as a professional interpreter and translator.',
    skills: ['JLPT N1/N2', 'Keigo', 'Simultaneous Interpreting'],
    salary: '¥3M - ¥8M',
  },
  {
    icon: Users,
    title: 'Bilingual Support',
    href: '#bilingual',
    description: 'Provide bilingual customer service and operational support.',
    skills: ['JLPT N2+', 'Customer Service', 'Business Japanese'],
    salary: '¥2.5M - ¥5M',
  },
  {
    icon: Briefcase,
    title: 'Engineering Jobs',
    href: '#engineering',
    description: 'Work in mechanical, electrical, and manufacturing engineering.',
    skills: ['Engineering Degree', 'JLPT N3+', 'Technical Japanese'],
    salary: '¥4M - ¥9M',
  },
  {
    icon: Cpu,
    title: 'IT Careers',
    href: '#it',
    description: 'Software development, data science, and IT infrastructure roles.',
    skills: ['Programming', 'JLPT N3+', 'Cloud / DevOps'],
    salary: '¥4M - ¥12M',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare Careers',
    href: '#healthcare',
    description: 'Nursing and caregiving opportunities in Japan\u2019s aging society.',
    skills: ['JLPT N4+', 'Nursing License', 'Caregiver Cert.'],
    salary: '¥2.5M - ¥5M',
  },
  {
    icon: Building2,
    title: 'Business Roles',
    href: '#business',
    description: 'Sales, marketing, and management positions in Japanese firms.',
    skills: ['Business Japanese', 'JLPT N2+', 'Sales Experience'],
    salary: '¥3M - ¥10M',
  },
];

const interviewQuestions = [
  {
    japanese: '\u81ea\u5df1\u7d39\u4ecb\u3092\u304a\u9858\u3044\u3057\u307e\u3059\u3002',
    romaji: 'Jikoshoukai o onegai shimasu.',
    english: 'Please introduce yourself.',
    approach:
      'Structure your answer using the \u201cpresent \u2192 past \u2192 future\u201d format. State your name, current role or studies, relevant experience, and why you are applying. Keep it concise (1\u20132 minutes) and practice keigo.',
  },
  {
    japanese: '\u306a\u305c\u65e5\u672c\u3067\u50cd\u304d\u305f\u3044\u306e\u3067\u3059\u304b\uff1f',
    romaji: 'Naze Nihon de hatarakitai no desu ka?',
    english: 'Why do you want to work in Japan?',
    approach:
      'Show genuine connection to Japan \u2014 cultural appreciation, long-term commitment, and professional growth. Avoid superficial reasons like anime or food. Tie your answer to career goals and contribution to the company.',
  },
  {
    japanese: '\u3042\u306a\u305f\u306e\u9577\u6240\u306f\u4f55\u3067\u3059\u304b\uff1f',
    romaji: 'Anata no chousho wa nan desu ka?',
    english: 'What are your strengths?',
    approach:
      'Pick 1\u20132 strengths with concrete examples. Use the STAR method (Situation, Task, Action, Result). Japanese employers value teamwork, diligence (doryoku), and attention to detail (kubikara).',
  },
  {
    japanese: '\u30ad\u30e3\u30ea\u30a2\u306e\u76ee\u6a19\u306f\u4f55\u3067\u3059\u304b\uff1f',
    romaji: 'Kariya no mokuhyou wa nan desu ka?',
    english: 'What are your career goals?',
    approach:
      'Show alignment with the company\u2019s direction. Japanese companies value long-term commitment, so express desire to grow within the organization. Mention specific skills you want to develop and how you\u2019ll contribute over 3\u20135 years.',
  },
  {
    japanese: '\u306a\u305c\u3053\u306e\u4f1a\u793e\u3092\u9078\u3073\u307e\u3057\u305f\u304b\uff1f',
    romaji: 'Naze kono kaisha o erabimashita ka?',
    english: 'Why did you choose this company?',
    approach:
      'Research the company thoroughly \u2014 mission, products, recent news, and culture. Connect your skills and values to their specific needs. Avoid generic answers; mention something unique about this company that attracted you.',
  },
];

const jobHuntingTips = [
  {
    title: 'Get JLPT N3 or Higher',
    description: 'Most Japanese companies require JLPT N3 minimum, with N2 preferred for business roles. Start preparing early.',
  },
  {
    title: 'Prepare a Japanese Resume (Rirekisho)',
    description: 'Create a standard Japanese rirekisho format by hand or digitally. Many companies still expect the traditional handwritten format.',
  },
  {
    title: 'Learn Business Keigo (Honorifics)',
    description: 'Master sonkeigo (respectful), kenjougo (humble), and teineigo (polite) forms. Proper keigo is essential for interviews and workplace communication.',
  },
  {
    title: 'Research the Company Thoroughly',
    description: 'Study the company\u2019s history, products, values, and recent news. Visit their website, read annual reports, and understand their industry position.',
  },
  {
    title: 'Dress Professionally for Interviews',
    description: 'Wear a dark suit (recruit suit), conservative tie, and minimal accessories. Punctuality is critical \u2014 arrive 10 minutes early to the location.',
  },
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  <Briefcase className="h-3 w-3 mr-1" /> Career Opportunities
                </Badge>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  Careers in <span className="text-primary">Japan</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Build a rewarding career in Japan. Explore in-demand job categories, salary
                  expectations, interview preparation, and expert tips to land your dream role in a
                  Japanese company.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="#interpreter">
                      <Briefcase className="mr-2 h-4 w-4" /> Explore Careers
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/learn/business-japanese">
                      <MessageCircle className="mr-2 h-4 w-4" /> Business Japanese
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2182980/pexels-photo-2182980.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Japanese office workplace"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Career Categories Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                Career Paths
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Popular Career Categories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the most in-demand roles for Japanese-speaking professionals across
                industries.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerCategories.map((career) => (
                <Link key={career.title} href={career.href}>
                  <Card className="h-full group hover:shadow-lg transition hover:-translate-y-1">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                        <career.icon className="h-6 w-6 text-primary group-hover:text-white" />
                      </div>
                      <CardTitle className="text-xl">{career.title}</CardTitle>
                      <CardDescription>{career.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {career.skills.map((s) => (
                          <Badge key={s} variant="secondary">
                            {s}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Salary range</span>
                        <span className="text-sm font-semibold text-primary">{career.salary}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Japanese Interpreter Section */}
        <section id="interpreter" className="py-16 lg:py-24 bg-muted/30 scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <Badge variant="secondary" className="mb-4">
                  <Languages className="h-3 w-3 mr-1" /> Interpreter
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Japanese Interpreter & Translator
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Interpreters and translators bridge the communication gap between Japanese and
                  non-Japanese speakers. This role is critical in international business meetings,
                  conferences, legal proceedings, and document translation. Demand is especially high
                  in manufacturing, IT, and tourism sectors.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center">
                      <Target className="h-4 w-4 mr-2 text-primary" /> Requirements
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        JLPT N1 or N2 certification
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Mastery of keigo (honorific language)
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Specialized vocabulary in your industry
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Simultaneous and consecutive interpreting skills
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <JapaneseYen className="h-5 w-5 mr-2 text-primary" /> Salary Range
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-2">\u00a53M - \u00a58M / year</p>
                    <p className="text-sm text-muted-foreground">
                      Senior interpreters at major corporations can earn \u00a510M+. Freelance
                      conference interpreters charge \u00a550,000-\u00a5100,000 per day.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-primary" /> Career Path
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { stage: 'Entry', role: 'In-house Translator / Junior Interpreter' },
                        { stage: 'Mid-level', role: 'Conference Interpreter / Senior Translator' },
                        { stage: 'Senior', role: 'Chief Interpreter / Localization Manager' },
                        { stage: 'Expert', role: 'Freelance Conference Interpreter / Agency Owner' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {i + 1}
                          </div>
                          <div>
                            <p className="text-sm font-medium">{item.stage}</p>
                            <p className="text-sm text-muted-foreground">{item.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Bilingual Support Section */}
        <section id="bilingual" className="py-16 lg:py-24 scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="order-2 lg:order-1 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <JapaneseYen className="h-5 w-5 mr-2 text-primary" /> Salary Range
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-2">
                      \u00a52.5M - \u00a55M / year
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Roles in foreign-affiliated firms and global teams often offer higher
                      compensation and English-language work environments.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Globe className="h-5 w-5 mr-2 text-primary" /> Common Roles
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Customer Support Representative
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Bilingual Administrative Assistant
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        International Sales Coordinator
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Global HR / Recruiting Assistant
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <Badge variant="secondary" className="mb-4">
                  <Users className="h-3 w-3 mr-1" /> Bilingual Support
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Bilingual Support Roles</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Bilingual support professionals help international teams operate smoothly. These
                  roles involve customer service, coordination between Japanese and overseas
                  offices, and administrative support. They are excellent entry points into Japanese
                  corporate culture.
                </p>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Target className="h-4 w-4 mr-2 text-primary" /> Requirements
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      JLPT N2 or higher
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      Business-level English
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      Strong communication and customer service skills
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      Familiarity with Japanese business etiquette
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Section */}
        <section id="engineering" className="py-16 lg:py-24 bg-muted/30 scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <Badge variant="secondary" className="mb-4">
                  <Briefcase className="h-3 w-3 mr-1" /> Engineering
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Engineering Jobs in Japan</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Japan is a global leader in manufacturing, automotive, robotics, and electronics.
                  Engineers with Japanese language skills are highly sought after, especially in
                  companies expanding internationally. These roles combine technical expertise with
                  cross-cultural collaboration.
                </p>
                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Lightbulb className="h-4 w-4 mr-2 text-primary" /> Types of Engineering Jobs
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      'Mechanical Engineer',
                      'Electrical Engineer',
                      'Automotive Engineer',
                      'Robotics Engineer',
                      'Manufacturing Engineer',
                      'Civil Engineer',
                      'Chemical Engineer',
                      'Quality Control',
                    ].map((role) => (
                      <div
                        key={role}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {role}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Target className="h-5 w-5 mr-2 text-primary" /> Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Bachelor\u2019s degree in Engineering or related field
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        JLPT N3 or higher (N2 preferred)
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Knowledge of technical Japanese terminology
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Experience with Japanese manufacturing standards (JIS)
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Familiarity with kaizen and lean manufacturing
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <JapaneseYen className="h-5 w-5 mr-2 text-primary" /> Salary Range
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-2">\u00a54M - \u00a59M / year</p>
                    <p className="text-sm text-muted-foreground">
                      Senior engineers at major manufacturers like Toyota, Hitachi, or Mitsubishi can
                      earn \u00a58M-\u00a512M+.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* IT Careers Section */}
        <section id="it" className="py-16 lg:py-24 scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="order-2 lg:order-1 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Cpu className="h-5 w-5 mr-2 text-primary" /> Popular Tech Roles
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        'Frontend Developer',
                        'Backend Engineer',
                        'Full-Stack Developer',
                        'Data Scientist',
                        'ML Engineer',
                        'DevOps Engineer',
                        'Cloud Architect',
                        'IT Consultant',
                      ].map((role) => (
                        <div
                          key={role}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {role}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <JapaneseYen className="h-5 w-5 mr-2 text-primary" /> Salary Range
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-2">
                      \u00a54M - \u00a512M / year
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Senior engineers and tech leads at global firms (Rakuten, Mercari, Line) can
                      earn \u00a510M-\u00a515M+. Foreign-friendly startups often offer stock options.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <Badge variant="secondary" className="mb-4">
                  <Cpu className="h-3 w-3 mr-1" /> IT Careers
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">IT & Software Careers</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Japan\u2019s tech industry is growing rapidly, with increasing demand for software
                  engineers, data scientists, and IT professionals. Many companies are embracing
                  English-speaking environments, making it easier for bilingual talent to thrive.
                  Tokyo\u2019s startup scene and established tech giants both offer exciting
                  opportunities.
                </p>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Target className="h-4 w-4 mr-2 text-primary" /> Requirements
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      Degree in Computer Science or equivalent experience
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      JLPT N3+ (N2 for client-facing roles)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      Proficiency in relevant programming languages and frameworks
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      Experience with cloud platforms (AWS, GCP, Azure)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      Understanding of Agile development methodologies
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare Careers Section */}
        <section id="healthcare" className="py-16 lg:py-24 bg-muted/30 scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <Badge variant="secondary" className="mb-4">
                  <HeartPulse className="h-3 w-3 mr-1" /> Healthcare
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Healthcare Careers</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Japan\u2019s aging population has created massive demand for healthcare
                  professionals. Through Economic Partnership Agreements (EPA), foreign nurses and
                  caregivers can work in Japan. This is a meaningful career path with strong job
                  security and growing opportunities.
                </p>
                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Stethoscope className="h-4 w-4 mr-2 text-primary" /> Opportunities
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <HeartPulse className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Nursing (Kangoshi)</p>
                        <p className="text-sm text-muted-foreground">
                          Licensed nurses work in hospitals and clinics. Requires passing the
                          national nursing exam in Japanese.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <HeartPulse className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Caregiving (Kaigofukukeshi)</p>
                        <p className="text-sm text-muted-foreground">
                          Certified caregivers support elderly residents in care facilities. The
                          EPA pathway is popular for foreign workers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Target className="h-5 w-5 mr-2 text-primary" /> Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        JLPT N4 or higher (N3+ for national exams)
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Nursing or caregiving license from home country
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Pass Japan\u2019s national certification exam (kangoshi / kaigofukukeshi)
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Compassion, patience, and cultural sensitivity
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        EPA program participation (for eligible countries)
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <JapaneseYen className="h-5 w-5 mr-2 text-primary" /> Salary Range
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-2">
                      \u00a52.5M - \u00a55M / year
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Licensed nurses earn more (\u00a54M-\u00a56M). Many facilities offer housing
                      support and training stipends for EPA candidates.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Business Roles Section */}
        <section id="business" className="py-16 lg:py-24 scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="order-2 lg:order-1 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Building2 className="h-5 w-5 mr-2 text-primary" /> Common Roles
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { role: 'Sales Representative', desc: 'Domestic and international sales' },
                        { role: 'Marketing Specialist', desc: 'Digital and traditional marketing' },
                        { role: 'Business Development', desc: 'New market and partnership growth' },
                        { role: 'Project Manager', desc: 'Cross-functional team leadership' },
                        { role: 'HR / Recruiting', desc: 'Talent acquisition and management' },
                        { role: 'Management', desc: 'Department and team leadership' },
                      ].map((item) => (
                        <div key={item.role} className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium">{item.role}</p>
                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <JapaneseYen className="h-5 w-5 mr-2 text-primary" /> Salary Range
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-2">
                      \u00a53M - \u00a510M / year
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Management and senior sales roles at large trading companies (soushou) can
                      reach \u00a58M-\u00a515M+.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <Badge variant="secondary" className="mb-4">
                  <Building2 className="h-3 w-3 mr-1" /> Business Roles
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Business Roles</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Business roles in Japanese companies span sales, marketing, management, and
                  business development. These positions require strong Japanese communication
                  skills, cultural understanding, and relationship-building abilities. Bilingual
                  professionals are especially valued at companies with international operations.
                </p>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Target className="h-4 w-4 mr-2 text-primary" /> Requirements
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      JLPT N2 or higher (business-level Japanese)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      Mastery of business keigo and email etiquette
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      Understanding of Japanese business customs (nemawashi, hourensou)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      Sales or marketing experience (preferred)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      Bachelor\u2019s degree in Business or related field
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interview Preparation Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <MessageCircle className="h-3 w-3 mr-1" /> Interview Preparation
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Sample Japanese Interview Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Prepare for your Japanese job interview with these common questions, complete with
                romaji, English translations, and suggested answer approaches.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {interviewQuestions.map((q, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-lg font-semibold mb-1" lang="ja">
                          {q.japanese}
                        </p>
                        <p className="text-sm text-muted-foreground italic mb-1">{q.romaji}</p>
                        <p className="text-sm font-medium text-primary mb-3">{q.english}</p>
                        <div className="bg-muted/50 rounded-lg p-4">
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                            Suggested Approach
                          </p>
                          <p className="text-sm text-muted-foreground">{q.approach}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Job Hunting Tips Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <Lightbulb className="h-3 w-3 mr-1" /> Job Hunting Tips
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tips for Landing a Job in Japan</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Essential advice to help you stand out and succeed in the Japanese job market.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-6">
                {jobHuntingTips.map((tip, i) => (
                  <Card key={i} className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{tip.title}</h3>
                          <p className="text-sm text-muted-foreground">{tip.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Award className="h-10 w-10 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Need Interview Practice?</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          We offer mock interviews and resume review sessions.
                        </p>
                        <Button size="sm" asChild>
                          <Link href="/contact">Book Session</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 japan-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge
              variant="secondary"
              className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30"
            >
              <Sparkles className="h-3 w-3 mr-1" /> Get Started
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Start Your Japanese Career Journey
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Master business Japanese and unlock career opportunities with top Japanese companies.
              Our specialized courses prepare you for the workplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/learn/business-japanese">
                  <GraduationCap className="mr-2 h-4 w-4" /> Learn Business Japanese
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <Link href="/contact">
                  <User className="mr-2 h-4 w-4" /> Career Consultation
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
