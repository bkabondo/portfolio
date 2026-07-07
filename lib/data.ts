export const PROJECTS = [
  {
    id: 'mindforge',
    name: 'MindForge',
    tagline: 'AI Flashcard Generator',
    description: 'Create study decks, auto-generate flashcards from any topic using Claude AI, and master them with SM-2 spaced repetition. Flip animations, progress tracking, and smart scheduling — all in one app.',
    tech: ['Next.js', 'Supabase', 'Claude AI', 'Stripe', 'Tailwind'],
    live: 'https://mindforgebk.vercel.app',
    github: 'https://github.com/bkabondo/mindforge',
    emoji: '🧠',
    color: '#7c6af7',
    logo: '/logos/mindforge.svg',
  },
  {
    id: 'rideflow',
    name: 'RideFlow',
    tagline: 'Premium Luxury Ride Platform',
    description: 'A full-stack black-car booking platform: custom quote system, Google Maps autocomplete, Stripe payment intents with manual capture, driver assignment, and real-time ride tracking.',
    tech: ['Next.js', 'Supabase', 'Stripe', 'Google Maps', 'Tailwind'],
    live: 'https://rideflowbk.vercel.app',
    github: 'https://github.com/bkabondo/rideflow',
    emoji: '🚗',
    color: '#c9a028',
    logo: '/logos/rideflow.svg',
  },
  {
    id: 'finsage',
    name: 'FinSage',
    tagline: 'AI Financial Coach',
    description: 'Track transactions, manage budgets, and get Claude AI-generated insights on your last 30 days of spending. Personalized recommendations and spending breakdowns to help you save smarter.',
    tech: ['Next.js', 'Supabase', 'Claude AI', 'Chart.js', 'Tailwind'],
    live: 'https://finsagebk.vercel.app',
    github: 'https://github.com/bkabondo/finsage',
    emoji: '💰',
    color: '#22c55e',
    logo: '/logos/finsage.svg',
  },
  {
    id: 'timelock',
    name: 'TimeLock',
    tagline: 'AI-Powered Time Capsule',
    description: 'Seal personal messages with a future unlock date, receive AI-generated oracle hints, share capsules with recipients, and experience the reveal when time is up — memories preserved with a digital twist.',
    tech: ['Next.js', 'Supabase', 'Claude AI', 'Resend', 'Tailwind'],
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
    tech: ['Next.js', 'Claude Vision', 'Deep Learning', 'Computer Vision', 'Tailwind'],
    live: 'https://autovisionbk.vercel.app',
    github: 'https://github.com/bkabondo/autovision',
    emoji: '🚗',
    color: '#00d4ff',
    logo: '/logos/autovision.svg',
  },
  {
    id: 'videosum',
    name: 'VideoSumm AI',
    tagline: 'Turn Any Video Into Smart Notes',
    description: 'Paste a YouTube link and get AI-generated key notes, full transcript, chapter detection, and a chat interface to ask anything about the video content. Works even on videos without captions.',
    tech: ['Next.js', 'Claude AI', 'YouTube API', 'ytdl-core', 'Tailwind'],
    live: 'https://videosummbk.vercel.app',
    github: 'https://github.com/bkabondo/videosum',
    emoji: '🎬',
    color: '#7c6af7',
    logo: '/logos/videosum.svg',
  },
]

export const SKILLS = [
  { category: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'PostgreSQL', 'Supabase', 'REST APIs', 'Python'] },
  { category: 'AI / ML', items: ['Claude AI', 'Anthropic SDK', 'Prompt Engineering', 'OpenAI', 'LangChain'] },
  { category: 'Tools', items: ['Git', 'Vercel', 'Stripe', 'Docker', 'Figma'] },
]

export const BIO = `Benjamin Kabondo is a full-stack software developer passionate about building AI-powered applications that solve real problems. He specializes in Next.js, React, TypeScript, and integrating large language models (Claude, GPT) into production-grade web apps.

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

**Projects:**
- MindForge (https://mindforgebk.vercel.app): AI flashcard generator using Claude AI + spaced repetition. Stack: Next.js, Supabase, Anthropic SDK, Stripe.
- RideFlow (https://rideflowbk.vercel.app): Premium luxury ride-booking platform with Google Maps, Stripe manual capture, driver assignment, custom quote flow. Stack: Next.js, Supabase, Stripe, Google Maps API.
- FinSage (https://finsagebk.vercel.app): AI financial coach that analyzes spending and gives personalized budget advice using Claude. Stack: Next.js, Supabase, Claude AI.
- TimeLock (https://timelockbk.vercel.app): Time capsule app — seal messages with unlock dates, AI oracle hints, email delivery on reveal. Stack: Next.js, Supabase, Claude AI, Resend.
- AutoVision AI (https://autovisionbk.vercel.app): Car recognition game with 267 iconic cars (1955–2024) and four modes — quiz, Which Is Which, Guess the Year, and an AI Scanner where users upload a photo and Claude Vision identifies the car and explains its visual reasoning. Stack: Next.js, Claude Vision, Tailwind.
- VideoSumm AI (https://videosummbk.vercel.app): YouTube video summarizer — paste a link and get AI key notes, full transcript, chapter detection, and a chat interface to ask questions about the video. Works even on videos without captions. Stack: Next.js, Claude AI, YouTube transcript APIs.

**Skills:**
Frontend: Next.js, React, TypeScript, Tailwind CSS
Backend: Node.js, PostgreSQL, Supabase, REST APIs, Python
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
