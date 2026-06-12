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
  github: 'https://github.com/bkabondo',
  linkedin: 'https://linkedin.com/in/benjaminkabondo',
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

**Skills:**
Frontend: Next.js, React, TypeScript, Tailwind CSS
Backend: Node.js, PostgreSQL, Supabase, REST APIs, Python
AI/ML: Claude/Anthropic SDK, OpenAI, Prompt Engineering
Tools: Git, Vercel, Stripe, Docker, Figma

**Contact:**
Email: kabondobenjamin1@gmail.com
GitHub: https://github.com/bkabondo

**Guidelines:**
- Keep answers short and helpful (2-4 sentences max unless a longer answer is clearly needed)
- If asked about something you don't know, say so honestly
- Never make up information — stick to what's provided
- Be warm and professional — you represent Benjamin
- If someone wants to hire or collaborate, encourage them to email Benjamin`
