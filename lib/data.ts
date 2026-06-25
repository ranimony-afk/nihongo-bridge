import {
  BookOpen,
  GraduationCap,
  Briefcase,
  Globe,
  Sparkles,
  Users,
  Award,
  Heart,
  FileText,
  Layers,
  PenTool,
  Building2,
  Plane,
  Home,
  Wallet,
  Stethoscope,
  Code2,
  Languages,
  BriefcaseBusiness,
  Cherry,
  Calendar,
  UtensilsCrossed,
  Train,
  type LucideIcon,
} from 'lucide-react';

export const siteConfig = {
  name: 'Nihongo Bridge',
  tagline: 'Learn Japanese • Study in Japan • Build Your Career',
  url: 'https://nihongobridge.com',
  description:
    'Master Japanese, prepare for JLPT, explore Japanese culture, and build your future in Japan.',
};

export type NavLink = {
  name: string;
  href: string;
  icon?: LucideIcon;
  children?: { name: string; href: string; icon?: LucideIcon }[];
};

export const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Learn Japanese',
    href: '/learn',
    children: [
      { name: 'Vocabulary', href: '/learn/vocabulary', icon: BookOpen },
      { name: 'Grammar', href: '/learn/grammar', icon: Layers },
      { name: 'Kanji', href: '/learn/kanji', icon: PenTool },
      { name: 'Conversation', href: '/learn/conversation', icon: Languages },
      { name: 'Business Japanese', href: '/learn/business-japanese', icon: BriefcaseBusiness },
    ],
  },
  {
    name: 'JLPT',
    href: '/jlpt',
    children: [
      { name: 'JLPT N5', href: '/jlpt/n5', icon: GraduationCap },
      { name: 'JLPT N4', href: '/jlpt/n4', icon: GraduationCap },
      { name: 'JLPT N3', href: '/jlpt/n3', icon: GraduationCap },
    ],
  },
  {
    name: 'Study in Japan',
    href: '/study-in-japan',
    children: [
      { name: 'Student Visa Guide', href: '/study-in-japan#visa', icon: FileText },
      { name: 'Language Schools', href: '/study-in-japan#schools', icon: Building2 },
      { name: 'Accommodation', href: '/study-in-japan#accommodation', icon: Home },
      { name: 'Cost of Living', href: '/study-in-japan#cost', icon: Wallet },
      { name: 'Scholarships', href: '/study-in-japan#scholarships', icon: Award },
      { name: 'Part-Time Jobs', href: '/study-in-japan#part-time', icon: Briefcase },
    ],
  },
  {
    name: 'Japanese Jobs',
    href: '/careers',
    children: [
      { name: 'Interpreter Careers', href: '/careers#interpreter', icon: Languages },
      { name: 'Engineering Jobs', href: '/careers#engineering', icon: Code2 },
      { name: 'IT Careers', href: '/careers#it', icon: Code2 },
      { name: 'Healthcare Careers', href: '/careers#healthcare', icon: Stethoscope },
      { name: 'Business Roles', href: '/careers#business', icon: Briefcase },
    ],
  },
  {
    name: 'Culture',
    href: '/culture',
    children: [
      { name: 'Etiquette', href: '/culture#etiquette', icon: Sparkles },
      { name: 'Festivals', href: '/culture#festivals', icon: Calendar },
      { name: 'Food', href: '/culture#food', icon: UtensilsCrossed },
      { name: 'Work Culture', href: '/culture#work-culture', icon: Briefcase },
      { name: 'Daily Life', href: '/culture#daily-life', icon: Home },
      { name: 'Traditions', href: '/culture#traditions', icon: Cherry },
    ],
  },
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
  content?: string;
};

