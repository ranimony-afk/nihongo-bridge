import { Metadata } from 'next';
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
import {
  Sparkles,
  ArrowRight,
  Flower2,
  CalendarDays,
  UtensilsCrossed,
  Briefcase,
  Home,
  ScrollText,
  HandHeart,
  Gift,
  Utensils,
  Footprints,
  Contact,
  PartyPopper,
  Star,
  Flame,
  Fish,
  Soup,
  Coffee,
  Wine,
  Users,
  TrendingUp,
  Clock,
  Train,
  ShoppingBag,
  Trash2,
  Bath,
  Leaf,
  PenTool,
  Sunrise,
  BookOpen,
  ArrowDown,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Japanese Culture',
  description:
    'Explore the rich traditions of Japanese culture — etiquette, festivals, food, work culture, daily life, and timeless traditions. A comprehensive guide from Nihongo Bridge.',
  alternates: { canonical: '/culture' },
};

const cultureTopics = [
  {
    icon: HandHeart,
    title: 'Etiquette',
    japanese: '礼儀',
    romaji: 'reigi',
    description:
      'Master the unspoken rules of Japanese social conduct — from bowing to business cards.',
    href: '#etiquette',
  },
  {
    icon: PartyPopper,
    title: 'Festivals',
    japanese: '祭り',
    romaji: 'matsuri',
    description:
      'Discover the vibrant celebrations that mark the seasons across Japan.',
    href: '#festivals',
  },
  {
    icon: UtensilsCrossed,
    title: 'Food',
    japanese: '和食',
    romaji: 'washoku',
    description:
      'Explore the art, etiquette, and flavors of Japan\u2019s world-famous cuisine.',
    href: '#food',
  },
  {
    icon: Briefcase,
    title: 'Work Culture',
    japanese: '仕事',
    romaji: 'shigoto',
    description:
      'Understand the customs, relationships, and values that shape Japanese workplaces.',
    href: '#work-culture',
  },
  {
    icon: Home,
    title: 'Daily Life',
    japanese: '日常生活',
    romaji: 'nichijō seikatsu',
    description:
      'Navigate everyday life in Japan — trains, konbini, garbage sorting, and onsen.',
    href: '#daily-life',
  },
  {
    icon: ScrollText,
    title: 'Traditions',
    japanese: '伝統',
    romaji: 'dentō',
    description:
      'Connect with centuries-old arts and seasonal rituals that endure today.',
    href: '#traditions',
  },
];

const etiquetteItems = [
  {
    icon: HandHeart,
    title: 'Bowing (お辞儀)',
    japanese: 'おじぎ',
    description:
      'Bowing is the most common greeting in Japan. Eshaku (会釈) is a casual 15° bow for quick greetings, keirei (敬礼) is a 30° bow for business and formal situations, and saikeirei (最敬礼) is a deep 45° bow reserved for deep gratitude or sincere apology. The depth and duration of the bow convey respect and sincerity.',
  },
  {
    icon: Gift,
    title: 'Gift-Giving (お土産)',
    japanese: 'おみやげ',
    description:
      'Bringing omiyage (souvenirs) back from trips is a cherished custom. Gifts are given and received with both hands, and it is polite to modestly decline once or twice before accepting. Seasonal gift exchanges like ochūgen (お中元) in summer and oseibo (お歳暮) in winter strengthen social bonds.',
  },
  {
    icon: Utensils,
    title: 'Chopstick Rules (箸)',
    japanese: 'はし',
    description:
      'Never stick chopsticks vertically into rice — this resembles incense at funerals. Avoid passing food chopstick-to-chopstick, which mimics a funeral ritual. Don\u2019t point, spear food, or wave chopsticks around. Rest them on a hashioki (箸置き) when not in use.',
  },
  {
    icon: Footprints,
    title: 'Shoe Removal (靴を脱ぐ)',
    japanese: 'くつをぬぐ',
    description:
      'Remove shoes before entering homes, traditional inns, temples, and many schools and restaurants. Step up into the genkan (玄関) and place your shoes facing outward. Indoor slippers are provided, but remove even these on tatami mats and in restrooms where special toilet slippers are used.',
  },
  {
    icon: Contact,
    title: 'Business Card Exchange (名刺交換)',
    japanese: 'めいしこうかん',
    description:
      'Present and receive meishi (名刺) with both hands, text facing the recipient. Take a moment to read the card carefully — never stuff it into a pocket. Place it on the table during the meeting and store it respectfully in a cardholder afterward. This ritual reflects the respect central to Japanese business.',
  },
];

