import { BookOpen, CheckCircle2, Lightbulb, Target, TrendingUp, AlertCircle } from 'lucide-react';

type ContentBlock =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'quote'; text: string; author?: string }
  | { type: 'tip'; title: string; text: string }
  | { type: 'warning'; title: string; text: string };

const contentMap: Record<string, ContentBlock[]> = {
  'how-i-studied-japanese-in-tokyo': [
    { type: 'p', text: 'When I first arrived in Tokyo in the spring of 2022, I could barely string together a simple sentence in Japanese. I knew "konnichiwa" and "arigatou gozaimasu," and that was about it. Eighteen months later, I passed JLPT N3. This is the story of how I got there — the methods that worked, the mistakes I made, and the lessons I wish someone had told me before I boarded that plane.' },
    { type: 'h2', text: 'Arriving in Tokyo: The First Weeks' },
    { type: 'p', text: 'The first few weeks were overwhelming in the best possible way. Every sign, every conversation, every menu was a puzzle I could not solve. I had enrolled in a language school in Shinjuku, and my classes started at 9 AM sharp every weekday. The school placed me in a beginner class based on a placement test that, frankly, I barely passed.' },
    { type: 'p', text: 'My classmates came from all over the world — Vietnam, Nepal, Sweden, Brazil. We shared one thing in common: we were all starting from near zero. Our teacher, Tanaka-sensei, spoke only Japanese from day one. It was terrifying and exhilarating at the same time.' },
    { type: 'h2', text: 'Building a Daily Study Routine' },
    { type: 'p', text: 'The single most important thing I did was build a consistent daily study routine. Language learning is not about cramming for hours once a week — it is about small, daily exposure that compounds over time. Here is what my typical weekday looked like:' },
    { type: 'ul', items: [
      '6:30 AM — Wake up and review 20 new vocabulary words using Anki flashcards',
      '7:00 AM — Listen to a Japanese podcast (Nihongo con Teppei) while making breakfast',
      '9:00 AM – 12:30 PM — Language school classes',
      '1:00 PM – 2:00 PM — Lunch with classmates, practicing conversation',
      '3:00 PM – 5:00 PM — Self-study: grammar review, kanji practice, reading',
      '7:00 PM – 8:00 PM — Review the day\'s notes and write a short journal entry in Japanese',
    ]},
    { type: 'h2', text: 'The Power of Immersion' },
    { type: 'p', text: 'Living in Tokyo gave me something no textbook ever could: constant, unavoidable immersion. I could not go to the convenience store, ride the train, or order food without encountering Japanese. At first, this was exhausting. But slowly, something remarkable happened — I started understanding.' },
    { type: 'p', text: 'The konbini announcements on the train became comprehensible. The labels on food products started making sense. I could follow the weather forecast on the morning news. These small victories added up, and each one motivated me to keep going.' },
    { type: 'tip', title: 'Immersion Tip', text: 'Change your phone\'s language to Japanese. It is uncomfortable at first, but you will learn dozens of practical words and phrases within the first week just from navigating your daily apps.' },
    { type: 'h2', text: 'Tackling Kanji: The Mountain I Had to Climb' },
    { type: 'p', text: 'Kanji was my biggest fear. With over 2,000 characters in regular use, the sheer volume felt insurmountable. But I discovered that kanji is not about memorization — it is about understanding patterns, radicals, and stories.' },
    { type: 'p', text: 'I started learning kanji by breaking each character into its component radicals. For example, the character for "rest" (休) is composed of the radical for "person" (人) and "tree" (木) — a person leaning against a tree, resting. Once I started seeing these stories, kanji became fascinating rather than frightening.' },
    { type: 'h3', text: 'My Kanji Study Method' },
    { type: 'ol', items: [
      'Learn the meaning and at least one reading (onyomi or kunyomi)',
      'Write the character 10 times while saying the reading aloud',
      'Learn 2-3 common words that use that kanji',
      'Add the kanji to my Anki deck for spaced repetition review',
      'Practice reading it in context using graded readers',
    ]},
    { type: 'h2', text: 'Making Japanese Friends' },
    { type: 'p', text: 'One of the best decisions I made was joining a language exchange meetup in Shibuya. Every Wednesday evening, Japanese locals and foreigners would gather to practice languages. I made friends, learned slang, and discovered cultural nuances that no textbook could teach.' },
    { type: 'p', text: 'My Japanese friends taught me things I never learned in class: how to bow properly, when to use casual versus polite speech, how to read the air (kuuki wo yomu) in social situations. These cultural lessons were just as important as the language itself.' },
    { type: 'quote', text: 'The best textbook is a conversation with a friend who patiently corrects your mistakes without making you feel small.', author: 'My language partner, Yuki' },
    { type: 'h2', text: 'Preparing for JLPT N3' },
    { type: 'p', text: 'After about 14 months in Japan, I decided to aim for JLPT N3. The jump from N4 to N3 is significant — N3 requires about 3,000-4,000 vocabulary words, 650 kanji, and the ability to understand Japanese in everyday situations to a certain degree.' },
    { type: 'p', text: 'I spent the last four months before the exam doing focused preparation. I used the Shin Kanzen Master series for grammar and reading, and took a practice test every two weeks to track my progress. The reading section was my weakest area, so I started reading Japanese news articles and short stories every day.' },
    { type: 'warning', title: 'JLPT Reality Check', text: 'The JLPT tests reading and listening only — no speaking or writing. While it is a valuable benchmark, do not let exam preparation replace actual conversation practice. I made this mistake and had to catch up on speaking skills after the exam.' },
    { type: 'h2', text: 'What I Would Do Differently' },
    { type: 'p', text: 'Looking back, there are a few things I would change about my approach:' },
    { type: 'ul', items: [
      'I would have started speaking earlier, even when I barely knew any words. Fear of making mistakes held me back for the first few months.',
      'I would have watched more Japanese TV and movies with Japanese subtitles instead of English subtitles.',
      'I would have found a tutor earlier for weekly conversation practice.',
      'I would have kept a Japanese diary from day one, even if it was just three sentences.',
    ]},
    { type: 'h2', text: 'Final Thoughts' },
    { type: 'p', text: 'Studying Japanese in Tokyo was one of the most challenging and rewarding experiences of my life. The journey from zero to N3 in 18 months was not easy, but it was absolutely worth it. If you are considering studying Japanese in Japan, my advice is simple: go. The immersion, the culture, the daily challenges — they will accelerate your learning in ways that studying at home never could.' },
    { type: 'p', text: 'And remember: everyone\'s journey is different. Do not compare your progress to others. Compare it to where you were yesterday, last week, last month. As long as you are moving forward, you are on the right path. 頑張って！' },
  ],

  'cost-of-living-in-japan': [
    { type: 'p', text: 'One of the most common questions I get from people planning to study or work in Japan is: "How much does it actually cost to live there?" The answer depends heavily on your location, lifestyle, and whether you are a student or a working professional. In this guide, I will break down every major expense category with real numbers based on my experience living in both Tokyo and Osaka.' },
    { type: 'h2', text: 'Overview: Monthly Budget Ranges' },
    { type: 'p', text: 'Before diving into specifics, here is a quick overview of typical monthly expenses. These ranges assume a modest but comfortable lifestyle:' },
    { type: 'ul', items: [
      'Tokyo (student): ¥150,000 – ¥200,000 / month',
      'Tokyo (working professional): ¥200,000 – ¥300,000 / month',
      'Osaka (student): ¥120,000 – ¥170,000 / month',
      'Osaka (working professional): ¥170,000 – ¥250,000 / month',
      'Smaller cities (Fukuoka, Sapporo, etc.): ¥100,000 – ¥150,000 / month',
    ]},
    { type: 'warning', title: 'Important Note', text: 'These figures are based on 2024 prices. Japan has experienced some inflation, so costs may be slightly higher than older guides suggest. Always check current prices when budgeting.' },
    { type: 'h2', text: 'Housing: Your Biggest Expense' },
    { type: 'p', text: 'Housing will be your largest monthly expense, and it varies dramatically by location. In Tokyo, a small apartment (1K — one room plus kitchen) in a central ward like Shinjuku or Shibuya will cost ¥80,000-120,000 per month. Move 30 minutes outside the center, and that drops to ¥50,000-70,000.' },
    { type: 'h3', text: 'Housing Options Compared' },
    { type: 'ul', items: [
      'Shared house (share house): ¥40,000 – ¥70,000/month — includes utilities and furniture, great for newcomers',
      'Student dormitory: ¥30,000 – ¥60,000/month — cheapest option, often provided by language schools',
      'Studio apartment (1K): ¥50,000 – ¥100,000/month — more privacy, but requires upfront costs',
      'Monthly mansion (furnished short-term): ¥100,000 – ¥150,000/month — no key money or deposit needed',
    ]},
    { type: 'p', text: 'When renting a traditional apartment, be prepared for upfront costs. These typically include: first month\'s rent, deposit (1-2 months), key money (1 month, non-refundable), guarantor fee (0.5-1 month), and insurance. Total move-in costs can equal 4-6 months of rent.' },
    { type: 'tip', title: 'Money-Saving Tip', text: 'If you are arriving in Japan for the first time, start with a share house or school dormitory for the first 3-6 months. This gives you time to understand the area, build a rental history, and save up for apartment move-in costs.' },
    { type: 'h2', text: 'Food: Eating Well on a Budget' },
    { type: 'p', text: 'Food is where you have the most control over your budget. Japan offers incredible food at every price point, and eating well does not have to be expensive.' },
    { type: 'h3', text: 'Monthly Food Budget Ranges' },
    { type: 'ul', items: [
      'Budget (mostly cooking at home): ¥25,000 – ¥35,000/month',
      'Moderate (mix of cooking and eating out): ¥40,000 – ¥60,000/month',
      'Higher (frequent dining out): ¥60,000 – ¥100,000+/month',
    ]},
    { type: 'p', text: 'Cooking at home is very affordable in Japan. Supermarkets like Aeon, Gyomu Super, and Hanamasa offer competitive prices, especially if you shop in the evening when items are marked down. Rice, tofu, vegetables, and seasonal fish are inexpensive year-round.' },
    { type: 'p', text: 'Eating out can also be budget-friendly. A bowl of ramen costs ¥800-1,200, a set meal (teishoku) at a chain restaurant is ¥700-1,000, and convenience store bento boxes are ¥400-600. Yoshinoya, Matsuya, and Sukiya offer gyudon (beef bowls) for under ¥500.' },
    { type: 'h2', text: 'Transportation: Getting Around Efficiently' },
    { type: 'p', text: 'Japan\'s public transportation is excellent, but it is not cheap. Most commuters use a Suica or Pasmo IC card for tap-and-go payment on trains and buses.' },
    { type: 'h3', text: 'Typical Transportation Costs' },
    { type: 'ul', items: [
      'Single train ride (short distance): ¥170 – ¥300',
      'Monthly commuter pass (teikiken): ¥10,000 – ¥20,000 depending on distance',
      'Bus fare (flat rate): ¥210 in most cities',
      'Taxi: ¥500 initial fare + ¥100 per ~300m',
    ]},
    { type: 'p', text: 'If you commute to school or work, buy a commuter pass (teikiken). It covers your route for one, three, or six months and costs roughly 1.5 months of regular fares for a one-month pass — effectively giving you 2.5 weeks free. Many employers reimburse commuting costs, and some language schools offer discounted student passes.' },
    { type: 'tip', title: 'Student Discount', text: 'Language school students can often get a student commuter pass (gakugaku teikiken) which is about 50% cheaper than a regular pass. Ask your school for the required certificate.' },
    { type: 'h2', text: 'Utilities and Internet' },
    { type: 'p', text: 'If your rent does not include utilities, budget for the following monthly costs:' },
    { type: 'ul', items: [
      'Electricity: ¥5,000 – ¥10,000 (higher in summer with AC)',
      'Gas: ¥3,000 – ¥5,000',
      'Water: ¥2,000 – ¥3,000',
      'Internet (home fiber): ¥4,000 – ¥6,000',
      'Mobile phone: ¥2,000 – ¥7,000 (budget MVNOs vs. major carriers)',
    ]},
    { type: 'p', text: 'For mobile phone service, skip the major carriers (NTT Docomo, au, SoftBank) and go with a budget MVNO like Ahamo, UQ Mobile, or IIJmio. You can get a plan with 20GB of data for ¥2,000-3,000 per month, compared to ¥7,000+ at the big carriers.' },
    { type: 'h2', text: 'Health Insurance' },
    { type: 'p', text: 'Health insurance is mandatory in Japan. If you are a student, you will enroll in the National Health Insurance (NHI) program, which costs roughly ¥2,000-5,000 per month for students (based on previous year\'s income, which is usually zero for new arrivals). Working professionals are typically enrolled in Employees\' Health Insurance through their employer, which costs about 9.5% of salary (split between employer and employee).' },
    { type: 'p', text: 'With NHI, you pay 30% of medical costs out of pocket, and the insurance covers the remaining 70%. A typical doctor\'s visit costs ¥2,000-5,000 with insurance. Prescription medications are also subsidized.' },
    { type: 'h2', text: 'Other Monthly Expenses' },
    { type: 'p', text: 'Do not forget to budget for these often-overlooked costs:' },
    { type: 'ul', items: [
      'National Health Insurance: ¥2,000 – ¥5,000/month (students)',
      'Pension (National Pension): ¥16,520/month (mandatory for ages 20-60, but students can apply for exemption)',
      'Mobile phone: ¥2,000 – ¥7,000/month',
      'Entertainment/socializing: ¥10,000 – ¥30,000/month',
      'Personal care and household items: ¥5,000 – ¥10,000/month',
    ]},
    { type: 'h2', text: 'Sample Monthly Budget (Tokyo Student)' },
    { type: 'p', text: 'Here is a realistic monthly budget for a language school student living in a share house in Tokyo:' },
    { type: 'ul', items: [
      'Share house rent (utilities included): ¥55,000',
      'Food (moderate, mix of cooking and eating out): ¥45,000',
      'Transportation (commuter pass): ¥10,000',
      'Mobile phone (MVNO): ¥2,500',
      'Health insurance: ¥2,000',
      'Internet (share house included): ¥0',
      'Entertainment and socializing: ¥15,000',
      'Personal care and miscellaneous: ¥5,000',
      'Total: ¥134,500 / month',
    ]},
    { type: 'h2', text: 'Part-Time Work: Supplementing Your Income' },
    { type: 'p', text: 'International students on a student visa are allowed to work up to 28 hours per week (40 hours during school breaks) with a special work permit (shikaku gai katsudo kyoka). Common part-time jobs for students include:' },
    { type: 'ul', items: [
      'Convenience store (konbini): ¥1,100 – ¥1,300/hour',
      'Restaurant server/kitchen: ¥1,100 – ¥1,400/hour',
      'English teaching (private tutoring): ¥2,000 – ¥3,500/hour',
      'Factory/warehouse work: ¥1,100 – ¥1,300/hour',
    ]},
    { type: 'p', text: 'Working 20 hours per week at ¥1,200/hour earns about ¥96,000 per month — enough to cover most of your living expenses. However, do not let work interfere with your studies. Your primary purpose in Japan is to learn.' },
    { type: 'h2', text: 'Final Thoughts' },
    { type: 'p', text: 'Living in Japan is not cheap, but it is manageable with proper planning. The key is to be realistic about your expenses, take advantage of student discounts, and avoid lifestyle inflation. Japan rewards those who embrace its culture of modesty and mindfulness — you do not need to spend a lot to live well here. With a budget of ¥150,000-200,000 per month, you can live comfortably as a student in Tokyo and focus on what really matters: learning the language and experiencing the culture.' },
  ],

  'jlpt-n5-complete-guide': [
    { type: 'p', text: 'The JLPT N5 is the first level of the Japanese Language Proficiency Test and the starting point for many Japanese learners. While it is the most basic level, passing N5 is a meaningful achievement that demonstrates you have a solid foundation in the language. This guide covers everything you need to know: what the test includes, how to prepare, study materials, and a step-by-step plan to pass with confidence.' },
    { type: 'h2', text: 'What is JLPT N5?' },
    { type: 'p', text: 'The JLPT N5 tests your ability to understand basic Japanese. At this level, you should be able to read and understand typical expressions and sentences written in hiragana, katakana, and basic kanji, and listen to conversations about topics regularly encountered in daily life.' },
    { type: 'h3', text: 'Test Structure' },
    { type: 'p', text: 'The N5 exam consists of two sections administered in about 1 hour and 45 minutes total:' },
    { type: 'ul', items: [
      'Language Knowledge (Vocabulary) — 25 minutes, 33 questions',
      'Language Knowledge (Grammar) & Reading — 50 minutes, 31 questions',
      'Listening — 30 minutes, 21 questions',
    ]},
    { type: 'p', text: 'The passing score is 80 out of 180 total points. You must also achieve at least 19/60 in Vocabulary/Grammar/Reading and 19/60 in Listening — section minimums apply.' },
    { type: 'h2', text: 'What You Need to Know' },
    { type: 'h3', text: 'Vocabulary' },
    { type: 'p', text: 'N5 requires approximately 800 vocabulary words. These cover basic greetings, numbers, time expressions, common verbs, adjectives, and everyday nouns. Focus on words you would actually use in daily conversation.' },
    { type: 'h3', text: 'Kanji' },
    { type: 'p', text: 'You need to know about 100 kanji for N5. These include numbers (一 to 十), days of the week, basic verbs (行く, 来る, 食べる), common nouns (人, 日, 月, 火, 水), and elementary adjectives. You should be able to read them and know their common readings.' },
    { type: 'h3', text: 'Grammar' },
    { type: 'p', text: 'N5 grammar covers basic sentence structures including:' },
    { type: 'ul', items: [
      'Desu/masu polite form (です・ます)',
      'Particles: は, が, を, に, で, と, から, まで, より',
      'Verb conjugation: present, past, negative, te-form',
      'Adjective conjugation: い-adjectives and な-adjectives',
      'Question forms with か',
      'Basic conjunctions: そして, しかし, だから',
    ]},
    { type: 'h2', text: 'Recommended Study Materials' },
    { type: 'p', text: 'Having the right materials makes a huge difference. Here are the resources I recommend for N5 preparation:' },
    { type: 'h3', text: 'Textbooks' },
    { type: 'ul', items: [
      'Genki I (Second Edition) — The gold standard for beginners. Covers all N5 grammar and most vocabulary.',
      'Minna no Nihongo I — Popular in language schools. Very thorough but requires the separate grammar explanation book.',
      'Try! N5 — Specifically designed for JLPT N5 with practice questions in the JLPT format.',
    ]},
    { type: 'h3', text: 'Vocabulary and Kanji' },
    { type: 'ul', items: [
      'Anki (free app) — Spaced repetition flashcards. Search for "JLPT N5" shared decks.',
      'WaniKani — Great for learning kanji with a structured, gamified approach.',
      'Jisho.org — The best online Japanese-English dictionary for looking up words and kanji.',
    ]},
    { type: 'h3', text: 'Practice Tests' },
    { type: 'ul', items: [
      'Official JLPT N5 Practice Test (available free on the JLPT website)',
      'Nihongo So-matome N5 — Five-week study plan with daily exercises',
      'Shin Kanzen Master N5 — For those who want extra practice in specific sections',
    ]},
    { type: 'tip', title: 'Pro Tip', text: 'Take a full practice test under exam conditions (timed, no dictionary) at least 3 weeks before the actual exam. This will reveal your weak areas and help you build test-taking stamina.' },
    { type: 'h2', text: '8-Week Study Plan' },
    { type: 'p', text: 'If you are starting from scratch or have basic knowledge, here is an 8-week plan to get you exam-ready. Adjust the pace based on your current level and available study time.' },
    { type: 'h3', text: 'Weeks 1-2: Foundation Building' },
    { type: 'ul', items: [
      'Master hiragana and katakana completely (you should be able to read them instantly)',
      'Start Genki I or Minna no Nihongo I from the beginning',
      'Begin daily Anki vocabulary practice (15-20 new words per day)',
      'Learn 10-15 kanji per week using WaniKani or a kanji workbook',
    ]},
    { type: 'h3', text: 'Weeks 3-4: Grammar and Sentence Structure' },
    { type: 'ul', items: [
      'Continue textbook lessons (aim to complete lessons 1-6 of Genki I)',
      'Focus on particles — they are heavily tested at N5',
      'Practice verb and adjective conjugation daily',
      'Start reading simple Japanese sentences and short paragraphs',
    ]},
    { type: 'h3', text: 'Weeks 5-6: Expanding Skills' },
    { type: 'ul', items: [
      'Complete textbook lessons 7-12 of Genki I',
      'Increase vocabulary review to 25-30 words per day',
      'Begin listening practice with N5-level audio materials',
      'Start doing practice questions from Nihongo So-matome or Try! N5',
    ]},
    { type: 'h3', text: 'Weeks 7-8: Exam Preparation' },
    { type: 'ul', items: [
      'Take a full practice test under timed conditions',
      'Review all weak areas identified by the practice test',
      'Focus on listening practice — this is where many test-takers struggle',
      'Review all grammar points and create a summary sheet',
      'Take a second practice test in the final week',
    ]},
    { type: 'h2', text: 'Tips for Each Section' },
    { type: 'h3', text: 'Vocabulary Section' },
    { type: 'p', text: 'This section tests kanji readings, word meanings, and context. The key is broad exposure — do not just memorize words in isolation. Learn them in example sentences so you understand how they are used. Pay special attention to words that look similar but have different meanings.' },
    { type: 'h3', text: 'Grammar and Reading Section' },
    { type: 'p', text: 'Grammar questions test particle usage, verb forms, and sentence structure. Reading passages are short — usually a few sentences to a paragraph. Read the questions before the passage so you know what to look for. Time management is critical; do not spend too long on any single question.' },
    { type: 'h3', text: 'Listening Section' },
    { type: 'p', text: 'Many learners find listening to be the hardest part of N5. The audio plays only once, so you must stay focused. Practice with audio materials at N5 speed regularly. During the exam, look at the answer choices before the audio starts — this gives you context for what to listen for.' },
    { type: 'warning', title: 'Listening Strategy', text: 'If you miss a question, do not panic. Move on immediately. Dwelling on a missed question will cause you to miss the next one too. You can afford to miss a few questions and still pass.' },
    { type: 'h2', text: 'Common Mistakes to Avoid' },
    { type: 'ul', items: [
      'Neglecting katakana — many learners focus on hiragana and kanji but forget katakana words appear frequently on the test',
      'Not practicing listening enough — listening is 25% of the test and cannot be crammed',
      'Memorizing vocabulary without context — you need to recognize words in sentences, not just in isolation',
      'Ignoring time management — the reading section has a strict time limit; practice pacing yourself',
      'Forgetting the section minimums — you must score at least 19/60 in both the reading and listening sections to pass',
    ]},
    { type: 'h2', text: 'On Exam Day' },
    { type: 'p', text: 'The JLPT is held twice a year, in July and December. Register well in advance — spots fill up quickly in popular test centers. On the day of the exam:' },
    { type: 'ul', items: [
      'Arrive at least 30 minutes early to find your room and settle in',
      'Bring your test voucher, photo ID, and pencils (HB or 2B) with an eraser',
      'No watches, phones, or electronic devices are allowed during the test',
      'Use the bathroom before the exam starts — breaks are limited',
      'Stay calm and read each question carefully',
    ]},
    { type: 'h2', text: 'After the Exam' },
    { type: 'p', text: 'Results are typically available online 6-8 weeks after the test date. If you pass, congratulations! Start planning for N4. If you do not pass, do not be discouraged — use your score report to identify weak areas and try again. Many learners take N5 more than once before passing.' },
    { type: 'p', text: 'Passing JLPT N5 is just the beginning of your Japanese learning journey. It proves you have the foundation to build upon, and the study habits you develop while preparing will serve you well as you advance to N4, N3, and beyond. 頑張って！' },
  ],

  'japanese-interview-questions': [
    { type: 'p', text: 'Interviewing at a Japanese company can feel intimidating, especially if it is your first time navigating Japanese business culture. The good news is that Japanese interviews follow fairly predictable patterns, and with the right preparation, you can walk in with confidence. This guide covers the most common interview questions, how to answer them, and the cultural nuances that can make or break your interview.' },
    { type: 'h2', text: 'Before the Interview: Preparation is Everything' },
    { type: 'p', text: 'In Japan, preparation signals respect. Showing up without thorough knowledge of the company and the role is seen as a sign that you do not really want the job. Before your interview, make sure you have done the following:' },
    { type: 'ul', items: [
      'Research the company thoroughly — read their website, recent news, and understand their products or services',
      'Prepare a self-introduction (jikoshoukai) that takes about 1-2 minutes to deliver',
      'Review your resume (rirekisho) and be ready to explain every entry',
      'Practice common interview questions out loud, ideally with a native speaker',
      'Prepare questions to ask the interviewer — this shows genuine interest',
    ]},
    { type: 'tip', title: 'Dress Code', text: 'Wear a dark suit (black, navy, or dark gray) with a white shirt and conservative tie. For women, a dark suit with a white blouse. Avoid flashy jewelry, strong perfume, or anything that stands out. In Japan, conformity in dress code is expected for interviews.' },
    { type: 'h2', text: 'The Self-Introduction (自己紹介)' },
    { type: 'p', text: 'Every Japanese interview begins with a self-introduction. This is your chance to make a strong first impression. Keep it concise, structured, and relevant to the position. A good jikoshoukai includes:' },
    { type: 'ol', items: [
      'Your name and where you are from',
      'Your current or most recent position/education',
      'A brief summary of your relevant experience or skills',
      'Why you are interested in this company or role',
      'A closing statement expressing enthusiasm',
    ]},
    { type: 'p', text: 'Example: "はじめまして。[Your Name]と申します。[Country]から参りました。前職では[Company]で[Role]として[Number]年間働いておりました。主に[Skill/Experience]を担当しておりました。御社の[Specific aspect]に魅力を感じ、ぜひ貢献したいと考え、応募いたしました。本日はよろしくお願いいたします。"' },
    { type: 'h2', text: 'Common Interview Questions and How to Answer Them' },
    { type: 'h3', text: '1. 自己PRをお願いします (Please tell us about your strengths)' },
    { type: 'p', text: 'This is the most common opening question. Pick one or two strengths that are relevant to the role and back them up with specific examples. Use the STAR method: Situation, Task, Action, Result.' },
    { type: 'p', text: 'Example answer: "私の強みは、問題解決能力です。前職で[specific problem]という課題がありました。私は[specific action]を行い、その結果[result with numbers]を達成しました。この経験で培った力を御社でも活かしたいと考えています。"' },
    { type: 'h3', text: '2. なぜこの会社を選びましたか？ (Why did you choose our company?)' },
    { type: 'p', text: 'This is a critical question. Your answer must show that you have researched the company and have a specific reason for applying — not just "I need a job." Reference something specific about the company: their products, values, market position, or recent initiatives.' },
    { type: 'p', text: 'Structure your answer: (1) What you admire about the company, (2) How it aligns with your career goals, (3) How you can contribute to their mission.' },
    { type: 'h3', text: '3. 5年後の目標は何ですか？ (What are your goals in 5 years?)' },
    { type: 'p', text: 'Japanese companies value long-term commitment. Your answer should show ambition but also alignment with the company\'s growth path. Avoid saying you want to start your own business or move to a different industry.' },
    { type: 'p', text: 'Example: "5年後は、[specific skill or area]の専門家として、御社の[specific business area]に貢献したいと考えています。そのために、入社後は[specific steps]を通じてスキルを磨き、チームを牽引する存在になりたいです。"' },
    { type: 'h3', text: '4. 弱みは何ですか？ (What are your weaknesses?)' },
    { type: 'p', text: 'This is a tricky question everywhere, but in Japan, the key is to show self-awareness and a growth mindset. Choose a real weakness (not a humble brag) and explain what you are doing to overcome it.' },
    { type: 'p', text: 'Example: "私の弱みは、[specific weakness]です。しかし、[specific action you are taking to improve]ことで改善に努めております。最近では[positive result of your effort]という成果が出始めています。"' },
    { type: 'h3', text: '5. チームで意見が対立した時、どう対応しますか？ (How do you handle disagreements in a team?)' },
    { type: 'p', text: 'Japanese work culture values harmony (wa) and consensus. Your answer should emphasize listening, understanding different perspectives, and finding common ground — not asserting your opinion forcefully.' },
    { type: 'h3', text: '6. 前職を退職した理由は？ (Why did you leave your previous job?)' },
    { type: 'p', text: 'Never speak negatively about your previous employer. Frame your departure positively — you are seeking new challenges, growth opportunities, or a role that better aligns with your long-term goals.' },
    { type: 'warning', title: 'Critical Warning', text: 'Never badmouth a former employer, boss, or colleague in a Japanese interview. This is an instant disqualifier. Japanese culture places enormous value on loyalty and discretion. Even if your previous job was terrible, find a positive way to frame your departure.' },
    { type: 'h2', text: 'Cultural Nuances to Remember' },
    { type: 'h3', text: 'Bowing and Greetings' },
    { type: 'p', text: 'When you enter the interview room, knock three times and wait to be invited in. Bow when you enter, and again before sitting down. The depth of your bow matters: a 30-degree bow (eshaku) is appropriate for greetings, while a 45-degree bow (saikeirei) shows deep respect.' },
    { type: 'h3', text: 'Business Cards (Meishi)' },
    { type: 'p', text: 'If you are offered a business card, receive it with both hands, read it carefully, and place it neatly on the table in front of you. Do not write on it, fold it, or put it in your pocket immediately. This shows respect for the person and their position.' },
    { type: 'h3', text: 'Keigo (Polite Language)' },
    { type: 'p', text: 'Using appropriate keigo is crucial. At minimum, use desu/masu form throughout the interview. If you know sonkeigo (honorific) and kenjougo (humble) forms, use them when referring to the interviewer and yourself respectively. Even if your keigo is not perfect, the effort will be appreciated.' },
    { type: 'h2', text: 'Questions to Ask the Interviewer' },
    { type: 'p', text: 'At the end of the interview, you will be asked if you have any questions. Always have 2-3 prepared. Good questions show engagement and help you assess whether the company is right for you:' },
    { type: 'ul', items: [
      'このポジションで最も重要な役割は何ですか？ (What is the most important responsibility in this position?)',
      '入社後に期待される成長プロセスを教えてください (What growth process is expected after joining?)',
      '御社で働く上で、最も大切にしている価値観は何ですか？ (What values are most important when working at your company?)',
      'このチームの雰囲気を教えてください (Can you tell me about the team atmosphere?)',
    ]},
    { type: 'h2', text: 'After the Interview' },
    { type: 'p', text: 'Send a thank-you email within 24 hours of the interview. Keep it brief: thank them for their time, reiterate your interest in the position, and mention one specific thing you discussed. This is not always expected in Japan, but it sets you apart from other candidates.' },
    { type: 'p', text: 'If you do not hear back within the timeframe they specified, it is acceptable to follow up with a polite email. Do not call — phone follow-ups are considered too aggressive in Japanese business culture.' },
    { type: 'h2', text: 'Final Tips' },
    { type: 'ul', items: [
      'Arrive 10-15 minutes early — never late, but not excessively early either',
      'Bring multiple copies of your resume in a clean folder',
      'Turn off your phone completely before entering the building',
      'Maintain good posture throughout the interview',
      'Do not interrupt the interviewer — wait for them to finish speaking',
      'Show enthusiasm through your tone and body language, not just your words',
    ]},
    { type: 'p', text: 'Interviewing in Japanese is challenging, but it is also a skill that improves with practice. Each interview makes you better prepared for the next one. Stay positive, learn from every experience, and remember that the interviewer wants you to succeed — they want to find the right person for the role, and that person might just be you. 頑張って！' },
  ],

  'beginners-guide-to-japanese-culture': [
    { type: 'p', text: 'Japanese culture is a fascinating blend of ancient traditions and modern innovation. For anyone learning the language or planning to visit, study, or work in Japan, understanding the cultural context is just as important as mastering the vocabulary. This guide introduces the key elements of Japanese culture that every beginner should know.' },
    { type: 'h2', text: 'The Concept of Wa (和)' },
    { type: 'p', text: 'At the heart of Japanese culture is the concept of wa — harmony. This principle emphasizes group cohesion, social harmony, and the avoidance of conflict. It influences everything from how people communicate to how decisions are made in business settings.' },
    { type: 'p', text: 'In practice, wa means considering how your actions affect others, reading the atmosphere (kuuki wo yomu), and prioritizing group needs over individual desires. This can be surprising for visitors from individualistic cultures, but understanding wa is key to navigating social situations in Japan.' },
    { type: 'h2', text: 'Bowing: The Art of Ojigi' },
    { type: 'p', text: 'Bowing (ojigi) is the most common greeting in Japan, and it carries more meaning than a Western handshake. The depth and duration of a bow communicate different levels of respect:' },
    { type: 'ul', items: [
      'Eshaku (15-degree bow): Casual greeting, used with friends or colleagues of equal rank',
      'Keirei (30-degree bow): Standard polite bow, used in business and formal situations',
      'Saikeirei (45-degree bow): Deep bow expressing deep respect, gratitude, or apology',
    ]},
    { type: 'p', text: 'Bowing is used for greetings, farewells, expressions of gratitude, apologies, and even when speaking on the phone (yes, Japanese people bow while on the phone — it is that ingrained). When in doubt, a 30-degree bow is appropriate for most situations.' },
    { type: 'h2', text: 'Omotenashi: Japanese Hospitality' },
    { type: 'p', text: 'Omotenashi is the Japanese concept of hospitality — but it goes beyond simple customer service. It is about anticipating needs before they are expressed and providing service with genuine care, without expecting anything in return. You will experience omotenashi in restaurants, shops, hotels, and even convenience stores.' },
    { type: 'p', text: 'The key difference from Western hospitality is that omotenashi is not transactional. The host does not serve you because they expect a tip or a good review — they serve you because it is the right thing to do. This mindset of selfless hospitality is deeply woven into Japanese society.' },
    { type: 'h2', text: 'Gift-Giving Culture' },
    { type: 'p', text: 'Gift-giving is an essential part of Japanese social life. There are two major gift-giving seasons: Ochugen in summer (July) and Oseibo in winter (December). These gifts are given to people who have helped you throughout the year — bosses, teachers, relatives, and business associates.' },
    { type: 'p', text: 'When visiting someone\'s home in Japan, it is customary to bring a small gift, typically something consumable like sweets, fruit, or a regional specialty. The gift should be presented with both hands, and the giver will often downplay its value with phrases like "tsumaranai mono desu ga" (it is a boring thing, but...).' },
    { type: 'tip', title: 'Gift-Giving Etiquette', text: 'When receiving a gift, it is polite to hesitate slightly before accepting it. Do not open the gift in front of the giver unless they insist — this shows modesty and prevents any appearance of greediness.' },
    { type: 'h2', text: 'Seasonal Traditions and Festivals' },
    { type: 'p', text: 'Japan\'s calendar is rich with seasonal traditions and festivals (matsuri) that reflect the changing seasons and centuries-old customs.' },
    { type: 'h3', text: 'Cherry Blossom Viewing (Hanami)' },
    { type: 'p', text: 'In late March to early April, cherry blossoms (sakura) bloom across Japan. Hanami — the tradition of picnicking under the cherry blossoms — is one of the most beloved cultural events of the year. Friends, families, and coworkers gather in parks to eat, drink, and appreciate the fleeting beauty of the blossoms.' },
    { type: 'h3', text: 'Summer Festivals (Matsuri)' },
    { type: 'p', text: 'Summer is festival season in Japan. Each region has its own unique matsuri featuring food stalls, games, fireworks (hanabi), and traditional dancing (bon odori). Some of the most famous include the Gion Matsuri in Kyoto, the Nebuta Matsuri in Aomori, and the Tenjin Matsuri in Osaka.' },
    { type: 'h3', text: 'New Year (Oshogatsu)' },
    { type: 'p', text: 'Oshogatsu (January 1-3) is the most important holiday in Japan. Families gather to eat special foods (osechi ryori), visit shrines (hatsumode), and exchange greeting cards (nengajo). It is a time for renewal, reflection, and family.' },
    { type: 'h2', text: 'Food Culture: More Than Just Sushi' },
    { type: 'p', text: 'Japanese food culture (washoku) is recognized as a UNESCO Intangible Cultural Heritage. It goes far beyond sushi and ramen, encompassing a philosophy of seasonal ingredients, beautiful presentation, and balanced nutrition.' },
    { type: 'ul', items: [
      'Ichiju sansai: The traditional meal structure of one soup and three side dishes, emphasizing balance',
      'Seasonal eating: Menus change with the seasons, celebrating ingredients at their peak',
      'Itadakimasu: Said before eating, expressing gratitude for the food and everyone who contributed to it',
      'Gochisousama: Said after eating, thanking the cook and the ingredients',
    ]},
    { type: 'p', text: 'Dining etiquette is also important. Do not stick your chopsticks upright in your rice (this resembles funeral rites), do not pass food directly from chopstick to chopstick (also a funeral custom), and do not rub disposable chopsticks together (it implies they are cheap or splintery).' },
    { type: 'h2', text: 'The Bathing Culture' },
    { type: 'p', text: 'Bathing in Japan is not just about getting clean — it is a ritual of relaxation and rejuvenation. Public baths (sento) and hot springs (onsen) are integral to Japanese culture.' },
    { type: 'p', text: 'The most important rule: shower and rinse thoroughly before entering the bath. The bathwater is for soaking, not washing. At an onsen or sento, you will find a washing area with stools, showers, and sometimes buckets. Clean yourself completely before stepping into the shared bath.' },
    { type: 'warning', title: 'Onsen Rules', text: 'Tattoos are traditionally associated with the yakuza and are not allowed in many public baths and hot springs. If you have tattoos, look for tattoo-friendly onsens or consider covering small tattoos with waterproof bandages. This is changing, but the restriction remains common.' },
    { type: 'h2', text: 'Work Culture and Business Etiquette' },
    { type: 'p', text: 'Japanese work culture is built on hierarchy, loyalty, and group harmony. Understanding these principles is essential for anyone planning to work in Japan.' },
    { type: 'ul', items: [
      'Business cards (meishi) are exchanged with great ceremony — receive with both hands and treat with respect',
      'Hierarchy matters — always address the most senior person first and use appropriate keigo (polite language)',
      'Nomikai (after-work drinking) is an important part of team bonding, though this is changing with younger generations',
      'Punctuality is non-negotiable — arriving even one minute late is considered disrespectful',
    ]},
    { type: 'h2', text: 'Everyday Politeness' },
    { type: 'p', text: 'Politeness permeates every aspect of daily life in Japan. Here are some everyday customs to be aware of:' },
    { type: 'ul', items: [
      'Remove your shoes when entering homes, traditional inns, and some restaurants',
      'Do not eat or drink while walking — it is considered impolite',
      'Line up neatly — Japanese people queue orderly for trains, buses, and even sales',
      'Keep your voice low on public transportation — phone calls on trains are a major faux pas',
      'Carry a small trash bag — public trash cans are rare, so you are expected to take your trash home',
    ]},
    { type: 'h2', text: 'Embracing the Culture' },
    { type: 'p', text: 'Understanding Japanese culture is a lifelong journey. Even Japanese people continue to learn the nuances of their own culture throughout their lives. As a beginner, the most important thing is to approach with respect, curiosity, and humility. Do not be afraid to make mistakes — Japanese people appreciate genuine effort and will usually be patient and helpful.' },
    { type: 'p', text: 'The more you learn about Japanese culture, the more you will appreciate the language. The two are deeply intertwined — understanding one enriches your understanding of the other. So dive in, explore, and enjoy the rich, beautiful world of Japanese culture.' },
  ],

  'how-to-learn-japanese-efficiently': [
    { type: 'p', text: 'Learning Japanese is a marathon, not a sprint. With three writing systems, thousands of kanji, and a grammar structure completely different from English, it is easy to feel overwhelmed. But with the right approach, you can learn Japanese efficiently and make steady progress without burning out. This guide shares proven methods, time management strategies, and resources that will help you accelerate your learning.' },
    { type: 'h2', text: 'The 80/20 Rule Applied to Japanese' },
    { type: 'p', text: 'The Pareto Principle — 80% of results come from 20% of efforts — applies perfectly to language learning. In Japanese, this means focusing on the most frequently used vocabulary, grammar patterns, and kanji first. The top 1,000 most common words account for about 80% of everyday conversation. Start there.' },
    { type: 'p', text: 'Do not try to learn every kanji, every grammar point, and every vocabulary word at once. Prioritize what you will actually use. If you are planning to work in Japan, focus on business Japanese. If you want to watch anime, focus on casual speech and slang. Tailor your learning to your goals.' },
    { type: 'h2', text: 'Spaced Repetition: The Science of Remembering' },
    { type: 'p', text: 'Spaced repetition is the single most effective technique for memorizing vocabulary and kanji. The idea is simple: review information at increasing intervals (1 day, 3 days, 1 week, 2 weeks, 1 month) to move it from short-term to long-term memory. Spaced repetition software (SRS) automates this process.' },
    { type: 'h3', text: 'Recommended SRS Tools' },
    { type: 'ul', items: [
      'Anki (free on desktop, paid on iOS) — The gold standard. Highly customizable with thousands of shared decks.',
      'WaniKani — Specifically for kanji learning. Uses a structured, gamified approach with a built-in SRS.',
      'Memrise — User-friendly app with community-created courses for Japanese.',
    ]},
    { type: 'tip', title: 'SRS Best Practice', text: 'Do your SRS reviews every single day, even if it is just for 10 minutes. Consistency is more important than volume. Missing a few days causes your review pile to snowball, making it much harder to catch up.' },
    { type: 'h2', text: 'The Four Core Skills' },
    { type: 'p', text: 'Language learning involves four core skills: reading, writing, listening, and speaking. A balanced approach develops all four, but you can also focus on the skills most relevant to your goals.' },
    { type: 'h3', text: 'Reading' },
    { type: 'p', text: 'Reading is one of the fastest ways to build vocabulary and internalize grammar. Start with graded readers designed for your level, then move to native materials like manga, news articles, and short stories. Use a tool like Yomichan or Rikaichamp to look up unknown words instantly while reading.' },
    { type: 'h3', text: 'Writing' },
    { type: 'p', text: 'Writing helps solidify your understanding of grammar and kanji. Keep a daily journal in Japanese — even three sentences a day is valuable. Use Lang-8 or HelloTalk to get corrections from native speakers. Writing by hand also helps with kanji retention.' },
    { type: 'h3', text: 'Listening' },
    { type: 'p', text: 'Listening is often the hardest skill to develop, especially outside Japan. Immerse yourself with podcasts, YouTube videos, anime, and dramas. Start with content designed for learners, then gradually move to native-level material. Active listening — trying to understand and transcribe — is more effective than passive listening.' },
    { type: 'h3', text: 'Speaking' },
    { type: 'p', text: 'Speaking requires a conversation partner. Use apps like HelloTalk or Tandem to find language exchange partners. If you can afford it, hire a tutor on iTalki for regular conversation practice. The key is to speak regularly, even if you make mistakes — perfectionism is the enemy of fluency.' },
    { type: 'h2', text: 'Time Management for Language Learning' },
    { type: 'p', text: 'You do not need hours of free time to learn Japanese. What matters is consistency. Here is a sample daily routine that takes about 60-90 minutes total but can be broken into smaller chunks throughout the day:' },
    { type: 'ul', items: [
      'Morning (15 min): SRS vocabulary and kanji review',
      'Commute (20 min): Listen to a Japanese podcast or audio lesson',
      'Lunch break (15 min): Read a short article or manga page',
      'Evening (20 min): Grammar study or textbook lesson',
      'Before bed (10 min): Write a short journal entry in Japanese',
    ]},
    { type: 'p', text: 'The key is making Japanese a daily habit, not a weekend project. Twenty minutes every day is far more effective than three hours once a week. Your brain needs regular exposure to build and strengthen neural pathways.' },
    { type: 'h2', text: 'Immersion Without Living in Japan' },
    { type: 'p', text: 'You do not need to live in Japan to create an immersion environment. Here are practical ways to surround yourself with Japanese wherever you live:' },
    { type: 'ul', items: [
      'Change your phone, computer, and social media language to Japanese',
      'Watch Japanese YouTubers, streamers, and TV shows with Japanese subtitles',
      'Follow Japanese accounts on Twitter/X and Instagram',
      'Listen to Japanese music and pay attention to the lyrics',
      'Cook Japanese recipes using Japanese-language instructions',
      'Join Japanese Discord servers or online communities',
    ]},
    { type: 'h2', text: 'Common Efficiency Killers to Avoid' },
    { type: 'h3', text: '1. Collecting Resources Instead of Using Them' },
    { type: 'p', text: 'Many learners spend more time downloading apps, buying textbooks, and bookmarking websites than actually studying. Pick one or two resources per skill area and commit to them. More resources does not equal more learning.' },
    { type: 'h3', text: '2. Studying Without a Goal' },
    { type: 'p', text: '"I want to learn Japanese" is too vague. Set specific, measurable goals: "Pass JLPT N4 in December," "Have a 10-minute conversation with a native speaker," "Read a manga volume without a dictionary." Goals give you direction and motivation.' },
    { type: 'h3', text: '3. Avoiding Speaking Until You Feel "Ready"' },
    { type: 'p', text: 'You will never feel ready. Start speaking from day one, even if all you can say is "konnichiwa." The sooner you start making mistakes, the sooner you will improve. Speaking is a skill that must be practiced, not a reward for studying enough grammar.' },
    { type: 'warning', title: 'Perfectionism Trap', text: 'Do not wait until you know all the grammar or all the vocabulary before you start using Japanese. Imperfect communication is infinitely better than perfect silence. Embrace mistakes as learning opportunities.' },
    { type: 'h2', text: 'Recommended Resources by Level' },
    { type: 'h3', text: 'Beginner (N5-N4)' },
    { type: 'ul', items: [
      'Genki I and II textbooks — Comprehensive beginner course',
      'Tae Kim\'s Japanese Grammar Guide (free online) — Excellent grammar reference',
      'Nihongo con Teppei (podcast) — Beginner-friendly listening practice',
      'WaniKani — Structured kanji learning',
    ]},
    { type: 'h3', text: 'Intermediate (N3-N2)' },
    { type: 'ul', items: [
      'Shin Kanzen Master series — JLPT-specific preparation books',
      'Tobira: Gateway to Advanced Japanese — Bridge from intermediate to advanced',
      'YomuJP or Satori Reader — Graded reading with built-in dictionary',
      'JapanesePod101 — Intermediate and advanced podcast lessons',
    ]},
    { type: 'h3', text: 'Advanced (N1+)' },
    { type: 'ul', items: [
      'Native materials: novels, newspapers, academic papers',
      'NHK News Web Easy to full NHK News — Graduated reading difficulty',
      'Japanese novels with furigana, then without',
      'Podcasts by and for native speakers (e.g., Backspace, Tetsujin Radio)',
    ]},
    { type: 'h2', text: 'Tracking Your Progress' },
    { type: 'p', text: 'Progress in language learning can feel invisible day-to-day, which is why tracking is important. Keep a record of:' },
    { type: 'ul', items: [
      'New words learned per week (aim for 50-100)',
      'Kanji learned and retained',
      'Time spent studying per day',
      'Milestones: first conversation, first article read, JLPT passed',
    ]},
    { type: 'p', text: 'Every month, look back at where you were 30 days ago. You will be surprised by how much you have improved. This reflection is incredibly motivating and will keep you going when progress feels slow.' },
    { type: 'h2', text: 'Final Thoughts' },
    { type: 'p', text: 'Learning Japanese efficiently is not about finding a secret method or a magic app. It is about consistent daily practice, smart use of spaced repetition, immersion in the language, and a willingness to make mistakes. There will be days when you feel like you are not making progress — those are the days to trust the process and keep going. Every minute you spend with Japanese, no matter how small, brings you closer to fluency. 頑張って！' },
  ],

  'student-life-in-japan': [
    { type: 'p', text: 'Living in Japan as an international student is an adventure that goes far beyond the classroom. From navigating the train system to making friends, managing your budget, and adjusting to cultural norms, daily life in Japan is full of discoveries. This guide gives you a realistic picture of what to expect, based on the experiences of students who have been there.' },
    { type: 'h2', text: 'A Typical Day in the Life' },
    { type: 'p', text: 'No two days are exactly the same, but here is what a typical weekday looks like for a language school student in Tokyo:' },
    { type: 'ul', items: [
      '7:00 AM — Wake up, quick breakfast (toast and egg, or rice and miso soup)',
      '7:45 AM — Leave home, walk to the station',
      '8:00 AM — Train to school (about 30-45 minutes, studying flashcards on the way)',
      '9:00 AM – 12:30 PM — Morning classes (grammar, vocabulary, kanji, conversation)',
      '12:30 PM – 1:30 PM — Lunch with classmates at a nearby restaurant or convenience store',
      '1:30 PM – 3:30 PM — Afternoon classes or self-study in the school library',
      '4:00 PM – 8:00 PM — Part-time job (conbini, restaurant, or tutoring)',
      '9:00 PM — Dinner, homework, review',
      '11:00 PM — Bed',
    ]},
    { type: 'p', text: 'University students have a different schedule — classes are more spread out, and there is more free time for clubs (circles), part-time work, and socializing. But the rhythm of commuting, studying, and managing your time remains the same.' },
    { type: 'h2', text: 'Commuting: The Art of the Train' },
    { type: 'p', text: 'For most students, commuting means taking the train. Japan\'s rail network is incredibly efficient, but it takes some getting used to. Here is what you need to know:' },
    { type: 'h3', text: 'Rush Hour' },
    { type: 'p', text: 'Morning rush hour (7:30-9:30 AM) on major lines in Tokyo and Osaka is intense. Trains run every 2-4 minutes, but they are packed. If you live more than 30 minutes from school, consider leaving early to avoid the worst of the rush. Do not expect to get a seat — or even comfortable standing space.' },
    { type: 'h3', text: 'IC Cards' },
    { type: 'p', text: 'Get a Suica or Pasmo IC card as soon as you arrive. You load it with money and tap it at the station gates. It works on trains, buses, and even at convenience stores and vending machines. If you commute to the same place daily, buy a commuter pass (teikiken) — it saves a significant amount of money.' },
    { type: 'tip', title: 'Train Etiquette', text: 'Do not talk on the phone on the train. Keep your voice low, even when talking to friends. Let people exit before you enter. And do not take up extra seats with your bag — put it on your lap or on the overhead shelf.' },
    { type: 'h2', text: 'Making Friends: Japanese and International' },
    { type: 'p', text: 'Building a social circle in Japan takes effort, but it is one of the most rewarding parts of student life. Here are the main ways students make friends:' },
    { type: 'h3', text: 'Classmates' },
    { type: 'p', text: 'Your classmates at language school or university are your first social circle. You will spend hours together every day, and shared struggle creates strong bonds. Many students form study groups and hang out after class.' },
    { type: 'h3', text: 'Language Exchange' },
    { type: 'p', text: 'Language exchange meetups are one of the best ways to meet Japanese people. Events like Mundo Lingo, Meetup.com gatherings, and university international exchange circles bring together Japanese locals and foreigners. You practice Japanese, they practice English, and everyone makes friends.' },
    { type: 'h3', text: 'University Circles and Clubs' },
    { type: 'p', text: 'If you are at a university, join a circle (casual club) or a bukatsu (more serious club). Sports, music, photography, anime — there is a circle for everything. This is how most Japanese students make friends, and it is a great way for international students to integrate.' },
    { type: 'h3', text: 'Part-Time Work' },
    { type: 'p', text: 'Your part-time job (arubaito) is another social hub. Working alongside Japanese coworkers gives you real conversation practice and helps you understand workplace culture. Many students form lasting friendships with their coworkers.' },
    { type: 'h2', text: 'Part-Time Jobs: What to Expect' },
    { type: 'p', text: 'Most international students work part-time to support themselves. On a student visa, you can work up to 28 hours per week (40 hours during school breaks) with a special work permit. Here are the most common jobs:' },
    { type: 'ul', items: [
      'Convenience store (konbini): The most common job. ¥1,100-1,300/hour. Great for learning everyday Japanese.',
      'Restaurant server or kitchen staff: ¥1,100-1,400/hour. Fast-paced, good for practicing keigo (polite Japanese).',
      'English tutor or conversation partner: ¥2,000-3,500/hour. Best-paying option if you are a native English speaker.',
      'Factory or warehouse work: ¥1,100-1,300/hour. Less language-intensive, good for beginners.',
    ]},
    { type: 'p', text: 'Finding a job is straightforward — use apps like Townwork, Baitoru, or Indeed Japan. You can also walk into stores and ask if they are hiring. Many konbini and restaurants are always looking for staff, especially in areas with lots of students.' },
    { type: 'warning', title: 'Visa Rules', text: 'Never exceed the 28-hour weekly limit. Immigration tracks your work hours through your tax records, and violating this rule can result in visa cancellation and deportation. Keep track of your hours carefully, especially if you have multiple jobs.' },
    { type: 'h2', text: 'Food: Eating Well on a Student Budget' },
    { type: 'p', text: 'Food in Japan is delicious, varied, and can be very affordable if you know where to look. Here is how students typically eat:' },
    { type: 'h3', text: 'Cooking at Home' },
    { type: 'p', text: 'Cooking is the cheapest option. A typical home-cooked meal costs ¥300-500 per person. Rice, tofu, eggs, vegetables, and seasonal fish are inexpensive. Supermarkets discount items in the evening (around 7-8 PM), so shopping late can save you 30-50%.' },
    { type: 'h3', text: 'Eating Out Cheaply' },
    { type: 'p', text: 'When you do not feel like cooking, there are plenty of budget options:' },
    { type: 'ul', items: [
      'Convenience store bento: ¥400-600 — surprisingly good quality',
      'Gyudon chains (Yoshinoya, Matsuya, Sukiya): ¥400-700 for a filling beef bowl',
      'Ramen: ¥800-1,200 — a complete meal in a bowl',
      'Set meals (teishoku): ¥700-1,000 — rice, miso soup, main dish, and side dishes',
      'Curry houses (Coco Ichiban, Go Go Curry): ¥700-1,200 — Japanese-style curry rice',
    ]},
    { type: 'h2', text: 'Housing: Where You Will Live' },
    { type: 'p', text: 'Most international students start in one of three types of housing:' },
    { type: 'h3', text: 'School Dormitories' },
    { type: 'p', text: 'Many language schools offer dormitories. These are the cheapest option (¥30,000-60,000/month) and the most convenient — everything is set up for you. The downside is less privacy and shared facilities. Dorms are great for your first few months while you get your bearings.' },
    { type: 'h3', text: 'Share Houses' },
    { type: 'p', text: 'Share houses (like Sakura House or Borderless House) are popular with international students. You get a private room and share common areas. Rent is ¥40,000-70,000/month, usually including utilities and internet. They are social, convenient, and require no upfront key money or deposit.' },
    { type: 'h3', text: 'Apartments' },
    { type: 'p', text: 'Once you are settled, you might want your own apartment. A 1K (one room plus kitchen) costs ¥50,000-100,000/month depending on location. The catch is upfront costs: deposit, key money, guarantor fee, and insurance can add up to 4-6 months of rent. You will also need a guarantor (hoshounin) — some companies provide this service for a fee.' },
    { type: 'h2', text: 'Healthcare: Staying Healthy' },
    { type: 'p', text: 'As a student, you will enroll in National Health Insurance (NHI), which covers 70% of medical costs. You pay 30% out of pocket. A typical doctor\'s visit costs ¥2,000-5,000 with insurance. Dental care is also covered.' },
    { type: 'p', text: 'Japan has excellent healthcare. Clinics (iin) are everywhere, and you can usually walk in without an appointment. For more serious issues, there are larger hospitals (byouin). If you take prescription medication, bring a copy of your prescription — some medications common in other countries are restricted in Japan.' },
    { type: 'h2', text: 'Culture Shock and Mental Health' },
    { type: 'p', text: 'Culture shock is real, and it hits everyone differently. The excitement of the first few weeks (the "honeymoon phase") eventually gives way to frustration — the language barrier feels insurmountable, social rules are confusing, and homesickness sets in. This is normal.' },
    { type: 'p', text: 'Here are some strategies that help:' },
    { type: 'ul', items: [
      'Stay connected with family and friends back home — regular video calls help',
      'Find a community of fellow international students who understand what you are going through',
      'Take breaks from Japanese — it is okay to spend a day speaking only English',
      'Explore Japan — travel to new places on weekends and school breaks',
      'Do not be afraid to seek professional help if you are struggling — most universities have counseling services',
    ]},
    { type: 'h2', text: 'Making the Most of Your Time' },
    { type: 'p', text: 'Your time as a student in Japan is limited, so make the most of it. Here are some things every student should do:' },
    { type: 'ul', items: [
      'Travel — Japan has incredible diversity from Hokkaido to Okinawa. Use student discount tickets and overnight buses',
      'Join a festival (matsuri) — every region has unique festivals throughout the year',
      'Visit a hot spring (onsen) — it is a quintessential Japanese experience',
      'Try a homestay — spending a weekend with a Japanese family is eye-opening',
      'Participate in a traditional activity — tea ceremony, calligraphy, or martial arts',
    ]},
    { type: 'p', text: 'Student life in Japan is challenging, eye-opening, and deeply rewarding. You will struggle with the language, miss home, and feel lost sometimes. But you will also make incredible friends, experience a fascinating culture, and grow in ways you never expected. Embrace the challenges, stay curious, and enjoy every moment — these years will shape the rest of your life.' },
  ],

  'finding-jobs-in-japanese-companies': [
    { type: 'p', text: 'Job hunting in Japan is a unique experience that differs significantly from the process in Western countries. From the rigid hiring calendar to the emphasis on personality over skills, understanding how Japanese companies hire is essential for any foreigner looking to build a career in Japan. This guide walks you through every step of the process, from resume writing to signing your contract.' },
    { type: 'h2', text: 'Understanding the Japanese Job Market' },
    { type: 'p', text: 'Before diving into the job hunt, it is important to understand how the Japanese job market works. The most important thing to know is the distinction between two hiring tracks:' },
    { type: 'h3', text: 'New Graduate Hiring (Shukatsu)' },
    { type: 'p', text: 'Japanese companies hire new graduates (shin-sotsu) en masse every spring. The recruiting process starts over a year in advance, with students attending company presentations, informational interviews, and multiple rounds of interviews. This track is primarily for students graduating from Japanese universities, but some companies are opening it to international students.' },
    { type: 'h3', text: 'Mid-Career Hiring (Tenkin)' },
    { type: 'p', text: 'Mid-career hiring (tenkin) is for people with work experience. This is the most common path for foreigners already in Japan or those applying from abroad. Companies hiring mid-career are generally more interested in your skills and experience than your age or graduation year. This is where most international job seekers find opportunities.' },
    { type: 'h2', text: 'Where to Find Jobs' },
    { type: 'p', text: 'Japan has several major job boards and platforms. Here are the most useful ones for foreigners:' },
    { type: 'h3', text: 'General Job Boards' },
    { type: 'ul', items: [
      'GaijinPot Jobs — The largest job board for foreigners in Japan. English-friendly listings.',
      'Daijob — Bilingual and foreigner-friendly positions, especially in IT and business.',
      'Jobs in Japan — Entry-level and mid-career positions across industries.',
      'CareerCross — Bilingual jobs with a focus on professional roles.',
    ]},
    { type: 'h3', text: 'Professional and IT Jobs' },
    { type: 'ul', items: [
      'LinkedIn — Increasingly popular in Japan, especially for IT and international companies',
      'Wantedly — Startup and tech-focused platform. Culture-fit oriented.',
      'BizReach — Premium mid-career platform for experienced professionals',
      'TokyoDev — Specifically for software developers in Japan',
    ]},
    { type: 'h3', text: 'Recruitment Agencies' },
    { type: 'p', text: 'For mid-career and professional roles, consider working with a recruitment agency. They have access to unlisted positions and can advocate for you with hiring managers. Major agencies include Robert Walters, Hays, and Michael Page. Their services are free for job seekers — the employer pays the fee.' },
    { type: 'tip', title: 'Networking Matters', text: 'In Japan, personal referrals (shokai) carry enormous weight. Attend industry events, join professional associations, and connect with people on LinkedIn. Many positions are filled through personal connections before they are ever posted publicly.' },
    { type: 'h2', text: 'The Japanese Resume: Rirekisho and Shokumukeirekisho' },
    { type: 'p', text: 'Japanese job applications require two documents that are quite different from a Western resume:' },
    { type: 'h3', text: 'Rirekisho (履歴書)' },
    { type: 'p', text: 'The rirekisho is a standardized form that includes your personal information, education history, work history, and a brief self-introduction. It follows a strict format — you can download templates online or buy them at any convenience store. Key sections include:' },
    { type: 'ul', items: [
      'Personal information: Name, address, phone, email, date of birth',
      'Photo: Professional headshot, usually 3cm x 4cm, attached to the form',
      'Education history: Listed in chronological order from oldest to newest',
      'Work history: Same chronological order, with brief descriptions of each role',
      'Licenses and qualifications: JLPT levels, professional certifications, driver\'s license',
      'Self-PR (自己PR): A 200-400 character paragraph about your strengths',
    ]},
    { type: 'h3', text: 'Shokumukeirekisho (職務経歴書)' },
    { type: 'p', text: 'The shokumukeirekisho is a detailed account of your work experience. Unlike the rirekisho, there is no standard format — you create it yourself. It should include:' },
    { type: 'ul', items: [
      'A summary of your career and key skills',
      'Detailed descriptions of each role: company, period, responsibilities, achievements',
      'Specific projects you worked on, with measurable results',
      'Skills and qualifications relevant to the position',
      'A self-introduction that connects your experience to the role you are applying for',
    ]},
    { type: 'warning', title: 'Resume Warning', text: 'Japanese resumes must be handwritten or typed on the exact official template. Do not use a creative format or Western-style resume unless the company specifically requests it. Following the format shows you understand and respect Japanese business culture.' },
    { type: 'h2', text: 'The Interview Process' },
    { type: 'p', text: 'Japanese companies typically conduct 3-5 rounds of interviews. Each round has a different purpose:' },
    { type: 'h3', text: 'Round 1: HR Screening' },
    { type: 'p', text: 'The first interview is usually with an HR representative. They will ask about your background, motivation for applying, and basic fit. This round is often relatively brief (30-45 minutes) and focuses on whether you meet the basic requirements.' },
    { type: 'h3', text: 'Round 2: Hiring Manager' },
    { type: 'p', text: 'The second round is with the hiring manager or department head. This is where they assess your technical skills, experience, and how well you would fit the team. Expect more detailed questions about your work history and specific scenarios.' },
    { type: 'h3', text: 'Round 3: Senior Management' },
    { type: 'p', text: 'For larger companies, a third round may involve senior executives or even the president (in smaller companies). This round assesses cultural fit, long-term commitment, and your understanding of the company\'s values and mission.' },
    { type: 'h3', text: 'Final Round: Offer Interview' },
    { type: 'p', text: 'The final round is often a conversation about salary, start date, and conditions. In some companies, this is combined with the previous round. If you reach this stage, you are very likely to receive an offer.' },
    { type: 'h2', text: 'What Japanese Companies Look For' },
    { type: 'p', text: 'Understanding what Japanese employers value will help you position yourself effectively:' },
    { type: 'h3', text: 'Cultural Fit Over Pure Skills' },
    { type: 'p', text: 'Japanese companies often prioritize cultural fit and personality over technical skills. They want someone who will get along with the team, follow company norms, and stay long-term. Be prepared to answer questions about your personality, hobbies, and how you handle teamwork.' },
    { type: 'h3', text: 'Long-Term Commitment' },
    { type: 'p', text: 'Japanese companies invest heavily in training new employees and expect them to stay for many years. Avoid mentioning plans to leave Japan or start your own business. Emphasize your desire to build a long-term career with the company.' },
    { type: 'h3', text: 'Japanese Language Ability' },
    { type: 'p', text: 'Even for positions advertised as "English OK," Japanese ability is almost always a significant advantage. JLPT N2 is the benchmark for most professional roles. N3 may suffice for some IT or international-facing positions, but N2 opens far more doors.' },
    { type: 'h3', text: 'Humility and Team Orientation' },
    { type: 'p', text: 'While Western interviews reward confidence and self-promotion, Japanese interviews value humility and team orientation. Talk about your achievements in the context of team effort. Credit your colleagues and mentors. Show that you are eager to learn, not that you already know everything.' },
    { type: 'h2', text: 'Salary and Benefits: What to Expect' },
    { type: 'p', text: 'Salaries in Japan vary widely by industry, company size, and experience level. Here are typical monthly salary ranges for common positions:' },
    { type: 'ul', items: [
      'Entry-level / new graduate: ¥200,000 – ¥250,000/month',
      'Mid-career professional (3-5 years experience): ¥250,000 – ¥400,000/month',
      'Senior professional (5-10 years experience): ¥400,000 – ¥600,000/month',
      'IT/Engineering (mid-career): ¥300,000 – ¥600,000/month',
      'Bilingual specialist: ¥300,000 – ¥500,000/month',
    ]},
    { type: 'p', text: 'In addition to base salary, most companies offer:' },
    { type: 'ul', items: [
      'Twice-yearly bonuses (summer and winter) — typically 1-3 months salary each',
      'Commuting allowance — fully reimbursed up to a monthly cap',
      'Social insurance — health, pension, unemployment, and workers\' compensation',
      'Paid leave — typically 10-20 days per year, increasing with tenure',
    ]},
    { type: 'h2', text: 'Visa Requirements for Working in Japan' },
    { type: 'p', text: 'To work in Japan, you need a work visa. The most common types for foreign professionals are:' },
    { type: 'ul', items: [
      'Engineer/Humanities/International Services visa — The most common work visa, covering a wide range of professional roles',
      'Highly Skilled Professional visa — For those meeting specific point-based criteria (education, income, experience)',
      'Intra-company Transferee visa — For employees transferring from an overseas branch of the same company',
    ]},
    { type: 'p', text: 'To obtain a work visa, you typically need a university degree (bachelor\'s or higher) or equivalent professional experience (typically 10+ years). Your employer sponsors the visa application, so you must have a job offer before applying.' },
    { type: 'h2', text: 'Tips for Success' },
    { type: 'ul', items: [
      'Get your JLPT N2 certification — it is the single most impactful qualification for job hunting in Japan',
      'Network actively — attend industry events, join professional groups, and connect on LinkedIn',
      'Learn Japanese business etiquette — bowing, meishi exchange, and keigo are essential',
      'Be patient — the Japanese hiring process is slow, often taking 2-3 months from application to offer',
      'Apply broadly — do not put all your hopes on one company. Apply to 10-20 positions simultaneously',
      'Follow up politely — after each interview, send a brief thank-you email',
    ]},
    { type: 'h2', text: 'Final Thoughts' },
    { type: 'p', text: 'Finding a job at a Japanese company requires patience, cultural understanding, and persistence. The process is different from what you might be used to, but it is not impossible — thousands of foreigners build successful careers in Japan every year. Focus on improving your Japanese, understanding the culture, and presenting yourself as someone who will contribute to the team and stay for the long term. With the right preparation and mindset, you can find a rewarding career in Japan. 頑張って！' },
  ],
};

