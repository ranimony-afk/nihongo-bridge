import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  GraduationCap,
  Globe,
  BookOpen,
  CreditCard,
  Home,
  Briefcase,
  ArrowRight,
  FileText,
  Plane,
  CheckCircle,
  Sparkles,
  MapPin,
  Building2,
  Users,
  Clock,
  JapaneseYen,
  Wifi,
  Utensils,
  Train,
  Smartphone,
  PartyPopper,
  Search,
  Send,
  Award,
  Calendar,
  Languages,
  ShieldCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Study in Japan',
  description:
    'Your complete guide to studying in Japan — student visa process, language schools, accommodation, cost of living, scholarships, and part-time jobs. Start your journey to Japan with Nihongo Bridge.',
  alternates: { canonical: '/study-in-japan' },
};

const topics = [
  {
    icon: FileText,
    title: 'Student Visa Guide',
    description: 'Step-by-step process for obtaining your Japanese student visa.',
    href: '#visa',
    count: '8 steps',
  },
  {
    icon: Globe,
    title: 'Language Schools',
    description: 'Top-rated Japanese language schools across the country.',
    href: '#schools',
    count: '4 schools',
  },
  {
    icon: Home,
    title: 'Accommodation',
    description: 'Housing options for every budget and lifestyle.',
    href: '#accommodation',
    count: '6 options',
  },
  {
    icon: CreditCard,
    title: 'Cost of Living',
    description: 'Detailed monthly budget breakdown in JPY.',
    href: '#cost',
    count: '6 categories',
  },
  {
    icon: Award,
    title: 'Scholarships',
    description: 'Funding opportunities from government and private sources.',
    href: '#scholarships',
    count: '5 programs',
  },
  {
    icon: Briefcase,
    title: 'Part-Time Jobs',
    description: 'Work rules, common jobs, and tips for students.',
    href: '#part-time',
    count: '28 hrs/week',
  },
];

const visaSteps = [
  {
    step: 1,
    title: 'Research Schools & Programs',
    description:
      'Identify language schools or universities that match your goals, budget, and preferred location in Japan. Request information brochures and compare curricula.',
  },
  {
    step: 2,
    title: 'Apply to Your Chosen School',
    description:
      'Submit your application form, academic transcripts, passport copy, and any required language proficiency certificates (e.g. JLPT scores).',
  },
  {
    step: 3,
    title: 'Receive Letter of Acceptance',
    description:
      'Once accepted, the school issues a Letter of Acceptance and begins preparing your Certificate of Eligibility (COE) application.',
  },
  {
    step: 4,
    title: 'Apply for Certificate of Eligibility (COE)',
    description:
      'Your school submits the COE application to the regional immigration bureau in Japan on your behalf. This typically takes 1–3 months to process.',
  },
  {
    step: 5,
    title: 'Receive the COE',
    description:
      'Once approved, the COE is mailed to you (or your school forwards it). This document is essential for your visa application.',
  },
  {
    step: 6,
    title: 'Apply for Student Visa at Embassy',
    description:
      'Take your COE, passport, visa application form, photograph, and financial documents to the Japanese embassy or consulate in your country.',
  },
  {
    step: 7,
    title: 'Visa Issuance & Travel Preparation',
    description:
      'Receive your student visa (usually within 5–7 working days). Book your flight, arrange initial accommodation, and prepare your luggage.',
  },
  {
    step: 8,
    title: 'Arrive & Register at City Hall',
    description:
      'After arriving in Japan, register your address at the local city hall within 14 days, enroll in National Health Insurance, and open a bank account.',
  },
];

