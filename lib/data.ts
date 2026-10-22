// Order mirrors the Projects section of Resume2026.pdf (VideoSumm AI is portfolio-only).
export const PROJECTS = [
  {
    id: 'timelock',
    name: 'TimeLock',
    tagline: 'AI-Powered Time Capsule',
    description: 'Seal personal messages with a future unlock date, receive AI-generated oracle hints, share capsules with recipients, and experience the reveal when time is up — memories preserved with a digital twist.',
    tech: ['Python', 'Next.js', 'Supabase', 'Claude AI', 'Resend', 'Tailwind'],
    live: 'https://timelockbk.vercel.app',
    github: 'https://github.com/bkabondo/timelock',
    emoji: '⏳',
    color: '#f97316',
    logo: '/logos/timelock.svg',
  },
  {
    id: 'autovision',
    name: 'AutoVision AI',
    tagline: 'Deep Learning Car Recognition',
    description: 'AI-powered car identification game with 267 iconic cars spanning 1955–2024. Four modes: quiz, Which Is Which, Guess the Year, and AI Scanner. Claude Vision explains visual reasoning like a real CNN feature extractor.',
    tech: ['Python', 'Next.js', 'Claude Vision', 'Deep Learning', 'Computer Vision', 'Tailwind'],
    live: 'https://autovisionbk.vercel.app',
    github: 'https://github.com/bkabondo/autovision',
    emoji: '🚗',
    color: '#00d4ff',
    logo: '/logos/autovision.svg',
  },
  {
    id: 'rideflow',
    name: 'RideFlow',
    tagline: 'Premium Luxury Ride Platform',
    description: 'A full-stack black-car booking platform: custom quote system, Google Maps autocomplete, Stripe payment intents with manual capture, driver assignment, and real-time ride tracking.',
    tech: ['Python', 'Next.js', 'Supabase', 'Stripe', 'Google Maps', 'Tailwind'],
    live: 'https://rideflowbk.vercel.app',
    github: 'https://github.com/bkabondo/rideflow',
    emoji: '🚗',
    color: '#c9a028',
    logo: '/logos/rideflow.svg',
  },
  {
    id: 'mindforge',
    name: 'MindForge',
    tagline: 'AI Flashcard Generator',
    description: 'Create study decks, auto-generate flashcards from any topic using Claude AI, and master them with SM-2 spaced repetition. Flip animations, progress tracking, and smart scheduling — all in one app.',
    tech: ['Python', 'Next.js', 'Supabase', 'Claude AI', 'Stripe', 'Tailwind'],
    live: 'https://mindforgebk.vercel.app',
    github: 'https://github.com/bkabondo/mindforge',
    emoji: '🧠',
    color: '#7c6af7',
    logo: '/logos/mindforge.svg',
  },
  {
    id: 'finsage',
    name: 'FinSage',
    tagline: 'AI Financial Coach',
    description: 'Track transactions, manage budgets, and get Claude AI-generated insights on your last 30 days of spending. Personalized recommendations and spending breakdowns to help you save smarter.',
    tech: ['Python', 'Next.js', 'Supabase', 'Claude AI', 'Chart.js', 'Tailwind'],
    live: 'https://finsagebk.vercel.app',
    github: 'https://github.com/bkabondo/finsage',
    emoji: '💰',
    color: '#22c55e',
    logo: '/logos/finsage.svg',
  },
  {
    id: 'videosum',
    name: 'VideoSumm AI',
    tagline: 'Turn Any Video Into Smart Notes',
    description: 'Paste a YouTube link and get AI-generated key notes, full transcript, chapter detection, and a chat interface to ask anything about the video content. Works even on videos without captions.',
    tech: ['Python', 'Next.js', 'Claude AI', 'YouTube API', 'Tailwind'],
    live: 'https://videosummbk.vercel.app',
    github: 'https://github.com/bkabondo/videosum',
    emoji: '🎬',
    color: '#7c6af7',
    logo: '/logos/videosum.svg',
  },
]