export const blogCategories = [
  'All',
  'JLPT',
  'Vocabulary',
  'Grammar',
  'Culture',
  'Study in Japan',
  'Careers',
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-i-studied-japanese-in-tokyo',
    title: 'How I Studied Japanese in Tokyo',
    excerpt:
      'A personal journey of learning Japanese while living in Tokyo - from zero to JLPT N3 in 18 months.',
    category: 'Study in Japan',
    tags: ['tokyo', 'language-school', 'immersion', 'personal-experience'],
    readTime: '12 min',
    date: '2024-12-15',
    image: 'https://images.pexels.com/photos/2613210/pexels-photo-2613210.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    slug: 'cost-of-living-in-japan',
    title: 'Cost of Living in Japan: Complete Breakdown',
    excerpt:
      'Everything you need to know about rent, food, transport, and daily expenses as a student or worker in Japan.',
    category: 'Study in Japan',
    tags: ['budget', 'expenses', 'student-life', 'tokyo', 'osaka'],
    readTime: '15 min',
    date: '2024-12-10',
    image: 'https://images.pexels.com/photos/1632681/pexels-photo-1632681.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    slug: 'jlpt-n5-complete-guide',
    title: 'JLPT N5 Complete Guide: Everything You Need to Pass',
    excerpt:
      'A comprehensive guide to passing JLPT N5 - vocabulary lists, grammar points, study plans, and practice tips.',
    category: 'JLPT',
    tags: ['jlpt', 'n5', 'beginner', 'study-plan', 'grammar'],
    readTime: '15 min',
    date: '2024-12-05',
    image: 'https://images.pexels.com/photos/3825585/pexels-photo-3825585.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    slug: 'japanese-interview-questions',
    title: 'Japanese Interview Questions: How to Prepare',
    excerpt:
      'Common interview questions at Japanese companies and how to answer them with confidence.',
    category: 'Careers',
    tags: ['interview', 'jobs', 'business-japanese', 'career'],
    readTime: '10 min',
    date: '2024-11-28',
    image: 'https://images.pexels.com/photos/2182980/pexels-photo-2182980.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'beginners-guide-to-japanese-culture',
    title: "Beginner's Guide to Japanese Culture",
    excerpt:
      'Explore the rich traditions, customs, and daily life practices that shape Japanese society.',
    category: 'Culture',
    tags: ['culture', 'etiquette', 'traditions', 'beginner'],
    readTime: '10 min',
    date: '2024-11-20',
    image: 'https://images.pexels.com/photos/161251/photo-161251.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'how-to-learn-japanese-efficiently',
    title: 'How to Learn Japanese Efficiently',
    excerpt:
      'Proven study methods, time management tips, and resources to accelerate your Japanese learning journey.',
    category: 'Vocabulary',
    tags: ['study-methods', 'efficiency', 'tips', 'resources'],
    readTime: '8 min',
    date: '2024-11-15',
    image: 'https://images.pexels.com/photos/6995098/pexels-photo-6995098.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'student-life-in-japan',
    title: 'Student Life in Japan: What to Expect',
    excerpt:
      'A realistic look at daily life as an international student in Japan - from commuting to making friends.',
    category: 'Study in Japan',
    tags: ['student-life', 'daily-routine', 'culture', 'tips'],
    readTime: '11 min',
    date: '2024-11-08',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'finding-jobs-in-japanese-companies',
    title: 'Finding Jobs in Japanese Companies',
    excerpt:
      'A practical guide to job hunting in Japan - from resume writing to networking and interview preparation.',
    category: 'Careers',
    tags: ['jobs', 'career', 'job-hunting', 'business'],
    readTime: '13 min',
    date: '2024-11-01',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const dailyVocabulary = [
  { japanese: '仕事', furigana: 'しごと', english: 'Work', example: '私は毎日仕事をします。', exampleEn: 'I work every day.' },
  { japanese: '学校', furigana: 'がっこう', english: 'School', example: '学校は九時に始まります。', exampleEn: 'School starts at nine.' },
  { japanese: '先生', furigana: 'せんせい', english: 'Teacher', example: '先生は親切です。', exampleEn: 'The teacher is kind.' },
  { japanese: '友達', furigana: 'ともだち', english: 'Friend', example: '友達と遊びます。', exampleEn: 'I play with my friend.' },
  { japanese: '勉強', furigana: 'べんきょう', english: 'Study', example: '日本語を勉強しています。', exampleEn: 'I am studying Japanese.' },
];

export const jlptLevels = [
  {
    level: 'N5',
    title: 'Beginner',
    desc: 'Basic grammar & vocabulary',
    count: '150+ lessons',
    vocabulary: '800 words',
    kanji: '100 kanji',
    href: '/jlpt/n5',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'from-green-50 to-emerald-50',
    textColor: 'text-green-600',
  },
  {
    level: 'N4',
    title: 'Elementary',
    desc: 'Daily conversation skills',
    count: '200+ lessons',
    vocabulary: '1,500 words',
    kanji: '300 kanji',
    href: '/jlpt/n4',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'from-blue-50 to-cyan-50',
    textColor: 'text-blue-600',
  },
  {
    level: 'N3',
    title: 'Intermediate',
    desc: 'Natural communication',
    count: '250+ lessons',
    vocabulary: '3,000 words',
    kanji: '650 kanji',
    href: '/jlpt/n3',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'from-amber-50 to-orange-50',
    textColor: 'text-amber-600',
  },
  {
    level: 'N2',
    title: 'Pre-Advanced',
    desc: 'Business Japanese',
    count: '300+ lessons',
    vocabulary: '6,000 words',
    kanji: '1,000 kanji',
    href: '/jlpt',
    color: 'from-red-500 to-rose-600',
    bgColor: 'from-red-50 to-rose-50',
    textColor: 'text-red-600',
  },
];

export const studyInJapanTopics = [
  { icon: FileText, title: 'Student Visa Guide', description: 'Step-by-step visa application process and requirements.', href: '/study-in-japan#visa', count: '8 steps' },
  { icon: Building2, title: 'Language Schools', description: 'Compare top Japanese language schools and programs.', href: '/study-in-japan#schools', count: '50+ schools' },
  { icon: Home, title: 'Accommodation', description: 'Find housing options from dorms to apartments.', href: '/study-in-japan#accommodation', count: '6 options' },
  { icon: Wallet, title: 'Cost of Living', description: 'Detailed breakdown of monthly expenses in Japan.', href: '/study-in-japan#cost', count: '¥80K-150K' },
  { icon: Award, title: 'Scholarships', description: 'MEXT, JASSO, and private scholarship opportunities.', href: '/study-in-japan#scholarships', count: '15+ options' },
  { icon: Briefcase, title: 'Part-Time Jobs', description: 'Rules and opportunities for international students.', href: '/study-in-japan#part-time', count: '28 hrs/week' },
];

export const careerCategories = [
  { icon: Languages, title: 'Japanese Interpreter', description: 'Bridge language gaps in business and healthcare settings.', skills: ['N2+ Japanese', 'Cultural fluency', 'Specialized vocabulary'], salary: '¥250K-500K/mo', href: '/careers#interpreter' },
  { icon: Briefcase, title: 'Bilingual Support', description: 'Customer service and operations roles requiring Japanese.', skills: ['N3+ Japanese', 'Communication', 'Problem-solving'], salary: '¥200K-350K/mo', href: '/careers#bilingual' },
  { icon: Code2, title: 'Engineering Jobs', description: 'Mechanical, electrical, and manufacturing engineering roles.', skills: ['Technical degree', 'N3+ Japanese', 'CAD/Engineering tools'], salary: '¥250K-450K/mo', href: '/careers#engineering' },
  { icon: Code2, title: 'IT Careers', description: 'Software development, data, and infrastructure roles.', skills: ['Programming', 'N3+ Japanese', 'Cloud platforms'], salary: '¥300K-600K/mo', href: '/careers#it' },
  { icon: Stethoscope, title: 'Healthcare Careers', description: 'Nursing and caregiving positions with growing demand.', skills: ['N4+ Japanese', 'Medical terminology', 'Certification'], salary: '¥220K-400K/mo', href: '/careers#healthcare' },
  { icon: Briefcase, title: 'Business Roles', description: 'Sales, marketing, and management positions in Japanese firms.', skills: ['N2+ Japanese', 'Business etiquette', 'Sales experience'], salary: '¥250K-500K/mo', href: '/careers#business' },
];

export const cultureTopics = [
  { icon: Sparkles, title: 'Etiquette', description: 'Master bowing, gift-giving, and social customs.', href: '/culture#etiquette' },
  { icon: Calendar, title: 'Festivals', description: 'Explore matsuri, hanami, and seasonal celebrations.', href: '/culture#festivals' },
  { icon: UtensilsCrossed, title: 'Food', description: 'Discover washoku, dining etiquette, and regional cuisine.', href: '/culture#food' },
  { icon: Briefcase, title: 'Work Culture', description: 'Understand Japanese business customs and workplace norms.', href: '/culture#work-culture' },
  { icon: Home, title: 'Daily Life', description: 'Learn about transportation, shopping, and living in Japan.', href: '/culture#daily-life' },
  { icon: Cherry, title: 'Traditions', description: 'Explore tea ceremony, calligraphy, and seasonal traditions.', href: '/culture#traditions' },
];

export const stats = [
  { value: '10,000+', label: 'Students Helped' },
  { value: '500+', label: 'Japanese Lessons' },
  { value: '50+', label: 'Countries Reached' },
  { value: '98%', label: 'Success Rate' },
];

export const testimonials = [
  {
    name: 'Student from Chennai',
    location: 'Chennai',
    text: 'This platform helped me clear JLPT N4 and now I work as a Japanese interpreter in Tokyo!',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Engineering Graduate',
    location: 'Madurai',
    text: 'The study materials and scholarship guide helped me get into a top Japanese university.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Language Enthusiast',
    location: 'Coimbatore',
    text: 'Learning Japanese through Tamil explanations made everything so much easier to understand.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
];