const festivals = [
  {
    icon: Flower2,
    title: 'Hanami',
    japanese: '花見',
    description:
      'Hanami is the beloved tradition of viewing cherry blossoms in spring. Friends, families, and coworkers gather under sakura trees in parks to picnic, drink, and celebrate the fleeting beauty of the blossoms — a reminder of life\u2019s impermanence (物の哀れ).',
    timing: 'Late March – Mid April',
  },
  {
    icon: Star,
    title: 'Tanabata',
    japanese: '七夕',
    description:
      'The Star Festival celebrates the reunion of deities Orihime and Hikoboshi, separated by the Milky Way and allowed to meet once a year. People write wishes on colorful strips of paper (短冤, tanzaku) and tie them to bamboo branches, which are displayed in streets and homes.',
    timing: 'July 7 (or August in some regions)',
  },
  {
    icon: Flame,
    title: 'Obon',
    japanese: 'お盆',
    description:
      'Obon is a Buddhist observance honoring the spirits of ancestors. Families return to hometowns to clean graves, light lanterns, and perform bon odori (盆踊り) folk dances. The festival closes with tōrō nagashi, floating paper lanterns down rivers to guide spirits home.',
    timing: 'August 13 – 15',
  },
  {
    icon: PartyPopper,
    title: 'Matsuri',
    japanese: '祭り',
    description:
      'Matsuri are local festivals held throughout the year at shrines and temples. They feature food stalls (屋台, yatai), portable shrines (神輿, mikoshi) carried through the streets, fireworks (花火, hanabi), and traditional performances. Each region\u2019s matsuri reflects its unique history and community spirit.',
    timing: 'Year-round, peaking in summer',
  },
];

const foodItems = [
  {
    icon: Leaf,
    title: 'Washoku (和食)',
    description:
      'Washoku, traditional Japanese cuisine, is a UNESCO Intangible Cultural Heritage. It emphasizes seasonal ingredients, balance of five colors and flavors, and respect for nature. A typical meal combines rice, miso soup, and tsukemono pickles with seasonal side dishes.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Dining Etiquette',
    description:
      'Say itadakimasu (いただきます) before eating and gochisōsama (ごちそうさま) after. Lift bowls to your mouth, slurp noodles to show appreciation, and never pour your own drink — pour for others and let them reciprocate. Chopstick taboos are strictly observed.',
  },
  {
    icon: Fish,
    title: 'Sushi (寿司)',
    description:
      'Sushi is vinegared rice paired with seafood, vegetables, or egg. From nigiri (hand-pressed) to maki (rolled), sushi showcases the chef\u2019s skill and the freshness of ingredients. Eat nigiri with your hands, fish-side down in soy, and avoid overusing wasabi.',
  },
  {
    icon: Soup,
    title: 'Ramen (ラーメン)',
    description:
      'Ramen is a beloved noodle soup with countless regional styles — from rich tonkotsu pork broth of Hakata to miso ramen of Sapporo and shōyu ramen of Tokyo. Each bowl reflects local ingredients and culinary philosophy. Slurping is encouraged.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Tempura (天ぷら)',
    description:
      'Tempura is seafood and vegetables lightly battered and deep-fried to a delicate crisp. Introduced by Portuguese missionaries in the 16th century, it was refined into a Japanese art. Dip in tentsuyu broth with grated daikon, and eat while hot.',
  },
  {
    icon: Coffee,
    title: 'Matcha (抹茶)',
    description:
      'Matcha is finely ground green tea powder central to the tea ceremony (茶道). Its vivid green color and umami flavor make it both a ceremonial drink and a popular flavor in sweets. Preparing matcha with a chasen (茶筅) whisk is a mindful practice.',
  },
];

const workCultureItems = [
  {
    icon: Briefcase,
    title: 'Business Customs',
    description:
      'Punctuality, formality, and consensus define Japanese business culture. Meetings follow strict hierarchies, decisions are made through nemawashi (根回し) — informal consensus-building — and written agreements are less important than trusted relationships built over time.',
  },
  {
    icon: Wine,
    title: 'Nomikai (飲み会)',
    description:
      'Nomikai are after-work drinking gatherings that build camaraderie across hierarchies. They offer a relaxed space to bond with colleagues and supervisors. The first round is usually a shared toast (kanpai, 乾杯), and pouring drinks for others is a sign of respect.',
  },
  {
    icon: Users,
    title: 'Senpai-Kohai (先輩後輩)',
    description:
      'The senpai-kohai system is a mentorship hierarchy based on experience. A senpai (senior) guides and protects their kohai (junior), who in turn shows loyalty and assistance. This relationship, rooted in Confucian values, shapes schools, workplaces, and clubs.',
  },
  {
    icon: TrendingUp,
    title: 'Kaizen (改善)',
    description:
      'Kaizen means continuous improvement — a philosophy of making small, incremental changes to processes and products. Originating in Japanese manufacturing, it empowers every employee to suggest improvements and has influenced quality management worldwide.',
  },
  {
    icon: Clock,
    title: 'Overtime Culture',
    description:
      'Historically, long hours demonstrated dedication, and service overtime (サービス残業) was common. Today, attitudes are shifting. The 2018 Work Style Reform (働き方改革) limits overtime and encourages paid leave, as companies prioritize wellbeing and productivity.',
  },
];