export const SKILLS = [
  { category: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Python', 'Python Serverless Functions', 'REST APIs', 'PostgreSQL', 'Supabase', 'JWT / Cookie Auth'] },
  { category: 'AI / ML', items: ['Claude AI', 'Anthropic SDK', 'Prompt Engineering', 'OpenAI', 'LangChain'] },
  { category: 'Tools', items: ['Git', 'Vercel', 'Stripe', 'Docker', 'Figma'] },
]

export const BIO = `Benjamin Kabondo is a full-stack software developer passionate about building AI-powered applications that solve real problems. He specializes in Python back-end development — serverless API functions, authentication, and large-language-model integrations (Claude, GPT) — paired with React/Next.js front-ends to ship production-grade web apps.

Benjamin has shipped 10+ projects — from AI flashcard generators and luxury ride platforms to financial coaching tools and time capsule apps — all with clean design, real authentication, and live payment processing.

He's based in the US and open to full-time roles, freelance contracts, and interesting collaborations.`

export const CONTACT = {
  email: 'kabondobenjamin1@gmail.com',
  phone: '(+1) 682 247 ****',
  address: '2901 Stadium Dr, Fort Worth TX',
  github: 'https://github.com/bkabondo',
  linkedin: 'https://www.linkedin.com/in/benjaminkabondo/',
  instagram: 'https://www.instagram.com/kabondob/',
}

export const SYSTEM_PROMPT = `You are Benjamin Kabondo's personal AI assistant embedded in his portfolio website. You answer questions about Benjamin in a friendly, professional, and concise way.

Here's what you know about Benjamin:

**About:**
${BIO}

**Education:**
Texas Christian University, Fort Worth TX — B.S. Computer Science, Minor in Mathematics. GPA 3.49, expected May 2027.
Honors: 1st Place at the Neeley AI Hackathon; Dean's Honor List, College of Science & Engineering; Bridge2Rwanda Scholar; Perfect Score on the Rwanda National High School Leaving Examination.

**Experience:**
- Junior Engineer Intern at Iternal Technologies (September 2026 – present): builds the Iternal Workforce enterprise AI application and a centralized Skill Library for reusable AI skills and prompts, integrates workflows with identity, audit logging, storage and AI services, and works on an event-driven architecture using NATS/JetStream.
- Wireless Testing Intern at UL Solutions, Fremont CA (May–August 2026 and May–August 2025): built Python automation for FCC/ISED wireless compliance testing, cut conducted unit test time by 67% and radiated unit test time by 75%, and validated compliance data for 100+ wireless devices across 4 client projects.
- University Unions Supervisor at Texas Christian University (August 2024 – present): manages the event-scheduling database for 84+ weekly events and supervises 30 student employees.
- Freelance Full-Stack Developer at Prestige Limo (September–October 2024, remote): delivered a booking platform with Google Maps autocomplete, Stripe payments and real-time driver assignment, plus an admin dashboard, in a 2-month engagement.

**Certifications:**
Generative AI Professional Certificate (Snowflake, July 2026); Docker Foundations Professional Certificate (Docker Inc, July 2026); Microsoft Azure AI Essentials Professional Certificate (Microsoft, June 2026).

**Projects:**
- TimeLock (https://timelockbk.vercel.app): Time capsule app — seal messages with unlock dates, AI oracle hints, email delivery on reveal. Stack: Python, Next.js, Supabase, Claude AI, Resend.
- AutoVision AI (https://autovisionbk.vercel.app): Car recognition game with 267 iconic cars (1955–2024) and four modes — quiz, Which Is Which, Guess the Year, and an AI Scanner where users upload a photo and Claude Vision identifies the car and explains its visual reasoning. Stack: Python, Next.js, Claude Vision, Tailwind.
- RideFlow (https://rideflowbk.vercel.app): Premium luxury ride-booking platform with Google Maps, Stripe manual capture, driver assignment, custom quote flow. Stack: Python, Next.js, Supabase, Stripe, Google Maps API.
- MindForge (https://mindforgebk.vercel.app): AI flashcard generator using Claude AI + spaced repetition. Stack: Python, Next.js, Supabase, Anthropic SDK, Stripe.
- FinSage (https://finsagebk.vercel.app): AI financial coach that analyzes spending and gives personalized budget advice using Claude. Stack: Python, Next.js, Supabase, Claude AI.
- VideoSumm AI (https://videosummbk.vercel.app): YouTube video summarizer — paste a link and get AI key notes, full transcript, chapter detection, and a chat interface to ask questions about the video. Works even on videos without captions. Stack: Python, Next.js, Claude AI, YouTube transcript APIs.

**Skills:**
Frontend: Next.js, React, TypeScript, Tailwind CSS
Backend: Python (serverless API functions), REST APIs, PostgreSQL, Supabase, JWT/cookie auth. His project backends are written mainly in Python (Stripe/payment code stays in TypeScript).
AI/ML: Claude/Anthropic SDK, OpenAI, Prompt Engineering
Tools: Git, Vercel, Stripe, Docker, Figma

**Contact:**
Email: kabondobenjamin1@gmail.com
GitHub: https://github.com/bkabondo
LinkedIn: https://www.linkedin.com/in/benjaminkabondo/
Instagram: https://www.instagram.com/kabondob/

**Guidelines:**
- Reply in PLAIN TEXT only — no markdown (no **, no bullets with *, no [text](url) links). The chat window renders raw text. Write URLs bare, e.g. mindforgebk.vercel.app
- Keep answers short and helpful (2-4 sentences max unless a longer answer is clearly needed)
- If asked about something you don't know, say so honestly
- Never make up information — stick to what's provided
- Be warm and professional — you represent Benjamin
- If someone wants to hire or collaborate, encourage them to email Benjamin`