const languageSchools = [
  {
    name: 'Tokyo Central Japanese School',
    location: 'Shinjuku, Tokyo',
    features: [
      'Intensive & part-time courses',
      'JLPT N5–N1 preparation',
      'University pathway program',
      'Cultural excursions monthly',
    ],
    priceRange: '¥150,000 – ¥180,000 / 6 months',
    image:
      'https://images.pexels.com/photos/2480717/pexels-photo-2480717.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Osaka Nihongo Academy',
    location: 'Namba, Osaka',
    features: [
      'Conversation-focused curriculum',
      'Small class sizes (max 12)',
      'Part-time job support',
      'Kansai dialect workshops',
    ],
    priceRange: '¥130,000 – ¥160,000 / 6 months',
    image:
      'https://images.pexels.com/photos/1493527/pexels-photo-1493527.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Kyoto Language Institute',
    location: 'Kyoto, Kyoto',
    features: [
      'Traditional culture immersion',
      'Calligraphy & tea ceremony classes',
      'University entrance guidance',
      'Homestay placement service',
    ],
    priceRange: '¥140,000 – ¥170,000 / 6 months',
    image:
      'https://images.pexels.com/photos/1612510/pexels-photo-1612510.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Yokohama Japanese Study Center',
    location: 'Yokohama, Kanagawa',
    features: [
      'Flexible morning / evening schedules',
      'Business Japanese course',
      'Internship placement assistance',
      'Multilingual support staff',
    ],
    priceRange: '¥120,000 – ¥155,000 / 6 months',
    image:
      'https://images.pexels.com/photos/2175829/pexels-photo-2175829.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const accommodationOptions = [
  {
    icon: Building2,
    name: 'Dormitory',
    description:
      'On-campus or school-affiliated dormitories. The most affordable option with utilities often included. Great for meeting fellow students.',
    priceRange: '¥30,000 – ¥60,000 / month',
  },
  {
    icon: Users,
    name: 'Shared House',
    description:
      'Private bedroom with shared kitchen, bath, and living areas. Popular with international students and young professionals.',
    priceRange: '¥40,000 – ¥70,000 / month',
  },
  {
    icon: Home,
    name: 'Homestay',
    description:
      'Live with a Japanese family for full cultural and language immersion. Meals are often included — the fastest way to improve your Japanese.',
    priceRange: '¥60,000 – ¥100,000 / month',
  },
  {
    icon: Building2,
    name: 'Apartment',
    description:
      'Private 1K or 1LDK apartment. Maximum independence but requires key money, deposit, and a guarantor. Best for long-term stays.',
    priceRange: '¥50,000 – ¥90,000 / month',
  },
  {
    icon: Home,
    name: 'Guest House',
    description:
      'Furnished private rooms with shared facilities. No key money or deposit required — flexible contracts ideal for newcomers.',
    priceRange: '¥45,000 – ¥75,000 / month',
  },
  {
    icon: GraduationCap,
    name: 'Student Housing',
    description:
      'Purpose-built student residences operated by private companies. Modern amenities, study rooms, and international community.',
    priceRange: '¥50,000 – ¥80,000 / month',
  },
];

const costBreakdown = [
  {
    icon: Home,
    category: 'Rent',
    detail: 'Shared room to private apartment',
    costRange: '¥30,000 – ¥90,000',
  },
  {
    icon: Utensils,
    category: 'Food',
    detail: 'Cooking at home + occasional eating out',
    costRange: '¥25,000 – ¥50,000',
  },
  {
    icon: Train,
    category: 'Transport',
    detail: 'Monthly commuter pass + occasional trips',
    costRange: '¥5,000 – ¥15,000',
  },
  {
    icon: Wifi,
    category: 'Utilities',
    detail: 'Electricity, gas, water, internet',
    costRange: '¥8,000 – ¥15,000',
  },
  {
    icon: Smartphone,
    category: 'Phone',
    detail: 'Mobile plan with data',
    costRange: '¥2,000 – ¥6,000',
  },
  {
    icon: PartyPopper,
    category: 'Entertainment',
    detail: 'Dining out, karaoke, sightseeing',
    costRange: '¥10,000 – ¥30,000',
  },
];

const scholarships = [
  {
    name: 'MEXT Scholarship',
    provider: 'Japanese Government (MEXT)',
    amount: 'Full tuition + ¥117,000 – ¥148,000 / month',
    eligibility:
      'Undergraduate, research, and college of technology students. Requires embassy or university recommendation.',
  },
  {
    name: 'JASSO Scholarship',
    provider: 'Japan Student Services Organization',
    amount: '¥48,000 / month',
    eligibility:
      'Privately financed international students with excellent academic records and financial need.',
  },
  {
    name: 'Private Foundation Scholarships',
    provider: 'Various private foundations',
    amount: '¥20,000 – ¥200,000 / month',
    eligibility:
      'Varies by foundation. Typically requires enrollment in a Japanese institution and a strong academic standing.',
  },
  {
    name: 'University-Specific Scholarships',
    provider: 'Individual universities',
    amount: '30% – 100% tuition reduction',
    eligibility:
      'Offered by many universities to attract international students. Criteria vary — merit, country of origin, or field of study.',
  },
  {
    name: 'Local Government Scholarships',
    provider: 'Prefectural & city governments',
    amount: '¥10,000 – ¥50,000 / month',
    eligibility:
      'For students residing in a specific prefecture or city. Often combined with housing subsidies and cultural programs.',
  },
];

const partTimeJobs = [
  {
    icon: Utensils,
    title: 'Convenience Store Staff',
    description: 'Conbini jobs are plentiful, flexible, and great for practicing everyday Japanese.',
  },
  {
    icon: Utensils,
    title: 'Restaurant / Cafe Staff',
    description: 'Waitstaff, kitchen help, and barista roles in restaurants, izakayas, and cafes.',
  },
  {
    icon: Languages,
    title: 'English Tutor',
    description: 'Teach English conversation to children or adults — no teaching license required for many roles.',
  },
  {
    icon: Briefcase,
    title: 'Retail / Sales',
    description: 'Department stores, supermarkets, and electronics shops often hire bilingual students.',
  },
  {
    icon: Smartphone,
    title: 'IT / Data Entry',
    description: 'Office-based or remote roles for students with technical skills and basic Japanese ability.',
  },
  {
    icon: PartyPopper,
    title: 'Event / Festival Staff',
    description: 'Seasonal work at concerts, sports events, and traditional festivals across Japan.',
  },
];

const partTimeTips = [
  'Apply for Permission to Engage in Other Activities (資格外活動許可) at immigration before starting work.',
  'You may work up to 28 hours per week during school terms and full-time during official school breaks.',
  'Never exceed the 28-hour limit — violations can result in visa cancellation and deportation.',
  'Avoid working in adult entertainment businesses (bars, nightclubs, pachinko parlors) — strictly prohibited.',
  'Keep a record of your working hours and pay slips in case of inspection.',
  'Use job boards like GaijinPot, Townwork, and your school\'s career center to find student-friendly roles.',
];

const timeline = [
  {
    icon: Search,
    phase: '6–12 months before',
    title: 'Research & Prepare',
    description:
      'Explore schools, programs, and cities. Begin studying Japanese and aim for JLPT N5 or higher. Save funds for application fees and initial costs.',
  },
  {
    icon: Send,
    phase: '4–8 months before',
    title: 'Apply to Schools',
    description:
      'Submit applications to your chosen schools. Prepare transcripts, recommendation letters, and language certificates.',
  },
  {
    icon: ShieldCheck,
    phase: '3–5 months before',
    title: 'Certificate of Eligibility',
    description:
      'Your school applies for your COE at the immigration bureau. Wait for approval — this is the longest step in the process.',
  },
  {
    icon: FileText,
    phase: '2–3 months before',
    title: 'Visa Application',
    description:
      'Receive your COE and apply for a student visa at your local Japanese embassy or consulate. Gather all required documents.',
  },
  {
    icon: Plane,
    phase: '1 month before',
    title: 'Travel Preparation',
    description:
      'Book your flight, arrange initial accommodation, pack essentials, and set up a budget for your first weeks in Japan.',
  },
  {
    icon: CheckCircle,
    phase: 'Arrival',
    title: 'Arrive & Settle In',
    description:
      'Register at city hall, enroll in National Health Insurance, open a bank account, get a mobile plan, and attend school orientation.',
  },
];

export default function StudyInJapanPage() {
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <Badge variant="secondary" className="mb-4">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Study Abroad Guide
                </Badge>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                  Study in <span className="text-primary">Japan</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-4">
                  Your complete roadmap to studying, living, and thriving in Japan.
                </p>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  From student visas and language schools to scholarships and part-time
                  jobs — everything you need to turn your Japan dream into reality.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  <Badge variant="outline" className="text-sm">
                    <MapPin className="h-3 w-3 mr-1" />
                    Nationwide Coverage
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    <FileText className="h-3 w-3 mr-1" />
                    Visa Guidance
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    <Award className="h-3 w-3 mr-1" />
                    Scholarship Info
                  </Badge>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="#visa">
                      <FileText className="mr-2 h-4 w-4" />
                      Start with the Visa Guide
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/contact">
                      <Plane className="mr-2 h-4 w-4" />
                      Get Free Consultation
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/2175829/pexels-photo-2175829.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="University campus in Japan with cherry blossoms"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-black rounded-xl p-4 shadow-lg border hidden sm:block">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Study in Japan</p>
                      <p className="text-sm text-muted-foreground">Complete Guide 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Topics Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Everything You Need
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Complete Study Abroad Resources
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Six essential topics covering every stage of your journey to studying in
                Japan.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic) => (
                <Link key={topic.title} href={topic.href}>
                  <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                        <topic.icon className="h-6 w-6 text-primary group-hover:text-white" />
                      </div>
                      <div className="flex justify-between items-start">
                        <CardTitle>{topic.title}</CardTitle>
                        <Badge variant="secondary">{topic.count}</Badge>
                      </div>
                      <CardDescription className="mt-2">
                        {topic.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="text-sm text-primary font-medium inline-flex items-center">
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Student Visa Guide Section */}
        <section id="visa" className="py-20 lg:py-28 bg-muted/30 scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <FileText className="h-3 w-3 mr-1" />
                Step-by-Step Process
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Student Visa Guide
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Follow these eight steps to obtain your Japanese student visa and begin
                your studies in Japan.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {visaSteps.map((item, index) => (
                <div
                  key={item.step}
                  className="relative pl-8 sm:pl-12 pb-8 last:pb-0 border-l-2 border-primary/30 last:border-l-0"
                >
                  <div className="absolute left-0 top-0 transform -translate-x-1/2 h-7 w-7 rounded-full bg-primary flex items-center justify-center ring-4 ring-background">
                    <span className="text-xs font-bold text-white">{item.step}</span>
                  </div>

                  <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Language Schools Section */}
        <section id="schools" className="py-20 lg:py-28 bg-background scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <Globe className="h-3 w-3 mr-1" />
                Featured Institutions
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Language Schools
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A selection of reputable Japanese language schools across major cities to
                help you start your journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {languageSchools.map((school) => (
                <Card
                  key={school.name}
                  className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={school.image}
                      alt={school.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge variant="secondary" className="mb-2">
                        <MapPin className="h-3 w-3 mr-1" />
                        {school.location}
                      </Badge>
                      <h3 className="text-xl font-bold text-white">{school.name}</h3>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <ul className="space-y-2 mb-4">
                      {school.features.map((feature) => (
                        <li key={feature} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-sm text-muted-foreground">Tuition</span>
                      <span className="font-semibold text-primary">
                        {school.priceRange}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Accommodation Section */}
        <section id="accommodation" className="py-20 lg:py-28 bg-muted/30 scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <Home className="h-3 w-3 mr-1" />
                Where to Live
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Accommodation Options
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From dormitories to private apartments — find the housing option that
                suits your budget and lifestyle.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {accommodationOptions.map((option) => (
                <Card
                  key={option.name}
                  className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <option.icon className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{option.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {option.description}
                    </p>
                    <div className="flex items-center pt-4 border-t">
                      <JapaneseYen className="h-4 w-4 text-primary mr-2" />
                      <span className="font-semibold text-primary">
                        {option.priceRange}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cost of Living Section */}
        <section id="cost" className="py-20 lg:py-28 bg-background scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <CreditCard className="h-3 w-3 mr-1" />
                Monthly Budget
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Cost of Living in Japan
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A realistic breakdown of monthly expenses for international students.
                Prices vary by city — Tokyo and Osaka tend to be the most expensive.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted/50 border-b">
                        <th className="text-left px-6 py-4 font-semibold">Category</th>
                        <th className="text-left px-6 py-4 font-semibold hidden sm:table-cell">
                          Details
                        </th>
                        <th className="text-right px-6 py-4 font-semibold">
                          Monthly Cost (JPY)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {costBreakdown.map((item, index) => (
                        <tr
                          key={item.category}
                          className={`border-b last:border-b-0 hover:bg-muted/30 transition-colors ${
                            index % 2 === 1 ? 'bg-muted/10' : ''
                          }`}
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                                <item.icon className="h-5 w-5 text-primary" />
                              </div>
                              <span className="font-medium">{item.category}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-muted-foreground hidden sm:table-cell">
                            {item.detail}
                          </td>
                          <td className="px-6 py-4 text-right font-semibold text-primary whitespace-nowrap">
                            {item.costRange}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="bg-primary/5 border-t-2 border-primary/20">
                        <td className="px-6 py-4 font-bold" colSpan={2}>
                          Estimated Total
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-primary whitespace-nowrap">
                          ¥80,000 – ¥206,000
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </Card>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Figures are estimates for a single student. Actual costs vary by region,
                lifestyle, and exchange rates.
              </p>
            </div>
          </div>
        </section>

        {/* Scholarships Section */}
        <section id="scholarships" className="py-20 lg:py-28 bg-muted/30 scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <Award className="h-3 w-3 mr-1" />
                Financial Support
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Scholarship Opportunities
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Five major scholarship programs that can help fund your studies in Japan —
                from full government scholarships to local grants.
              </p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {scholarships.map((s) => (
                <Card
                  key={s.name}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div className="md:col-span-2">
                        <h3 className="font-semibold text-lg mb-1">{s.name}</h3>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <Building2 className="h-3 w-3 mr-1 flex-shrink-0" />
                          {s.provider}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                          Amount
                        </p>
                        <p className="font-medium text-primary">{s.amount}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                          Eligibility
                        </p>
                        <p className="text-sm font-medium">{s.eligibility}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Part-Time Jobs Section */}
        <section id="part-time" className="py-20 lg:py-28 bg-background scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <Briefcase className="h-3 w-3 mr-1" />
                Work While Studying
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Part-Time Jobs
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Working part-time is a great way to support yourself and practice your
                Japanese — but there are important rules to follow.
              </p>
            </div>

            {/* Rules Banner */}
            <div className="max-w-4xl mx-auto mb-12">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-7 w-7 text-primary" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="font-semibold text-lg mb-1">
                        The 28-Hour Rule
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        International students on a student visa may work up to{' '}
                        <span className="font-semibold text-primary">
                          28 hours per week
                        </span>{' '}
                        during school terms, and full-time during official school breaks.
                        You must obtain Permission to Engage in Other Activities before
                        starting any job.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Common Jobs Grid */}
            <div className="max-w-5xl mx-auto mb-12">
              <h3 className="text-xl font-semibold text-center mb-8">
                Common Part-Time Jobs
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {partTimeJobs.map((job) => (
                  <Card
                    key={job.title}
                    className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="pt-6">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        <job.icon className="h-6 w-6 text-primary group-hover:text-white" />
                      </div>
                      <h4 className="font-semibold mb-2">{job.title}</h4>
                      <p className="text-sm text-muted-foreground">{job.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold text-center mb-8">
                Tips for Working in Japan
              </h3>
              <div className="space-y-3">
                {partTimeTips.map((tip, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-muted/30 rounded-lg p-4 hover:bg-muted/50 transition-colors"
                  >
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Timeline Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <Calendar className="h-3 w-3 mr-1" />
                Your Journey
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                From Research to Arrival
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A timeline of the key milestones on your path to studying in Japan —
                plan ahead so nothing catches you by surprise.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 sm:pl-12 pb-8 last:pb-0 border-l-2 border-primary/30 last:border-l-0"
                >
                  <div className="absolute left-0 top-0 transform -translate-x-1/2 h-6 w-6 rounded-full bg-primary flex items-center justify-center ring-4 ring-background">
                    <item.icon className="h-3 w-3 text-white" />
                  </div>

                  <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <Badge variant="secondary" className="text-sm font-bold">
                        {item.phase}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 japan-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur">
                  <Plane className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Let&apos;s Make Your Japan Dream Come True
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Get personalized guidance for your study abroad journey — from choosing a
                school to arriving in Japan. Our team is here to help every step of the
                way.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/learn">Start Learning Japanese</Link>
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