const dailyLifeItems = [
  {
    icon: Train,
    title: 'Trains & IC Cards',
    description:
      'Japan\u2019s trains are famously punctual and extensive. IC cards like Suica (スイカ) and Pasmo (パスモ) make tap-and-go travel effortless across trains, buses, and even vending machines. Rush hour can be crowded, and quiet, respectful behavior is expected.',
  },
  {
    icon: ShoppingBag,
    title: 'Convenience Stores (コンビニ)',
    description:
      'Konbini like 7-Eleven, FamilyMart, and Lawson are everywhere and offer far more than snacks — ATMs, bill payment, ticket booking, printing, and fresh meals like onigiri and bento. They are open 24/7 and are a lifeline of Japanese daily life.',
  },
  {
    icon: Trash2,
    title: 'Garbage Sorting (ゴミ分別)',
    description:
      'Japan sorts waste meticulously into burnable (燃えるゴミ), non-burnable (燃えないゴミ), recyclable plastics, paper, PET bottles, and cans. Each has designated collection days, and items are washed before disposal. Neighbors follow strict local rules.',
  },
  {
    icon: Bath,
    title: 'Public Baths (温泉)',
    description:
      'Onsen (温泉) are natural hot springs, and sentō (銭湯) are public bathhouses. Bathe before entering the communal bath, never put towels in the water, and keep hair tied up. Tattoos may restrict entry at some venues. Bathing is a ritual of relaxation and renewal.',
  },
];

const traditionItems = [
  {
    icon: Leaf,
    title: 'Tea Ceremony (茶道)',
    japanese: 'さどう',
    description:
      'Sadō, the way of tea, is the disciplined art of preparing and serving matcha. Rooted in Zen principles of harmony (和), respect (敬), purity (清), and tranquility (寂), the ceremony turns a simple act into a meditation on hospitality, aesthetics, and the present moment.',
  },
  {
    icon: PenTool,
    title: 'Calligraphy (書道)',
    japanese: 'しょどう',
    description:
      'Shodō is the art of writing kanji and kana with a brush (筆, fude) and ink (墨, sumi). Practiced for centuries, it cultivates focus, discipline, and an appreciation for the beauty of each stroke. Students learn from a young age, and masters devote a lifetime.',
  },
  {
    icon: CalendarDays,
    title: 'Seasonal Traditions (季節の行事)',
    japanese: 'きせつのぎょうじ',
    description:
      'Japan marks the seasons with hanami in spring, tanabata in summer, tsukimi (月見, moon-viewing) in autumn, and omisoka (大晦日, New Year\u2019s Eve) in winter. These customs, tied to nature and agriculture, keep the rhythm of the year alive in modern life.',
  },
  {
    icon: Sunrise,
    title: 'New Year (お正月)',
    japanese: 'おしょうがつ',
    description:
      'Oshōgatsu is Japan\u2019s most important holiday. Families gather to eat osechi ryōri (お節料理, layered festive dishes), visit shrines for hatsumōde (初詣), and send nengajō (年賀状, New Year cards). Homes are cleaned, kadomatsu (門松) decorations are placed, and the year begins fresh.',
  },
];

