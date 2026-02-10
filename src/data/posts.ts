export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  image: string;
  author: string;
  authorAvatar: string;
  date: string;
}

export const categories = [
  "All",
  "Celebrity Drama",
  "Life Hacks",
  "Shocking Stories",
  "Tech",
  "Entertainment",
  "Health & Wellness",
  "Travel",
];

export const posts: BlogPost[] = [
  {
    id: "1",
    slug: "ai-taking-over-jobs-2026",
    title: "Is AI Really Taking Over Jobs in 2026? Here's What Nobody Tells You",
    description: "The truth behind AI replacing jobs might surprise you. We break down the myths and the reality of AI in the workforce.",
    content: `<p>Artificial Intelligence has been the buzzword of the decade, and in 2026, the conversation has reached a fever pitch. But is AI really coming for your job?</p>
<h2>The Myth of Total Replacement</h2>
<p>Contrary to popular belief, AI isn't replacing entire professions overnight. What's actually happening is far more nuanced. AI is augmenting human capabilities, automating repetitive tasks, and creating entirely new job categories that didn't exist five years ago.</p>
<h2>Jobs That Are Actually Growing</h2>
<p>AI prompt engineers, data ethics officers, and human-AI collaboration specialists are among the fastest-growing roles. The World Economic Forum estimates that AI will create 97 million new jobs by 2025 — and we're already seeing that prediction come true.</p>
<h2>What You Should Actually Worry About</h2>
<p>The real concern isn't AI taking your job — it's someone who knows how to use AI taking your job. The skill gap is widening, and those who refuse to adapt will find themselves left behind. Learning to work alongside AI tools is no longer optional; it's essential.</p>
<p>The bottom line? AI is a tool, not a replacement. Those who embrace it will thrive. Those who fear it will struggle. The choice is yours.</p>`,
    category: "Tech",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    author: "Arjun Mehta",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    date: "Feb 8, 2026",
  },
  {
    id: "2",
    slug: "celebrity-breakups-nobody-expected",
    title: "5 Celebrity Breakups Nobody Expected This Year",
    description: "From power couples to shocking splits — these breakups shook the entertainment world to its core.",
    content: `<p>2026 has already given us some jaw-dropping celebrity breakups. Here are the five splits that nobody saw coming.</p>
<h2>1. The Social Media Power Couple</h2>
<p>They seemed perfect online — matching outfits, romantic getaways, heartfelt captions. But behind the curated Instagram feed, things were falling apart. Their joint announcement shocked 50 million followers.</p>
<h2>2. The Music Industry's Golden Duo</h2>
<p>After collaborating on three platinum albums and being inseparable for years, this musical partnership came to an abrupt end. Sources say creative differences were just the tip of the iceberg.</p>
<h2>3. Hollywood's Longest Running Romance</h2>
<p>Fifteen years of marriage, four movies together, and countless red carpet moments. Their divorce filing was so unexpected that even their co-stars were caught off guard.</p>
<h2>4. The Reality TV Sweethearts</h2>
<p>They met on a reality show, got engaged on camera, and built an empire together. But real life proved harder than reality TV.</p>
<h2>5. The Tech Billionaire Split</h2>
<p>When you're worth billions, even breakups make headlines. This split involved three mansions, a yacht, and a very public custody battle.</p>`,
    category: "Celebrity Drama",
    image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&q=80",
    author: "Priya Sharma",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    date: "Feb 5, 2026",
  },
  {
    id: "3",
    slug: "morning-routine-hacks",
    title: "7 Morning Routine Hacks That Actually Changed My Life",
    description: "Forget the 5 AM club. These practical morning habits will transform your productivity without the burnout.",
    content: `<p>I tried every morning routine on the internet. Most were garbage. Here are the seven that actually stuck and made a difference.</p>
<h2>1. The Two-Minute Rule</h2>
<p>If something takes less than two minutes, do it immediately when you wake up. Make your bed, drink water, open the curtains. These tiny wins create momentum.</p>
<h2>2. Phone-Free First 30 Minutes</h2>
<p>This was the hardest but most impactful change. No emails, no social media, no news for the first 30 minutes. Your brain needs time to boot up without external noise.</p>
<h2>3. Cold Water Face Splash</h2>
<p>Not a cold shower — just splash cold water on your face. It activates your nervous system and wakes you up faster than coffee.</p>
<h2>4. The 3-Task Priority List</h2>
<p>Write down only three things you must accomplish today. Not ten. Not five. Three. This creates focus instead of overwhelm.</p>
<h2>5. Movement Before Sitting</h2>
<p>Ten minutes of stretching or walking before you sit at your desk. Your body will thank you by lunch time.</p>
<h2>6. Prep The Night Before</h2>
<p>The best morning routine starts the night before. Lay out clothes, prep breakfast ingredients, and set your three priorities.</p>
<h2>7. The Gratitude Minute</h2>
<p>One minute. Three things you're grateful for. It sounds cheesy until you realize how much it shifts your entire day's perspective.</p>`,
    category: "Life Hacks",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    author: "Rahul Singh",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    date: "Feb 3, 2026",
  },
  {
    id: "4",
    slug: "man-finds-treasure-backyard",
    title: "Man Finds $2 Million Treasure Buried in His Backyard — The Full Story",
    description: "A routine gardening session turned into a life-changing discovery when a man unearthed a mysterious metal box.",
    content: `<p>What started as a regular Saturday afternoon of gardening turned into the discovery of a lifetime for 34-year-old James Mitchell from rural Ohio.</p>
<h2>The Discovery</h2>
<p>Mitchell was planting tomatoes when his shovel hit something metallic about three feet underground. "I thought it was an old pipe," he recalls. Instead, he unearthed a rusted metal strongbox that hadn't seen daylight in what experts estimate was over 80 years.</p>
<h2>What Was Inside</h2>
<p>The box contained gold coins dating back to the 1800s, several pieces of antique jewelry, and a leather journal that told the story of a local merchant who had hidden his wealth during the Great Depression.</p>
<h2>The Legal Battle</h2>
<p>Of course, finding treasure isn't as simple as "finders keepers." Mitchell spent months navigating property laws, historical claims, and tax implications. After legal fees and taxes, he still walked away with over $1.2 million.</p>
<h2>What He Did With It</h2>
<p>Mitchell paid off his mortgage, set up college funds for his kids, and donated several historically significant pieces to the local museum. "The money is great," he says, "but knowing the history behind these items is priceless."</p>`,
    category: "Shocking Stories",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    author: "Maya Johnson",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    date: "Jan 30, 2026",
  },
  {
    id: "5",
    slug: "best-streaming-shows-february",
    title: "The 10 Best Shows to Binge-Watch This February",
    description: "From mind-bending thrillers to heartwarming comedies, here's your ultimate streaming guide for February 2026.",
    content: `<p>February is here, and streaming platforms are loaded with incredible new content. Here are our top picks across all major platforms.</p>
<h2>1. "The Algorithm" (Netflix)</h2>
<p>A tech thriller about an AI that starts predicting crimes before they happen. Think Minority Report meets Black Mirror, but with better writing.</p>
<h2>2. "Kitchen Wars: Global" (Disney+)</h2>
<p>Chefs from 20 countries compete in the most intense cooking competition ever filmed. The twist? They can only use ingredients native to their opponent's country.</p>
<h2>3. "Echoes" (HBO Max)</h2>
<p>A psychological drama about twin sisters who have been secretly swapping lives for years. When one goes missing, everything unravels.</p>
<h2>4. "The Last Frontier" (Apple TV+)</h2>
<p>A visually stunning sci-fi series about the first human colony on Mars. The production value alone is worth the watch.</p>
<h2>5. "Laughing Stock" (Amazon Prime)</h2>
<p>A mockumentary about a failing comedy club trying to survive in the age of TikTok. Genuinely the funniest show of the year so far.</p>
<p>And five more amazing picks are waiting for you — from the supernatural horror "Whisper House" to the animated masterpiece "Ink & Soul."</p>`,
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80",
    author: "Sneha Patel",
    authorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
    date: "Jan 28, 2026",
  },
  {
    id: "6",
    slug: "intermittent-fasting-myths",
    title: "Intermittent Fasting: 5 Myths Your Gym Bro Won't Stop Repeating",
    description: "Science vs. broscience — let's settle the intermittent fasting debate once and for all.",
    content: `<p>Intermittent fasting is everywhere. But between the enthusiastic gym bros and conflicting headlines, what does the science actually say?</p>
<h2>Myth 1: "You'll Lose Muscle If You Fast"</h2>
<p>Multiple studies show that intermittent fasting, when combined with resistance training and adequate protein intake, does NOT cause significant muscle loss. Your body is smarter than that.</p>
<h2>Myth 2: "Breakfast Is the Most Important Meal"</h2>
<p>This claim was popularized by cereal companies in the early 1900s. Research shows meal timing matters far less than total caloric intake and food quality.</p>
<h2>Myth 3: "Fasting Slows Your Metabolism"</h2>
<p>Short-term fasting actually increases metabolic rate by 3.6-14%. It's prolonged caloric restriction (chronic dieting) that slows metabolism, not intermittent fasting.</p>
<h2>Myth 4: "You Can Eat Anything During Your Eating Window"</h2>
<p>Nope. Calories still count. Fasting isn't a magic license to eat junk food. The quality of what you eat during your eating window matters enormously.</p>
<h2>Myth 5: "Everyone Should Do 16:8"</h2>
<p>There's no one-size-fits-all. Some people thrive on 16:8, others do better with 14:10 or even 12:12. Women, in particular, may respond differently to extended fasting protocols. Listen to your body, not the internet.</p>`,
    category: "Health & Wellness",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    author: "Dr. Kavita Rao",
    authorAvatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&q=80",
    date: "Jan 25, 2026",
  },
  {
    id: "7",
    slug: "hidden-beaches-southeast-asia",
    title: "8 Hidden Beaches in Southeast Asia That Tourists Haven't Ruined Yet",
    description: "Skip the crowded spots. These secret beaches offer paradise without the Instagram crowds.",
    content: `<p>Southeast Asia is famous for its beaches, but the popular ones are overcrowded. Here are eight hidden gems that still feel untouched.</p>
<h2>1. Koh Lipe's Sunrise Beach (Thailand)</h2>
<p>While everyone crowds Maya Bay, the eastern shore of Koh Lipe offers crystal-clear water and powdery sand without the boat traffic. Best visited during the shoulder season in November.</p>
<h2>2. Nacpan Beach (Philippines)</h2>
<p>A four-kilometer stretch of golden sand near El Nido that most tourists skip because it requires a bumpy 45-minute ride. That bumpy ride is your filter against crowds.</p>
<h2>3. Koh Rong Sanloem (Cambodia)</h2>
<p>Cambodia's best-kept secret. Bioluminescent plankton light up the water at night, creating a natural light show that rivals any full moon party.</p>
<h2>4. Pulau Perhentian Kecil (Malaysia)</h2>
<p>Incredible snorkeling right off the beach. Sea turtles are regular visitors, and the lack of ATMs keeps the mass tourism away.</p>
<p>The remaining four beaches — from Myanmar's untouched Ngapali to Indonesia's secret Kelingking viewpoint — are even more spectacular. Each one proves that paradise still exists if you're willing to look beyond the guidebook.</p>`,
    category: "Travel",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    author: "Aditya Kapoor",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    date: "Jan 22, 2026",
  },
  {
    id: "8",
    slug: "student-builds-million-dollar-app",
    title: "This 19-Year-Old College Student Built a Million-Dollar App in His Dorm Room",
    description: "From a frustrating homework experience to a viral app — the incredible story of a teen entrepreneur.",
    content: `<p>When Ethan Park couldn't find a decent study tool for his organic chemistry class, he decided to build one himself. Six months later, his app "StudyFlow" had a million users and venture capital firms were knocking.</p>
<h2>The Problem</h2>
<p>Existing study apps were either too simple (basic flashcards) or too complex (cluttered interfaces with features nobody used). Ethan wanted something in between — smart enough to adapt to how you learn, simple enough to use at 2 AM before an exam.</p>
<h2>The Build</h2>
<p>Using no-code tools and his basic programming knowledge from a high school CS class, Ethan built the first version in three weeks. It used spaced repetition algorithms and AI to generate practice questions from uploaded lecture notes.</p>
<h2>The Viral Moment</h2>
<p>A TikTok video showing the app in action got 12 million views overnight. Downloads went from 200 to 50,000 in 48 hours. The servers crashed three times.</p>
<h2>Where He Is Now</h2>
<p>StudyFlow raised $4.5 million in seed funding. Ethan still attends classes — "I'm building a study app, it would be pretty ironic if I dropped out," he jokes. The app now serves students in 40 countries across 15 languages.</p>`,
    category: "Shocking Stories",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    author: "Nisha Gupta",
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    date: "Jan 18, 2026",
  },
];
