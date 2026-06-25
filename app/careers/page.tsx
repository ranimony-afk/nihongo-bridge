import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Code, Languages, Building2, ArrowRight, CheckCircle, User, Globe, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Japan Careers - Jobs for Japanese Speakers',
  description: 'Explore career opportunities in Japanese companies.',
};

const careerCategories = [
  { icon: Languages, title: 'Japanese Interpreter', description: 'Translation roles in Japanese companies.', skills: ['JLPT N2+', 'Bilingual'], salary: '¥3-6M (Japan)' },
  { icon: Code, title: 'IT Professional', description: 'Software development roles.', skills: ['Programming', 'JLPT N3+'], salary: '¥4-8M (Japan)' },
  { icon: Building2, title: 'Business & Sales', description: 'Sales and business development.', skills: ['Business Japanese', 'N3+'], salary: '¥3-5M' },
];

const tips = [
  'Get JLPT N3 or higher before applying',
  'Prepare a Japanese resume (rirekisho)',
  'Learn business keigo (honorifics)',
  'Research the company thoroughly',
  'Dress professionally for interviews',
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4"><Briefcase className="h-3 w-3 mr-1" />Career Opportunities</Badge>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">Build a Career with <span className="text-primary">Japanese Companies</span></h1>
                <p className="text-xl text-muted-foreground mb-8">Explore job opportunities in Japanese companies across India and Japan.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild><Link href="/contact"><User className="mr-2 h-4 w-4" />Career Consultation</Link></Button>
                  <Button size="lg" variant="outline" asChild><Link href="/learn">Start Learning Japanese</Link></Button>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.pexels.com/photos/2182980/pexels-photo-2182980.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Japanese workplace" className="w-full aspect-[4/3] object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Career Paths</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Popular Career Options</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {careerCategories.map((career) => (
                <Card key={career.title} className="h-full">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <career.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{career.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{career.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {career.skills.map((s) => <Badge key={s} variant="secondary">{s}</Badge>)}
                    </div>
                    <p className="text-sm"><span className="text-muted-foreground">Expected:</span> {career.salary}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4">Interview Preparation</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">Tips for Landing a Job</h2>
              <div className="space-y-4">
                {tips.map((tip, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{tip}</p>
                  </div>
                ))}
              </div>
              <Card className="mt-8 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Award className="h-10 w-10 text-primary" />
                    <div>
                      <h3 className="font-semibold">Need Interview Practice?</h3>
                      <p className="text-sm text-muted-foreground">We offer mock interviews and resume review sessions.</p>
                    </div>
                    <Button className="ml-auto" asChild><Link href="/contact">Book Session</Link></Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 japan-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Start Your Japanese Career Journey</h2>
            <p className="text-lg opacity-90 mb-8">Learn Japanese and connect with opportunities.</p>
            <Button size="lg" variant="secondary" asChild><Link href="/learn">Start Learning<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
