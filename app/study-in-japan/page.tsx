import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Globe, BookOpen, CreditCard, Home, Briefcase, ArrowRight, FileText, Plane, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Study in Japan - Scholarships, Visas, Language Schools',
  description: 'Complete guide to studying in Japan.',
};

const topics = [
  { icon: GraduationCap, title: 'Scholarships', description: 'MEXT and private scholarship opportunities.', href: '/blog?category=study-in-japan', count: '5 guides' },
  { icon: Globe, title: 'Language Schools', description: 'Best Japanese language schools.', href: '/blog?category=study-in-japan', count: '8 schools' },
  { icon: FileText, title: 'Student Visa', description: 'Step-by-step visa guide.', href: '/blog?category=study-in-japan', count: '4 articles' },
  { icon: CreditCard, title: 'Cost of Living', description: 'Budget breakdown for students.', href: '/blog?category=living-in-japan', count: '3 guides' },
  { icon: Home, title: 'Accommodation', description: 'Housing options for students.', href: '/blog?category=living-in-japan', count: '3 guides' },
  { icon: Briefcase, title: 'Part-time Jobs', description: 'Work opportunities for students.', href: '/careers', count: '4 guides' },
];

const scholarshipTypes = [
  { name: 'MEXT Scholarship', provider: 'Japanese Government', amount: 'Full tuition + ¥143,000/month', eligibility: 'Undergraduate and research students' },
  { name: 'JASSO Scholarship', provider: 'Japan Student Services', amount: '¥48,000/month', eligibility: 'Privately financed students' },
  { name: 'University Scholarships', provider: 'Individual Universities', amount: 'Tuition reduction', eligibility: 'Varies by university' },
];

export default function StudyInJapanPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4"><GraduationCap className="h-3 w-3 mr-1" />Study Abroad</Badge>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">Study in <span className="text-primary">Japan</span></h1>
                <p className="text-xl text-muted-foreground mb-8">Complete guide to studying in Japan - scholarships, visas, language schools, and daily life.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild><Link href="/contact"><Plane className="mr-2 h-4 w-4" />Get Free Consultation</Link></Button>
                  <Button size="lg" variant="outline" asChild><Link href="/blog?category=study-in-japan">Read Guides</Link></Button>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.pexels.com/photos/2175829/pexels-photo-2175829.jpeg?auto=compress&cs=tinysrgb&w=800" alt="University in Japan" className="w-full aspect-[4/3] object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Everything You Need</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Complete Study Abroad Resources</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic) => (
                <Link key={topic.title} href={topic.href}>
                  <Card className="h-full group hover:shadow-lg transition hover:-translate-y-1">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                        <topic.icon className="h-6 w-6 text-primary group-hover:text-white" />
                      </div>
                      <div className="flex justify-between"><CardTitle>{topic.title}</CardTitle><Badge variant="secondary">{topic.count}</Badge></div>
                      <CardDescription>{topic.description}</CardDescription>
                    </CardHeader>
                    <CardContent><span className="text-sm text-primary font-medium">Learn More<ArrowRight className="ml-1 h-4 w-4 inline" /></span></CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Financial Support</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Scholarship Opportunities</h2>
            </div>
            <div className="space-y-6">
              {scholarshipTypes.map((s) => (
                <Card key={s.name}>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div className="md:col-span-2"><h3 className="font-semibold text-lg">{s.name}</h3><p className="text-sm text-muted-foreground">{s.provider}</p></div>
                      <div><p className="text-sm text-muted-foreground">Amount</p><p className="font-medium">{s.amount}</p></div>
                      <div><p className="text-sm text-muted-foreground">Eligibility</p><p className="font-medium">{s.eligibility}</p></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4">Application Process</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">Steps to Study in Japan</h2>
              <div className="space-y-6">
                {[
                  { step: 1, title: 'Learn Japanese', desc: 'Start with JLPT N5-N4 before applying' },
                  { step: 2, title: 'Choose School', desc: 'Select language school or university' },
                  { step: 3, title: 'Apply & Get COE', desc: 'Submit application and receive Certificate of Eligibility' },
                  { step: 4, title: 'Apply for Visa', desc: 'Submit documents to Japanese Embassy' },
                  { step: 5, title: 'Prepare for Arrival', desc: 'Book flight, arrange accommodation' },
                  { step: 6, title: 'Arrive in Japan', desc: 'Attend orientation, begin classes' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-4">
                    <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">{item.step}</div>
                    <div><h3 className="font-semibold">{item.title}</h3><p className="text-muted-foreground">{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 japan-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let&apos;s Make Your Japan Dream Come True</h2>
            <p className="text-lg opacity-90 mb-8">Get personalized guidance for your study abroad journey.</p>
            <Button size="lg" variant="secondary" asChild><Link href="/contact">Get Free Consultation<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