export default function CulturePage() {
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
                  Japanese Culture
                </Badge>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                  Japanese <span className="text-primary">Culture</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-4">
                  Explore Japan&apos;s rich traditions, customs, and way of life
                </p>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  From the graceful bow of a greeting to the vibrant energy of a
                  summer matsuri, Japanese culture blends ancient tradition with
                  modern life. Discover the customs, festivals, food, and values
                  that make Japan uniquely captivating.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <a href="#etiquette">
                      Explore Culture
                      <ArrowDown className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/blog">
                      Read Culture Articles
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Traditional Japanese temple and lanterns during a festival"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-black rounded-xl p-4 shadow-lg border hidden sm:block">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl kanji-text text-primary">
                        <ruby className="kanji-text">
                          文化<rt>ぶんか</rt>
                        </ruby>
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-lg">Bunka</p>
                      <p className="text-sm text-muted-foreground">The Way of Japan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Culture Topics Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Explore by Topic
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                A Guide to <span className="text-primary">Japanese Culture</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Six pillars of Japanese life — each a window into the values,
                history, and everyday experiences of the Japanese people.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cultureTopics.map((topic, index) => (
                <a key={index} href={topic.href} className="block group">
                  <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="pt-6">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        <topic.icon className="h-6 w-6 text-primary group-hover:text-white" />
                      </div>
                      <div className="flex items-baseline gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{topic.title}</h3>
                        <span className="text-sm kanji-text text-primary">
                          {topic.japanese}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground italic mb-3">
                        {topic.romaji}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {topic.description}
                      </p>
                      <div className="mt-4 flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Etiquette Section */}
        <section id="etiquette" className="py-20 lg:py-28 bg-muted/30 scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <HandHeart className="h-7 w-7 text-primary" />
                </div>
              </div>
              <Badge variant="outline" className="mb-4">
                礼儀 • Reigi
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Etiquette &amp; Manners
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Respect and consideration for others are the foundation of Japanese
                social life. Master these customs to navigate Japan with confidence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {etiquetteItems.map((item, index) => (
                <Card
                  key={index}
                  className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <item.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          <span className="text-sm kanji-text text-primary">
                            {item.japanese}
                          </span>
                        </div>
                        <CardDescription className="mt-2 text-base leading-relaxed">
                          {item.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Festivals Section */}
        <section id="festivals" className="py-20 lg:py-28 bg-background scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <PartyPopper className="h-7 w-7 text-primary" />
                </div>
              </div>
              <Badge variant="outline" className="mb-4">
                祭り • Matsuri
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Festivals &amp; Celebrations
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Japan&apos;s festivals mark the seasons with color, community, and
                centuries of tradition. Each one tells a story.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {festivals.map((festival, index) => (
                <Card
                  key={index}
                  className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                          <festival.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <div className="flex items-baseline gap-2 flex-wrap">
                            <CardTitle className="text-lg">{festival.title}</CardTitle>
                            <span className="text-sm kanji-text text-primary">
                              {festival.japanese}
                            </span>
                          </div>
                          <CardDescription className="mt-2 text-base leading-relaxed">
                            {festival.description}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4 text-primary" />
                      <span>{festival.timing}</span>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Food Section */}
        <section id="food" className="py-20 lg:py-28 bg-muted/30 scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <UtensilsCrossed className="h-7 w-7 text-primary" />
                </div>
              </div>
              <Badge variant="outline" className="mb-4">
                和食 • Washoku
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Food &amp; Cuisine
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Japanese cuisine is a UNESCO-recognized art form — a celebration of
                seasonality, balance, and respect for ingredients.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {foodItems.map((item, index) => (
                <Card
                  key={index}
                  className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <item.icon className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Work Culture Section */}
        <section id="work-culture" className="py-20 lg:py-28 bg-background scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-7 w-7 text-primary" />
                </div>
              </div>
              <Badge variant="outline" className="mb-4">
                仕事 • Shigoto
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Work Culture
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Japanese workplaces are shaped by hierarchy, harmony, and a deep
                commitment to collective success. Understanding these customs is
                key to thriving professionally in Japan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {workCultureItems.map((item, index) => (
                <Card
                  key={index}
                  className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <item.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Life Section */}
        <section id="daily-life" className="py-20 lg:py-28 bg-muted/30 scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Home className="h-7 w-7 text-primary" />
                </div>
              </div>
              <Badge variant="outline" className="mb-4">
                日常生活 • Nichijō Seikatsu
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Daily Life in Japan
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From punctual trains to 24-hour convenience stores, daily life in
                Japan is efficient, orderly, and full of small rituals.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {dailyLifeItems.map((item, index) => (
                <Card
                  key={index}
                  className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <item.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Traditions Section */}
        <section id="traditions" className="py-20 lg:py-28 bg-background scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <ScrollText className="h-7 w-7 text-primary" />
                </div>
              </div>
              <Badge variant="outline" className="mb-4">
                伝統 • Dentō
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Timeless Traditions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Centuries-old arts and seasonal rituals continue to shape Japanese
                life, connecting past and present in everyday practice.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {traditionItems.map((item, index) => (
                <Card
                  key={index}
                  className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <item.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          <span className="text-sm kanji-text text-primary">
                            {item.japanese}
                          </span>
                        </div>
                        <CardDescription className="mt-2 text-base leading-relaxed">
                          {item.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
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
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Dive Deeper into Japan
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Explore our blog for in-depth articles on Japanese culture, language
                tips, travel guides, and stories from learners who have made Japan
                their home. There is always more to discover.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/blog">
                    Read the Blog
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