export function getArticleContent(slug: string): ContentBlock[] {
  return contentMap[slug] || [];
}

export function renderContentBlock(block: ContentBlock, index: number): React.ReactNode {
  switch (block.type) {
    case 'h2':
      return (
        <h2 key={index} className="text-2xl sm:text-3xl font-bold mt-12 mb-4 text-foreground scroll-mt-20">
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={index} className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-foreground">
          {block.text}
        </h3>
      );
    case 'p':
      return (
        <p key={index} className="text-base sm:text-lg leading-relaxed mb-4 text-muted-foreground">
          {block.text}
        </p>
      );
    case 'ul':
      return (
        <ul key={index} className="space-y-2 mb-6 ml-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base sm:text-lg text-muted-foreground">
              <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol key={index} className="space-y-2 mb-6 ml-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base sm:text-lg text-muted-foreground">
              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      );
    case 'quote':
      return (
        <blockquote key={index} className="my-8 border-l-4 border-primary pl-6 py-2 bg-muted/50 rounded-r-lg">
          <p className="text-lg italic text-foreground mb-2">"{block.text}"</p>
          {block.author && (
            <footer className="text-sm text-muted-foreground">— {block.author}</footer>
          )}
        </blockquote>
      );
    case 'tip':
      return (
        <div key={index} className="my-6 rounded-lg border border-primary/20 bg-primary/5 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Lightbulb className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                <Target className="h-4 w-4 text-primary" />
                {block.title}
              </h4>
              <p className="text-base text-muted-foreground leading-relaxed">{block.text}</p>
            </div>
          </div>
        </div>
      );
    case 'warning':
      return (
        <div key={index} className="my-6 rounded-lg border border-amber-500/30 bg-amber-50 dark:bg-amber-950/20 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-amber-500/10 flex items-center justify-center">
              <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                {block.title}
              </h4>
              <p className="text-base text-muted-foreground leading-relaxed">{block.text}</p>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}
