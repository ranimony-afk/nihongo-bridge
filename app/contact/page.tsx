'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  CheckCircle,
  ChevronDown,
  Sparkles,
  ArrowRight,
  HelpCircle,
  GraduationCap,
  BookOpen,
  Award,
  Briefcase,
  User,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Contact Info                                                        */
/* ------------------------------------------------------------------ */

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'contact@nihongobridge.com',
    href: 'mailto:contact@nihongobridge.com',
    description: 'Send us your questions anytime',
  },
  {
    icon: Phone,
    title: 'WhatsApp',
    value: 'Message on WhatsApp',
    href: '#',
    description: 'Quick chat for fast responses',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'India | Tokyo, Japan',
    href: '#',
    description: 'Serving learners worldwide',
  },
  {
    icon: Clock,
    title: 'Response Time',
    value: 'Within 24 hours',
    href: '#',
    description: 'We reply to every message',
  },
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

const faqs = [
  {
    icon: GraduationCap,
    q: 'How do I start learning Japanese?',
    a: 'Start by learning hiragana and katakana (the two phonetic scripts), then build basic vocabulary and simple grammar patterns. Our JLPT N5 course and Vocabulary Builder are perfect starting points. Aim for 20-30 minutes of daily practice for steady progress.',
  },
  {
    icon: Award,
    q: 'Which JLPT level should I start with?',
    a: 'If you are new to Japanese, start with JLPT N5 (beginner). If you already know hiragana, katakana, and basic greetings, you may begin with N4. Take our self-assessment quiz or browse the N5 and N4 study sheets on our Resources page to find your level.',
  },
  {
    icon: BookOpen,
    q: 'Do you offer study abroad consultation?',
    a: 'Yes! We provide guidance on student visas, language school selection, scholarship applications (including MEXT), and accommodation in Japan. Use the contact form above to book a free consultation and we will help you plan your study abroad journey.',
  },
  {
    icon: Sparkles,
    q: 'Are the resources free?',
    a: 'Yes, all downloadable resources on our Resources page — including vocabulary PDFs, JLPT study sheets, grammar notes, and interview preparation materials — are completely free. We believe quality Japanese education should be accessible to everyone.',
  },
  {
    icon: Briefcase,
    q: 'How can I prepare for Japanese job interviews?',
    a: 'Download our Interview Preparation Materials from the Resources page, which include a 100+ question bank, self-introduction (jikoshoukai) templates, resume writing guides, and workplace etiquette tips. We also share job opportunities and career guidance on our Careers page.',
  },
  {
    icon: User,
    q: 'Can I get personalized learning plans?',
    a: 'Absolutely. Send us a message through the contact form with your current level, goals (JLPT, study abroad, career), and available study time. We will create a customized learning plan and recommend the best resources for your journey.',
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
          <div className="absolute inset-0 hero-pattern" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="secondary" className="mb-4">
                <MessageSquare className="h-3 w-3 mr-1" />
                Get in Touch
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                Contact <span className="text-primary">Us</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions about Japanese learning, studying in Japan, or
                career opportunities? We&apos;re here to help you on your journey.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form + Info Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Left: Contact Form */}
              <div className="lg:col-span-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we&apos;ll get back to you
                      within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {submitted ? (
                      <div className="text-center py-16">
                        <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                          <CheckCircle className="h-10 w-10 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">
                          Message Sent!
                        </h3>
                        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                          Thank you for reaching out. We&apos;ve received your
                          message and will respond within 24 hours.
                        </p>
                        <Button
                          onClick={() => setSubmitted(false)}
                          variant="outline"
                        >
                          <Send className="h-4 w-4 mr-2" />
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                              id="name"
                              placeholder="Your name"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="your@email.com"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            placeholder="What is this about?"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            placeholder="Tell us how we can help..."
                            rows={6}
                            required
                          />
                        </div>
                        <Button type="submit" size="lg" className="w-full sm:w-auto">
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Right: Contact Info Cards */}
              <div className="lg:col-span-2 space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                          <info.icon className="h-6 w-6 text-primary group-hover:text-white" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold mb-1">{info.title}</p>
                          {info.href !== '#' ? (
                            <a
                              href={info.href}
                              className="text-primary hover:underline block break-words"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground">{info.value}</p>
                          )}
                          <p className="text-sm text-muted-foreground mt-1">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <HelpCircle className="h-3 w-3 mr-1" />
                Common Questions
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Quick answers to the questions we hear most often from learners.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => {
                const Icon = faq.icon;
                const isOpen = openFaq === index;
                return (
                  <Card
                    key={index}
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'shadow-md' : 'hover:shadow-sm'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full text-left p-6 flex items-start gap-4 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div
                        className={`h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                          isOpen
                            ? 'bg-primary text-white'
                            : 'bg-primary/10 text-primary'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base sm:text-lg pr-4">
                          {faq.q}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 pl-20">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Newsletter Signup Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-4xl mx-auto overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Left: Content */}
                <div className="p-8 lg:p-12">
                  <Badge variant="outline" className="mb-4">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Newsletter
                  </Badge>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Stay Updated with Nihongo Bridge
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Join 10,000+ learners getting weekly Japanese lessons, JLPT
                    tips, new resource updates, and career opportunities directly
                    to their inbox.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-1.5" />
                      Weekly lessons
                    </span>
                    <span className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-1.5" />
                      No spam
                    </span>
                  </div>
                </div>

                {/* Right: Form */}
                <div className="bg-muted/30 p-8 lg:p-12 flex items-center">
                  {newsletterSubmitted ? (
                    <div className="text-center w-full">
                      <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        You&apos;re Subscribed!
                      </h3>
                      <p className="text-muted-foreground">
                        Check your inbox for a welcome email from us.
                      </p>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleNewsletter}
                      className="w-full space-y-4"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="newsletter-email">Email Address</Label>
                        <Input
                          id="newsletter-email"
                          type="email"
                          placeholder="your@email.com"
                          value={newsletterEmail}
                          onChange={(e) => setNewsletterEmail(e.target.value)}
                          required
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full">
                        Subscribe Free
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        Unsubscribe anytime. We respect your privacy.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 japan-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur">
                  <span className="text-3xl kanji-text">
                    <ruby className="kanji-text">
                      連絡<rt>れんらく</rt>
                    </ruby>
                  </span>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Start Your Japan Journey?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Book a free consultation to discuss your goals — whether
                it&apos;s learning Japanese, studying in Japan, or building your
                career.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/learn">
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/resources">Browse Resources</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
